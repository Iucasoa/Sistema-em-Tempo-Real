const WebSocket = require("ws");
const http = require("http");
const fs = require("fs");
const path = require("path");

let registros = {};
let contagem = { almoco: 0, jantar: 0 };
let usuariosAutorizados = {};

// Métricas de tempo real
let metricas = {
  mensagens: 0,
  bytes: 0,
  latencias: [],
  inicio: Date.now()
};

function dentroDoHorario(tipo) {
  const h = new Date().getHours();
  if (tipo === "almoco") return h < 9;
  if (tipo === "jantar") return h < 15;
  return false;
}

function estaNoCampus(ip) {
  return (
    ip.startsWith("192.") ||
    ip.startsWith("10.") ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("172.")
  );
}

const server = http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;

  // 🔹 Métricas do sistema (para apresentação)
  if (req.url === "/metricas") {
    const duracao = (Date.now() - metricas.inicio) / 1000;
    const max = metricas.latencias.length
      ? Math.max(...metricas.latencias)
      : 0;
    const min = metricas.latencias.length
      ? Math.min(...metricas.latencias)
      : 0;

    const resposta = {
      contagem,
      latencia_media_ms:
        metricas.latencias.reduce((a, b) => a + b, 0) /
        (metricas.latencias.length || 1),
      jitter_ms: max - min,
      taxa_mensagens_por_seg: metricas.mensagens / (duracao || 1),
      banda_bytes_por_seg: metricas.bytes / (duracao || 1),
      perda_pacote: "0% (WebSocket sobre TCP)",
      tipo_tempo_real: "Soft Real-Time"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(resposta, null, 2));
    return;
  }

  // 🔹 Bloqueio fora do Wi-Fi institucional
  if (!estaNoCampus(ip)) {
    res.writeHead(403);
    res.end("Acesso permitido apenas via Wi-Fi institucional");
    return;
  }

  let filePath = "./public" + (req.url === "/" ? "/login.html" : req.url);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Página não encontrada");
    } else {
      res.writeHead(200);
      res.end(content);
    }
  });
});

const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {

  ws.on("message", msg => {
    const t0 = Date.now();

    metricas.mensagens++;
    metricas.bytes += msg.length;

    const data = JSON.parse(msg);
    const { matricula, refeicao } = data;

    if (!registros[matricula]) {
      registros[matricula] = { almoco: false, jantar: false };
    }

    if (!dentroDoHorario(refeicao)) return;
    if (registros[matricula][refeicao]) return;

    registros[matricula][refeicao] = true;
    contagem[refeicao]++;

    const t1 = Date.now();
    metricas.latencias.push(t1 - t0);

    console.log(
      `[RU] ${matricula} confirmou ${refeicao} em ${t1 - t0} ms`
    );

    wss.clients.forEach(c => {
      if (c.readyState === WebSocket.OPEN) {
        c.send(JSON.stringify({ tipo: "status", contagem }));
      }
    });
  });
});

server.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
  console.log("Acesse as métricas em http://localhost:8080/metricas");
