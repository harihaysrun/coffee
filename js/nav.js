const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.getElementById("hm-dropdown");
const indivNav = document.getElementsByClassName("indiv-nav");
const mobileCoffeeRandomiser = document.getElementsByClassName("indiv-nav")[0];
const desktopCoffeeRandomiser = document.getElementsByClassName("desktop-nav")[0];

const mobileBookmarkBtn = document.getElementsByClassName("indiv-nav")[1];
const desktopBookmarkBtn = document.getElementsByClassName("desktop-nav")[1];


// click to see dropdown mobile hamburger menu
hamburgerMenu.addEventListener("click", function(){
    dropdownMenu.classList.toggle("mobile-menu-appear");
    dropdownMenu.style.transition = "all 0.2s linear";

    document.getElementsByClassName("hm")[0].classList.toggle('hm-close');
    document.getElementsByClassName("hm")[1].classList.toggle('hm-close');
    document.getElementsByClassName("hm")[2].classList.toggle('hm-close');

    // console.log(indivNav.length)
})

// user clicks on the link in the mobile hamburger menu
mobileCoffeeRandomiser.addEventListener("click", function(){
    // console.log("clicked on mobileCoffeeRandomiser");
    randomiserPopup();
})

// user clicks on the link in the desktop nav menu
desktopCoffeeRandomiser.addEventListener("click", function(){
    // console.log("clicked on desktopCoffeeRandomiser");
    randomiserPopup();
})

// repeated steps put into same function
function randomiserPopup(){
    
    mainPopup_OuterContainer.classList.add("fade-in");

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

            mainPopup_OuterContainer.classList.remove('onlyBookmarksPopup');
            mainPopup_OuterContainer.classList.remove('onlyBookmarksPopup-slideIn');
            mainPopup_OuterContainer.style = "right:0";

            mainPopup_OuterContainer.innerHTML = '';
            mainPopup_InnerContainer.innerHTML = '';

            mainPopup_OuterContainer.style.display = "none";
        })
    } 

}

mobileBookmarkBtn.addEventListener("click", function(){
    bookmarksPopup();
})

desktopBookmarkBtn.addEventListener("click", function(){

    // mainPopup_OuterContainer.style = "transform: translateX(500px)";
    bookmarksPopup();
})


function bookmarksPopup(){

    mainPopup_OuterContainer.classList.add("fade-in");

    mainPopup_OuterContainer.classList.add('onlyBookmarksPopup');    
    // mainPopup_OuterContainer.classList.remove("fade-out");
    // console.log(window.innerWidth);

    // mainPopup_OuterContainer.style.display = "";
    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.style.backgroundColor = "white";
    mainPopup_OuterContainer.innerHTML = `<div class="bookmarks-header">
                                            <h1>My Bookmarks</h1>
                                            <span>Refreshing the window will remove all bookmarks</span>
                                        </div>
                                        <div id="bookmarks-list">
                                            <div id="search-bar-container">
                                                <input id="search-bar" type="text" placeholder="Search"/>
                                                <button id="search-bookmarks" title="Press to search"><i class="fas fa-search"></i></button>
                                                <button id="reset-bookmarks" title="Reset search"><i class="fas fa-history"></i></button>
                                            </div>
                                            <div id="bookmarks-list-box"></div>
                                        </div>`

    // console.log("height of bookmarks header" + document.getElementsByClassName("bookmarks-header")[0].offsetHeight);
    const bookmarksHeaderHeight = document.getElementsByClassName("bookmarks-header")[0].offsetHeight;

    const bookmarksListHeight = document.getElementById("bookmarks-list");
    bookmarksListHeight.style.top = bookmarksHeaderHeight + "px";
    bookmarksListHeight.style.height = "calc(100% - " + bookmarksHeaderHeight + "px)";
    // console.log(bookmarksListHeight)

    setTimeout(function(){
        mainPopup_OuterContainer.classList.add('onlyBookmarksPopup-slideIn');
        // mainPopup_OuterContainer.style.transform = "translateX(0px);";
        mainPopup_OuterContainer.style.transition = "all 0.2s ease-in";
    }, 0)
    // 
    // console.log("bookmarksList.length: " + bookmarksList.length)
    for(let i=0; i<bookmarksList.length; i++){
        // console.log(bookmarksList[i])
        document.getElementById("bookmarks-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                <h4>${bookmarksList[i].shopName}</h4>
                                                                <span>${bookmarksList[i].shopAddress}</span>
                                                                </div>`;

    }


    // search for fav shop
    document.getElementById("search-bookmarks").addEventListener("click", function(){
        let searchingFor = document.getElementById("search-bar").value;
        document.getElementById("search-bar").value = '';
        // console.log("search for ... " + searchingFor);
        document.getElementById("bookmarks-list-box").innerHTML = "";

        for(let i=0;i<bookmarksList.length; i++){

            // console.log("lowercase " + bookmarksList[i].shopName.toLowerCase());

            if(bookmarksList[i].shopName.toLowerCase().includes(searchingFor.toLowerCase())){
                // console.log("bookmarksList[i].shopName: " + bookmarksList[i].shopName)
                document.getElementById("bookmarks-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                            <h4>${bookmarksList[i].shopName}</h4>
                                                                            <span>${bookmarksList[i].shopAddress}</span>
                                                                            </div>`;

                // console.log("results found")
                                                            
            }
        }

    })

    // reset search
    document.getElementById("reset-bookmarks").addEventListener("click", function(){

        document.getElementById("bookmarks-list-box").innerHTML = "";

        for(let i=0; i<bookmarksList.length; i++){
            document.getElementById("bookmarks-list-box").innerHTML += `<div class="indiv-result bookmarked">
                                                                    <h4>${bookmarksList[i].shopName}</h4>
                                                                    <span>${bookmarksList[i].shopAddress}</span>
                                                                    </div>`;

        }
    })

    closeButton();

}