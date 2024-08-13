let p1= new Promise(function(resolve,reject)
{
    let xhr= new XMLHttpRequest();
    xhr.open('Get','content.txt',true);
    xhr.send();
    xhr.addEventListener("load",()=>{
        if(xhr.statusText==="OK")
        {
           resolve(xhr.responseText)
        }
        else
        {
           reject("something Went wrong")
        }
    });
}
)
p1.then((data)=>console.log(data)).catch((error)=>console.log(error));