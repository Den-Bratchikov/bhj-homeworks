
let deadMole = document.getElementById("dead");

let misses = document.getElementById("lost")

// getHole = index => document.getElementById(`hole${index}`)

const h1 = document.getElementById(`hole1`)
const h2 = document.getElementById(`hole2`)
const h3 = document.getElementById(`hole3`)
const h4 = document.getElementById(`hole4`)
const h5 = document.getElementById(`hole5`)
const h6 = document.getElementById(`hole6`)
const h7 = document.getElementById(`hole7`)
const h8 = document.getElementById(`hole8`)
const h9 = document.getElementById(`hole9`)

let holeBox = [h1, h2, h3, h4, h5, h6, h7, h8, h9]

// Декларативный подход через forEach
holeBox.forEach(element => element.onclick = () => {
    if (element.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
    }
)

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
