let coffeePlacesList;

async function generate(query, near){
    // fsq3pYjput0x4EnKxsOzkX0RCtfoOdMDOGRK2FU+ZGgoROc=
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
        randomQuery = Math.floor(Math.random() * 4);
    }
    query = queries[randomQuery];

    // console.log(query)
    // console.log('near: '+ near)

    coffeePlacesList = await generate(query, near);

    // console.log(coffeePlacesList)
    
    return coffeePlacesList;
}