const SLIDER_NEXT = document.getElementsByClassName('slider__arrow_next');

const SLIDER_PREV = document.getElementsByClassName('slider__arrow_prev');

const ITEMS = Array.from(document.querySelectorAll(".slider__items .slider__item"));

const DOTS = Array.from(document.querySelectorAll(".slider__dots .slider__dot"));

const B = "slider__item_active";

const C = "slider__dot_active";

DOTS.forEach(element => element.onclick = () => {
    
    DOTS.forEach(element => element.classList.remove(C))
    
    element.classList.add(C);
    
    dotIndex = DOTS.findIndex(element => element.classList.contains(C));

    ITEMS.forEach(element => element.classList.remove(B))

    ITEMS[dotIndex].classList.add(B);
});

function previousSlide() {
    let number = ITEMS.findIndex(el => el.classList.contains(B));
    
    let nextNumber = number - 1;; 
    
    if (nextNumber < 0) {
        nextNumber = ITEMS.length - 1;
    }
    
    ITEMS[number].classList.remove(B);
    
    ITEMS[nextNumber].classList.add(B);

    DOTS.forEach(element => element.classList.remove(C))

    DOTS[nextNumber].classList.add(C)
}

function nextSlide() {
    let number = ITEMS.findIndex(el => el.classList.contains(B));
    let nextNumber = number + 1;; 
    
    if (nextNumber === ITEMS.length) {
        nextNumber = 0;
    }

    ITEMS[number].classList.remove(B);

    ITEMS[nextNumber].classList.add(B);

    DOTS.forEach(element => element.classList.remove(C))

    DOTS[nextNumber].classList.add(C)
}

Array.from(SLIDER_PREV).forEach(element => element.onclick = () => {
    previousSlide()
})

Array.from(SLIDER_NEXT).forEach(element => element.onclick = () => {
    nextSlide()
})
