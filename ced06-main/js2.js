document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ra = document.getElementById('ra').value;
    const senha = document.getElementById('senha').value;

    // Validação de exemplo para o professor (você pode conectar com um banco de dados real)
    if (ra === "123456" && senha === "professor123") {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('painelContainer').style.display = 'block';
        document.getElementById('boasVindas').innerText = `Seja Bem-vindo, Professor ${ra}!`;
    } else {
        document.getElementById('erro').innerText = "RA ou senha inválidos!";
    }
});

function logout() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('painelContainer').style.display = 'none';
}
