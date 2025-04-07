class Carousel{

    constructor(image, cropImage, title, url){
        this.image = image;
        this.cropImage = cropImage;
        this.title = title;
        this.url = url;
    }
}

class SlideShow {

    constructor(slides){
        this.slides = slides;
        this.indexSlide = 0;
    
        this.showCurrentSlide();
        this.start();
    }


    start(){
        this.next();

        setTimeout(this.start.bind(this), 2500);
    }

    next(){
        this.switchIndex(true);
        this.showCurrentSlide();
    }

    back(){
        this.switchIndex(false);
        this.showCurrentSlide();
    }

    switchIndex(willIncrement){
        willIncrement ? this.indexSlide++ : this.indexSlide--;
        
        if(this.indexSlide > carouselArr.length - 1){
            this.indexSlide = 0;
        }

        if(this.indexSlide < 0){
            this.indexSlide = carouselArr.length - 1;
        }

    }

    showCurrentSlide(){

        const currentIndex = this.indexSlide;
        const currentSlide = this.slides[currentIndex];

        const img = document.querySelector('.image');
        img.src = currentSlide.image;

        const crpimg = document.querySelector('.cropimage');
        crpimg.srcset = currentSlide.cropImage;

        const ttl = document.querySelector('.title');
        ttl.innerHTML = currentSlide.title;

        const link = document.querySelector('.url');
        link.href = currentSlide.url;

    }


}

const carouselArr = [
    new Carousel("../img/imagem_1.jpg", "../img/imagem_1_crop.jpg",
        "Esta é a nova Ranger Ford 2022. Verifique novidades", "./lancamento.html"),

    new Carousel("../img/imagem_2.jpg", "../img/imagem_2_crop.jpg",
        "Mais de 100 anos de história", "./lancamento.html"),

    new Carousel("../img/imagem_3.jpg", "../img/imagem_3_crop.jpg",
        "Nova Ford Bronco Sport 2022", "./lancamento.html")
];

document.addEventListener("DOMContentLoaded", () => {
    new SlideShow(carouselArr); 
});