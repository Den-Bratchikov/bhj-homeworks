const Cookie = document.getElementById("cookie")

let clickcount = document.getElementById("clicker__counter");

let clickSpeed = document.getElementById("clicker__speed")

let click1Time = 0;

let click2Time = 0;

let timeBox = []

Cookie.onclick = () => {   
    click1Time = new Date()
    
    let l = timeBox.length;

    let timeDiff;

    if (l <= 1) {
        timeDiff = 0
        timeBox.push(timeDiff)
    } else {
        timeDiff = (click1Time - click2Time) / 1000;
        timeBox.push(timeDiff)
    }

    let sum = timeBox.reduce((acc, number) => acc + number, 0);
    
    clickSpeed.textContent = (sum / l).toFixed(2)
    
    let n = Number(clickcount.textContent) + 1
    
    if (n % 2 !== 0) {
        Cookie.width = 300
    } else {
        Cookie.width = 200
    }

    clickcount.textContent = n

    click2Time = click1Time;
    
}