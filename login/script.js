document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Condição de exemplo para validar os dados
    if (username === 'admin' && password === '12345') {
        // Redireciona para a página de Landing Page com o nome do usuário
        window.location.href = 'http://127.0.0.1:5500/interno/landing.html?${username}';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha inválidos.';
    }
});

