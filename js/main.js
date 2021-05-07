// mobile bar

const menuBar = document.querySelector('.menu__icon');
const mainMenu = document.querySelector('.main__nav');
const menuLinks = document.querySelectorAll('.nav__item');



const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let index = 0;

menuBar.addEventListener('click', () => {
    mainMenu.classList.toggle('isOpen');
    menuBar.classList.toggle('isActive');
})

// slider

prev.addEventListener('click', () => {
    prevSlider();
})
next.addEventListener('click', () => {
    nextSlider();
})
function prevSlider() {
    if (index === 0){
        index = slides.length -1;
    } else {
        index--;
    }
    changeImage();
}
function nextSlider() {
    if (index === slides.length -1){
        index = 0;
    } else {
        index++;
    }
    changeImage();
}
function changeImage() {
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

