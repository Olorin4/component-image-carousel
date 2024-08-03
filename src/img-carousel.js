/* Image Carousel */

function nextSlide() {
    let currentSlide = document.querySelector('.visible');
    if (!currentSlide) {
        console.error('No slide currently has the "visible" class.');
        return;
    }

    let currentSlideNumber = parseInt(currentSlide.getAttribute('data-slide'), 10);
    let nextSlide = document.querySelector(`[data-slide="${currentSlideNumber + 1}"]`);

    if (!nextSlide) {
        const firstSlide = document.querySelector('[data-slide="1"]');
        nextSlide = firstSlide; 
    }

    currentSlide.classList.remove("visible");
    nextSlide.classList.add("visible");
}


function previousSlide() {
    let currentSlide = document.querySelector('.visible');
    if (!currentSlide) {
        console.error('No slide currently has the "visible" class.');
        return;
    }

    let currentSlideNumber = parseInt(currentSlide.getAttribute('data-slide'), 10);
    let previousSlide = document.querySelector(`[data-slide="${currentSlideNumber - 1}"]`);

    if (!previousSlide) {
        const lastSlide = document.querySelector('[data-slide="5"]');
        previousSlide = lastSlide; 
    }

    currentSlide.classList.remove("visible");
    previousSlide.classList.add("visible");
}







function initImageCarousel() {
    const rightArrow = document.querySelector('#right-arrow');
    const leftArrow = document.querySelector('#left-arrow');
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', previousSlide);
}

document.addEventListener('DOMContentLoaded', initImageCarousel);