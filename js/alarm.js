const alarmSet = document.querySelector("#setButton");
const alarmClear = document.querySelector("#clearButton");

let sound = document.getElementById('xyz');
let h2 = document.getElementById('clock');
let hr = document.getElementById('alarmhrs');
let min = document.getElementById('alarmmins');
let sec = document.getElementById('alarmsecs');
sound.loop = true;

let currentTime = setInterval(function () {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);

}, 1000);

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function Menu() {

    let sHour = document.getElementById('alarmhrs');
    let sMin = document.getElementById('alarmmins');
    let sSec = document.getElementById('alarmsecs');

    let hrs = 23;
    let secnmin = 59;

    for (i = 1; i <= hrs; i++) {
        sHour.options[sHour.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
    for (i = 0; i <= secnmin; i++) {
        sMin.options[sMin.options.length] = new Option(i < 10 ? "0" + i : i, i);
        sSec.options[sSec.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}

Menu();

alarmSet.onclick = (event) => {

    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMin = min.options[min.selectedIndex].value;
    let selectedSec = sec.options[sec.selectedIndex].value;

    let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);

    hr.disabled = true;
    min.disabled = true;
    sec.disabled = true;

    let h2 = document.getElementById('clock');

    setInterval(function () {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);


        if (alarmTime == currentTime) {
            alert("ALAAARM!!")
        }

    }, 1000);

}

alarmClear.onclick = (event) =>  {
    hr.disabled = false;
    min.disabled = false;
    sec.disabled = false;
    sound.pause();
}