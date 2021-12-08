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


function historyPopup(){

    mainPopup_OuterContainer.classList.add('onlyHistoryPopup');
    // console.log(window.innerWidth);

    // mainPopup_OuterContainer.style.display = "";
    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.style.backgroundColor = "white";
    mainPopup_OuterContainer.innerHTML = `<div class="history-header">
                                            <h1>My Bookmarks</h1>
                                            <small>Browser based. Refreshing the window will cause bookmarks to be gone</small>
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
        console.log("historyList[i] : " + historyList[i])
        document.getElementById("history-list").innerHTML += `<div class="indiv-result">${historyList[i]}</div>`;
    }

    closeButton();

}