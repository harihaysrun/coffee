const mainPopup_OuterContainer = document.getElementById("main-popup");
const mainPopup_InnerContainer = document.getElementById("main-popup-container");

// const mainPopupLanding = document.getElementById("main-popup-landing");
// const mainPopupRandomiser = document.getElementById("main-popup-randomiser");

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
function chooseOne(){
    const coffeeRandomiser = document.getElementById("coffee-randomiser");
    const coffeePlaces = document.getElementById("coffee-places");
    
    coffeeRandomiser.addEventListener('click', function(){
        mainPopup_InnerContainer.innerHTML = '';
        mainPopup_randomiser_backBtn();
        mainPopup_randomiser();
    })

    coffeePlaces.addEventListener('click', function(){
        // mainPopup_OuterContainer.innerHTML = "";
        mainPopup_OuterContainer.style.display = "none";
    })
}

// insert 'back' button only on the landing page popup, not the nav link popup
function mainPopup_randomiser_backBtn(){
    const backBtn = document.createElement("div");
    backBtn.class = "back-to-main";
    backBtn.innerHTML = `<div class="back-to-main">back</div>`;
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
                                                    <img src="images/coffee-beans.png" alt="">
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
        
        indivShopName();

        goToShopLocation();
        anotherRec();
        backToMain_btn();
    }, 0);
}



// get a random shop to recommend user
function indivShopName(){
    let shopNumber = Math.round(Math.random() * 11);

    const shopName = document.getElementById("shopName");
    const shopAddress = document.getElementById("shopAddress");

    shopName.innerText = coffeePlacesList[shopNumber].name;

    shopAddress.innerHTML = `${coffeePlacesList[shopNumber].location.address}`
    // only insert second line of address if it exists
    if(coffeePlacesList[shopNumber].location.address_extended != undefined){
        shopAddress.innerHTML += `<br>${coffeePlacesList[shopNumber].location.address_extended}`
    } else{
        shopAddress.innerHTML += ``;
    }
    shopAddress.innerHTML += `<br>${coffeePlacesList[shopNumber].location.locality} ${coffeePlacesList[shopNumber].location.postcode}`;
}

// closes the popup and leads user to the shop's coordinates on the map
function goToShopLocation(){
    const goToShop = document.getElementsByClassName("btn-green")[0];
    goToShop.addEventListener('click', function(){
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
    // anotherOne = document.getElementsByClassName("btn-red");

    // console.log(anotherOne.length)
    // if(anotherOne.length == 1){
    //     const backtoMain = document.getElementById("back-to-main");                                    
    //     backtoMain.addEventListener('click', function(){
    //         mainPopup();
    //     })
    // } else{
    //     backtoMain.removeEventListener('click', function(){
    //         mainPopup();
    //     })
    // }

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


coffeePlaces();

let coffeePlacesList;
// let indivShopName;

async function coffeePlaces() {
    let response = await axios.get("js/coffee-places-50.json");
    coffeePlacesList = response.data.results;
    console.log(coffeePlacesList);
    
    // for(shop of coffeePlacesList){
    //     indivShopName = shop.name;
    //     // console.log(indivShopName)
    // }
}

// coffeePlacesList[0].name