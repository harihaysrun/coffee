const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.getElementById("hm-dropdown");
const indivNav = document.getElementsByClassName("indiv-nav");
const mobileCoffeeRandomiser = document.getElementsByClassName("indiv-nav")[0];
const desktopCoffeeRandomiser = document.getElementsByClassName("desktop-nav")[0];

const mobileHistoryBtn = document.getElementsByClassName("indiv-nav")[1];
const desktopHistoryBtn = document.getElementsByClassName("desktop-nav")[1];


// click to see dropdown mobile hamburger menu
hamburgerMenu.addEventListener("click", function(){
    dropdownMenu.classList.toggle("mobile-menu-appear");
    dropdownMenu.style.transition = "all 0.2s linear";

    console.log(indivNav.length)

    // indivNav.classList.toggle("mobile-menu-appear");

    // for (nav of indivNav){
    //     setTimeout(function(){
    //         nav.classList.toggle("mobile-menu-appear")
    //     }, 300);
    // }
    // for(i=0; i<indivNav.length; i++){
    //     indivNav = i;
    //     indivNav.classList.toggle("mobile-menu-appear");
    // }
})

// user clicks on the link in the mobile hamburger menu
mobileCoffeeRandomiser.addEventListener("click", function(){
    console.log("clicked on mobileCoffeeRandomiser");
    randomiserPopup();
})

// user clicks on the link in the desktop nav menu
desktopCoffeeRandomiser.addEventListener("click", function(){
    console.log("clicked on desktopCoffeeRandomiser");
    randomiserPopup();
})

// repeated steps put into same function
function randomiserPopup(){

    // mainPopup_OuterContainer.style = "width:100%";
    mainPopup_OuterContainer.appendChild(mainPopup_InnerContainer);
    mainPopup_OuterContainer.style.display = "flex";
    mainPopup_OuterContainer.style.backgroundColor = "#482C05";
    mainPopup_InnerContainer.innerHTML = '';
    mainPopup_randomiser();
    closeButton();

}

function closeButton(){

    // create a 'close' button
    const closePopup = document.createElement("div");
    closePopup.id = "close-popup";
    closePopup.innerHTML = ` <div id="close-popup">
                                <i class="fas fa-times"></i>
                            </div>`
    mainPopup_OuterContainer.appendChild(closePopup);

    closePopupBox();
    function closePopupBox(){
        closePopup.addEventListener("click", function(){
            mainPopup_OuterContainer.classList.remove('onlyHistoryPopup');
            mainPopup_OuterContainer.classList.remove('onlyHistoryPopup-slideIn');
            mainPopup_OuterContainer.style = "right:0";
            mainPopup_OuterContainer.innerHTML = '';
            mainPopup_InnerContainer.innerHTML = '';
            mainPopup_OuterContainer.style.display = "none";
        })
    } 

}

mobileHistoryBtn.addEventListener("click", function(){
    historyPopup();
})

desktopHistoryBtn.addEventListener("click", function(){

    // mainPopup_OuterContainer.style = "transform: translateX(500px)";
    historyPopup();
})


// function showHistoryList(){
//     console.log("hello!")
//     onetwothree()
// }

function historyPopup(){

    mainPopup_OuterContainer.classList.add('onlyHistoryPopup');
    // console.log(window.innerWidth);

    // mainPopup_OuterContainer.style.display = "";
    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.style.backgroundColor = "white";
    mainPopup_OuterContainer.innerHTML = `<div class="history-header">
                                            <h1>History</h1>
                                        </div>
                                        <div id="history-list"></div>`

    setTimeout(function(){
        mainPopup_OuterContainer.classList.add('onlyHistoryPopup-slideIn');
        // mainPopup_OuterContainer.style.transform = "translateX(0px);";
        mainPopup_OuterContainer.style.transition = "all 0.2s ease-in";
    }, 0)
    // 
    console.log("historyList.length: " + historyList.length)
    for(let i=0; i<historyList.length; i++){
        console.log("historyList[i] : " + historyList[i].outerHTML)
        document.getElementById("history-list").innerHTML += historyList[i].outerHTML;
    }

    // if(window.innerWidth > 992){

        // // create entirely new mainpopup box
        // const desktopHistory = document.createElement("div");
        // desktopHistory.id = "desktop-history";
        // desktopHistory.style = "position:absolute; right:-550px;"
        // desktopHistory.innerHTML = `<div id="close-popup">
        //                                 <i class="fas fa-times"></i>
        //                             </div>
        //                             <div class="history-header">
        //                                 <h1>History</h1>
        //                             </div>`
        // setTimeout(function(){
        //     desktopHistory.style.transform = "translateX(-500px)"
        //     desktopHistory.style.transition = "all 1s ease-in";
        //     document.body.appendChild(desktopHistory);
        // }, 0);

        // mainPopup_OuterContainer.classList.add('onlyHistoryPopup');
        // mainPopup_OuterContainer.style = "background-color:white;width: 500px; right:0;";


    // }

    closeButton();

}