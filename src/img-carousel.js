/* Image Carousel */

function switchSlide(toSlide) {
    let currentSlide = document.querySelector('.visible');
    if (!currentSlide) {
        console.error('No slide currently has the "visible" class.');
        return;
    }
    let currentSlideNumber = parseInt(currentSlide.getAttribute('data-slide'), 10);
    let newSlideNumber;

    // Initialize newSlideNumber based on the direction or dot number
    if (toSlide === 'next') {
        newSlideNumber = currentSlideNumber + 1;
        if (newSlideNumber > document.querySelectorAll('[data-slide]').length) {
            newSlideNumber = 1;
        }
    } else if (toSlide === 'previous') {
        newSlideNumber = currentSlideNumber - 1;
        if (newSlideNumber < 1) {
            newSlideNumber = document.querySelectorAll('[data-slide]').length;
        }
    } else {
        newSlideNumber = toSlide;
    }

    let newSlide = document.querySelector(`[data-slide="${newSlideNumber}"]`);
    currentSlide.classList.remove("visible");
    newSlide.classList.add("visible");
    highlightDot(currentSlideNumber, newSlideNumber);
}


function highlightDot(currentSlideNumber, newSlideNumber) {
    let currentDot = document.querySelector(`[data-dot="${currentSlideNumber}"]`);
    currentDot.src = './assets/dot.svg';
    currentDot.classList.remove('current-dot');
    
    let newDot = document.querySelector(`[data-dot="${newSlideNumber}"]`);
    newDot.src = './assets/dot-black.svg';
    newDot.classList.add('current-dot');
}


function addHoverEffect(img) {
    if (img.id === 'right-arrow') {
        img.addEventListener('mouseenter', () => {
            img.src = './assets/right-arrow-hover.svg';
        });
        img.addEventListener('mouseleave', () => {
            img.src = './assets/right-arrow.svg';
        });
    } else if (img.id === 'left-arrow') {
        img.addEventListener('mouseenter', () => {
            img.src = './assets/left-arrow-hover.svg';
        });
        img.addEventListener('mouseleave', () => {
            img.src = './assets/left-arrow.svg';
        });
    } else if (img.classList.contains('dot')) {
        img.addEventListener('mouseenter', () => {
            img.src = img.classList.contains('current-dot') 
                ? './assets/dot-black.svg' : './assets/dot-hover.svg';
        });
        img.addEventListener('mouseleave', () => {
            img.src = img.classList.contains('current-dot') 
                ? './assets/dot-black.svg' : './assets/dot.svg';
        });
    }
}
  

function autoSwitchSlides() {
    setInterval(() => {
        switchSlide('next');
    }, 5000);
}


function initImageCarousel() {
    autoSwitchSlides();

    const rightArrow = document.querySelector('#right-arrow');
    rightArrow.addEventListener('click', () => switchSlide('next'));
    addHoverEffect(rightArrow);

    const leftArrow = document.querySelector('#left-arrow');
    leftArrow.addEventListener('click', () => switchSlide('previous'));
    addHoverEffect(leftArrow);

    const dotSliders = document.querySelectorAll('.dot');
    dotSliders.forEach(dot => {
        dot.addEventListener('click', () => {
            const dotIndex = parseInt(dot.getAttribute('data-dot'), 10);
            switchSlide(dotIndex);
        });
        addHoverEffect(dot);
    });
}

document.addEventListener('DOMContentLoaded', initImageCarousel);

// TODO:
// - Add a timeout which advances the slides every 5 seconds.