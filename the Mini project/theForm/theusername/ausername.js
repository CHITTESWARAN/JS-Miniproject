let thepass=document.getElementById("Password");
let theeyeinabtn=document.getElementById("Password-show");

theeyeinabtn.addEventListener("click",()=>{
   
    
    if(thepass.getAttribute("type")==="password")
    {
    theeyeinabtn.innerHTML=`<i class="fa-solid fa-eye"></i>`
    thepass.setAttribute("type","text");
    }
    else
    { theeyeinabtn.innerHTML=`<i class="fa-solid fa-eye-slash"></i>`
        thepass.setAttribute("type","password");  
    }

})
