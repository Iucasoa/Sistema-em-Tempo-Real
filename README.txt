# 🍽️ RU UFERSA - Sistema de Agendamento em Tempo Real

<p align="center">
  <img src="https://github.com/lucasoa/ufersa-ru-manager/blob/main/screenshot.png?raw=true" width="850px" alt="Preview do Sistema RU">
</p>

Este projeto consiste em uma solução **Full-Stack** desenvolvida para otimizar o processo de confirmação de refeições no Restaurante Universitário da **UFERSA**. A aplicação utiliza comunicação bidirecional para garantir que a demanda de refeições seja atualizada instantaneamente.

---

## 🚀 Funcionalidades

* **Módulo de Agendamento:** Confirmação individual de Almoço e Jantar com travas de segurança.
* **Dashboard em Tempo Real:** Visualização dinâmica dos totais confirmados via WebSockets.
* **Validação de Horário:** Sistema inteligente que bloqueia agendamentos fora do prazo (09:00 para almoço / 15:00 para jantar).
* **Persistência:** Gerenciamento de sessão do aluno através de `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

**Linguagens e Interface:**
<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

**Comunicação e Protocolos:**
<p align="left">
  <img src="https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
</p>

---

## ⚙️ Conceitos Técnicos Aplicados

* **Comunicação Full-Duplex:** Implementação de protocolo WebSocket para troca de dados em tempo real.
* **Manipulação Dinâmica de DOM:** Interface que reage instantaneamente aos eventos do servidor.
* **Arquitetura Cliente-Servidor:** Separação clara entre a lógica de interface e o processamento de dados.
* **UX Design:** Foco em usabilidade acadêmica e feedback visual imediato.

---

## 📂 Estrutura do Repositório

* `index.html` - Dashboard e interface de confirmação.
* `login.html` - Sistema de entrada e validação de matrícula.
* `server.js` - Backend para gerenciamento de conexões e broadcast.

---

## 🔧 Como Executar

1. Certifique-se de que o servidor WebSocket está ativo em `localhost:8080`.
2. Abra o arquivo `index.html` no navegador.
3. Para testar sem a tela de login, insira manualmente no console:
   ```javascript
   localStorage.setItem("matricula", "2021000000");
