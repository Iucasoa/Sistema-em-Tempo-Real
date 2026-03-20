# 🍽️ RU UFERSA - Smart Scheduler

<div align="center">

[![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)](https://github.com/Iucasoa/Sistema-em-Tempo-Real)
[![UFERSA](https://img.shields.io/badge/UFERSA-Engenharia-green?style=for-the-badge)](https://www.ufersa.edu.br/)

**Sistema Full-Stack de agendamento em tempo real para o Restaurante Universitário**

*Desenvolvido para a disciplina de Sistemas Distribuídos - Engenharia de Computação*

</div>

---

## 🚀 O Projeto

O **Smart RU** resolve o problema de previsibilidade de demanda no restaurante universitário. Utilizando **WebSockets**, o sistema permite que tanto alunos quanto administradores vejam o fluxo de refeições confirmadas sem atrasos (Real-time).

### Problema & Solução
- **Problema**: Fila impreditível no RU UFERSA
- **Solução**: Dashboard ao vivo com atualizações instantâneas via WebSocket
- **Resultado**: Melhor planejamento de horários e recursos

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Comunicação** | ![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socket.io&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white) |
| **Arquitetura** | Event-Driven / Client-Server |
| **Runtime** | Node.js |

---

## ⚙️ Funcionalidades Principais

- ✅ **Agendamento Inteligente** - Bloqueio automático baseado no horário do servidor
- ✅ **Live Dashboard** - Contador de refeições que atualiza via broadcast
- ✅ **Session Management** - Persistência de dados com LocalStorage
- ✅ **Comunicação Real-time** - Atualizações instantâneas via WebSocket

---

## 📐 Fluxo de Comunicação

```
┌──────────────┐         ┌──────────────┐         ┌─────────────────┐
│   Cliente 1  │         │   Cliente 2  │         │   Cliente N     │
└──────┬───────┘         └──────┬───────┘         └────────┬────────┘
       │                        │                         │
       │  Confirmação de        │                         │
       │  Refeição (WebSocket)  │                         │
       │                        │                         │
       └───────────────┬────────┴─────────────────────────┘
                       │
                       ▼
            ┌──────────────────────┐
            │   Servidor Node.js   │
            │  - Valida horário    │
            │  - Incrementa banco  │
            │  - Broadcast updates │
            └──────────────────────┘
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
    Cliente 1     Cliente 2        Cliente N
    (Update)      (Update)         (Update)
```

**Fluxo:**
1. **Client** envia confirmação de refeição via socket
2. **Server** valida o horário e processa o incremento no banco
3. **Server** faz o broadcast do novo total para todos os clientes conectados

---

## 📦 Estrutura do Projeto

```
Sistema-em-Tempo-Real/
├── README.md                 # Este arquivo
├── index.html               # Interface do cliente
├── styles.css               # Estilos CSS
├── client.js                # Lógica do cliente (WebSocket)
├── server.js                # Servidor Node.js
├── package.json             # Dependências
└── docs/                    # Documentação adicional
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Iucasoa/Sistema-em-Tempo-Real.git
   cd Sistema-em-Tempo-Real
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   ```bash
   npm start
   # ou
   node server.js
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

5. **Configure a matrícula (opcional)**
   ```javascript
   // No console (F12)
   localStorage.setItem("matricula", "2024000")
   ```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
NODE_ENV=development
```

---

## 📝 Exemplos de Uso

### Cliente conectando ao servidor
```javascript
const socket = io('http://localhost:3000');

// Confirmar refeição
socket.emit('confirmar_refeicao', {
  matricula: '2024001',
  data: new Date()
});

// Receber atualização
socket.on('refeicoes_atualizadas', (dados) => {
  console.log('Total de refeições:', dados.total);
});
```

---

## 🧪 Testes

```bash
# Executar testes
npm test

# Cobertura de testes
npm run test:coverage
```

---

## 📚 Documentação Técnica

Para mais detalhes sobre a arquitetura e implementação, veja:
- [Documentação da API](./docs/API.md)
- [Guia de Arquitetura](./docs/ARQUITETURA.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)

---

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com ☕ por **João Lucas** ([@Iucasoa](https://github.com/Iucasoa))

Para dúvidas ou sugestões, abra uma [issue](https://github.com/Iucasoa/Sistema-em-Tempo-Real/issues)

---

## 🎓 Contexto Acadêmico

- **Disciplina**: Sistemas Distribuídos
- **Curso**: Engenharia de Computação
- **Instituição**: UFERSA (Universidade Federal Rural do Semi-Árido)
- **Ano**: 2024

---

**Última atualização**: Março de 2026