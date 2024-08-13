document.addEventListener("DOMContentLoaded", function () {
    let btnTag = document.getElementById("products-Btn");

    function getProductsData() {
        // Create the XMLHttpRequest object
        let xhr = new XMLHttpRequest();
        // Create the request
        xhr.open('GET', 'products.json', true);
        // Send the request to the server
        xhr.send();
        // In between the sending request and getting response it makes some time
  

        let messageTag = document.getElementById("message");
        

        xhr.onprogress = function () {
            
            messageTag.innerText = "Data is loading...";
        }
        // Once the data is uploaded successfully
        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
                let productsArray = data.arrayProducts;
                console.log(productsArray);

                // Add event listener inside the onload function to ensure productsArray is in scope
                btnTag.addEventListener("click", () => {
                    messageTag.innerText=[];
                    let displayData = document.getElementById("disdata");
                    displayData.innerHTML = ''; // Clear previous data
                    productsArray.forEach(element => {
                        displayData.innerHTML += `
                            <div class="card mb-3">
                                <div class="row ">
                                    <div class="col-md-4">
                                        <img src="${element.img}" class="img-fluid" alt="Product Image">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Product ID: ${element.id}</h5>
                                            <p class="card-text">Price: ${element.price}</p>
                                            <p class="card-text">Quantity: ${element.qtn}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                });
            } 
        }
    }

    getProductsData();
});
