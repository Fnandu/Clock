const time = document.querySelector("time");
const playtime = document.querySelector("#play");
const pausetime = document.querySelector("#pause");
const restarttime = document.querySelector("#restart");
const newtime = document.querySelector('#new');
const tempotime = document.querySelector("#tempo");
let sound = document.getElementById('xyz');

let hours = parseInt(`00`);
let minutes = parseInt(`00`);
let seconds = parseInt(`00`);
let miliseconds = parseInt(`00`);

let timeDisplay = document.querySelector(`[time]`);
let timeCall;

document.getElementById('new').style.visibility = "hidden";

function timer() {
    miliseconds--
    //if (miliseconds < 10) miliseconds = '0' + miliseconds

    if(hours == 0 && minutes == 0 && seconds == 0 && miliseconds == 0){
        sound.play();
        alert("El tiempo del temporizador ha acabado");
        sound.pause();
        clearInterval(timeCall)

        hours = `00`
        minutes = `00`
        seconds = `00`
        miliseconds = '00'

        document.getElementById('new').style.visibility = "visible";

    }
    
    if (miliseconds < 0) {
        miliseconds = 99;
        seconds--

        //if (seconds < 10) seconds = `0` + seconds
        if (seconds < 0) {
            seconds = 59
            minutes--
            //if (minutes < 10) minutes = `0` + minutes

            if (minutes < 0) {
                minutes = 59
                hours--

                //if (hours < 10) hours = `0` + hours
            }
        }
    }





    timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${miliseconds}`
}

playtime.onclick = (event) => {
    timeCall = setInterval(timer, 10)
    event.target.setAttribute(`disabled`, ``)

    if (hours == '00' && minutes == '00' && seconds == '00' && miliseconds == '00') {
        hours = selectHour.value;
        minutes = selectMin.value;
        seconds = selectSec.value;
        miliseconds = selectMili.value;
    }

}

pausetime.onclick = (event) => {
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
}


let divlist = document.createElement("div");
let selectHour = document.createElement("select");
let selectMin = document.createElement("select");
let selectSec = document.createElement("select");
let selectMili = document.createElement("select");
let dospuntos = document.createElement("div")
let textpuntos = document.createTextNode(":");
dospuntos.appendChild(textpuntos);

restarttime.onclick = (event) => {
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    document.getElementById('new').style.visibility = "hidden";


    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'

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

newtime.onclick = (event) => {
    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    document.getElementById('new').style.visibility = "hidden";


    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'

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

