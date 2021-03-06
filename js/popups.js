const mainPopup_OuterContainer = document.getElementById("main-popup");
const mainPopup_InnerContainer = document.getElementById("main-popup-container");

// used to check if API call has already been made (from line 208) so that the loader animation won't appear when user clicks 'back'
let coffeeLoaded = 0;

mainPopup();

// inserts the 'coffee randomiser' or 'check out coffee places?' into main popup
async function mainPopup(){

    await generateList('Singapore');
    // console.log(coffeePlacesList);
    
    mainPopup_InnerContainer.innerHTML = '';
    const mainPopupLanding = document.createElement("div");
    mainPopupLanding.id = "main-popup-landing";
    
    mainPopup_InnerContainer.appendChild(mainPopupLanding);
        
    if(coffeeLoaded == 0){ 
        // loader animation
        mainPopupLanding.innerHTML = `<div id="loader-box">
                                        <img class="cup-shadow" src="images/cup-shadow.png">
                                        <img class="coffee-cup" src="images/cup.svg">
                                    </div>
                                        Brewing some coffee...`;

        setTimeout(function(){
            loadChoices();
        }, 1500);

    } else{
        loadChoices();
    }

    function loadChoices(){
        mainPopupLanding.classList.add("fade-in");
                
        mainPopupLanding.innerHTML =  `<h1>Choose one</h1>
                                        <div id="choose-one">
                                            <div id="coffee-randomiser">
                                                <img src="images/randomiser.png" alt="">
                                                Coffee Randomiser
                                            </div>
                                            <div id="coffee-places">
                                                <img src="images/coffee-places.png" alt="">
                                                Check out coffee places
                                            </div>
                                        </div>`;
                                    
        chooseOne();
    }
}

// choose one from 'coffee randomiser' and 'check out coffee places'
function chooseOne(){

    const coffeeRandomiser = document.getElementById("coffee-randomiser");
    const coffeePlaces = document.getElementById("coffee-places");
    
    coffeeRandomiser.addEventListener('click', function(){

        mainPopup_InnerContainer.innerHTML = '';

        mainPopup_InnerContainer.classList.add("fade-in");

        mainPopup_randomiser_backBtn();
        mainPopup_randomiser();
        generateMap();

    })

    coffeePlaces.addEventListener('click', function(){
        mainPopup_OuterContainer.style.display = "none";
        generateMap();
        instructions();
    })
    
}

// insert 'back' button only on the landing page popup, not the navbar link popup
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
    // setTimeout(function(){ 
        mainPopupRandomiser.innerHTML = `<div id="randomiser-container">
                                            <span>How about a cup of...</span>
                                            <div id="coffee-and-shop">
                                                <div id="random-coffee">
                                                    <div>
                                                        <img src="" alt="">
                                                        <h4>Coffee</h4>
                                                    </div>
                                                    <p id="coffee-description"></p>
                                                </div>
                                                <span>from</span>
                                                <div id="random-shop">
                                                    <h4 id="shopName">Shop Name</h4>
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
    // }, 0);
}

let coffeeTypeNumber;
let shopNumber;

// get a random coffee & shop to recommend to user
async function randomise(){

    let coffeeType = await getCoffeeType();
    // console.log(coffeeType.length)

    // random coffee
    // console.log("number of coffee types: " + coffeeType.length)
    coffeeTypeNumber = Math.floor(Math.random() * coffeeType.length);

    const coffeeImg = document.querySelector("#random-coffee img");
    const coffeeName = document.querySelector("#random-coffee h4");
    const coffeeDescription = document.querySelector("#random-coffee p");

    coffeeImg.src = coffeeType[coffeeTypeNumber].img;
    coffeeName.innerText = coffeeType[coffeeTypeNumber].type;
    coffeeDescription.innerText = coffeeType[coffeeTypeNumber].description;
    
    // random coffee shop
    // console.log(coffeePlacesList.length)
    shopNumber = Math.floor(Math.random() * coffeePlacesList.length);

    const shopName = document.getElementById("shopName");
    const shopAddress = document.getElementById("shopAddress");

    let shopID = coffeePlacesList[shopNumber];
    shopName.innerText = shopID.name;
    shopAddress.innerText = shopID.location.formattedAddress;
}


const backtoMain = document.getElementsByClassName("back-to-main");

// closes the popup and leads user to the shop's coordinates on the map
function goToShopLocation(){
    const goToShop = document.getElementsByClassName("btn-green")[0];

    goToShop.addEventListener('click', function(){

        let shopID =  coffeePlacesList[shopNumber];
        shopCoordinatesLt = shopID.location.lat;
        shopCoordinatesLg = shopID.location.lng;
        // console.log(shopCoordinatesLt,shopCoordinatesLg)

        map.flyTo([shopCoordinatesLt, shopCoordinatesLg], 21);

        mainPopup_OuterContainer.style.display = "none";
        if(backtoMain.length == 1){
            instructions();
        }

    })
}

// reloads the mainPopup_randomiser(),
// but only include the 'back' button on the landing page and not navbar link popup
function anotherRec(){
    const anotherOne = document.getElementsByClassName("btn-red")[0];
    anotherOne.addEventListener('click', function(){

        // check if 'back' button exists, landing page has it but navbar link popup doesn't
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
    // console.log(backtoMain.length)

    // check if 'back' button exists, landing page has it but navbar link popup doesn't
    // if it doesn't exist, no actions will take place on click. otherwise will get errors in console log
    if(backtoMain.length == 1){                      
        coffeeLoaded++;    
        backtoMain[0].addEventListener('click', function(){
            mainPopup();
        })
    }
    
}

// mobile instructions to click on coffee bean markers
function instructions(){

    const dialogBox = document.createElement("div");
    dialogBox.className = "mobile-instructions";
    dialogBox.innerHTML = `<img src="images/coffee-beans.png">Click on the coffee beans to add location to bookmarks`;
    document.body.appendChild(dialogBox);

    setTimeout(function(){
        dialogBox.style = "transform:translateY(-200px); transition: all 0.3s ease-out";
        setTimeout(function(){
            document.body.removeChild(dialogBox);
        }, 100)
    }, 3000);

}