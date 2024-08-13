document.addEventListener("DOMContentLoaded",function(){
    const CommentForm = document.getElementById("Commentform");
    const outputparagraph=document.getElementById("thevalue");
    
    CommentForm =addEventListener("submit",function(event){
        event.preventDefault();
        
        const inputValue=document.getElementById("acommends").value;
        outputparagraph.innerText=inputValue;
    })
})
let thetext=document.getElementById("atext");
let thetext2=document.getElementById("thetext2");
let thelike=document.querySelector(".text");
let thedislike=document.querySelector(".light");

let likes=0;
let thedislikes=0;
thetext.addEventListener("click",()=>{
    thelikenum();
})

thetext2.addEventListener("click",()=>{
    thedislikenum();
})


function thelikenum(){
    
    ++likes;
    console.log(likes);
   
    thelike.innerText=likes;
}
function thedislikenum(){
    ++thedislikes;
    console.log(likes);
thedislike.innerText=thedislikes;
}