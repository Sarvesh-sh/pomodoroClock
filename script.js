const startBtn      = document.getElementById("start-btn");
const stopBtn       = document.getElementById("stop-btn");
const pomodoroBtn   = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('short-break');
const longBreakBtn  = document.getElementById('long-break');
const minutes       = document.getElementById('minutes');
const seconds       = document.getElementById('seconds');
const body          = document.querySelector('body');

console.log("js working");

let count = 0;
let timer;
console.log(body.style.background);
if(minutes.innerText<10){
    minutes.innerText='0'+minutes.innerText;
}
startBtn.addEventListener("click",()=>{
    stopBtn.style.display="inline-block";
    startBtn.style.display="none";
    
    timer = setInterval(()=>{
        let sec = seconds.textContent;
        let min = minutes.textContent;

        if(sec==0){
            if(min-1<10){
                let y=min-1;
                minutes.innerText='0'+y;
            }
            else{
                minutes.innerText=min-1;
            }
            console.log(body.style.background);
            if(min<=0 && sec==0){
                if(body.style.background!="rgb(78, 110, 129)"){
                    convertToPomodoro();
                    return;
                }
                if((count+1)%4!=0){
                    convertToShortBreak();
                }
                else{
                    convertToLongBreak();
                }
                return;
            }
            seconds.innerText="59";
        }
        else{
            if(sec-1<10){
                let x = sec-1;
                seconds.innerText='0'+x;
            }
            else{
                seconds.innerText=sec-1;
            } 
        }
        
    },1000);
    timer();
})

stopBtn.addEventListener("click",()=>{
    startBtn.style.display="inline-block";
    stopBtn.style.display="none";
    clearInterval(timer);
})

pomodoroBtn.addEventListener('click',()=>{
    convertToPomodoro();
})

shortBreakBtn.addEventListener('click',()=>{
    convertToShortBreak();
})

longBreakBtn.addEventListener('click',()=>{
    convertToLongBreak();
})

let convertToPomodoro = () =>{
    minutes.innerText="25";
    seconds.innerText="00";
    body.style.background="#4E6E81";
    pomodoroBtn.style.border="1px solid aliceblue";
    shortBreakBtn.style.border="none";
    longBreakBtn.style.border="none";
}
let convertToShortBreak = ()=>{
    minutes.innerText='05';
    seconds.innerText='00';
    shortBreakBtn.style.border="1px solid aliceblue";
    longBreakBtn.style.border="none";
    pomodoroBtn.style.border="none";
    body.style.background="#F0A04B"
    count++;
    return;
}

let convertToLongBreak=()=>{
    count++;
    minutes.innerText='15';
    seconds.innerText='00';
    body.style.background="green";
    longBreakBtn.style.border="1px solid aliceblue";
    pomodoroBtn.style.border="none";
    shortBreakBtn.style.border="none";
    return;
}
convertToPomodoro();