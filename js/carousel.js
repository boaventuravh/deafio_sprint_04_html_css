const imagens = document.querySelectorAll('.fade');
let indiceImagem = 0;
alternarImagens();

function alternarImagens(){
    next();

    setTimeout(alternarImagens, 3500);
}

function next(){
    mudarIndice(true);
    exibirImagemIndiceAtual();
}

function back(){
    mudarIndice(false);
    exibirImagemIndiceAtual();
}

function mudarIndice(aumentar){
    aumentar ? indiceImagem++ : indiceImagem--;
    
    if(indiceImagem > imagens.length - 1){
        indiceImagem = 0;
    }

    if(indiceImagem < 0){
        indiceImagem = imagens.length - 1;
    }

}

function exibirImagemIndiceAtual(){
    imagens.forEach(imagem => {
        imagem.style.display = 'none';
    });

    imagens[indiceImagem].style.display = 'block';
}

