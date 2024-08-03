/* Image Carousel */

function switchSlide(direction) {
    let currentSlide = document.querySelector('.visible');
    if (!currentSlide) {
        console.error('No slide currently has the "visible" class.');
        return;
    }

    let currentSlideNumber = parseInt(currentSlide.getAttribute('data-slide'), 10);
    let newSlideNumber = direction === 'next' ? currentSlideNumber + 1 : currentSlideNumber - 1;
    
    // Handle wrap-around for next slide
    if (direction === 'next') {
        if (newSlideNumber > document.querySelectorAll('[data-slide]').length) {
            newSlideNumber = 1;
        }
    } else if (direction === 'previous') {
        if (newSlideNumber < 1) {
            newSlideNumber = document.querySelectorAll('[data-slide]').length;
        }
    }

    let newSlide = document.querySelector(`[data-slide="${newSlideNumber}"]`);
    currentSlide.classList.remove("visible");
    newSlide.classList.add("visible");
    highlightDot(currentSlideNumber, newSlideNumber);
}


function highlightDot(currentSlideNumber, newSlideNumber) {
    let currentDotNumber = currentSlideNumber;
    let currentDot = document.querySelector(`[data-dot="${currentSlideNumber}"]`);
    currentDot.src = './assets/dot.svg';
    
    let newDot = document.querySelector(`[data-dot="${newSlideNumber}"]`);
    newDot.src = './assets/dot-black.svg';
}


function initImageCarousel() {
    const rightArrow = document.querySelector('#right-arrow');
    const leftArrow = document.querySelector('#left-arrow');
    rightArrow.addEventListener('click', () => switchSlide('next'));
    leftArrow.addEventListener('click', () => switchSlide('previous'));
}

document.addEventListener('DOMContentLoaded', initImageCarousel);

// TODO:
// - Change arrow svg color on hover.
// - Add dot slider function and change dot svg color on hover.