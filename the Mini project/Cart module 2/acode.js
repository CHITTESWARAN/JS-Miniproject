let item={
    id:101,
    imgUrl:"",
    name:"Us polo" ,
    qtn:1 ,
    discount: 10,
    price:1999.00,
    price2:1999.00

};

function updateaitems()
{
let htmldata = `<td>${item.id}</td>
                <td><img src="${item.imgUrl}" alt="Image Not Found" width="30px" height="30px"</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td> <button id="minus" class="btn btn-dark"onclick="minus();" >-</button> <span id=items>${item.qtn} </span> <button id="plus" class="btn btn-dark" onclick="plus();" >+</button></td>
               
                <td>${item.discount}%</td>
                <td>${Math.trunc(item.price2)}</td>`


let tablecontants=document.querySelector("#tablecont");
tablecontants.innerHTML=htmldata;
}
let items4 = document.querySelector("#items")

function discount(){
if(item.price2<5000)
{
item.discount=10;
item.price2 = item.price2 - (item.price2 / 100 * 10); 
}
else if((item.price2>1000)&&(item.price2<6500))
{
    item.discount=15;
    item.price2 = item.price2 - (item.price2 / 100 * 15);
}
else
{
    item.discount=20;
    item.price2 = item.price2 - (item.price2 / 100 * 20); 
}
}



function plus(){

    if(item.qtn<=10)
    {
    ++item.qtn;
    item.price2=item.qtn*item.price;
     discount(item.price);
    updateaitems();

    }
    else{
       item.qtn= 10;
       item.price2=item.qtn*item.price;
       discount(item.price);
       updateaitems();
    }
}

function minus(){

    if(item.qtn>1)
    {
    --item.qtn;
    item.price2=item.qtn*item.price;
    discount(item.price);
    updateaitems();

    }
    else{
       item.qtn=1;
       item.price2=item.qtn*item.price;
       discount(item.price);
       updateaitems();
    }
}


updateaitems();