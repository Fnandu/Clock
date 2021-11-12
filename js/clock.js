const time = document.querySelector("time");

let timeDisplay = document.querySelector(`[time]`);
let timeCall;


timeDisplay.textContent = `00:00:00`
timeCall = setInterval(function () {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    time.textContent = date.toISOString().slice(11, 19);
}, 1000);
