let plusName=document.getElementById("plus");
let shirt=document.getElementById("acostprice");
let minusName=document.getElementById("minus");
let theprices=document.getElementById("theprice");
plusName.addEventListener("click",function(){
    incaqtn();
})
minusName.addEventListener("click",function(){
    decaqtn();
})


let qtn=1;
const price=shirt.innerText
function incaqtn(){
    
    if(qtn<11)
    {
        ++qtn;
       
   theprices.textContent=qtn;
   shirt.textContent=qtn*price;
  

    }
    else{
        theprices.textContent=10;
        shirt.textContent=qtn*price;
    }
}
function decaqtn(){
   
    if(qtn>1)
    { --qtn;
        theprices.textContent=qtn;
        shirt.textContent=qtn*price;
    }
    else{
        theprices.textContent=1;
        shirt.textContent=qtn*price;
    }
}