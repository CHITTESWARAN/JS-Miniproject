
let classstudent=[  { SReg: "101", Sname: "Alice", Smarks: [85, 78, 92, 88, 76], Semail: "alice@example.com", Sage: 20, Sresult: "" },
    { SReg: "102", Sname: "Bob", Smarks: [70, 65, 80, 75, 60], Semail: "bob@example.com", Sage: 21, Sresult: "" },
    { SReg: "103", Sname: "Charlie", Smarks: [90, 85, 95, 88, 92], Semail: "charlie@example.com", Sage: 22, Sresult: "" },
    { SReg: "104", Sname: "David", Smarks: [60, 55, 70, 65, 50], Semail: "david@example.com", Sage: 23, Sresult: "" },
    { SReg: "105", Sname: "Eve", Smarks: [78, 32, 54, 78, 43], Semail: "eve@example.com", Sage: 21, Sresult: "" },
    { SReg: "106", Sname: "Frank", Smarks: [88, 78, 98, 87, 90], Semail: "frank@example.com", Sage: 24, Sresult: "" },
    { SReg: "107", Sname: "Grace", Smarks: [77, 66, 85, 75, 70], Semail: "grace@example.com", Sage: 22, Sresult: "" },
    { SReg: "108", Sname: "Hank", Smarks: [68, 55, 74, 64, 57], Semail: "hank@example.com", Sage: 21, Sresult: "" },
    { SReg: "109", Sname: "Ivy", Smarks: [93, 85, 97, 90, 88], Semail: "ivy@example.com", Sage: 23, Sresult: "" },
    { SReg: "110", Sname: "Jack", Smarks: [72, 68, 80, 78, 65], Semail: "jack@example.com", Sage: 20, Sresult: "" },
    { SReg: "111", Sname: "Karen", Smarks: [55, 60, 70, 65, 58], Semail: "karen@example.com", Sage: 22, Sresult: "" },
    { SReg: "112", Sname: "Leo", Smarks: [80, 75, 85, 78, 80], Semail: "leo@example.com", Sage: 24, Sresult: "" },
    { SReg: "113", Sname: "Mona", Smarks: [65, 60, 70, 75, 62], Semail: "mona@example.com", Sage: 21, Sresult: "" },
    { SReg: "114", Sname: "Nick", Smarks: [85, 88, 92, 90, 87], Semail: "nick@example.com", Sage: 23, Sresult: "" },
    { SReg: "115", Sname: "Oscar", Smarks: [74, 68, 78, 70, 67], Semail: "oscar@example.com", Sage: 20, Sresult: "" },
    { SReg: "116", Sname: "Paul", Smarks: [62, 55, 68, 60, 57], Semail: "paul@example.com", Sage: 24, Sresult: "" },
    { SReg: "117", Sname: "Quinn", Smarks: [78, 85, 90, 82, 88], Semail: "quinn@example.com", Sage: 21, Sresult: "" },
    { SReg: "118", Sname: "Rachel", Smarks: [68, 65, 75, 70, 62], Semail: "rachel@example.com", Sage: 22, Sresult: "" },
    { SReg: "119", Sname: "Steve", Smarks: [90, 88, 95, 92, 90], Semail: "steve@example.com", Sage: 23, Sresult: "" },
    { SReg: "120", Sname: "Tina", Smarks: [58, 52, 65, 60, 55], Semail: "tina@example.com", Sage: 21, Sresult: "" }

];
let studentsDetails=document.getElementById("studentsDetails");
let Pass=document.getElementById("Pass");
let Fail=document.getElementById("Fail");
let studentlist=document.getElementById("studentid");



function calculateper( arr)
{

    let percentage=0;
    let result="Pass";

    let sum=0;
    arr.forEach((arr)=>{
       
        if((arr>=35) &&  (result!="Fail"))
        {
            sum=sum+arr;
         result="Pass"

        }
        else{
            sum=sum+arr;
            result="Fail"
        }
    })
    percentage=Math.trunc((sum/(arr.length*100))*100);
    
    return {percentage,result};
}
   

studentsDetails.addEventListener("click",(e)=>{
    allstudents(classstudent);
    

})


Pass.addEventListener("click",(e)=>{
    newPass();

})

Fail.addEventListener("click",(e)=>{
    aFail();

})


function allstudents(classstudent){
      
            studentlist.innerHTML="";
    classstudent.forEach((item)=>
    {   
        let { percentage, result } = calculateper(item.Smarks);
    studentlist.innerHTML+=`
               <tbody>
                <tr>
                    <td>${item.SReg}</td>
                    <td>${item.Sname}</td>
                    <td>${percentage}%</td>
                    <td>${item.Semail}</td>
                    <td>${item.Sage}</td>
                    <td style="color: ${result === 'Pass' ? 'green' : 'red'};">${result}</td>
                </tr>
               </tbody>
        </table>
       
       </div>`}
       
    ) 
   
  
}
 

function aFail()
{
    studentlist.innerHTML = ""; 
    classstudent.forEach((item)=>
        {   
            let {percentage,result}=calculateper(item.Smarks);
            if(percentage>45 && result==="Fail")
            { studentlist.innerHTML+=`
                <tr>
                <td>${item.SReg}</td>
                <td>${item.Sname}</td>
                <td>${percentage}%</td>
                <td>${item.Semail}</td>
                <td>${item.Sage}</td>
                <td style="color:${result==="Pass"?'green':'red'};">${result}</td>
            </tr>`
            }
        })
}
function newPass ()
{
    studentlist.innerHTML="";
    classstudent.forEach((item)=>
    {let {percentage,result}=calculateper(item.Smarks);
    if(percentage>45 && result==="Pass")
        { studentlist.innerHTML+=`
            <tr>
            <td>${item.SReg}</td>
            <td>${item.Sname}</td>
            <td>${percentage}%</td>
            <td>${item.Semail}</td>
            <td>${item.Sage}</td>
            <td style="color: ${result === 'Pass' ? 'green' : 'red'};">${result}</td>
        </tr>`
        }
    }
    )

}
let search_box=document.getElementById("search-box") ;
search_box.addEventListener("keyup",()=>{
    console.log(search_box.value);
    
    let displaynum=[];
    classstudent.forEach((item)=>{
        let newname=item.Sname.toLowerCase().trim();
         if(search_box.value.trim()!="")
         { let match=true;
            for(let i=0;i<search_box.value.length;i++)
            {
                if(newname[i]!=search_box.value.toLowerCase()[i] )
                    {
                     match=false;
                    }
                    else{
                    match=true;
                    }
                    if(match)
                    {
                        displaynum.push(item);
                    }
            }
            
            allstudents(displaynum);
    }
        
       
    })
 
    
})




