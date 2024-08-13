let modelEl=document.querySelector("#log-modal");
let loginBtn=document.querySelector("#login-button");
let closeBtn=document.querySelector("#close-button");


loginBtn.addEventListener("click",(e)=>{
    show();
})
closeBtn.addEventListener("click",(e)=>{
    close();
})
function show(){
    modelEl.classList.remove('hidden');
}
function close(){
    modelEl.classList.add('hidden');
}
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape")
  {
    close();
  }
})