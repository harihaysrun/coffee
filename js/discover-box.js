const arrowUpBtn = document.getElementById("arrow-up");
const discoverBox = document.getElementById("discover-box");
const arrowIcon = document.getElementById("arrow-icon");

arrowUpBtn.addEventListener("click", function(){
    // discoverBox.style.bottom = "0";
    // discoverBox.style.transition = "0.5s ease-in";
    // discoverBox.style.transform = "-77vh";
    discoverBox.classList.toggle("box-slideup")
    discoverBox.style.transition = "all 0.5s ease-in";
    arrowUpBtn.classList.toggle("arrow-spin");
    arrowUpBtn.style.transition = "all 0.2s linear";
})