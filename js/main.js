const time = document.querySelector("time");
const playtime = document.querySelector("#play");
const pausetime = document.querySelector("#pause");
const restarttime = document.querySelector("#restart");
const chronotime = document.querySelector("#chrono");
const watchtime = document.querySelector("#watch");
const tempotime = document.querySelector("#tempo");

let hours = `00`;
let minutes = `00`;
let seconds = `00`;
let miliseconds = `00`;
let timeDisplay = document.querySelector(`[time]`);
let timeCall;
let stat;

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

function timer() {

    miliseconds--
    if (miliseconds < 10) miliseconds = '0' + miliseconds

    if (miliseconds < 1) {
        console.log(seconds);
        miliseconds = '99';
        seconds--

        if (seconds < 10) seconds = `0` + seconds
    }

    if (seconds < 1) {
        seconds = `59`
        minutes--
        if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes < 1) {
        minutes = `59`
        hours--

        if (hours < 10) hours = `0` + hours
    }
    
timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${miliseconds}`
}





playtime.onclick = (event) => {
    if (stat == "Chrono") {
        timeCall = setInterval(chronometer, 10)
        event.target.setAttribute(`disabled`, ``)
    } else {
        timeCall = setInterval(timer, 10)
        event.target.setAttribute(`disabled`, ``)
        hours = selectHour.value;
        minutes = selectMin.value;
        seconds = selectSec.value;
        miliseconds = selectMili.value;

        if (miliseconds < 2) {
            miliseconds += 2
        }
        if (seconds < 1) {
            seconds++
        }
        if (minutes < 1){
            minutes = 0
        }
    }

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
    stat = "Clock";


    timeDisplay.textContent = `00:00:00`
    timeCall = setInterval(function () {
        const date = new Date();
        date.setHours(date.getHours() + 1);
        time.textContent = date.toISOString().slice(11, 19);
    }, 1000);


}

chronotime.onclick = (event) => {
    stat = "Chrono";
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    timeDisplay.textContent = `00:00:00.00`

    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'

}


let divlist = document.createElement("div");
let selectHour = document.createElement("select");
let selectMin = document.createElement("select");
let selectSec = document.createElement("select");
let selectMili = document.createElement("select");
let dospuntos = document.createElement("div")
let textpuntos = document.createTextNode(":");

dospuntos.appendChild(textpuntos)

selectHour.id = "hours";
selectMin.id = "min";
selectSec.id = "sec";
selectMili.id = "mili";

for (let i = 0; i < 100; i++) {
    let optionmili = document.createElement("option");
    let optionhour;
    let optionmin;
    let optionsec;

    if (i < 23) {
        optionhour = document.createElement("option");
        optionhour.value = i;
        optionhour.text = i;
        selectHour.appendChild(optionhour);

    }
    if (i < 60) {
        optionmin = document.createElement("option");
        optionsec = document.createElement("option");
        optionmin.value = i;
        optionmin.text = i;
        optionsec.value = i;
        optionsec.text = i;
        selectMin.appendChild(optionmin);
        selectSec.appendChild(optionsec);
    }
    optionmili.value = i;
    optionmili.text = i;


    selectMili.appendChild(optionmili)
}


tempotime.onclick = (event) => {
    stat = "Timer";
    clearInterval(timeCall)
    timeDisplay.textContent = "";
    divlist.textContent = "";
    timeDisplay.appendChild(divlist);
    divlist.appendChild(selectHour);
    divlist.appendChild(textpuntos.cloneNode());
    divlist.appendChild(selectMin);
    divlist.appendChild(textpuntos.cloneNode());
    divlist.appendChild(selectSec);
    divlist.appendChild(textpuntos.cloneNode());
    divlist.appendChild(selectMili);
}
