const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados SQLite
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) return console.error(err.message);
    console.log('Conectado ao banco SQLite.');
});

// Criar tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

// Rota de cadastro
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], function(err) {
        if (err) {
            return res.json({ success: false, message: 'Usuário já existe.' });
        }
        res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
    });
});

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            return res.json({ success: false, message: 'Erro no servidor.' });
        }
        if (row) {
            res.json({ success: true, message: 'Login bem-sucedido.' });
        } else {
            res.json({ success: false, message: 'Usuário ou senha inválidos.' });
        }
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
 