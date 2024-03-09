// url api /api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20

const url = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20";

const plek = document.querySelector("#accordionExample");

async function api() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.results.sort(function (a, b) {
        return b.availablecapacity - a.availablecapacity;
    });;
    data.results.forEach((element, index) => {
        const test = document.createElement("div");
        test.innerHTML = '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#collapse' + index + '" aria-expanded="true" aria-controls="collapseOne">' + element.name + '</button></h2><div id="collapse' + index + '" class="accordion - collapse collapse" data-bs-parent="#accordionExample"><div class="accordion - body"><strong>Beschikbare parkeerplaatsen</strong><br>' + element.availablecapacity + ' van de ' + element.totalcapacity + '</div ></div ></div > ';

        plek.appendChild(test);

    });




};

api();
