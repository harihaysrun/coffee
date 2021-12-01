const mainPopup_OuterContainer = document.getElementById("main-popup");
const mainPopup_InnerContainer = document.getElementById("main-popup-container");

// const mainPopupLanding = document.getElementById("main-popup-landing");
// const mainPopupRandomiser = document.getElementById("main-popup-randomiser");

mainPopup();

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

function mainPopup_randomiser(){
    mainPopup_InnerContainer.innerHTML = '';
    const mainPopupRandomiser = document.createElement("div");
    mainPopupRandomiser.id = "main-popup-randomiser";
    setTimeout(function(){ 
        mainPopupRandomiser.innerHTML = `<div id="back-to-main">back</div>
                                        <div id="randomiser-container">
                                            <span>How about a cup of...</span>
                                            <div id="coffee-and-shop">
                                                <div id="random-coffee">
                                                    <img src="images/coffee-beans.png" alt="">
                                                    <h2>Iced Americano</h2>
                                                </div>
                                                <span>from</span>
                                                <div id="random-shop">
                                                    <h2>Shop Name</h2>
                                                    <p>Shop Address</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="buttons">
                                            <button class="btn-green">Take me there!</button>
                                            <button class="btn-red">Give me another one</button>
                                        </div>`;
        mainPopup_InnerContainer.appendChild(mainPopupRandomiser);
        backToMain_btn();
        anotherRec();
        goToShopLocation();
    }, 0);
    }

function anotherRec(){
    const anotherOne = document.getElementsByClassName("btn-red")[0];
    anotherOne.addEventListener('click', function(){
        mainPopup_randomiser();
    })
}

function goToShopLocation(){
    const goToShop = document.getElementsByClassName("btn-green")[0];
    goToShop.addEventListener('click', function(){
        mainPopup_OuterContainer.innerHTML = "";
        mainPopup_OuterContainer.style.display = "none";
    })
}

function chooseOne(){
    const coffeeRandomiser = document.getElementById("coffee-randomiser");
    const coffeePlaces = document.getElementById("coffee-places");
    
    coffeeRandomiser.addEventListener('click', function(){
        mainPopup_randomiser()
    })

    coffeePlaces.addEventListener('click', function(){
        mainPopup_OuterContainer.innerHTML = "";
        mainPopup_OuterContainer.style.display = "none";
    })
}

function backToMain_btn(){
    const backtoMain = document.getElementById("back-to-main");                                    
    backtoMain.addEventListener('click', function(){
        mainPopup();
    })
}