# Pratica-klimaquip-challenge
Backend challenge of the company Pratica klimaquip, this challenge is summarized in a rest api that save recipes

# Aplicação Node - cookbook
API HTTP em Node.js com TypeScript, Express e Docker e Mysql.

## Guia de desenvolvimento
Prerequisites:

-  caso não utilize docker é recomendado ter uma versao do node mais atual.
- `yarn` ou `npm` (para gerenciamento de dependências e execução de scripts)
- `docker` e `docker-compose` (para executar o servidor, banco de dados localmente de forma isolada e reproduzível)

### Backend:
Em primeiro lugar se faz necessário preencher as variáveis de ambiente do backend, lembrando que a porta usada e mapeada pelo docker é a 8084 da aplicação e nome do banco é cookbook. Crie um arquivo .env na raíz do projeto (exemplo abaixo).

```
AWS_DEFAULT_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIAS5GE7TC2YOISPVPX
AWS_SECRET_ACCESS_KEY=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
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
MYSQL_ROOT_PASSWORD=
```

Passei minhas variáveis de ambiente da aws s3, caso voces não tenham uma instancia. Logo apos isso é so rodar os seguintes comandos:
```
npm run build
yarn build
```
### Se faz necessário também caso não foi criado, criar o banco de dados via docker:
```
sudo docker exec -it <nome_container_banco> bash
psql -U postgres -d postgres
CREATE DATABASE nome_do_banco_de_dados;
```
Em seguida é so subir o container docker:
```
sudo docker compose up
```
Sem o docker:

```
npm i
npm run start
yarn start
```
### Frontend
Para startar a aplicação frontend é so rodar o comando
```
npm run dev
```
Qualquer duvida só me chamar pelo linkedin

https://www.linkedin.com/in/gabriel-rodrigues-aaa352207/
