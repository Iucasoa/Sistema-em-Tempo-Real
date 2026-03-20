# 🍽️ RU UFERSA - Sistema de Agendamento em Tempo Real

Este projeto é uma solução full-stack para gerenciar a confirmação de refeições no Restaurante Universitário da **UFERSA**. O diferencial técnico é o uso de comunicação bidirecional para atualização de dados sem necessidade de recarregar a página.

## 🚀 Tecnologias e Conceitos Utilizados

- **Front-end:** HTML5 e CSS3 com design responsivo (Card UI).
- **WebSockets (WS):** Implementação de comunicação em tempo real para monitorar o total de refeições confirmadas instantaneamente.
- **LocalStorage:** Persistência de dados de sessão (matrícula do aluno) no navegador.
- **Lógica de Negócio de Tempo Real:** Restrições automáticas baseadas no horário local (ex: bloqueio de almoço após as 09:00).

[Image of a sequence diagram for WebSocket communication]

## 🛠️ Funcionalidades

- **Login Persistente:** Verifica a matrícula armazenada antes de liberar o acesso.
- **Confirmação de Refeição:** Interface intuitiva para Almoço e Jantar.
- **Dashboard Dinâmico:** Painel "Totais confirmados" que atualiza para todos os usuários conectados sempre que uma nova confirmação é feita.
- **Validação de Horário:** Sistema inteligente que impede agendamentos fora do prazo estipulado pelo RU.

## 📂 Estrutura de Arquivos (Prevista)

- `index.html`: Interface principal de confirmação.
- `login.html`: Tela de autenticação do aluno.
- `server.js`: (Node.js sugerido) Backend responsável por gerenciar as conexões WebSocket e o contador de refeições.

## 🔧 Como Testar

1. Certifique-se de ter um servidor WebSocket rodando em `localhost:8080`.
2. Abra o arquivo `index.html` em seu navegador.
3. Simule a matrícula inserindo um valor no `localStorage` via console:
   ```javascript
   localStorage.setItem("matricula", "2021000000");
A aplicação possui um painel de monitoramento para análise técnica do sistema.

Para acessar o painel:
http://localhost:8080/monitor.html
