const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".cabecalho__menu_navegacao");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".cabecalho__menu_navegacao__link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");        
    }))