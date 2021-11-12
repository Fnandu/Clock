const playTime = document.querySelector("#play");
const pauseTime = document.querySelector("#pause");
const restartTime = document.querySelector("#restart");
const saveTime = document.querySelector("#save");

let hours = `00`;
let minutes = `00`;
let seconds = `00`;
let miliseconds = `00`;
let timeDisplay = document.querySelector(`[time]`);
let savealltime = document.querySelector("#saves");
let timeCall;
let alltimes = [];

document.getElementById('save').style.visibility = "hidden";
sessionStorage.setItem('hour', 0);
sessionStorage.setItem('minute', 0);
sessionStorage.setItem('second', 0);
sessionStorage.setItem('milisecond', 0);

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

playTime.onclick = (event) => {
    document.getElementById('save').style.visibility = "hidden";
    timeCall = setInterval(chronometer, 10);
    event.target.setAttribute(`disabled`, ``);
}

pauseTime.onclick = (event) => {
    clearInterval(timeCall);
    playTime.removeAttribute('disabled');
    document.getElementById('save').style.visibility = "visible";
}

restartTime.onclick = (event) => {
    document.getElementById('save').style.visibility = "hidden";
    clearInterval(timeCall)
    playTime.removeAttribute('disabled')
    timeDisplay.textContent = `00:00:00.00`

    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'
}

saveTime.onclick = (event) => {
    let count = alltimes.length + 1;
    alltimes.push(count + " - " + hours + ":" + minutes + ":" + seconds + ":" + miliseconds);

    let countersave = document.createElement("div");
    let content = document.createTextNode(alltimes[count - 1]);
    countersave.appendChild(content);
    savealltime.appendChild(countersave);

}