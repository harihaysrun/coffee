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


let coffeeShopClusterLayer = L.layerGroup();
// let coffeeShopClusterLayer = L.markerClusterGroup();


function resetMap(){

    map.flyTo(singapore, 12.5)

    console.log("generateMap: " + coffeePlacesList.length)

    // clear markers from the map for every region selection
    coffeeShopClusterLayer.clearLayers();
    
    console.log("coffeeShopClusterLayer: " + coffeeShopClusterLayer)
    // let coffeeShopArray = [];

    for (let eachshop of coffeePlacesList) {
        // eachshop of coffeePlacesList
        // eachshop = coffeePlacesList[i];
        shopCoordinates = eachshop.location;
        // console.log(shopCoordinates.latitude, shopCoordinates.longitude)
        marker = L.marker([shopCoordinates.lat, shopCoordinates.lng], {
            icon: L.icon({
                iconUrl: 'images/coffee-beans.png',
                iconSize: [50, 50]
            })
        });
        
        marker.bindPopup(`<h2>${eachshop.name}</h2>
                        <button class="bookmark-btn"><i class="fas fa-star"></i> Add to Bookmarks</button>`, {
                            minWidth: 300
                        });

                        
        marker.addTo(coffeeShopClusterLayer);

        // coffeeShopArray.push(marker);

        // discover box results
        let shopListing = document.createElement("div");
        shopListing.className = "indiv-result";
        shopListing.innerHTML = `<h4>${eachshop.name}</h4>
                                <small>${eachshop.location.address}</small>`;

        shopListing.addEventListener("click", function(){

            // historyList_indiv = shopListing;
            // console.log(historyList_indiv)

            console.log("clicked on " + shopListing.innerText)

            let shopCoordinatesLt = eachshop.location.lat;
            let shopCoordinatesLg = eachshop.location.lng;
            // console.log(shopCoordinatesLt,shopCoordinatesLg)

            map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 20);
            // marker.openPopup();

            // coffeeShopClusterLayer.zoomToShowLayer(marker, function(){
            //     marker.openPopup();
            // })
            
            discoverBox.classList.remove("box-slideup")
            discoverBox.style.transition = "all 0.5s ease-in";

        })
        indivShopList.appendChild(shopListing);
        // }



        marker.on('popupopen', function(){
            let bookmarkBtn = document.getElementsByClassName("bookmark-btn")[0];
            console.log(eachshop.name)

            bookmarkBtn.addEventListener("click", function(){
                
                
                bookmarkBtn.innerHTML = `<i class="fas fa-star"></i> Added to bookmarks!`;
                bookmarkBtn.style.backgroundColor = "#789361";
                bookmarkBtn.style.color = "#ffffff";
                bookmarkBtn.style.border = "1px solid #526C3B";
                // historyList_indiv = eachshop.name;
            
                historyList_indiv = {
                    'shopName' : eachshop.name,
                    'shopAddress': eachshop.location.address
                };
                // console.log(historyList_indiv)

                updateHistoryList();
                // console.log("clicked on " + historyList_indiv);

                setTimeout( function(){
                    map.closePopup();
                }, 700)

            })

        });

        marker.on('popupclose', function(){
            console.log("bye")
        })
        
    }

    map.addLayer(coffeeShopClusterLayer);
    // coffeeShopClusterLayer.addTo(map);

}

function updateHistoryList(){
    console.log(historyList_indiv)
    historyList.push(historyList_indiv);
}