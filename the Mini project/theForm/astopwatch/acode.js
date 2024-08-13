let mil_sec=document.getElementById("mil-sec");
let min_val= document.getElementById("min");
let sec=document.getElementById("sec");
let start=document.getElementById("start-btn");
let stopg=document.getElementById("stop-btn");
let reset=document.getElementById("reset-btn");

let min=0;
let sec4=0;
let milsec=0;
let flag=true;

function timer()
{  

    if(flag===true)
    {
    milsec+=10;
    if(milsec===1000)
    {     milsec=0;
        sec4+=1;
        
        console.log(sec4);
        if(sec4===60)
        {  sec4=0;
            min+=1;

        }
    }

    mil_sec.innerText=concatzero(milsec);
    min_val.innerText=concatzero(min);
    sec.innerText=concatzero(sec4);
} 
}
let Interval=null;
start.addEventListener("click",(e)=>{
    if(!Interval)
        {
    Interval= setInterval(timer,10);
   
            
        } 
});

stopg.addEventListener("click",(e)=>{
    
        { 
            flag=flag===false?true:false;
        } 
})
reset.addEventListener("click",(e)=>{
    min=0;
    sec4=0;
    milsec=0;
    clearInterval(Interval);
    flag=true;
    mil_sec.innerText="00";
    min_val.innerText="00";
    sec.innerText="00";
})
function concatzero(timer)
{ if(9>timer)
{
    return "0"+timer;
}
else{
    return timer;
}

}


