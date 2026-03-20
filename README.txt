<h1 align="center">🍽️ RU UFERSA - Smart Scheduler</h1>

<p align="center">
  <img src="https://github.com/lucasoa/ufersa-ru-manager/blob/main/screenshot.png?raw=true" width="850px" style="border-radius: 10px; box-shadow: 0px 10px 30px rgba(0,0,0,0.1);">
</p>

<p align="center">
  <b>Sistema Full-Stack de agendamento em tempo real para o Restaurante Universitário.</b><br>
  <i>Desenvolvido para a disciplina de Sistemas Distribuídos - Engenharia de Computação</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/UFERSA-Engenharia-green?style=for-the-badge" />
</p>

---

### 🚀 O Projeto
O **Smart RU** resolve o problema de previsibilidade de demanda no restaurante universitário. Utilizando **WebSockets**, o sistema permite que tanto alunos quanto administradores vejam o fluxo de refeições confirmadas sem atrasos (Real-time).

---

### 🛠️ Stack Tecnológica

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend** | <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" /> |
| **Comunicação** | <img src="https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socket.io&logoColor=white" /> <img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white" /> |
| **Arquitetura** | Event-Driven / Client-Server |

---

### ⚙️ Funcionalidades Chave

- [x] **Agendamento Inteligente:** Bloqueio automático baseado no horário do servidor.
- [x] **Live Dashboard:** Contador de refeições que atualiza via broadcast.
- [x] **Session Management:** Persistência de dados com LocalStorage.

---

### 📐 Arquitetura de Comunicação
O fluxo de dados segue o modelo de eventos bidirecionais:

[Image of a sequence diagram for WebSocket communication]

1. **Client** envia confirmação de refeição via socket.
2. **Server** valida o horário e processa o incremento no banco.
3. **Server** faz o *broadcast* do novo total para todos os clientes conectados.

---

### 📁 Como executar
1. Certifique-se de ter o Node.js/Backend ativo.
2. Clone o repositório e abra o `index.html`.
3. Use o console (F12) para definir a matrícula: `localStorage.setItem("matricula", "2024000")`.

---
<p align="center">
  Feito com ☕ por <a href="https://github.com/lucasoa">João Lucas</a>
</p>
