const Cookie = document.getElementById("cookie")

let clickcount = document.getElementById("clicker__counter");

let clickSpeed = document.getElementById("clicker__speed")

let click1Time = 0;

let click2Time = 0;

// let timeBox = []

Cookie.onclick = () => {   
    //  ############ СЧЕТЧИК КЛИКОВ ############
    let n = Number(clickcount.textContent) + 1
    
    if (n % 2 !== 0) {
        Cookie.width = 300
    } else {
        Cookie.width = 200
    }

    clickcount.textContent = n;
    
    //  ############ СЧЕТЧИК СКОРОСТИ КЛИКОВ ############

    click1Time = new Date()
    
    let timeDiff;

    if(click2Time === 0) {
        timeDiff = 0
    } else {
        timeDiff = (click1Time - click2Time) / 1000;
    }
    
    clickSpeed.textContent = timeDiff.toFixed(2)
    
    click2Time = click1Time;
    //  ############ СЧЕТЧИК СРЕДНЕЙ СКОРОСТИ КЛИКОВ ############
    
    // let l = timeBox.length;
    
    // if (l <= 1) {
        //     timeDiff = 0
        //     timeBox.push(timeDiff)
        // } else {
    //     timeDiff = (click1Time - click2Time) / 1000;
    //     timeBox.push(timeDiff)
    // }

    // let sum = timeBox.reduce((acc, number) => acc + number, 0);
    
    // clickSpeed.textContent = (sum / l).toFixed(2)
} 