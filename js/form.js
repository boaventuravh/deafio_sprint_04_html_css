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

     const msgDiv = document.getElementById("mensagemEnvio");
    
    axios.post("http://localhost:3001/complaints", dados)
        .then(response => {            
            msgDiv.innerHTML = "&#9745;\nMensagem enviada com sucesso!";
            msgDiv.style.display = "block"
            msgDiv.classList.remove("erro");

            fieldIds.forEach(id => {
                const campo = document.getElementById(id);
                campo.value = "";
            });

            document.getElementById("motivoContato").selectedIndex = 0;
            document.getElementById("meioContato").selectedIndex = 0;

            
            agree.checked = false;
            changeButtonState(false);

            setTimeout(() => {
                msgDiv.textContent = "";
                msgDiv.style.display = "none"
            }, 3000);
        
        })
        .catch(error => {
            msgDiv.innerHTML = "&#9746;\nErro ao enviar a mensagem. Tente novamente mais tarde.";
            msgDiv.classList.add("erro");
            msgDiv.style.display = "block"
            console.error(error);

            setTimeout(() => {
                msgDiv.textContent = "";
                msgDiv.style.display = "none"
            }, 3000);
        });
}
