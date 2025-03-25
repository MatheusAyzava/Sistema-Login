# 💡 Betamind - Sistema de Login

Este projeto é uma aplicação web com **Login / Cadastro de usuários** usando:

- ⚛️ Frontend: React
- 🚀 Backend: Node.js + Express
- 🐬 Banco de dados: MySQL

---

## 📁 Estrutura do Projeto

```
betamind-app/
├── backend/         # Backend Node.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/        # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Cadastro.js
│   │   │   └── Landing.js
│   │   ├── assets/
│   │   │   └── beta.jpg
│   │   └── style.css
│   └── package.json
```

---

## 🛠️ Requisitos

- Node.js 18+
- MySQL instalado
- npm (gerenciador de pacotes)

---

## 🔌 Configuração do Backend

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com os dados do seu MySQL:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=1234
DB_NAME=betamind
PORT=3001
```

4. Rode o backend:

```bash
npm run dev
```

---

## 💻 Configuração do Frontend

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o frontend:

```bash
npm start
```

A aplicação estará disponível em:
```
http://localhost:3000
```

---

## 🔐 Funcionalidades

- Cadastro de novo usuário
- Login com validação
- Redirecionamento para dashboard com boas-vindas
- Estilo responsivo e moderno
- Imagem de fundo `beta.jpg` aplicada nas telas

---

## 📦 Scripts úteis

| Comando             | Ação                        |
|---------------------|-----------------------------|
| `npm run dev`       | Inicia backend com Nodemon  |
| `npm start`         | Inicia frontend React       |
| `npm install`       | Instala dependências        |

---

## 🧠 Autor

japa

