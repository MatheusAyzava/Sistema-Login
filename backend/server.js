const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Carrega as variáveis do .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Conexão com MySQL usando .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Testa conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
        return;
    }
    console.log('Conectado ao MySQL com sucesso.');
});

// Cria a tabela se não existir
db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )
`, (err, result) => {
    if (err) console.error('Erro ao criar tabela:', err.message);
});

// Cadastro
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.query(query, [username, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.json({ success: false, message: 'Usuário já existe.' });
            }
            return res.json({ success: false, message: 'Erro ao cadastrar.' });
        }
        res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
    });
});


// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.json({ success: false, message: 'Erro no servidor.' });
        }
        if (results.length > 0) {
            res.json({ success: true, message: 'Login bem-sucedido.' });
        } else {
            res.json({ success: false, message: 'Usuário ou senha inválidos.' });
        }
    });
});

// Inicia servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
