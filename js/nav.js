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

    document.getElementsByClassName("hm")[0].classList.toggle('hm-close');
    document.getElementsByClassName("hm")[1].classList.toggle('hm-close');
    document.getElementsByClassName("hm")[2].classList.toggle('hm-close');


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
    
    // mainPopup_OuterContainer.classList.remove("fade-out");
    mainPopup_OuterContainer.classList.add("fade-in");

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

            // mainPopup_OuterContainer.classList.remove("fade-in");
            // mainPopup_OuterContainer.classList.add("fade-out");

            mainPopup_OuterContainer.classList.remove('onlyHistoryPopup');
            mainPopup_OuterContainer.classList.remove('onlyHistoryPopup-slideIn');
            mainPopup_OuterContainer.style = "right:0";

            mainPopup_OuterContainer.innerHTML = '';
            mainPopup_InnerContainer.innerHTML = '';

            // mainPopup_OuterContainer.classList.remove("fade-in");
            // mainPopup_OuterContainer.classList.add("fade-out");
            // setTimeout(function(){
                mainPopup_OuterContainer.style.display = "none";
            //     mainPopup_OuterContainer.style.pointerEvents = "none";
            // },300)
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

    mainPopup_OuterContainer.classList.add("fade-in");

    mainPopup_OuterContainer.classList.add('onlyHistoryPopup');    
    // mainPopup_OuterContainer.classList.remove("fade-out");
    // console.log(window.innerWidth);

    // mainPopup_OuterContainer.style.display = "";
    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.style.backgroundColor = "white";
    mainPopup_OuterContainer.innerHTML = `<div class="history-header">
                                            <h1>My Bookmarks</h1>
                                            <span>Refreshing the window will remove all bookmarks</span>
                                        </div>
                                        <div id="history-list">
                                            <div id="search-bar-container">
                                                <input id="search-bar" type="text" placeholder="Search"/>
                                                <button id="search-bookmarks"><i class="fas fa-search"></i></button>
                                                <button id="reset-bookmarks"><i class="fas fa-history"></i></button>
                                            </div>
                                            <div id="history-list-box"></div>
                                        </div>`

    console.log("height of history header" + document.getElementsByClassName("history-header")[0].offsetHeight);
    const historyHeaderHeight = document.getElementsByClassName("history-header")[0].offsetHeight;

    const historyListHeight = document.getElementById("history-list");
    historyListHeight.style.top = historyHeaderHeight + "px";
    historyListHeight.style.height = "calc(100% - " + historyHeaderHeight + "px)";
    // console.log(historyListHeight)

    setTimeout(function(){
        mainPopup_OuterContainer.classList.add('onlyHistoryPopup-slideIn');
        // mainPopup_OuterContainer.style.transform = "translateX(0px);";
        mainPopup_OuterContainer.style.transition = "all 0.2s ease-in";
    }, 0)
    // 
    console.log("historyList.length: " + historyList.length)
    for(let i=0; i<historyList.length; i++){
        console.log(historyList[i])
        document.getElementById("history-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                <h4>${historyList[i].shopName}</h4>
                                                                <small>${historyList[i].shopAddress}</small>
                                                                </div>`;
        
        // const bookmarkedShop = document.querySelectorAll('.bookmarked');


        // const bookmarkedShop = document.createElement("div");
        // bookmarkedShop.className = "indiv-result"
        // bookmarkedShop.classList.add('bookmarked');
        // bookmarkedShop.innerHTML = `<h4>${historyList[i].shopName}</h4>
        //                             <small>${historyList[i].shopAddress}</small>`;
        // document.getElementById("history-list").appendChild(bookmarkedShop);

        // bookmarkedShop.addEventListener("click", function(){
        //     // console.log(historyList[i])
        //     console.log("coordinates: " + historyList[i].shopCoordinatesLt + historyList[i].shopCoordinatesLg)
        //     map.flyTo([historyList[i].shopCoordinatesLt, historyList[i].shopCoordinatesLg], 20);
        // })


        // for (let shop of bookmarkedShop){
        //     shop.addEventListener("click", function(){
        //         console.log(historyList[i])
        //         console.log("coordinates: " + historyList[i].shopCoordinatesLt + historyList[i].shopCoordinatesLg)
        //         map.flyTo([historyList[i].shopCoordinatesLt, historyList[i].shopCoordinatesLg], 20);
        //     })
        // }
    
        // const bookmarkedShop = document.querySelectorAll('.bookmarked');
        // for (x=0; x<bookmarkedShop.length; x++){
        //     bookmarkedShop[x].addEventListener("click", function(){
        //         console.log(historyList[i])
        //         console.log("coordinates: " + historyList[i].shopCoordinatesLt + historyList[i].shopCoordinatesLg)
        //         map.flyTo([historyList[i].shopCoordinatesLt, historyList[i].shopCoordinatesLg], 20);
        //     })
        // }

    }


    // search for fav shop
    document.getElementById("search-bookmarks").addEventListener("click", function(){
        let searchingFor = document.getElementById("search-bar").value;
        document.getElementById("search-bar").value = '';
        console.log("search for ... " + searchingFor);
        document.getElementById("history-list-box").innerHTML = "";

        for(let i=0;i<historyList.length; i++){

            console.log(historyList[i].shopName)
            console.log(searchingFor)

            // let shopName = historyList[i].shopName;
            // let lowerCase = shopName.toLowercase();

            console.log("lowercase " + historyList[i].shopName.toLowerCase())
            if(historyList[i].shopName.toLowerCase().includes(searchingFor.toLowerCase())){
                console.log("historyList[i].shopName: " + historyList[i].shopName)

                document.getElementById("history-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                            <h4>${historyList[i].shopName}</h4>
                                                                            <small>${historyList[i].shopAddress}</small>
                                                                            </div>`;
            }
        }

        // document.getElementById("history-list-box").innerHTML += "";
    })

    document.getElementById("reset-bookmarks").addEventListener("click", function(){


        document.getElementById("history-list-box").innerHTML = "";

        for(let i=0; i<historyList.length; i++){
            document.getElementById("history-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                    <h4>${historyList[i].shopName}</h4>
                                                                    <small>${historyList[i].shopAddress}</small>
                                                                    </div>`;

        }
    })

    closeButton();

}