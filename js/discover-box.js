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

    const dialogBox = document.createElement("div");
    dialogBox.className = "change-success";
    dialogBox.innerHTML = `Changing to <b>${regionDropdown.value}...</b>`
    document.body.appendChild(dialogBox);

    coffeePlacesList = await generateList(regionDropdown.value);
    generateMap();

    setTimeout(function(){
        dialogBox.innerHTML = `You are now viewing coffee shops in <b>${regionDropdown.value}!</b>`
    }, 800)


    setTimeout(function(){
        // dialogBox.classList.add("dialog-box-slideout")
        // dialogBox.style.display = "none";
        dialogBox.style = "transform:translateY(-100px); transition: all 0.3s ease-out";
    }, 2500)

    // discoverBox.classList.remove("box-slideup")
    // discoverBox.style.transition = "all 0.5s ease-in";
})