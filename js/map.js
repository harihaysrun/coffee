// function initMap(){
    let singapore = [1.34,103.81]; // #1 Singapore latlng
    let map = L.map('map-container').setView(singapore, 12.5); // #2 Set the center point

    // setup the tile layers
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    }).addTo(map);

//     return map;
// }

// initMap();

let historyList = [];
let historyList_indiv;
let shopCoordinates;
let marker;
let coffeeShops;

let response;
const indivShopList = document.getElementsByClassName("discover-results")[0];
// let coffeeShopClusterLayer;


function generateMap(){

    indivShopList.innerHTML = '';
    resetMap();

};


let coffeeShopClusterLayer = L.markerClusterGroup();


function resetMap(){

    map.flyTo(singapore, 12.5)

    console.log("generateMap: " + coffeePlacesList.length)

    // clear markers from the map for every region selection
    coffeeShopClusterLayer.clearLayers();
    
    console.log("coffeeShopClusterLayer: " + coffeeShopClusterLayer)

    for (let i = 0; i < coffeePlacesList.length; i++) {
        // let info = coffeeShopObjects[i];
        shopCoordinates = coffeePlacesList[i].location;
        // console.log(shopCoordinates.latitude, shopCoordinates.longitude)
        marker = L.marker([shopCoordinates.lat, shopCoordinates.lng], {
            icon: L.icon({
                iconUrl: 'images/coffee-beans.png',
                iconSize: [50, 50]
            })
        });

        // let confirmVenueName = await getVenueDetails(coffeePlacesList[i].id)
        // console.log("confirmVenueName: " + confirmVenueName.name)
        
        marker.bindPopup(`<h2>${coffeePlacesList[i].name}</h2>
                        <button class="bookmark-btn"><i class="fas fa-star"></i> Add to Bookmarks</button>`, {
                            minWidth: 300
                        });
        marker.addTo(coffeeShopClusterLayer);
        // marker.openPopup();
        // coffeeShopArray.push(marker);

        marker.on('popupopen', function(){
            let bookmarkBtn = document.getElementsByClassName("bookmark-btn")[0];
            console.log(coffeePlacesList[i].name)
            bookmarkBtn.addEventListener("click", function(){
                
                bookmarkBtn.innerHTML = `<i class="fas fa-star"></i> Added to bookmarks!`;
                bookmarkBtn.style.backgroundColor = "#789361";
                bookmarkBtn.style.color = "#ffffff";
                bookmarkBtn.style.border = "1px solid #526C3B";
                historyList_indiv = coffeePlacesList[i].name;
                updateHistoryList();
                console.log("clickeddd on " + historyList_indiv);

                setTimeout( function(){
                    map.closePopup();
                }, 700)

            })
        });

        marker.on('popupclose', function(){
            console.log("bye")
        })
        
        
    }

    coffeeShopClusterLayer.addTo(map);
    // map.addLayer(coffeeShopClusterLayer)
    // map.closePopupOnClick(true);

    for(let i=0 ; i<coffeePlacesList.length; i++){
            eachshop = coffeePlacesList[i];
            // console.log(eachshop)
            indivShopList.innerHTML += `<div class="indiv-result">
                                            ${eachshop.name}
                                            <br>
                                            <small style="color:hotpink;">${eachshop.location.address}</small>
                                        </div>`;
    }

    let shopListing = document.querySelectorAll(".indiv-result");
    // console.log(shopListing.length)
    for(let x=0; x<shopListing.length; x++){
        // console.log(shopListing[x])
        shopListing[x].addEventListener("click", function(){
            historyList_indiv = shopListing[x];
            console.log("clicked on " + shopListing[x].innerText)

            // console.log(coffeePlacesList[x]);
            let shopCoordinatesLt = coffeePlacesList[x].location.lat;
            let shopCoordinatesLg = coffeePlacesList[x].location.lng;
            console.log(shopCoordinatesLt,shopCoordinatesLg)

            map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 18);
            marker.openPopup();
            // map.openPopup();
            
            discoverBox.classList.remove("box-slideup")
            discoverBox.style.transition = "all 0.5s ease-in";

        })
    }

}

function updateHistoryList(){
    // console.log(historyList_indiv)
    historyList.push(historyList_indiv);
}