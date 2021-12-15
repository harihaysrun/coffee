let coffeePlacesList;

async function generate(query, near){

    let response = await axios.get('https://api.foursquare.com/v2/venues/search', {
        params: {
            'll': '1.3521,103.8198',
            'client_id': 'RG1YLZYPE3WKDMPDD1XW34GQ2C4JGITBH3AH2WWD5KL5ZAEZ',
            'client_secret': 'RWNKFGT3VXLSBBP0MUL55FV3FXTS4IFXBV20QBOGMV4XFNEY',
            'v': '20211213',
            'query': query,
            'near': near + ',Singapore',
            'limit': '50',
            'radius': '2500'
        }
    })

    return response.data.response.venues;
}

let near ;
async function generateList(near){
    let queries = ['kopi', 'coffee', 'cafe', 'bistro'];
    let randomQuery;
    let query;
    for(let i=0; i<queries.length; i++){
        randomQuery = Math.floor(Math.random() * queries.length);
    }
    // console.log("queries.length: " + queries.length)
    query = queries[randomQuery];

    coffeePlacesList = await generate(query, near);
    
    return coffeePlacesList;
}

async function getCoffeeType(){

    let coffeeTypeResponse = await axios.get("js/coffee-type.json");
    let coffeeType = coffeeTypeResponse.data.coffee_type;

    return coffeeType;
}