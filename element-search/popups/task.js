const showMain = document.getElementById('modal_main');

const wellDone = document.getElementById('modal_success');

const doWell = document.querySelector('.btn_danger');

const Cross =  Array.from(document.getElementsByClassName('modal__close_times'));

const CloseWindowArr = Array.from(document.getElementsByClassName('modal_active'))

const CloseWindow = document.getElementsByClassName('modal_active')

let 

showPopUp = () => {
    showMain.classList.add("modal_active");
}

showPopUp()

doWell.onclick = () => {
    showMain.classList.remove("modal_active");
    wellDone.classList.add("modal_active");
}

Cross.forEach(element => element.onclick = () => {
    CloseWindow[0].remove("modal_active")
})
