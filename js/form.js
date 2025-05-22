// Desativa o botão no carregamento
changeButtonState(false);

// Ativa/desativa botão com base no checkbox
const agree = document.getElementById('checkterms');
agree.addEventListener("change", () => {
    changeButtonState(agree.checked);
});

function changeButtonState(checked) {
    const buttonEnviar = document.getElementById('send');
    buttonEnviar.disabled = !checked;
}

// IDs dos campos do formulário
const fieldIds = [
    "nome",
    "email",
    "cpf",
    "sobrenome",
    "telefone",
    "motivoContato",
    "meioContato",
    "corpoMensagem"
];

// Ao clicar no botão, envia os dados
const buttonEnviar = document.getElementById('send');
buttonEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // Impede recarregamento da página
    sendMessage();      // Envia a mensagem
});

function sendMessage() {
    const dados = {};

    // Pega os valores do formulário
    fieldIds.forEach(id => {
        const campo = document.getElementById(id);
        dados[id] = campo.value;
    });

    // Envia com Axios para o backend
    axios.post("http://localhost:3001/complaints", dados)
        .then(response => {
            alert("Mensagem enviada com sucesso!");
            console.log(response.data);
        })
        .catch(error => {
            alert("Erro ao enviar a mensagem.");
            console.error(error);
        });
}
