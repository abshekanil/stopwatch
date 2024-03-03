let hourDisplay = document.querySelector('.hour');
let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');

let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');
let pauseBtn = document.querySelector('.pause');

let hours = 0;
let minute = 0;
let second = 0;
let interval;

let startTimer = () => {
    second++;
    if(second <= 9)
    {
        secondsDisplay.innerHTML = '0' + second;
    }

    if(second > 9)
    {
        secondsDisplay.innerHTML = second;
    }

    if(second > 99)
    {
        minute++;
        minutesDisplay.innerHTML = '0' + minute;
        second = 0;
        secondsDisplay.innerHTML = '0' + 0;
    }
    if(minute > 9)
    {
        minutesDisplay.innerHTML = minute;
    }

    if(minute > 59)
    {
        hours++;
        hourDisplay.innerHTML = '0'+ hours;
        minute = 0;
        minutesDisplay.innerHTML = '0' + 0;
    }

}

startBtn.addEventListener("click", function(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
});

pauseBtn.addEventListener("click", function(){
    clearInterval(interval);
});

resetBtn.addEventListener("click", function(){
 clearInterval(interval);
 second = '00';
 minute = '00';
 hours = '00';
 secondsDisplay.innerHTML = "00";
 minutesDisplay.innerHTML = "00";
 hourDisplay.innerHTML = "00";
});
