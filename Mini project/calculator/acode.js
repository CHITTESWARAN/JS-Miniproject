let calcu_box =document.getElementById("calcu-box");
let inputdata =document.getElementById("inputdata");
let buttons=document.getElementById("buttons");
 
 buttons.addEventListener("click",(e)=>{
    let num=e.target.value;
     console.log(e.target.value);
     console.log(Number(e.target.value))
     console.log(num);
    
      
     if (num === "+" || num === "-" || num === "*" || num === "%" || num === "/") {
        inputdata.value += num;
    } 

      else if( num==="AC")
      {
        inputdata.value="";
      }
      else if(num==="=")
      {
         calculation(inputdata.value);
      }
      else if(num==="Del")
      {
         inputdata.value=inputdata.value.slice(0,-1);
      }
      else{
        inputdata.value+=num;
      }
      
     
     
 })

 function calculation(n)
 {
   
    try {
        inputdata.value = eval(n);
    } catch (e) {
        inputdata.value = 'Error';
    }
 }