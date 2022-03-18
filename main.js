const countdown = ()=> {
    // create future time for countdown end, get current time and gap in between
    const countDate = new Date("August 22, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // time, create seconds first and start multiplying by 60 minutes and hours. Multiply by 24 for days
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    // divide the gap with days, hours, ect.. to display time remainig
    const dayDisplay = Math.floor(gap / days);
    const hourDisplay = Math.floor((gap % days) / hours) ;
    const minuteDisplay = Math.floor((gap % hours) / minutes);
    const secondDisplay = Math.floor((gap % minutes) / seconds);

    // get Html elements and display time on countdown 
    document.querySelector(".days-box").innerText = dayDisplay;
    document.querySelector(".hour-box").innerText = hourDisplay;
    document.querySelector(".minute-box").innerText = minuteDisplay;
    document.querySelector(".seconds-box").innerText = secondDisplay;

}
// countdown function running every 1 second(1000) interval using setInterval method
setInterval(countdown, 1000);
