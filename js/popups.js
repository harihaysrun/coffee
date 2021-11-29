const mainPopup = document.getElementById("main-popup");
const mainPopupContainer = document.getElementById("main-popup-container");

const coffeeRandomiser = document.getElementById("coffee-randomiser");
const coffeePlaces = document.getElementById("coffee-places");

coffeeRandomiser.addEventListener('click', function(){
    mainPopupContainer.innerHTML = 'hi';
})

coffeePlaces.addEventListener('click', function(){
    mainPopup.style.display = "none";
})