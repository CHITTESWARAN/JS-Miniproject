
let formbtn=document.getElementById("theform");
let coursename= document.querySelector("#SelectCourse");
let coursesFees=document.querySelector("#TotalFees");
let BcRadio = document.querySelector("#Bc");
let MbcRadio = document.querySelector("#MBC");
let ScRadio = document.querySelector("#Sc");
let PaidFees=document.querySelector("#PaidFees");
let thediscountfees=document.getElementById("CourseFees")
let submitbtn=document.getElementById("submitbtn");

let Duefees=document.getElementById("DueFees");

let intialfee=0;
let paidfee=0;
coursename.addEventListener("change",(e)=>{
     intialfee =coursename.value=="MERN"?32000:coursename.value=="JAVA"? 34000:coursename.value=="PYTHON"?36000:0;
coursesFees.value=intialfee;
})

BcRadio.addEventListener("click",()=>{
    thediscountfees.value=(intialfee-5000);
})
MbcRadio.addEventListener("click",()=>{
    thediscountfees.value=(intialfee-7200);

})
ScRadio.addEventListener("click",()=>{
   thediscountfees.value=(intialfee-10000);
})
PaidFees.addEventListener("change",(e)=>{
   
    let paidfee=Number(PaidFees.value);
    Duefees.value= Number(thediscountfees.value)-paidfee;
   
})




