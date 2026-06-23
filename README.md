# EventLight Planner - Backend

API REST desenvolvida para o projeto EventLight Planner.

Responsável pela autenticação de usuários, gerenciamento da biblioteca de cenas e armazenamento do histórico de cores pesquisadas.

---

## Funcionalidades

### Usuários

- Cadastro
- Login
- Autenticação JWT
- Recuperação do usuário autenticado

### Biblioteca de Cenas

- Criar cena
- Editar cena
- Excluir cena
- Listar cenas do usuário

### Histórico de Cores

- Salvar cor pesquisada
- Listar histórico
- Remover cor
- Limpar histórico

---

## Tecnologias

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

### Segurança

- JWT
- BcryptJS
- Helmet
- Express Rate Limit

### Validação

- Celebrate
- Joi

### Logs

- Winston
- Express Winston

---

## Estrutura

```txt
controllers/
middlewares/
models/
routes/
utils/
app.js
```

---

## Instalação

```bash
git clone https://github.com/AnthonyPetronilho/eventlight-planner-backend.git

cd eventlight-planner-backend

npm install
```

---

## Variáveis de Ambiente

Crie um arquivo `.env`:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/eventlightdb
JWT_SECRET=seu_secret
```

---

## Executar

Modo desenvolvimento:

```bash
npm run dev
```

Produção:

```bash
npm start
```

---

## Scripts

```bash
npm run dev
npm start
npm run lint
```

---

## Segurança Implementada

- Hash de senhas com Bcrypt
- Autenticação JWT
- Rate Limiting
- Helmet
- Validação de dados com Joi
- Middleware de autorização

---

## Endpoints

### Autenticação

```http
POST /signup
POST /signin
```

### Usuário

```http
GET /users/me
```

### Cenas

```http
GET    /scenes
POST   /scenes
PUT    /scenes/:sceneId
DELETE /scenes/:sceneId
```

### Cores

```http
GET    /colors
POST   /colors
DELETE /colors/:colorId
```

---

## Autor

Anthony Celso Petronilho de Souza

GitHub:
https://github.com/AnthonyPetronilho

LinkedIn:
https://www.linkedin.com/in/anthony-celso-petronilho-de-souza
