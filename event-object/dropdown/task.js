const ulList = Array.from(document.getElementsByClassName("dropdown__list"))

const links = Array.from(document.getElementsByClassName("dropdown__link"))

const value = Array.from(document.getElementsByClassName("dropdown__value"));

const b = "dropdown__list_active";

function toggleMenu () {
    ulList.forEach(el => el.classList.toggle(b));
}

value.forEach(element => element.addEventListener('click', toggleMenu));


links.forEach(element => element.onclick = () => {
    value[0].textContent = element.textContent;

    ulList.forEach(el => el.classList.remove(b));

    return false;
    
})