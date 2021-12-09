const arrowUpBtn = document.getElementById("arrow-up");
const discoverBox = document.getElementById("discover-box");
const arrowIcon = document.getElementById("arrow-icon");
const regionDropdown = document.getElementById("change-region");

arrowUpBtn.addEventListener("click", function(){
    // discoverBox.style.bottom = "0";
    // discoverBox.style.transition = "0.5s ease-in";
    // discoverBox.style.transform = "-77vh";
    discoverBox.classList.toggle("box-slideup")
    discoverBox.style.transition = "all 0.5s ease-in";
    arrowUpBtn.classList.toggle("arrow-spin");
    arrowUpBtn.style.transition = "all 0.2s linear";
})

let regions = ['Bedok', 'Tampines', 'Ang Mo Kio', 'Jurong', 'Geylang', 'Toa Payoh']
console.log("regions.length: " + regions.length)

// <option value="1">One</option>

for(let i=0; i < regions.length; i++){
    let option = document.createElement("option");
    option.value = regions[i];
    option.innerHTML = regions[i];
    regionDropdown.appendChild(option);
}

regionDropdown.addEventListener("change", async function(){
    console.log("clicked on " + regionDropdown.value)
    // location = regionDropdown.value;
    coffeePlacesList = await generateList(regionDropdown.value);
    generateMap();
    // discoverBox.classList.remove("box-slideup")
    // discoverBox.style.transition = "all 0.5s ease-in";
})