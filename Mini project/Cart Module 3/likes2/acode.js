
let thetext=document.getElementById("atext");
let thetext2=document.getElementById("thetext2");
let thelike=document.querySelector(".text");
let thedislike=document.querySelector(".light");
let totalnum=document.getElementById("totalval");

let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
thelike.innerText=likes;
let thedislikes=localStorage.getItem('thedislikes')?localStorage.getItem('thedislikes'):0;
thedislike.innerText=thedislikes;

function nums(){
    totalval.innerText=Number(likes)+Number(thedislikes);
}

thetext.addEventListener("click",()=>{
    thelikenum();
})

thetext2.addEventListener("click",()=>{
    thedislikenum();
})


function thelikenum(){
    
    likes++;
   localStorage.setItem('likes',likes);
   
    thelike.innerText=localStorage.getItem('likes');
    nums();
}
function thedislikenum(){
    thedislikes++;
    localStorage.setItem('thedislikes',thedislikes);
thedislike.innerText=localStorage.getItem('thedislikes');
nums();
}
