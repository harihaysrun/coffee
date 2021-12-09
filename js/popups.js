const mainPopup_OuterContainer = document.getElementById("main-popup");
const mainPopup_InnerContainer = document.getElementById("main-popup-container");

mainPopup();

// inserts the 'coffee randomiser' or 'check out coffee places?' into main popup
function mainPopup(){
    mainPopup_InnerContainer.innerHTML = '';
    const mainPopupLanding = document.createElement("div");
    mainPopupLanding.id = "main-popup-landing";
    mainPopupLanding.innerHTML =  `<h1>What can I serve you today?</h1>
                                    <div id="choose-one">
                                        <div id="coffee-randomiser">
                                            <img src="images/coffee-beans.png" alt="">
                                            Coffee Randomiser
                                        </div>
                                        <div id="coffee-places">
                                            <img src="images/coffee-beans.png" alt="">
                                            Check out coffee places
                                        </div>
                                    </div>`;
    mainPopup_InnerContainer.appendChild(mainPopupLanding);
    
    chooseOne();
}

// choose one from 'coffee randomiser' and 'check out coffee places?'
async function chooseOne(){
    const coffeeRandomiser = document.getElementById("coffee-randomiser");
    const coffeePlaces = document.getElementById("coffee-places");
    
    coffeeRandomiser.addEventListener('click', function(){
        mainPopup_InnerContainer.innerHTML = '';
        // generateShopList();
        mainPopup_randomiser_backBtn();
        mainPopup_randomiser();
        generateMap();
    })

    coffeePlaces.addEventListener('click', function(){
        // mainPopup_OuterContainer.innerHTML = "";
        mainPopup_OuterContainer.style.display = "none";
        // generateShopList();
        generateMap();
    })

    await generateList('Singapore');
    console.log(coffeePlacesList)
    
}

// insert 'back' button only on the landing page popup, not the nav link popup
function mainPopup_randomiser_backBtn(){
    const backBtn = document.createElement("div");
    backBtn.class = "back-to-main";
    backBtn.innerHTML = `<div class="back-to-main"><i class="fas fa-long-arrow-alt-left"></i> &nbsp Back</div>`;
    mainPopup_InnerContainer.appendChild(backBtn);
}

// shows the random coffee & shop suggestions
function mainPopup_randomiser(){
    const mainPopupRandomiser = document.createElement("div");
    mainPopupRandomiser.id = "main-popup-randomiser";
    setTimeout(function(){ 
        mainPopupRandomiser.innerHTML = `<div id="randomiser-container">
                                            <span>How about a cup of...</span>
                                            <div id="coffee-and-shop">
                                                <div id="random-coffee">
                                                    <img src="" alt="">
                                                    <h2>Iced Americano</h2>
                                                </div>
                                                <span>from</span>
                                                <div id="random-shop">
                                                    <h2 id="shopName"></h2>
                                                    <p id="shopAddress">Shop Address</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="buttons">
                                            <button class="btn-green">Take me there!</button>
                                            <button class="btn-red">Give me another one</button>
                                        </div>`;
        mainPopup_InnerContainer.appendChild(mainPopupRandomiser);
        
        randomise();
        goToShopLocation();
        anotherRec();
        backToMain_btn();
    }, 0);
}

let shopNumber;
let coffeePlacesList;

// get a random coffee & shop to recommend user
async function randomise(){

    let coffeeTypeResponse = await axios.get("js/coffee-type.json");
    let coffeeType = coffeeTypeResponse.data.coffee_type;
    // console.log('coffeeType ' + coffeeType);

    // random coffee
    let coffeeTypeNumber = Math.floor(Math.random() * 34);

    const coffeeImg = document.querySelector("#random-coffee img");
    const coffeeName = document.querySelector("#random-coffee h2");

    coffeeImg.src = coffeeType[coffeeTypeNumber].img;
    coffeeName.innerText = coffeeType[coffeeTypeNumber].type;
    
    // random coffee shop
    shopNumber = Math.floor(Math.random() * 50);

    const shopName = document.getElementById("shopName");
    const shopAddress = document.getElementById("shopAddress");

    let shopID = coffeePlacesList[shopNumber];
    shopName.innerText = shopID.name;
    shopAddress.innerHTML = `${shopID.location.formattedAddress}`;
}

// closes the popup and leads user to the shop's coordinates on the map
function goToShopLocation(){
    const goToShop = document.getElementsByClassName("btn-green")[0];
    goToShop.addEventListener('click', function(){

        console.log("coffeePlacesList: " + coffeePlacesList[shopNumber].name)

        let shopID =  coffeePlacesList[shopNumber];
        shopCoordinatesLt = shopID.location.lat;
        shopCoordinatesLg = shopID.location.lng;
        console.log(shopCoordinatesLt,shopCoordinatesLg)

        map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 18);
        marker.openPopup();

        const shopLocation = document.createElement("div");
        shopLocation.className = "indiv-result";
        shopLocation.innerHTML = `${coffeePlacesList[shopNumber].name}
                                    <br>
                                    <small style="color:hotpink;">${coffeePlacesList[shopNumber].location.address}</small>`;

        // historyList.push(shopLocation);
        // console.log("from main page: " + shopLocation);


        // for(let i=0; i<historyList.length; i++){
        //     // console.log("historyList[i] : " + historyList[i].outerHTML)
        //     document.getElementById("history-list").innerHTML += historyList[i].outerHTML;
        // }


        // console.log("historyList: " + historyList[shopNumber].outerHTML)

        // mainPopup_OuterContainer.innerHTML = "";
        mainPopup_OuterContainer.style.display = "none";
    })
}

// reloads the mainPopup_randomiser(),
// but only include the 'back' button on the landing page and not nav link popup
function anotherRec(){
    const anotherOne = document.getElementsByClassName("btn-red")[0];
    anotherOne.addEventListener('click', function(){

        const backtoMain = document.getElementsByClassName("back-to-main");

        // check if 'back' button exists, landing page has it but nav link popup doesn't
        // if it doesn't exist, don't call the mainPopup_randomiser_backBtn() function
        if(backtoMain.length == 1){
            mainPopup_InnerContainer.innerHTML = '';
            mainPopup_randomiser_backBtn();
            mainPopup_randomiser();
        } else{
            mainPopup_InnerContainer.innerHTML = '';
            mainPopup_randomiser();
        }
    })

}

// 'back' button function
function backToMain_btn(){

    const backtoMain = document.getElementsByClassName("back-to-main");         
    // console.log(backtoMain.length)

    // check if 'back' button exists, landing page has it but nav link popup doesn't
    // if it doesn't exist, no actions will take place on click. otherwise will get errors in console log
    if(backtoMain.length == 1){                          
        backtoMain[0].addEventListener('click', function(){
            mainPopup();
        })
    } else{
        return;
    }
}