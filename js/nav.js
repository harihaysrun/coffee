const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.getElementById("hm-dropdown");
const indivNav = document.getElementsByClassName("indiv-nav");
const mobileCoffeeRandomiser =document.getElementsByClassName("indiv-nav")[0];

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

mobileCoffeeRandomiser.addEventListener("click", function(){

    console.log("clicked on mobileCoffeeRandomiser")

    mainPopup_OuterContainer.style.display = "block";
    mainPopup_OuterContainer.innerHTML = "";

    // mainPopup();
})