let singapore = [1.34,103.81]; // #1 Singapore latlng
let map = L.map('map-container').setView(singapore, 12.5); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// let coffeeCluster = L.layerGroup();

// function addCircleMarkersToLayers(
//     layer,
//     data,
//     color
// ){
//     for (let i = 0; i < data.length; i++) {
//         // let coffeeCoordinates = data[i].geocodes.main;
//         L.circle(data[i].coordinates, {
//             color: color,
//             fillColor:color,
//             fillOpacity:0.3,
//             radius: 500
//         }).addTo(layer).bindPopup(data[i].name);
//     }
    
// }

// const hdb = [
//     {
//         "name":"Yishun",
//         "coordinates":[1.4304, 103.8354]
//     },
//     {
//         "name":"Bedok",
//         "coordinates":[1.3236, 103.9273]
//     }
// ]


// addCircleMarkersToLayers(coffeeCluster, kopi, "lime");
// // console.log("from one: " + coffeePlacesList_Array)

// coffeeCluster.addTo(map);

let historyList = [];
let historyList_indiv;
let shopCoordinates;
let marker;

window.addEventListener('DOMContentLoaded', async function() {
    const coffeeShops = await axios.get("js/coffee-places-50.json");
    const coffeeShopObjects = coffeeShops.data.results;
    // console.log("coffeeShopObjects: " + coffeeShopObjects)
    let coffeeShopClusterLayer = L.markerClusterGroup();
    for (let i = 0; i < coffeeShopObjects.length; i++) {
        // let info = coffeeShopObjects[i];
        shopCoordinates = coffeeShopObjects[i].geocodes.main;
        // console.log(shopCoordinates.latitude, shopCoordinates.longitude)
        marker = L.marker([shopCoordinates.latitude, shopCoordinates.longitude]);
        marker.bindPopup(`Shop: ${coffeeShopObjects[i].name}`);
        marker.addTo(coffeeShopClusterLayer);
        // marker.openPopup();
    }
    coffeeShopClusterLayer.addTo(map);

    let indivShopList;
    for(let i=0 ; i<coffeeShopObjects.length; i++){
            eachshop = coffeePlacesList[i];
            // console.log(eachshop)
            indivShopList = document.getElementsByClassName("discover-results")[0];
            indivShopList.innerHTML += `<div class="indiv-result">
                                            ${eachshop.name}
                                            <br>
                                            <small style="color:hotpink;">${eachshop.location.address}</small>
                                        </div>`;
            // shopListing.addEventListener("click", function(){
            //     console.log("clicked on " + eachshop.name)
            // })
            // coffeePlacesList_Array2.set({'name': eachshop.name}, {'location': [eachshop.geocodes.main.latitude, eachshop.geocodes.main.latitude]});
    }

    let shopListing = document.querySelectorAll(".indiv-result");
    // console.log(shopListing.length)
    for(let x=0; x<shopListing.length; x++){
        // console.log(shopListing[x])
        shopListing[x].addEventListener("click", function(){
            historyList_indiv = shopListing[x];
            console.log("clicked on " + shopListing[x].innerText)
            updateHistoryList();

            // console.log(coffeePlacesList[x]);
            let shopCoordinatesLt = coffeePlacesList[x].geocodes.main.latitude;
            let shopCoordinatesLg = coffeePlacesList[x].geocodes.main.longitude;
            console.log(shopCoordinatesLt,shopCoordinatesLg)
            // historyList_indiv.coordinates = eachshop.geocodes.main.latitude,eachshop.geocodes.main.longitude;
            // console.log("historyList_indiv.coordinates: " + historyList_indiv.coordinates)

            // console.log("historyList_indiv: " + historyList_indiv.outerText)

            map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 18);
            marker.openPopup();


            discoverBox.classList.remove("box-slideup")
            discoverBox.style.transition = "all 0.5s ease-in";

        })
    }
});

function updateHistoryList(){
    // console.log(historyList_indiv)
    historyList.push(historyList_indiv);
}