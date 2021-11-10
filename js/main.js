const time = document.querySelector("time");
const playtime = document.querySelector("#play");
const pausetime = document.querySelector("#pause");
const restarttime = document.querySelector("#restart");
const chronotime = document.querySelector("#chrono");
const watchtime = document.querySelector("#watch");
const alarmtime = document.querySelector("#alarm");

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
        seconds = `00`;
        minutes++

        if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
        minutes = `00`;
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
    menu_buttons("Clock")

    timeDisplay.textContent = `00:00:00`
    timeCall = setInterval(function () {
        const date = new Date();
        date.setHours(date.getHours() + 1);
        time.textContent = date.toISOString().slice(11, 19);
    }, 1000);


}

chronotime.onclick = (event) => {

    menu_buttons("Chrono")

    clearInterval(timeCall)
    playtime.removeAttribute('disabled')
    timeDisplay.textContent = `00:00:00.00`

    hours = `00`
    minutes = `00`
    seconds = `00`
    miliseconds = '00'

}

alarmtime.onclick = (event) => {

    menu_buttons("Alarm")

    timeDisplay.textContent = `00:00:00`
    timeCall = setInterval(function () {
        const date = new Date();
        date.setHours(date.getHours() + 1);
        time.textContent = date.toISOString().slice(11, 19);
    }, 1000);


    //Alarm
    hoursMenu();
    minMenu();
    secMenu();


    let aHr = document.getElementById('tpick-h');
    let aMin = document.getElementById('tpick-m');
    let aSec = document.getElementById('tpick-h');

    let sHour = aHr.options[aHr.selectedIndex].value;
    let sMin = aMin.options[aMin.selectedIndex].value;
    let sSec = aSec.options[aSec.selectedIndex].value;

    let alarmTime = addZero(sHour) + ":" + addZero(sMin) + ":" + addZero(sSec);
    console.log('alarmTime:' + alarmTime);

}

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

	let select = document.getElementById('tpick-h');
	let hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}


function minMenu(){

	let select = document.getElementById('tpick-m');
	let min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}


function secMenu(){

	let select = document.getElementById('tpick-s');
	let sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}



let menu_buttons = button => {
    if (button == "Clock") {
        //Chrono
        document.getElementById('play').style.visibility = "hidden";
        document.getElementById('pause').style.visibility = "hidden";
        document.getElementById('restart').style.visibility = "hidden";
        //Alarm
        document.getElementById('tset').style.visibility = "hidden";
        document.getElementById('treset').style.visibility = "hidden";
        document.getElementById('tpick-h').style.visibility = "hidden";
        document.getElementById('tpick-m').style.visibility = "hidden";
        document.getElementById('tpick-s').style.visibility = "hidden";
    } else if (button == "Chrono") {
        //Chrono
        document.getElementById('play').style.visibility = "visible";
        document.getElementById('pause').style.visibility = "visible";
        document.getElementById('restart').style.visibility = "visible";

        //Alarm
        document.getElementById('tset').style.visibility = "hidden";
        document.getElementById('treset').style.visibility = "hidden";
        document.getElementById('tpick-h').style.visibility = "hidden";
        document.getElementById('tpick-m').style.visibility = "hidden";
        document.getElementById('tpick-s').style.visibility = "hidden";
    } else if (button == "Alarm") {
        //Alarm
        document.getElementById('tset').style.visibility = "visible";
        document.getElementById('treset').style.visibility = "visible";
        document.getElementById('tpick-h').style.visibility = "visible";
        document.getElementById('tpick-m').style.visibility = "visible";
        document.getElementById('tpick-s').style.visibility = "visible";

        //Chrono
        document.getElementById('play').style.visibility = "hidden";
        document.getElementById('pause').style.visibility = "hidden";
        document.getElementById('restart').style.visibility = "hidden";
    }
}