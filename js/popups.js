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
    mainPopupRandomiser.innerHTML = `<span id="back-to-main">back</span>
                                    <p>HI</p>`
    mainPopup_InnerContainer.appendChild(mainPopupRandomiser);

    backToMain_btn();
}

function chooseOne(){
    const coffeeRandomiser = document.getElementById("coffee-randomiser");
    const coffeePlaces = document.getElementById("coffee-places");
    
    coffeeRandomiser.addEventListener('click', function(){
        mainPopup_randomiser()
    })

    coffeePlaces.addEventListener('click', function(){
        mainPopup_OuterContainer.style.display = "none";
    })
}

function backToMain_btn(){
    const backtoMain = document.getElementById("back-to-main");                                    
    backtoMain.addEventListener('click', function(){
        mainPopup();
    })
}