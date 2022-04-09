
let deadMole = document.getElementById("dead");

let misses = document.getElementById("lost")

// getHole = index => document.getElementById(`hole${index}`)
// for (let i = 0; i < 10; i++) {
    // можно все элементы включить в массив, и для массива сделать обход)
// }
const h1 = document.getElementById(`hole1`)

h1.onclick = () => {
    if (h1.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h2 = document.getElementById(`hole2`)

h2.onclick = () => {
    if (h2.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h3 = document.getElementById(`hole3`)

h3.onclick = () => {
    if (h3.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h4 = document.getElementById(`hole4`)

h4.onclick = () => {
    if (h4.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h5 = document.getElementById(`hole5`)

h5.onclick = () => {
    if (h5.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h6 = document.getElementById(`hole6`)

h6.onclick = () => {
    if (h6.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h7 = document.getElementById(`hole7`)

h7.onclick = () => {
    if (h7.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h8 = document.getElementById(`hole8`)

h8.onclick = () => {
    if (h8.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}

const h9 = document.getElementById(`hole9`)

h9.onclick = () => {
    if (h9.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
        misses.textContent = Number(misses.textContent) + 1;
    }
}
//     getHole.onclick = () => {

//     }
// }

