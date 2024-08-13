

document.addEventListener("DOMContentLoaded", function() {
    let userid = {
    
}

const uservalue = document.getElementById("thedata");
const Outputdt=document.getElementById("user1")

uservalue.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const FirstName = document.getElementById("FirstName").value;
    
    const LastName = document.getElementById("LastName").value;
    const Password = document.getElementById("Password").value;
    const PhoneNO = document.getElementById("Phone").value;
    const email = document.getElementById("email").value;
    userid.FirstName=FirstName;
    userid.LastName=LastName;
    userid.Password=Password;
    userid.PhoneNO=PhoneNO;
    userid.email=email;
    
    
console.log(userid.FirstName);

localStorage.setItem("userid",JSON.stringify(userid));

        localStorage.setItem("userid", JSON.stringify(userid));
        const storedUser = JSON.parse(localStorage.getItem("userid"));

        Outputdt.innerHTML = `
            <div>
                <p>First Name: ${storedUser.FirstName}</p>
                <p>Last Name: ${storedUser.LastName}</p>
                <p>Phone No: ${storedUser.PhoneNO}</p>
                <p>Email: ${storedUser.email}</p>
            </div>
        `;
    });
});