const time = document.querySelector("time");
const playtime = document.querySelector("#play");
const pausetime = document.querySelector("#pause");
const restarttime = document.querySelector("#restart");
const chronotime = document.querySelector("#chrono");
const watchtime = document.querySelector("#watch");

let hours = `00`;
let minutes = `00`;
let seconds = `00`;
let miliseconds = `00`;
let timeDisplay = document.querySelector(`[time]`);
let timeCall;

document.getElementById('play').style.visibility = "hidden";
document.getElementById('pause').style.visibility = "hidden";
document.getElementById('restart').style.visibility = "hidden";

function chronometer() {

    miliseconds++
    if (miliseconds < 10) miliseconds = '0' + miliseconds

    if (miliseconds > 99) {
        miliseconds = '00';
        seconds++

        if (seconds < 10) seconds = `0` + seconds
    }

    if (seconds > 59) {
        seconds = `00`
        minutes++

        if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
        minutes = `00`
        hours++

        if (hours < 10) hours = `0` + hours
    }

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${miliseconds}`

}

playtime.onclick = (event) => {
    timeCall = setInterval(chronometer, 10)
    event.target.setAttribute(`disabled`, ``)
}

pausetime.onclick = (event) => {
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
}

restarttime.onclick = (event) => {
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    timeDisplay.textContent = `00:00:00.00`

    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'
}

watchtime.onclick = (event) => {
    document.getElementById('play').style.visibility = "hidden";
    document.getElementById('pause').style.visibility = "hidden";
    document.getElementById('restart').style.visibility = "hidden";

    timeDisplay.textContent = `00:00:00`
    timeCall = setInterval(function () {
        const date = new Date();
        date.setHours(date.getHours() + 1);
        time.textContent = date.toISOString().slice(11, 19);
    }, 1000);


}

chronotime.onclick = (event) => {
    document.getElementById('play').style.visibility = "visible";
    document.getElementById('pause').style.visibility = "visible";
    document.getElementById('restart').style.visibility = "visible";

    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    timeDisplay.textContent = `00:00:00.00`

    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'

}



