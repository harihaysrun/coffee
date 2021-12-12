# Coffee
Can't decide which coffee to drink?

# Project name and summary
"What coffee should I drink today?" is a question I found myself asking rather frequently. Drinking the same coffee over and over again gets pretty mundane over time. On weekdays, cold brew. On weekends, cold brew again. Life won't be too interesting if I were to keep drinking the same coffee every day for the rest of my life.

This inspired me to start "Where's my coffee?", a randomiser that recommends users a type of coffee and shop, so that they can go on to explore that shop's menu or perhaps even make an order with them. There's more than just Starbucks and Coffee Bean, people...

<!-- Make sure to justify why the project should exist

Include a URL to the deployed version of the project -->




# Project Complexity Matrix
1. Consume the GET endpoint of an API, or consume a CSV/JSON file
2. Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions
3. Modifying the CSS of DOM elements based on the user's actions
4. Use of 1D traversal of array
5. -
6. Each use of CSS layout technique (Bootstrap columns, flex box, grid)
7. Each possible search or filtering criteria in the user interface
8. Each case of the map updating base on the user's actions
9. Each group of layers in the Leaflet map
10. Each group of marker clustering
11. Each type of custom marker (using images or custom behaviour)




# UX/UI
<!-- User stories & acceptance criteria -->

<!-- Share wireframes links, mockups, diagrams etc. can be pushed to github or be places in separate PDF file as part of the repository

describe the considerations for the five planes of ui/ux, such as the choice of color & fonts, or information strategy for the structure plane. -->

## What I want to achieve with this application
Putting myself in the shoes of the end user, I would want to:
- easily check out coffee shops
- add shops with interesting names to my bookmarks so that I won't have to search through the map again later on
- have a machine decide for me what drink I should try out


## Wireframes
It's important to start with the wireframes before coding it out
Here's the wireframes I drew:

**Responsive design"**
1. Hamburger menu for mobile & tablet views
2. Full nav bar for desktop view

## Colours
- Mainly hues of brown and beige to represent coffee and cream
- A tinge of desaturated green for my fellow matcha lovers out there
- The edges of the boxes have a border-radius of 15px, which is neither too rounded or sharp, to imitate the roundness of a coffee bean/cup




# Features
<!-- list down major features of the application, and also the algorithms you have used to implement those features. if there are any limitations or bugs, please describe them as well. if you have any features pending implementation, you can also take the opportunity to discuss them here -->

## Problems
**Limitations of Foursquare API**
- only 50 queries per session, meaning it's not possible to have the full list of coffee shops
- Even though a specific region is chosen, shops from other areas(and even countries – Malaysia & Indonesia) show up
    - with this, I had to manually exclude anything that's not in Singapore by including this line in ___.js
    > line where shows to exclude anything else other than singapore

**Leaflet marker not working as expected**
- couldn't get the markers to open automatically when clicking on the shop in the discover box

## Pending Implementions
- A form for user to submit a shop that's not on the list
- Setting up a database for the bookmarks so they will be stored somewhere and won't be gone once the user refreshes the browser

## Bugs
- While testing on various browsers, I came across an error on Mozilla Firefox saying:
>  "Uncaught (in promise) ReferenceError: can't access lexical declaratio'coffeePlacesList' before initialization"





# Use Cases
<!-- basic use case:
1. name of use case (short title of what it does)
2. objective (from user's POV)
3. steps user will take to achieve the objective -->




# Technologies Used
<!-- /provide overview of the languages, frameworks, libraries or other tools you have used to produce the project. provide short description of where in the project the technology is used, and a URL to its github repository -->




# Testing
<!-- provide proof that you have done testing on your project. provide step by step instructions for examiner to test the project. use user stories & their acceptance criteria as starting point. do note that any unhandled exceptions, console errors etc will be considered as failing the testing criteria

// provide manual test cases -->

## Errors I ran into:
1. Clicking on the "Coffee Randomiser" or "Check out coffee places" buttons even before the API has finished calling the endpoint, which causes multiple errors and the application to not function as expected
    - to fix this error, I have added a short loader animation of a floating cup, which lasts for 0.3s, so that the array will already be loaded when user is presented with the two buttons

2. used console.log on everything to make sure that everything's working

3. Tested my project on these browsers on Mac OS:
    - Google Chrome
    - Safari
    - Microsoft Edge
    - Mozilla Firefox

    Mobile/Tablet Decives:
    - iPhone 12 Mini (ios 15)
    - Samsung ???
    - iPad Pro 2018




# Test Cases
<!-- provide descroption of test case
steps for performing the test
the expected results
any assumptions or prerequisites

examiner must be able to follow your test case -->

## Test Case 1: Basic Coffee Shop Explorer
1. From the main page, click on "Check out coffee places"
2. Pan and zoom on the map
3. Click on the coffee beans to see shop name, address & bookmarks button
4. Click on "Add to bookmarks" if the shop intrigues you
5. Sift through the listings in the discover box
6. Change regions to see shops in specific locations

## Test Case 2A: Coffee Randomiser
1. From the main page, click on the "Coffee Randomiser" button
2. If you're not interested in the recommendation, click on "Give me another one" to generate another suggestion
3. Once satisfied, click on "Take Me There"

## Test Case 2B: Coffee Randomiser
1. Click on the "Coffee Randomiser" button on the top right hand corner of the nav bar
2. If you're not interested in the recommendation, click on "Give me another one" to generate another suggestion
3. Once satisfied, click on "Take Me There"

## Test Case 3: "What was the name of that shop again...?"
1. **On mobile & tab:**
    1. Click on the hamburger menu icon at the top right
    2. Click on "Bookmarks" tab
2. **On desktop**
    1. Click on the "Bookmarks" button on or navbar
3. Scroll through whole list
4. In the case that there's an interesting name that stays on your mind (but you can't remember its full name), type what you remember in the search bar
5. Click on the search icon button next to it & the result will show up
6. Click on the reset icon next to the search button to view all bookmarks again
7. Click on the close button to go back to the map



# Deployment
<!-- describe the process you used to host your website. -->

1. Used Visual Studio Code
2. Pushed to Github repository by using the Github Desktop Client (has a GUI)
3. Used the Live Server extension to view UI updates in real time on browser
4. From Github, make the repository public
5. Set pages to generate project URL

# Credits
<!-- put all the code, content and assets that you have used. acknowledge and provide links to those. -->