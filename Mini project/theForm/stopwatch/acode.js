let circle=document.getElementById("circle");
    let start=document.getElementById("start-btn");
    let pause=document.getElementById("pause-btn");
    let stop=document.getElementById("stop-btn");
    let hr =document.getElementById("hr");
    let min=document.getElementById("min");
    let sec=document.getElementById("sec");
    
   
    let secst=0;
    let intervalId;
    let pauseh=true;
    let minst=0;
    let hrkl=0;

    function hrchange(){
        hrkl++;
        // hr.innerHTML=hrkl<10?"0"+hrkl:hrkl===13?"0"+hrkl*0+1:hrkl;
        hr.innerHTML=hrkl<10?"0"+hrkl:hrkl==13?"0"+hrkl*0+1:hrlk;
       
        
    }
    function minchange()
        {     minst++;
            if(minst===61)
        {
            minst=0;
            hrchange();
        }
            min.innerHTML=minst<10?"0"+minst:minst;
           
    }
    function secchange()
    {    if(pauseh==true)
      {
            if(secst===61)
        {
            secst=0;
            minchange();
        }
         ++secst;
            sec.innerHTML=secst<10?"0"+secst:secst;

            
       }
    }

    start.addEventListener('click',()=>{
        if(!intervalId)
    { intervalId =setInterval(secchange,1000);

    }
            
    })
    pause.addEventListener("click",()=>{
        pauseh=pauseh==true?false:true;
   
       })
   
       stop.addEventListener("click", () => {
       
           clearInterval(intervalId);
               setintervalids= null;
               secst = 0;
               minst = 0;
               hrkl = 0;
               sec.innerHTML = "00";
               min.innerHTML = "00.";
               hr.innerHTML = "00.";
   });
   