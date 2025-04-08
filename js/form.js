
//inicializa a página com o botão desabilitado
changeButtonState(false);

const agree = document.getElementById('checkterms');
agree.addEventListener("change", () => {changeButtonState(agree.checked)});

function changeButtonState(checked){

    const buttonEnviar = document.getElementById('send');

    buttonEnviar.disabled = !checked;

}