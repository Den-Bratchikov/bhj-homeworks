
let deadMole = document.getElementById("dead");

let misses = document.getElementById("lost")

const holeBox = Array.from(document.getElementsByClassName("hole"))


// Декларативный подход через forEach
holeBox.forEach(element => element.onclick = () => {
    if (element.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }

    if (Number(misses.textContent) > 4) {
        alert ("Вы проиграли!")
        deadMole.textContent = 0; 
        misses.textContent = 0;
    }
    
    if(Number(deadMole.textContent) >= 10) {
        alert ("Победа!")
        deadMole.textContent = 0; 
        misses.textContent = 0;
    }

})

// Императивный подход через цикл for
// for (let i = 0; i < 10; i++) {
//     holeBox[i].onclick = () => {
//         if (holeBox[i].classList.contains( 'hole_has-mole' )) {
//             deadMole.textContent = Number(deadMole.textContent) + 1;
//         } else {
//             misses.textContent = Number(misses.textContent) + 1;
//         }
//     }
// }