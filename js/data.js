// let coffeePlacesList;

async function generate(query, near){
    
    let response = await axios.get('https://api.foursquare.com/v2/venues/search', {
        params: {
            'll': '1.3521,103.8198',
            client_id: 'RG1YLZYPE3WKDMPDD1XW34GQ2C4JGITBH3AH2WWD5KL5ZAEZ',
            client_secret: 'RWNKFGT3VXLSBBP0MUL55FV3FXTS4IFXBV20QBOGMV4XFNEY',
            'v': '20211207',
            query: query,
            near: near,
            limit: '50',
            // 'country': 'Singapore'
        },
        headers: {Accept: 'application/json'}
    })

    // let responseDetails = await axios.get('https://api.foursquare.com/v2/venues/', {
    //     params: {
    //         'venue_id': venueID,
    //         client_id: 'RG1YLZYPE3WKDMPDD1XW34GQ2C4JGITBH3AH2WWD5KL5ZAEZ',
    //         client_secret: 'RWNKFGT3VXLSBBP0MUL55FV3FXTS4IFXBV20QBOGMV4XFNEY',
    //     },
    //     headers: {Accept: 'application/json'}
    // })

    // coffeePlacesList = response.data.response.venues;

    // console.log(response.data.response.venues)
    return response.data.response.venues;
}


async function generateList(){
    let queries = ['kopi', 'coffee', 'cafe', 'bistro'];
    let randomQuery;
    let query;
    for(let i=0; i<queries.length; i++){
        randomQuery = Math.floor(Math.random() * 4);
    }
    query = queries[randomQuery];
    console.log(query)
    // let query = "kopi";
    let near = "Singapore, Singapore"
    coffeePlacesList = await generate(query, near);
    console.log(coffeePlacesList)
    return coffeePlacesList;
}


// async function getVenueDetails(venueID){
    
//     let responseDetails = await axios.get('https://api.foursquare.com/v2/venues/', {
//         params: {
//             'venue_id': venueID,
//             client_id: 'RG1YLZYPE3WKDMPDD1XW34GQ2C4JGITBH3AH2WWD5KL5ZAEZ',
//             client_secret: 'RWNKFGT3VXLSBBP0MUL55FV3FXTS4IFXBV20QBOGMV4XFNEY',
//             'v': '20211207'
//         },
//         headers: {Accept: 'application/json'}
//     })

//     return responseDetails.data.response.venue;
// }

// async function onetwothree(){
//     await getVenueDetails("59033ecdb23dfa5f667d471e");
//     console.log(response)
// }

// onetwothree()