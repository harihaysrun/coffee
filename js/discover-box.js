const arrowUpBtn = document.getElementById("arrow-up");
const discoverBox = document.getElementById("discover-box");
const arrowIcon = document.getElementById("arrow-icon");
const regionDropdown = document.getElementById("change-region");

arrowUpBtn.addEventListener("click", function(){
    discoverBox.classList.toggle("box-slideup")
    discoverBox.style.transition = "all 0.5s ease-in";
    arrowUpBtn.classList.toggle("arrow-spin");
    arrowUpBtn.style.transition = "all 0.2s linear";
})

let regions = [
    'Bishan',
    'Bukit Merah',
    'Bukit Timah',
    'Geylang',
    'Kallang',
    'Marine Parade',
    'Newton',
    'Novena',
    'Orchard',
    'Outram',
    'Queenstown',
    'Rochor',
    'Tanglin',
    'Toa Payoh',
    'Bedok',
    'Changi',
    'Pasir Ris',
    'Paya Lebar',
    'Tampines',
    'Lim Chu Kang',
    'Sembawang',
    'Woodlands',
    'Yishun',
    'Ang Mo Kio',
    'Hougang',
    'Punggol',
    'Seletar',
    'Sengkang',
    'Serangoon',
    'Boon Lay',
    'Bukit Batok',
    'Bukit Panjang',
    'Choa Chu Kang',
    'Clementi',
    'Jurong East',
    'Jurong West',
    'Pioneer',
    'Tengah',
    'Tuas'
]
// console.log("regions.length: " + regions.length);

for(let i=0; i < regions.length; i++){
    let option = document.createElement("option");
    option.value = regions[i];
    option.innerHTML = regions[i];
    regionDropdown.appendChild(option);
}

regionDropdown.addEventListener("change", async function(){
    // console.log("clicked on " + regionDropdown.value)
    // location = regionDropdown.value;
    const dialogBox = document.createElement("div");
    dialogBox.className = "change-success";
    dialogBox.innerHTML = `Changing to <b>${regionDropdown.value}...</b>`
    document.body.appendChild(dialogBox);

    coffeePlacesList = await generateList(regionDropdown.value);
    generateMap();

    setTimeout(function(){
        dialogBox.innerHTML = `You are now viewing coffee shops near <b>${regionDropdown.value}!</b>`
    }, 800)


    setTimeout(function(){

        dialogBox.style = "transform:translateY(-200px); transition: all 0.3s ease-out";
        setTimeout(function(){
            document.body.removeChild(dialogBox);
        }, 100)
    }, 2500)

})