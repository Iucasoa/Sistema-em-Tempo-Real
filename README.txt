# 🍽️ Smart RU - Sistema de Agendamento em Tempo Real (UFERSA)

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-green?style=for-the-badge)
![Tech](https://img.shields.io/badge/Full--Stack-WebSockets-blue?style=for-the-badge&logo=javascript)

O **Smart RU** é uma solução desenvolvida para otimizar o fluxo de confirmação de refeições no Restaurante Universitário. O sistema utiliza comunicação bidirecional para que a administração e os alunos visualizem a demanda em tempo real, evitando desperdícios e filas.

---

## ⚙️ Arquitetura do Sistema

O diferencial deste projeto é a implementação do protocolo **WebSocket (WS)** em vez do HTTP tradicional. Isso permite que o servidor "empurre" atualizações para todos os clientes conectados assim que uma confirmação é feita.



### Regras de Negócio Implementadas:
* **🕒 Janela de Confirmação:** Travas de segurança baseadas no horário local.
    * **Almoço:** Confirmações aceitas apenas até as **09:00**.
    * **Jantar:** Confirmações aceitas apenas até as **15:00**.
* **🔐 Persistência de Sessão:** Uso de `localStorage` para manter a identidade do aluno sem necessidade de re-login constante.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-end** | HTML5 / CSS3 | Interface limpa com foco em UX (User Experience). |
| **Real-time** | WebSockets (API) | Sincronização de dados instantânea entre múltiplos usuários. |
| **Storage** | LocalStorage | Armazenamento de credenciais no lado do cliente. |
| **Lógica** | JavaScript (ES6+) | Manipulação de DOM e validações de data/hora. |

---

## 📸 Interface

<p align="center">
  <img src="https://via.placeholder.com/600x300.png?text=Preview+do+Sistema+RU+UFERSA" alt="Interface do RU UFERSA">
</p>

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone [https://github.com/lucasoa/smart-ru-ufersa.git](https://github.com/lucasoa/smart-ru-ufersa.git)
