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
        accessToken: 'pk.eyJ1Ijoic3k0aGlyNGgiLCJhIjoiY2t4NHI2aTNlMmVnczJvcDg0NzdlMWR6ZyJ9.FNxiyWC8GR1yEf04rcC_-A'
    }).addTo(map);

//     return map;
// }

// initMap();

let bookmarksList = [];
let bookmarksList_indiv;
let shopCoordinates;
let marker;
let coffeeShops;

let shopCoordinatesLt;
let shopCoordinatesLg;

let response;
const indivShopList = document.getElementsByClassName("discover-results")[0];


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



        let address = eachshop.location.formattedAddress;
        // console.log("address.length: " + address[2])
        if(address.length == 3){
            address[1] = address[2] + ' ' + address[1];
            address.splice(2);
        }
        address = address.join('<br>');


        marker.bindPopup(`<h2>${eachshop.name}</h2>
                            <p>${address}</p>
                            <button class="bookmark-btn"><i class="fas fa-star"></i> Add to Bookmarks</button>`, {
                                minWidth: 300
        });


        marker.on('popupopen', function(){
            let bookmarkBtn = document.getElementsByClassName("bookmark-btn")[0];
            console.log("line 89: " + eachshop.name)

            bookmarkBtn.addEventListener("click", function(){
                     
                bookmarkBtn.innerHTML = `<i class="fas fa-star"></i> Added to bookmarks!`;
                bookmarkBtn.classList.add('clicked-on-bookmark')

                bookmarksList_indiv = {
                    'shopName' : eachshop.name,
                    'shopAddress': address,
                    'shopCoordinatesLt': shopCoordinatesLt,
                    'shopCoordinatesLg': shopCoordinatesLg
                };

                updateBooksmarksList();

                setTimeout( function(){
                    map.closePopup();
                }, 700)

            })

        });

        marker.on('popupclose', function(){
            console.log("bye")
        })

        marker.addTo(coffeeShopClusterLayer);


        // discover box results
        let shopListing = document.createElement("div");
        shopListing.className = "indiv-result";
        // console.log("address is a: " + address)
        shopListing.innerHTML = `<h4>${eachshop.name}</h4>
                                <small>${address}</small>`;

        shopListing.addEventListener("click", function(){

            console.log("clicked on " + shopListing.innerText)

            shopCoordinatesLt = eachshop.location.lat;
            shopCoordinatesLg = eachshop.location.lng;
            // console.log(shopCoordinatesLt,shopCoordinatesLg)

            // map.closePopup();
            map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 20);
            
            discoverBox.classList.remove("box-slideup")
            discoverBox.style.transition = "all 0.5s ease-in";

        })
        indivShopList.appendChild(shopListing);
        // }
        
    }

    map.addLayer(coffeeShopClusterLayer);
    // coffeeShopClusterLayer.addTo(map);

}

function updateBooksmarksList(){
    console.log(bookmarksList_indiv)
    bookmarksList.push(bookmarksList_indiv);
}