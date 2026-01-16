- Objetivo:
Esta aplicação foi desenvolvida para ajudar a reduzir o desperdício de alimentos no Restaurante Universitário (RU),
permitindo estimar em tempo real quantas pessoas irão almoçar e jantar em determinado dia.


- Funcionamento:

O usuário conecta-se ao Wi-Fi institucional.

O acesso à aplicação ocorre por meio de um portal de login (simulando um portal cativo).

Após o login, o usuário acessa a página do RU.

O usuário confirma se irá almoçar ou jantar.

A confirmação é enviada ao servidor via WebSocket.

O servidor atualiza a contagem em tempo real.


- Como executar o sistema:

Abrir o Prompt de Comando.

Acessar a pasta do projeto.

Executar o comando:
npm start

O servidor ficará disponível em:
http://localhost:8080


- Monitoramento em tempo real:
A aplicação possui um painel de monitoramento para análise técnica do sistema.

Para acessar o painel:
http://localhost:8080/monitor.html