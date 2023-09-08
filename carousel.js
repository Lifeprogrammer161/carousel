const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide);
