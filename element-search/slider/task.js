const sliderNext = document.getElementsByClassName('slider__arrow_next');

const sliderPrev = document.getElementsByClassName('slider__arrow_prev');

const items = Array.from(document.querySelectorAll(".slider__items .slider__item"));

const dots = Array.from(document.querySelectorAll(".slider__dots .slider__dot"));

const b = "slider__item_active";

const c = "slider__dot_active";

dots.forEach(element => element.onclick = () => {
    
    dots.forEach(element => element.classList.remove(c))
    
    element.classList.add(c);
    
    dotIndex = dots.findIndex(element => element.classList.contains(c));

    items.forEach(element => element.classList.remove(b))

    items[dotIndex].classList.add(b);
});

function previousSlide() {
    let number = items.findIndex(el => el.classList.contains(b));
    
    let nextNumber = number - 1;; 
    
    if (nextNumber < 0) {
        nextNumber = items.length - 1;
    }
    
    items[number].classList.remove(b);
    
    items[nextNumber].classList.add(b);

    dots.forEach(element => element.classList.remove(c))

    dots[nextNumber].classList.add(c)
}

function nextSlide() {
    let number = items.findIndex(el => el.classList.contains(b));
    let nextNumber = number + 1;; 
    
    if (nextNumber === items.length) {
        nextNumber = 0;
    }

    items[number].classList.remove(b);

    items[nextNumber].classList.add(b);

    dots.forEach(element => element.classList.remove(c))

    dots[nextNumber].classList.add(c)
}

Array.from(sliderPrev).forEach(element => element.onclick = () => {
    previousSlide()
})

Array.from(sliderNext).forEach(element => element.onclick = () => {
    nextSlide()
})
