class Carousel {

    constructor(slides){
        this.slides = slides;
        this.indiceImagem = 0;
    
        this.alternarImagens();
    }


    alternarImagens(){
        this.next();

        setTimeout(this.alternarImagens.bind(this), 3500);
    }

    next(){
        this.mudarIndice(true);
        this.exibirImagemIndiceAtual();
    }

    back(){
        this.mudarIndice(false);
        this.exibirImagemIndiceAtual();
    }

    mudarIndice(aumentar){
        aumentar ? this.indiceImagem++ : this.indiceImagem--;
        
        if(this.indiceImagem > slides.length - 1){
            this.indiceImagem = 0;
        }

        if(this.indiceImagem < 0){
            this.indiceImagem = slides.length - 1;
        }

    }

    exibirImagemIndiceAtual(){
        slides.forEach(imagem => {
            imagem.style.display = 'none';
        });

        slides[this.indiceImagem].style.display = 'block';
    }


}

const slides = document.querySelectorAll('.fade');

document.addEventListener("DOMContentLoaded", () => {
    new Carousel(slides); 
});