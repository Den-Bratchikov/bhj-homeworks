const p = document.getElementById("timer")

let intervalId;

function changeP() {
    if (p.textContent > 0) { 
        p.textContent = Number(p.textContent) - 1
    } else {
        clearInterval(intervalId)
        alert('Вы победили в конкурсе!')
    }
}

intervalId = setInterval(changeP, 1000)