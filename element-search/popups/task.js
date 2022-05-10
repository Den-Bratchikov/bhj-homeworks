const SHOW_MAIN = document.getElementById('modal_main');

const WELL_DONE = document.getElementById('modal_success');

const DO_WELL = document.querySelector('.btn_danger');

const CROSS =  Array.from(document.getElementsByClassName('modal__close_times'));

const CLOSE_WINDOW = document.getElementsByClassName('modal_active')

showPopUp = () => {
    SHOW_MAIN.classList.add("modal_active");
}

showPopUp()

DO_WELL.onclick = () => {
    SHOW_MAIN.classList.remove("modal_active");
    WELL_DONE.classList.add("modal_active");
}

CROSS.forEach(element => element.onclick = () => {
    CLOSE_WINDOW[0].remove("modal_active")
})
