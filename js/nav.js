const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.getElementById("hm-dropdown");
const indivNav = document.getElementsByClassName("indiv-nav");
const mobileCoffeeRandomiser =document.getElementsByClassName("indiv-nav")[0];
const desktopCoffeeRandomiser =document.getElementsByClassName("desktop-nav")[0];

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
    mainPopup_OuterContainer.style.display = "flex";
    mainPopup_InnerContainer.innerHTML = '';
    mainPopup_randomiser();
}