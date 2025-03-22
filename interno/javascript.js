// Recuperar o nome do usuário a partir da URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Exibindo o nome do usuário na barra superior, se houver
if (username) {
    document.getElementById('username-display').textContent = `Bem-vindo, ${username}`;
}

// Função para redirecionar para a página de login ao clicar no botão de sair
document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/VS/login/index.html';  // Ou para a página de login se você tiver esse arquivo
});




