# EventLight Planner - Backend

API REST desenvolvida para o projeto **EventLight Planner**, uma plataforma para criação, organização e gerenciamento de cenas de iluminação para eventos como casamentos, festas de 15 anos, formaturas e eventos corporativos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Winston
- Express-Winston
- ESLint
- Nodemon
- dotenv

---

## Funcionalidades

### Autenticação

- Cadastro de usuários
- Login com e-mail e senha
- Geração de token JWT
- Rotas protegidas por autenticação

### Gerenciamento de Cenas

- Criar cenas de iluminação
- Listar cenas do usuário autenticado
- Excluir cenas criadas pelo usuário

### Logs

- Registro de todas as requisições em `request.log`
- Registro de erros em `error.log`

---

## Estrutura do Projeto

```text
eventlight-planner-backend
│
├── controllers/
│   ├── scenes.js
│   └── users.js
│
├── middlewares/
│   ├── auth.js
│   └── errorHandler.js
│
├── models/
│   ├── scene.js
│   └── user.js
│
├── routes/
│   ├── scenes.js
│   └── users.js
│
├── utils/
│   └── logger.js
│
├── .gitignore
├── app.js
└── package.json

```

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Entre na pasta:

```bash
cd eventlight-planner-backend
```

Instale as dependências:

```bash
npm install
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3001

MONGO_URL=mongodb://127.0.0.1:27017/eventlightdb

JWT_SECRET=sua_chave_secreta
```

---

## Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

---

## Rotas da API

### Cadastro

**POST**

```http
/signup
```

Body:

```json
{
  "email": "usuario@email.com",
  "password": "12345678",
  "name": "Nome do Usuário"
}
```

---

### Login

**POST**

```http
/signin
```

Body:

```json
{
  "email": "usuario@email.com",
  "password": "12345678"
}
```

Resposta:

```json
{
  "token": "jwt_token"
}
```

---

## Rotas Protegidas

Todas as rotas abaixo exigem:

```http
Authorization: Bearer TOKEN
```

---

### Obter Usuário Atual

**GET**

```http
/users/me
```

Resposta:

```json
{
  "email": "usuario@email.com",
  "name": "Nome do Usuário"
}
```

---

### Listar Cenas

**GET**

```http
/scenes
```

---

### Criar Cena

**POST**

```http
/scenes
```

Body:

```json
{
  "title": "Entrada dos Noivos",
  "eventType": "Casamento",
  "moment": "Cerimônia",
  "colors": ["#FFFFFF", "#FFD700"],
  "fixtures": ["Moving Head", "Par LED"],
  "movement": "Slow",
  "intensity": "80%",
  "notes": "Cena principal"
}
```

---

### Excluir Cena

**DELETE**

```http
/scenes/:sceneId
```

---

## Logs

Os logs são gerados automaticamente:

### request.log

Armazena todas as requisições recebidas pela API.

### error.log

Armazena erros processados pela aplicação.

---

## Scripts Disponíveis

Executar em modo desenvolvimento:

```bash
npm run dev
```

Executar em modo produção:

```bash
npm start
```

Executar análise de código:

```bash
npm run lint
```

---

## Deploy

Backend deployed at:

https://eventlight-api.duckdns.org

---

## Autor

Anthony Celso Petronilho de Souza

Projeto desenvolvido como parte do Projeto Final da TripleTen.
