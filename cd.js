let min =document.querySelector(".num");
let time=document.querySelector(".time");
let start=document.querySelector(".start");
let pause=document.querySelector(".pause");
let resume=document.querySelector(".resume");
let reset=document.querySelector(".reset");

let interval;

let totsec=0;

start.addEventListener("click",()=>{
    let minutes = Number(min.value);
    totsec = minutes * 60;

    clearInterval(interval);
    runTimer();
})
function runTimer()
{
   interval=setInterval(()=>{
    let mins=Math.floor(totsec/60);
    let secs=totsec%60;
    time.innerText=String(mins).padStart(2,"0")+":"+
    String(secs).padStart(2,"0");
    totsec--;
    if(totsec<0)
    {
        clearInterval(interval);
    }
   },1000);
}

pause.addEventListener("click",()=>{
    clearInterval(interval);
});

resume.addEventListener("click",()=>{
    clearInterval(interval);
    runTimer();
})

reset.addEventListener("click",()=>{
    clearInterval(interval);
    time.innerText="00:00";
    totsec=0;
    min.value="";
})