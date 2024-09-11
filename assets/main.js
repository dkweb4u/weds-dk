// time and date

let days = document.querySelector(".countbox .days");
let hours = document.querySelector(".countbox .hours");
let minutes = document.querySelector(".countbox .minutes");
let seconds = document.querySelector(".countbox .seconds");


window.addEventListener("load",()=>{

function timeBetween(date1, date2) {

    if(date2 < date1){
        const diffTime = Math.abs(date2 - date1);
    
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
        
        return {
            days: diffDays,
            hours: diffHours,
            minutes: diffMinutes,
            seconds: diffSeconds
        };
    }
    else{
        return {
            days: "*",
            hours: "*",
            minutes: "*",
            seconds: "*"
        };
    }
    
}

setInterval(() => {
const date1 = new Date('2024-11-07T18:00:00');
const date2 = new Date();
const timeDiff = timeBetween(date1, date2);

days.textContent = timeDiff.days;
hours.textContent = timeDiff.hours;
minutes.textContent = timeDiff.minutes;
seconds.textContent = timeDiff.seconds;
}, 100);

});