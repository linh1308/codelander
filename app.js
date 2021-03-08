const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const firstBtnServices = document.querySelectorAll('.btn-1')[0];
const secondBtnServices = document.querySelectorAll('.btn-1')[1];
const firstTextServices = document.querySelectorAll('.text')[0];
const secondTextServices = document.querySelectorAll('.text')[1];

menu.onclick = function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

firstBtnServices.onclick = function () {
    firstBtnServices.classList.toggle('active-btn');
    firstTextServices.classList.toggle('text-active');
}

secondBtnServices.onclick = function () {
    secondBtnServices.classList.toggle('active-btn');
    secondTextServices.classList.toggle('text-active');
}


// Slideshow
let slideIndex = 0;
showSlides();

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;

    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000);
}