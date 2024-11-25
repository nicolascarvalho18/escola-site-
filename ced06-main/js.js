document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ra = document.getElementById('ra').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode validar o RA e senha com um banco de dados ou uma lista de alunos
    if (ra === "52410151" && senha === "senha123") {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('painelContainer').style.display = 'block';
        document.getElementById('boasVindas').innerText = `Seja Bem-vindo, Aluno ${ra}!`;
    } else {
        document.getElementById('erro').innerText = "RA ou senha inválidos!";
    }
});

function logout() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('painelContainer').style.display = 'none';
}
