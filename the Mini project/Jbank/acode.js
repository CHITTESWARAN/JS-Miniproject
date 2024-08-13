let account1={
    accName:"Rajesh sig",
    tranction:[500,-200,400,-500,800,336,943,243,2,643,248,234,983],
    pin:2345

}

let account2 = {
    accName: "Suresh Gupta",
    tranction: [300, -100, 700, -300, 600],
    pin: 1234
};

let account3 = {
    accName: "Anita Sharma",
    tranction: [1000, -500, 200, -100, 300],
    pin: 5678
};

let account4 = {
    accName: "Vikram Singh",
    tranction: [200, -50, 500, -150, 400],
    pin: 3456
};

let account5 = {
    accName: "Pooja Verma",
    tranction: [800, -300, 400, -200, 600],
    pin: 7890
};

let accounts=[account1,account2,account3,account4,account5];

function createuserName(){
    accounts.forEach((acct) => {
        acct.username=acct.accName.toLowerCase().split(' ').map(function(name){
            return name[0];
        }).join('');
       
        
    });
    

}
createuserName();
console.log(accounts);

let formlogin=document.getElementById("formlogin");
let username=document.getElementById("username");
let pin=document.getElementById("password");
let thedata=document.getElementById("thedata");
let viewaccountinfo=document.getElementById("viewaccountinfo");
let formnum=document.getElementById("formnum");
let checkbalance=document.getElementById("checkbalance");
let withdrawls=document.getElementById("requestainmoney");
let viewstatement=document.getElementById("viewstatement");
let transferamount=document.getElementById("transferamount");
let viewstatementinf=document.getElementById("viewstatementinf");
thelogout=document.getElementById("alogout");
formnum.addEventListener("submit",(e)=>{
    e.preventDefault();

      
    let usernamevalue=username.value ;
    let pinvl=Number(pin.value);
    username.value=[];
    pin.value=[];
    
    let n=findaccount(usernamevalue,pinvl);
    if (n) { displayAccount(n);
             
        setTimeout(function() {
        thedata.style.color = "green";
        thedata.innerHTML = `<h2> Welcome Back ${n.accName}</h2>`;
        setTimeout(function() {
         thedata.innerHTML =" ";
            }, 10000);
        }, 10);
    } else {
        setTimeout(function(){
        thedata.style.color = "red";
        thedata.innerHTML = `<h2> Enter the Correct userName and Password</h2>`;
        setTimeout(function(){
          thedata.innerHTML =" ";
        },10000);
    },10);
    
    
    }
})
let hrs=document.getElementById("hrs");
let min_2=document.getElementById("min");
let sec_8=document.getElementById("sec");
let accountdetail;
let checkbalancen=document.getElementById("balancefooter");
let accounamt;
let acc;
let balance=104359;

function displayAccount(n) {
    accountdetail = n;
    viewaccountinfo.classList.remove('hidden');
    thelogoutnum();
}


viewstatement.addEventListener("click", () => {
    document.getElementById("viewstatementthehead").classList.remove('hidden');
   
    viewstatementnum(accountdetail.tranction);

});
checkbalance.addEventListener("click",(()=>{
    document.getElementById("viewstatementthehead").classList.remove('hidden');
    checkBalancenum(accountdetail.tranction,true)
}))

transferamount.addEventListener("click", () => {
    document.getElementById("viewstatementthehead").classList.remove('hidden');
    // document.getElementById("viewstatementthehead").innerHTML= `<h2>Deposit</h2>`;
    transferamountval(accountdetail.tranction);
});
withdrawls.addEventListener("click",((e)=>{
    document.getElementById("viewstatementthehead").classList.remove('hidden');
    widthwralsnum(accountdetail.tranction);

}));



let min=0;
let sec=4;
flag=true;
//Logout function
function thelogoutnum()
{  
    console.log(1);
   let interval= setInterval(timer,1000);
    function timer()
    {  if(flag===true)
      { --sec; 
        if(sec===0)
        { sec=60;

          
           min-=1;
        }  
        
         if( min===0 && sec===1)
         {
            flag=false;
            viewaccountinfo.classList.add("hidden");
            setTimeout(function (){
            location.reload();
                    },5000)
                   thedata.innerHTML="You session is the Experied,you can can relogin the to continue the website";
                   thedata.style.color="red";
                  
                   }
                   
      min_2.innerHTML=concatzero(min);
      sec_8.innerHTML=concatzero(sec);
                
    }
           }  
    }


    function concatzero(timer)
    {
        if(timer<10)
        {
            return "0"+timer;
        }
        else
        {
            return timer;
        }
    }



 let footer =document.getElementById("balancefooter");
 footer.innerHTML=[];


function findaccount(i,k)
{  let currentacc=accounts.find((e)=>{
    
    if((e.username===i)&&(e.pin===k)) 
    {   
        return e;
    }
    else{
        
        return false;
    }
})

 return currentacc;

}
checkbalancen.innerHTML=" ";

//  viewstatement
function viewstatementnum(n){

    viewstatementinf.innerHTML=[];
    n.forEach((e)=>{
          let color=e>0?"success":"danger";
          let tranc=e>0?"Deposit":"Withdraw";
        viewstatementinf.innerHTML+=`<div>
                             <button type="button" class="btn btn-${color} w-5 mt-2 ">
                             ${tranc} <span class="badge text-bg-dark">4</span>
                          </button>
                          <h4 class="float-end">${e}</h4>
    </div>`

    })
   
}



//checkBalance

function checkBalancenum(n,s)
{
    viewstatementinf.innerHTML=[];
    sum=balance;
    for(let i=0;i<n.length;i++)
    {  sum+=n[i];

    }
    
    n.forEach((e)=>{
          let color=e>0?"success":"danger";
          let tranc=e>0?"Deposit":"Withdraw";
        viewstatementinf.innerHTML+=`<div>
                             <button type="button" class="btn btn-${color} w-5 mt-2 ">
                             ${tranc} <span class="badge text-bg-dark">4</span>
                          </button>
                          <h4 class="float-end">${e}</h4>
    </div>`

    })
    if(s){
        document.getElementById("balancefooter").innerHTML=`
        <div class="card-footer" >
              <div> <h2>Balance a the Amount=${sum}</h2> </div>
              </div>`
    }
    else{
        document.getElementById("balancefooter").innerHTML=``;
    }
   
}
   
 
     
// //transferamount

function transferamountval(n){
    viewstatementinf.innerHTML='';
     let depositnum = n.filter((e) =>{
        if(e>0){
            return e;
        }
     } );
    console.log(depositnum);
    depositnum.forEach((e)=>{
        let color="success";
        let tranc="Deposit";
      viewstatementinf.innerHTML+=`<div>
                           <button type="button" class="btn btn-${color} w-5 mt-2 ">
                           ${tranc} <span class="badge text-bg-dark">4</span>
                        </button>
                        <h4 class="float-end">${e}</h4>
  </div>`

  })
}

//widthwrals
function widthwralsnum(n)
{
    viewstatementinf.innerHTML='';
    let depositnum = n.filter((e) =>{
        if(e<0){
            return e;
        }
     } );
   
depositnum.forEach((e)=>{
    let color="danger";
    let tranc="Withdrawls";
    viewstatementinf.innerHTML+=`<div>
    <button type="button" class="btn btn-${color} w-5 mt-2 ">
    ${tranc} <span class="badge text-bg-dark">4</span>
     </button>
    <h4 class="float-end">${e}</h4>
    </div>`
})

}









