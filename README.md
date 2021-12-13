# Where's my coffee?
Can't decide which coffee to drink?
<!-- Insert the iamge of the design across the 3 devices here -->


# Project name and summary
"What coffee should I drink today?" is a question I found myself asking rather frequently. Drinking the same coffee over and over again gets pretty mundane over time. On weekdays, cold brew. On weekends, cold brew again. Life won't be too interesting if I were to keep drinking the same coffee every day for the rest of my life.

This inspired me to start "Where's my coffee?", a randomiser that recommends users a type of coffee and shop, so that they can go on to explore that shop's menu or perhaps even make an order with them. There's more to life than just Starbucks and Coffee Bean...

<!-- Make sure to justify why the project should exist

Include a URL to the deployed version of the project -->




# UX/UI
<!-- User stories & acceptance criteria -->

<!-- Share wireframes links, mockups, diagrams etc. can be pushed to github or be places in separate PDF file as part of the repository

describe the considerations for the five planes of ui/ux, such as the choice of color & fonts, or information strategy for the structure plane. -->

## What I want to achieve with this application

As the site owner, I want to:
- Pre-set some search terms for the users so they won't have to do so (in this case, 'coffee', 'cafe', 'bistro')
- decide type of coffee to drink for the user
- introduce user to different types of coffee


Putting myself in the shoes of the end user, I would want to:
- easily check out coffee shops
- find interesting shops and add them to my bookmarks so that I won't have to search through the map again later on
- have a machine decide for me a drink I should try out
- UI that's pleasing to look at so it won't repel me/drive me away from using it


## Wireframes
It's important to start with the wireframes before moving on with the development.

**Flow/Sitemap**
<!-- sitemap pic here -->

**Inspiration**
Taking inspiration from <a href="">Hince</a>'s website, I decided to adopt the rounded navbar design.

Here are the wireframes I've done up, some of which have been omitted along the way as I worked on the codes: <a href="">link here</a>


**Responsive design features**
1. Mobile & Tab:
    - Hamburger menu for mobile & tablet views
    - A collapsible discover box due to the lack of screen real estate

2. Desktop:
    - Full nav bar for desktop view
    - Due to the design, only footer is visible on desktop
    - the curved navbar design is removed, but is implemented in the background
    - implementation of :hover styling in the css


## Colours
My choice of colours is very self-explanatory:
- Mainly hues of brown and beige to represent coffee and cream
- A tinge of desaturated green for my fellow matcha lovers out there
- and red to represent the dissatisfactory button/function
- The edges of the boxes have a border-radius of 15px, which is neither too rounded or sharp, to imitate the roundness of a coffee bean/cup

## Font choice
- Again, the key visual of my moodboard is roundedness. I wanted a font that portrays this well to match the overall look and feel
- Some fonts that were shortlisted:
    1. Inter
    2. Nunik???/Nunito
    3. Rubik º Decided to go with this because it's the perfect in between – not too sharp or rounded

## Icons
- Rather than using realistic images, I chose to use icons as they're simpler, and don't interfere/clash with the complicatedness/intricateness of the map
- Icons were either made on Illustrator or sourced from Flaticons and Fontawesome




# Project Complexity Matrix
| No. | Description | Implemented? Y/N |
|-----|-------------|------------------|
| 1 | Consume the GET endpoint of an API, or consume a CSV/JSON file | Yes <br> 1 foursquare API + 1 local JSON file |
| 2 | Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions | Yes |
| 3 | Modifying the CSS of DOM elements based on the user's actions | Yes |
| 4 | Use of 1D traversal of array | Yes |
| 5 | - |
| 6 | Each use of CSS layout technique (Bootstrap columns, flex box, grid) | Yes <br> flex box |
| 7 | Each possible search or filtering criteria in the user interface | Yes <br> Search box in bookmarks tab | 
| 8 | Each case of the map updating base on the user's actions | Yes <br> Map & markers reset when user changes regions |
| 9 | Each group of layers in the Leaflet map | Yes <br> 1 group |
| 10 | Each group of marker clustering | Yes <br> 1 marker clustering |
| 11 | Each type of custom marker (using images or custom behaviour) | Yes <br> Used coffee bean image, added a functional bookmark button inside of popup |




# Features
<!-- list down major features of the application, and also the algorithms you have used to implement those features. if there are any limitations or bugs, please describe them as well. if you have any features pending implementation, you can also take the opportunity to discuss them here -->

## Problems & limitations
**Limitations of Foursquare API**
- only 50 queries per session, which means that it's not possible to see the full list of coffee shops at one go
- Even though a specific region is chosen, shops from other areas(and even countries – Malaysia & Indonesia) show up
    - setting a radius in the parameters of the API call helped to narrow it down

**Leaflet marker not popping up automatically**
- couldn't get the markers to open automatically when clicking on the shop in the discover box
- added some instructions so that user know what to do

## Pending Implementions
- A form for user to submit a shop that's not on the list
- Setting up a database for the bookmarks so they will be stored somewhere and won't be gone once the user refreshes the browser

## Bugs
<!-- - While testing on various browsers, I came across an error on Mozilla Firefox saying:
>  "Uncaught (in promise) ReferenceError: can't access lexical declaratio'coffeePlacesList' before initialization" -->
- For the bookmarks feature to work seamlessly, user is advised
    - not to immediately click on other shop markers while one is opened (bookmark button has to "reset" before it works)
    - click on the 'close' or anywhere on the map for the bookmarks button to reset and function when opening the marker again






# Use Cases
<!-- basic use case:
1. name of use case (short title of what it does)
2. objective (from user's POV)
3. steps user will take to achieve the objective -->




# Technologies Used
<!-- /provide overview of the languages, frameworks, libraries or other tools you have used to produce the project. provide short description of where in the project the technology is used, and a URL to its github repository -->

1. HTML
    - to set the bare bones of the website

2. CSS
    - stylise according to my wireframes
    - allow simple animations and transitions to happen

3. Vanilla Javascript
    - Make the whole website work (Effects, clicking on a button will result to e.g a box popping up)
    - 90% of the content is handled by JS (innerHTML/innerText)

4. JSON
    - able to handle lots of information in one file without compromising the file size
    - easy to update information in the future if needed (without touching any front-end or back-end codes, easy even for those who are not familiar with coding)

5. Axios
    - used to make the end call to a third-party API (Foursquare)

6. Foursquare API
    - Retrieve array of location information to display on the website – the shop name, address & coordinates

7. Leaflet
    - Provide markers to be placed on the map
    - Has a popup feature for each marker to make it more intuitive

8. Mapbox
    - to stylise the map tiles
    - able to choose from certain premade styles or make our own ones



# Testing
<!-- provide proof that you have done testing on your project. provide step by step instructions for examiner to test the project. use user stories & their acceptance criteria as starting point. do note that any unhandled exceptions, console errors etc will be considered as failing the testing criteria

// provide manual test cases -->

## Errors I ran into:
1. Clicking on the "Coffee Randomiser" or "Check out coffee places" buttons even before the API has finished calling the endpoint, which causes multiple errors and the application to not function as expected
    - to fix this error, I have added a short loader animation of a floating cup, which lasts for 0.3s, so that the array will already be loaded when user is presented with the two buttons

2. Foursquare had a major update (V2 -> V3), causing things to work differently than what was taught during class. The Client ID & Client Secret keys that were generated on my own account do not work
    - After extensive testing, I discovered that this seems to be a Foursquare issue, so I've contacted Foursquare's support for help. I'm still waiting for a response from them to this day
    - Thank you Neel for letting me use your keys & taking some time out to figure out what went wrong, appreciate your help very much

3. Used console.log on everything to make sure that everything's working

4. Tested my project on these browsers on Mac OS:
    - Google Chrome
    - Safari
    - Microsoft Edge
    - Mozilla Firefox

    Windows 10:
    - Google Chrome
    – Microsoft Edge

    Mobile/Tablet Devices:
    - iPhone 12 Mini (ios 15)
    - Samsung ???
    - iPad Pro 2018

5. UI not working as smoothly on iOS 15
    - when Apple shifted the position of the search bar in Safari to the bottom, it made my UI work not as smoothly as I thought it would. Here's the thing that bugs me the most:
        - The discover box is hidden below the 100% height of the browser window
        - If you're not familiar with how iOS 15 works, when you scroll up, the search bar collapses
        - And when it collapses, it exposes the rest of my discover box (which I've purposely hidden for aesthetic purposes)


**Feedback I've received**
1. Other than the regions, perhaps I could add in another dropdown to sort the shops according to types of coffee (like the ones in the randomiser)
    - **Did I implement this feature?** No
    - **Why?** Based on Foursquare Venue API's information for each location, it's not extensive enough and doesn't include further info like shop specialties and menus
    - **What could I have done?** My initial plan was to use the Places API, since it seems to have more information, however due to unexpected errors I've faced when trying to make the API call (authorization keys, Client ID & Client Secret not working, CORS errors), I've decided to stick to the Venues API since it was working for me
2. Make some indication for CTA buttons
    - **Did I implement this feature?** Yes
    - **What did I implement?** Whenever user changes regions, a green popup at the top will appear when it's loading & done (it takes a around 0.5seconds for the map to reset & generate new markers)


# Test Cases
<!-- provide description of test case
steps for performing the test
the expected results
any assumptions or prerequisites

examiner must be able to follow your test case -->

## Test Case 1: "Wow shops""
1. From the main page, click on "Check out coffee places"
2. Pan and zoom on the map
3. Click on the coffee beans to see shop name, address & bookmarks button
4. Click on "Add to bookmarks" if the shop intrigues you
5. Sift through the listings in the discover box
6. Change regions to see shops in specific locations

## Test Case 2A: "I'm just here for the coffee, not the shops"
1. From the main page, click on the "Coffee Randomiser" button
2. If you're not interested in the recommendation, click on "Give me another one" to generate another suggestion
3. Once satisfied, click on "Take Me There"

## Test Case 2B: "Cool shops, now what should I drink?"
1. Click on the "Coffee Randomiser" button on the top right hand corner of the nav bar
2. If you're not interested in the recommendation, click on "Give me another one" to generate another suggestion
3. Once satisfied, click on "Take Me There"

## Test Case 3: "What was the name of that shop again...?"
1. **On mobile & tab:**
    1. Click on the hamburger menu icon at the top right
    2. Click on "Bookmarks" tab
2. **On desktop**
    1. Click on the "Bookmarks" button in the navbar
3. Scroll through whole list
4. In the case that there's an interesting name that stays on your mind (but you can't remember its full name), type what you remember in the search bar
5. Click on the search icon button next to it & the result will show up
6. Click on the reset icon next to the search button to view all bookmarks again
7. Click on the close button to go back to the map


**Rationale for adding a search bar in the bookmarks and not in the discover box**
- Adding a search function in the discover box might be redundant because I, as the site owner, assume that users are here to look for new shops
- If they don't know that a certain shop exists, they won't search for it
- Get the users to click on the markers and not rely heavily on the discover box (that's what shopping malls do - the hidden agenda of making shoppers walk through the whole mall by placing escalators on opposite ends)
- But when they've already bookmarked certain shops, they would be more inclined to search for the name that intrigues them the most


# Deployment
<!-- describe the process you used to host your website. -->

1. Used Visual Studio Code
2. Pushed to Github repository by using the Github Desktop Client (lovely and intuitive GUI)
3. Utilised the Live Server extension to view UI updates in real time on browser upon saving the files
4. From Github, make the repository public (if it's private)
5. Publish GitHub page to view project on a live URL




# Credits
<!-- put all the code, content and assets that you have used. acknowledge and provide links to those. -->

**Images & Icons**
- Flaticons
- Fontawesome
- link to that website for the coffee types
- https://developer.foursquare.com/reference/v2-venues-search
- wikipedia of sg neighbourhoods
- Neel