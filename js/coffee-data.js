// async function search(lat, lng, query) {
//     // setup search parameters
//     let ll = lat + "," + lng;
//     let response = await axios.get('https://api.foursquare.com/v3/places/search', {
//         params: {
//             'll': ll,
//             'client_id': "MDFG0EAFLCZBNSAA0RRUAJQKJDI3E0CZZ1052PZ2XNGF1EIS",
//             'client_secret': "EDMSUSZKMGPCHLPY2MRRALHZSVG4NLZOB0KGEBKFMAF3Y0V3",
//             'v': '20211205',
//             'query': query
//         }
//     })
//     return response.data;
// }

// async function coffeePlaces() {
//     let response = await axios.get('https://api.foursquare.com/v3/places/fsq_id', {
//         params: {
//             'll': ll,
//             'client_id': "MDFG0EAFLCZBNSAA0RRUAJQKJDI3E0CZZ1052PZ2XNGF1EIS",
//             'client_secret': "EDMSUSZKMGPCHLPY2MRRALHZSVG4NLZOB0KGEBKFMAF3Y0V3",
//             'v': '20211205',
//             'query': query,
//             'near': 'Singapore'
//         }
//     })
//     return response.data;
// }

// window.addEventListener('load', async function(){
//     // let shops = document.querySelector('#search-input').value;
//     // let center = map.getBounds().getCenter();
//     let response = await coffeePlaces();
//     console.log(response)
// });

// coffeePlaces();

// async function coffeePlaces() {
    // const params = {
    //     // 'll': ll,
    //     client_id: "MDFG0EAFLCZBNSAA0RRUAJQKJDI3E0CZZ1052PZ2XNGF1EIS",
    //     client_secret: "EDMSUSZKMGPCHLPY2MRRALHZSVG4NLZOB0KGEBKFMAF3Y0V3",
    //     v: "20211205",
    //     query: "coffee",
    //     near: "Singapore"
    // }

    // await axios.get('https://api.foursquare.com/v3/venues/explore', new URLSearchParams(params))
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(error => {
    //     console.log("error!" + error)
    // })

    
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       Authorization: 'fsq3Y8AfRRmU5KzWq4dY/BpVAmdNtBb5RSGr8Pq9imUKERg='
    //     }
    //   };
      
        // let response = await axios.get('https://api.foursquare.com/v3/places/search?query=coffee&ll=1.3521%2C103.8198&limit=50', options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

        // let response = await axios.get('https://api.foursquare.com/v3/places/search', {
        //     params: {
        //         'query': 'coffee',
        //         'll': '1.3521,103.8198',
        //         'limit': '50',
        //         'client_id': 'MDFG0EAFLCZBNSAA0RRUAJQKJDI3E0CZZ1052PZ2XNGF1EIS',
        //         'client_secret': 'EDMSUSZKMGPCHLPY2MRRALHZSVG4NLZOB0KGEBKFMAF3Y0V3',
        //         'Authorization': 'fsq3Y8AfRRmU5KzWq4dY/BpVAmdNtBb5RSGr8Pq9imUKERg=',
        //         'v': '20211205',
        //     }
        // })

        // let response = await axios.get('https://api.foursquare.com/v3/places/search' , {
        //     params: {
        //         'query': 'coffee',
        //         'll': '1.3521,103.8198',
        //         'limit': '50',
        //         'client_id': 'MDFG0EAFLCZBNSAA0RRUAJQKJDI3E0CZZ1052PZ2XNGF1EIS',
        //         'client_secret': 'EDMSUSZKMGPCHLPY2MRRALHZSVG4NLZOB0KGEBKFMAF3Y0V3',
        //         'headers': {
        //             'Authorization': 'fsq3Y8AfRRmU5KzWq4dY/BpVAmdNtBb5RSGr8Pq9imUKERg='
        //         },
        //         'v': '20211205'
        //     }
        // })
// }


// coffeePlaces();

// let coffeePlacesList;

// async function coffeePlaces() {
//     let response = await axios.get("js/coffee-places-50.json")
//         // .then(response =>
//         //     console.log(response.data.results)
//         // )
//         // .then(response =>
//                 // coffeePlacesList.push(response.data.results)
//         // )
//         // .catch(error => {
//         //     console.error("error!" + error)
//         // })
    

//     // console.log(coffeePlacesList)
//     coffeePlacesList = response.data.results;
//     console.log(coffeePlacesList);
// }


// coffees();

let coffeePlacesList;
let coffeeType;
const coffeePlacesList_Array = new Array();
var coffeePlacesList_Array2 = [];
let eachshop;
let wholeArray
// let coffeePlacesList_Array;
var treasureHunt;

// export default
async function coffees() {
    let response = await axios.get("js/coffee-places-50.json");
    coffeePlacesList = response.data.results;

    // console.log(coffeePlacesList)

    // for(let i=0 ; i<coffeePlacesList.length; i++){
    //     eachshop = coffeePlacesList[i];
    //     // console.log(eachshop)
    //     coffeePlacesList_Array.push(eachshop);
    //     // coffeePlacesList_Array2.set({'name': eachshop.name}, {'location': [eachshop.geocodes.main.latitude, eachshop.geocodes.main.latitude]});
    // }
    // coffeePlacesList_Array = "";
    // console.log(coffeePlacesList)

    // const coffeePlacesList_Array;
    // for(let i=0 ; i<coffeePlacesList.length; i++){
    //     eachshop = JSON.parse(coffeePlacesList[i]);
    //     coffeePlacesList_Array[i] = eachshop;
    // }

    // const newnew = Object.entries(coffeePlacesList);
    // wholeArray = Object.keys(coffeePlacesList).map(key => coffeePlacesList[key]);
    // coffeePlacesList_Array.push(...wholeArray);
    // console.log(wholeArray)
    // console.log(coffeePlacesList_Array)

    // coffeePlacesList_Array = coffeePlacesList;
    // coffeePlacesList_Array.push(...coffeePlacesList)

    // console.log(coffeePlacesList_Array)
    // console.log(coffeePlacesList_Array);
    // coffeePlacesList_Array = "bye";
    // console.log("in function: " + coffeePlacesList_Array);

    // var treasureHuntString = JSON.stringify(coffeePlacesList)
    // treasureHunt = JSON.parse(treasureHuntString);
    // console.log(treasureHunt)

    // console.log(coffeePlacesList);
    
    let response2 = await axios.get("js/coffee-type.json");
    coffeeType = response2.data.coffee_type;
    // console.log(coffeeType);

}

coffees();