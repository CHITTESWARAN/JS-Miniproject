async function displayCount(data) {
    let htmlCode = `
        <div class="col-3">
            <div class="card">
                <div class="card-header">
                    <img src="${data.flags.png}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h1>${data.name.common}</h1>
                    <h2>${(data.population / 1000000).toFixed(2)}M</h2>
                    <h1>${data.capital ? data.capital[0] : 'N/A'}</h1>
                </div>
            </div>
        </div>`;
                
    document.getElementById("thedata").insertAdjacentHTML('afterbegin', htmlCode);
}

async function getData(country) {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) {
            throw new Error(`Error fetching data for ${country}: ${response.status}`);
        }
        let data = await response.json();
        let [countryData] = data;
        console.log(countryData);
        await displayCount(countryData);
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataInOrder(countries) {
    for (let country of countries) {
        await getData(country);
    }
}

let countries = ["bharat", "pk", "Afg", "USA"];
fetchDataInOrder(countries);
