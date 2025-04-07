class Carousel {

    constructor(slides){
        this.slides = slides;
        this.indexSlide = 0;
    
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
        
        if(this.indexSlide > slides.length - 1){
            this.indexSlide = 0;
        }

        if(this.indexSlide < 0){
            this.indexSlide = slides.length - 1;
        }

    }

    showCurrentSlide(){
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[this.indexSlide].style.display = 'flex';
    }


}

const slides = document.querySelectorAll('.fade');

document.addEventListener("DOMContentLoaded", () => {
    new Carousel(slides); 
});