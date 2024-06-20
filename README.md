# Imersão Fullcycle 18 - Desafio API de parceiros

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o desafio
- Clonar o projeto do [repositório oficial](https://github.com/devfullcycle/imersao18).
- Criar um projeto novo e condensar apenas o partner1 e a lib core no seu novo projeto, ou seja, teremos um projeto Nest.js convencional.
- A aplicação rodará novamente na porta convencional 3000.
- Utilizar o Docker Compose, conforme vimos na aula.
- Utilizar apenas a variável MYSQL_DATABASE no docker-compose.yaml em vez do docker-entrypoint-initdb.d.
- Validar os dados de entrada de alguns endpoints, ao passar os dados inválidos o Nest.js precisa retornar o status 422 informando os problemas encontrados
- Tratar melhor os erros da operação de reserva via recurso exception filter do Nest.js
