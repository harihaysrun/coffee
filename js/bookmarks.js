const mobileBookmarkBtn = document.getElementsByClassName("indiv-nav")[1];
const desktopBookmarkBtn = document.getElementsByClassName("desktop-nav")[1];

mobileBookmarkBtn.addEventListener("click", function(){
    bookmarksPopup();
})

desktopBookmarkBtn.addEventListener("click", function(){
    bookmarksPopup();
})


function bookmarksPopup(){

    mainPopup_OuterContainer.classList.add('fade-in');
    mainPopup_OuterContainer.classList.add('onlyBookmarksPopup');    

    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.style.backgroundColor = "white";
    mainPopup_OuterContainer.innerHTML = `<div id="bookmarks-header">
                                            <h1>My Bookmarks</h1>
                                            <span>Refreshing window will remove all bookmarks</span>
                                        </div>
                                        <div id="search-bar-container">
                                            <input id="search-bar" type="text" placeholder="Search"/>
                                            <button id="search-bookmarks" title="Press to search"><i class="fas fa-search"></i></button>
                                            <button id="reset-bookmarks" title="Reset search"><i class="fas fa-history"></i></button>
                                        </div>
                                        <div id="bookmarks-list">
                                        </div>`;

    setTimeout(function(){
        mainPopup_OuterContainer.classList.add('onlyBookmarksPopup-slideIn');
        mainPopup_OuterContainer.style.transition = "all 0.2s ease-in";
    }, 0)


    const bookmarkListBox = document.getElementById("bookmarks-list");
    
    for(let i=0; i<bookmarksList.length; i++){
        bookmarkListBox.innerHTML += `<div class="indiv-result bookmarked">
                                                                <h4>${bookmarksList[i].shopName}</h4>
                                                                <span>${bookmarksList[i].shopAddress}</span>
                                                                </div>`;

    }


    // search for shop
    document.getElementById("search-bookmarks").addEventListener("click", function(){
        let searchingFor = document.getElementById("search-bar").value;
        // document.getElementById("search-bar").value = '';
        bookmarkListBox.innerHTML = "";

        for(let i=0;i<bookmarksList.length; i++){

            if(bookmarksList[i].shopName.toLowerCase().includes(searchingFor.toLowerCase())){
                bookmarkListBox.innerHTML += `<div class="indiv-result bookmarked">
                                                                            <h4>${bookmarksList[i].shopName}</h4>
                                                                            <span>${bookmarksList[i].shopAddress}</span>
                                                                            </div>`;                                                        
            }
        }

    })

    // reset search
    document.getElementById("reset-bookmarks").addEventListener("click", function(){

        bookmarkListBox.innerHTML = "";
        document.getElementById("search-bar").value = "";

        for(let i=0; i<bookmarksList.length; i++){
            bookmarkListBox.innerHTML += `<div class="indiv-result bookmarked">
                                                                    <h4>${bookmarksList[i].shopName}</h4>
                                                                    <span>${bookmarksList[i].shopAddress}</span>
                                                                    </div>`;

        }
    })

    closeButton();

}