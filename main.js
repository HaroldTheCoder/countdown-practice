const countdown = ()=> {
    // create future time for countdown end, get current time and gap in between
   const countDate = new Date("August 22, 2022, 00:00:00").getTime();
   const now = new Date().getTime();
   const gap = countDate - now;

    // time, create seconds first and start multiplying by 60 minutes and hours. Multiply by 24 for days
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    // converts single number to double digit ---> 05
    if (days < 10) {
        days = "0" + days
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }


    // divide the gap with days, hours, ect.. to display time remainig
    const daysDisplay = Math.floor(gap / days);
    const hoursDisplay = Math.floor((gap % days) / hours);
    const minutesDisplay = Math.floor((gap % hours) / minutes);
    const secondsDisplay = Math.floor((gap % minutes) / seconds);

    // get Html elements and display time on countdown 
    document.querySelector(".days-box").innerText = daysDisplay;
    document.querySelector(".hour-box").innerText = hoursDisplay;
    document.querySelector(".minute-box").innerText = minutesDisplay;
    document.querySelector(".seconds-box").innerText = secondsDisplay;
}
// countdown function running every 1 second(1000) interval using setInterval method
setInterval(countdown, 1000);

