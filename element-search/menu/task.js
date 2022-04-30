const link = document.getElementsByClassName('menu__link');

const a =  document.querySelectorAll(".menu_sub .menu__link");

Array.from(link).forEach(element => element.onclick = (e) => {
    
    let parent = element.closest(".menu__item")
    
    let menuSub = parent.querySelector(".menu_sub")
    
    menuSub.classList.toggle("menu_active")

    return false
    // e.preventDefault();
})

Array.from(a).forEach(element => element.onclick = (e) => {
    return false
})