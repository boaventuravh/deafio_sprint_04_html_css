const imagens = document.querySelectorAll('.fade');
let indiceImagem = 0;
alternarImagens();

function alternarImagens(){
    imagens.forEach(imagem => {
        imagem.style.display = 'none';
    });

    imagens[indiceImagem].style.display = 'block';

    indiceImagem++;
    if(indiceImagem > imagens.length - 1){
        indiceImagem = 0;
    }       

    setTimeout(alternarImagens, 3500);
}