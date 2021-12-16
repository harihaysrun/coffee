# Where's my coffee?
<!-- Can't decide which coffee to drink? -->
<!-- Insert the iamge of the design across the 3 devices here -->

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/main.png">

<!-- # Project name and summary -->
"What coffee should I drink today?" is a question I find myself asking rather frequently. I tend to stick to the same coffee type (cold brew) when I'm at home or outside. The repetitiveness of drinking the same coffee every day has inspired me to start "Where's my coffee?", a coffee shop explorer and randomiser that recommends users a type of coffee and shop, so that they can go on to explore the shop's menu and perhaps even make an order with them.

If you find yourself asking the same question like I do, then this is for you.

<!-- Make sure to justify why the project should exist -->

**As the site owner, I want to:**
- Allow users to discover coffee shops
- Suggest type of coffee and shop to the user
- Introduce user to different types of coffee

**Putting myself in the shoes of the end user, I want to:**
- Easily check out coffee shops
- Find interesting shops and note them down for future reference
- Have a machine decide a drink for me since I'm undecisive
- use an app that has a pleasing UI to look at so it won't repel me/drive me away from using it

Here's the link to my project: <a href="https://harihaysrun.github.io/coffee/">Where's my coffee?</a>
<!-- Include a URL to the deployed version of the project -->

<br>

# UX/UI
<!-- User stories & acceptance criteria -->

<!-- Share wireframes links, mockups, diagrams etc. can be pushed to github or be places in separate PDF file as part of the repository

describe the considerations for the five planes of ui/ux, such as the choice of color & fonts, or information strategy for the structure plane. -->

## Flow/Sitemap:

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/sitemap3.jpg">


## Wireframes, mockups:

**Design Element Inspiration:**

Taking inspiration from <a href="https://hince.co.kr/" target="_blank">Hince</a>'s website, I decided to adopt the rounded navbar design. Additionally, the boxes have a border-radius of 15px, which is neither too rounded or sharp, to imitate the roundness of a coffee bean/cup.

Here are the selected wireframes/mockups I've done up, some of which have been omitted along the way as I worked on the codes.  Design for tablet view is not included as it's similar to mobile view. To view full set of wireframes, you may click <a href="https://xd.adobe.com/view/154ab4c9-fc0d-4a62-b14c-7f24e534c6ee-4019/">here</a>.

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/mockups.jpg">


## Responsive design features

1. Mobile:
    - Hamburger menu at the top right hand corner
    - A collapsible discover box due to the lack of screen real estate

2. Tablet
    - Similar to mobile view with the exception of a full navigation bar instead of a hamburger menu

2. Desktop:
    - Full navigation bar
    - Due to the design, only footer is visible on desktop
    - the curved navbar design is removed, but implemented in the background
    - addition of hover styling in the css for buttons & interactive items


## Colours
My choice of colours is very self-explanatory:
- Mainly hues of brown and beige to represent coffee, cream and milk
- A tinge of desaturated green and red to indicate a yes/no situation


## Font choice
- I wanted a font that is round, and legible when used on smaller body text
- Some fonts that were shortlisted:

    <img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/fonts.jpg">
    <br>
    1. Poppins
    <br>
    2. Nunito
    <br>
    3. Rubik - Decided to go with this. It's not too wide. It's rounded but has a slight sharpness to it, and the font weight makes it the most legible of the bunch

## Icons
- Rather than using realistic images, I chose to use icons as they're simpler, and won't clash with the intricateness of the map
- Icons were either made on Adobe Illustrator or sourced from Flaticon and Font Awesome

<br>

# Main features of the website
<!-- list down major features of the application, and also the algorithms you have used to implement those features. if there are any limitations or bugs, please describe them as well. if you have any features pending implementation, you can also take the opportunity to discuss them here -->

## Features
- Coffee shop map explorer
    - explore by regions (dropdown)
    <!-- - Pre-set some search terms in the code so the users won't have to do so (in this case, 'coffee', 'cafe', 'bistro') -->
- Randomiser (for both coffee type & shop)
- Bookmarks function
    - search function

## Pending Implementions
- (If Foursquare API isn't used in this website) A form for user to submit a shop that's not on the list
- Setting up a database for the bookmarks so they will be stored somewhere and won't be gone once the user refreshes the browser



## Technologies used in this project in order to achieve the above features:

<!-- /provide overview of the languages, frameworks, libraries or other tools you have used to produce the project. provide short description of where in the project the technology is used, and a URL to its github repository -->


1. Adobe XD
    - Create website wireframes/mockups

2. HTML
    - Set the bare bones of the website

3. CSS
    - Stylise according to my wireframes/mockups
    - Allow simple animations and transitions to happen

4. Vanilla Javascript
    - Make the whole website work (Effects, clicking on a button will result to e.g a box popping up)
    - Majority of the content is inserted/changed via javascript (innerHTML/innerText)

5. JSON
    - able to handle lots of information in one file
    – The types of coffee is stored here, so that it can be easily updated, added or deleted in the future if needed

6. <a href="https://github.com/axios/axios">Axios</a>
    - Used to make the GET call & retrieve information from third-party API (Foursquare)

7. Foursquare API
    - Contains information to be displayed on website. The ones used in this project are: shop name, address & coordinates

8. <a href="https://leafletjs.com/">Leaflet & Leaflet Marker Cluster</a>
    - Provide markers to be placed on the map
    - Has a popup feature for each marker to make it more intuitive
    - Markers are customisable

9. <a href="https://www.mapbox.com/">Mapbox</a>
    - To stylise the map tiles
    - Able to choose from ready-made styles or customise our own ones

10. <a href="https://fonts.google.com/">Google Fonts</a>
    - Font used for this project: <a href="">Rubik</a>

11. <a href="https://fontawesome.com/">Font Awesome</a>
    - Search & Reset icons in the bookmarks popup

12. <a hre="https://www.flaticon.com/">Flaticon</a>
    - Coffee bean icon for the markers and iced & hot coffee icons in the randomiser

13. Adobe Illustrator
    - Create loader cup icon, logo


## Project Complexity Matrix
| No. | Description | Implemented? |
|:---:|-------------|------------------|
| 1 | Consume the GET endpoint of an API, or consume a CSV/JSON file | Yes <br> 1 foursquare API + 1 local JSON file |
| 2 | Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions | Yes |
| 3 | Modifying the CSS of DOM elements based on the user's actions | Yes |
| 4 | Use of 1D traversal of array | Yes |
| 5 | Each use of a unique functional mapping method (map, reduce, filter) | - |
| 6 | Each use of CSS layout technique (Bootstrap columns, flex box, grid) | Yes <br> Flex box |
| 7 | Each possible search or filtering criteria in the user interface | Yes <br> Search box in bookmarks tab | 
| 8 | Each case of the map updating base on the user's actions | Yes <br> Map & markers reset when user changes regions |
| 9 | Each group of layers in the Leaflet map | - |
| 10 | Each group of marker clustering | Yes <br> 1 marker clustering |
| 11 | Each type of custom marker (using images or custom behaviour) | Yes <br> Used coffee bean image, added a functional bookmark button inside of popup |

<br>

# Test Cases
<!-- provide description of test case
steps for performing the test
the expected results
any assumptions or prerequisites

examiner must be able to follow your test case -->

<br>

## Test Case 1: "Wow, shops"

Explore coffee shops

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/testcase1.jpg">

| Step No. | Description | Expected result |
| :-------: | --------------- | --------------- |
| 1 | From the main page, click on "Check out coffee places" | Popup disappears and map shows up |
| 2 | On mobile, click on the arrow at the top of the discover box | Discover box moves upwards and unveils itself |
| 3 | Click on a shop listing | **On mobile:**<br>Discover box collapses downwards <br><br> Map zooms in to the store's location |
| 4 | Click on the coffee bean marker | You will see the shop name, address & bookmarks button in the popup |
| 5 | Click on "Add to bookmarks" if the shop intrigues you | "Add to bookmarks" changes to "Added to bookmarks!" |
| 6 | Change regions to see shops in specific locations | A dialog box will slide in from the top to indicate that you're changing regions, and the map will refresh & plant new markers |


<br>

## Test Case 2: "What should I drink?"

Check that the coffee randomiser is working

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/testcase2.jpg">

| Step No. | Description | Expected result |
| :-------: | ---------- | --------------- |
| 1 | From the landing page, click on the "Coffee Randomiser" button <br><br> **Or** <br><br> Click on the "Coffee Randomiser" button at the top right hand corner in the nav bar | Popup window will appear and suggest a random coffee type & shop |
| 2 | If you're not interested in the recommendation, click on "Give me another one" | Content in the popup refreshes to generate another suggestion |
| 3 | Once satisfied, click on "Take Me There" | Popup disappears to reveal map, zooming in to the location of the shop |
| 4 | If not satisfied, click on the close button (X) at the top right hand corner | Popup closes, you may resume exploring the map |


<br>

## Test Case 3: "What was the name of that shop again...?"

Search function in the bookmarks popup

<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/testcase3.jpg">

| Step No. | Description | Expected result |
| :-------: | ---------- | --------------- |
| 1 | **On mobile:** <br> 1. Click on the hamburger menu icon at the top right <br> 2. Click on "Bookmarks" tab <br><br> **On tab & desktop:**<br>Click on the "Bookmarks" button in the navbar  | **On mobile:** <br> Hamburger menu drops down, bookmarks window will pop up <br><br> **On tab & desktop:** <br> Bookmarks window will pop up| 
| 2 | Scroll through whole list | Listing is not clickable |
| 3 | Type name or keyword in the search bar | Search results won't automatically appear |
| 4 | Click on the search icon button | Relevant results will appear |
| 5 | Click on the reset icon next to the search button | View all bookmarks again |
| 6 | Click on the close button to go back to the map | Popup closes |

<br>

**Rationale for adding a search bar in the bookmarks and not in the discover box:**
- I, the site owner, assume that users are here to look for new shops
- If they don't know that a certain shop exists, they won't know or have any keywords to search up in the discover box
- I would want the users to click on the shop markers and not rely heavily on the discover box
- When they've already bookmarked certain shops, they would be more inclined to search for the names that intrigue them






# Limitations, bugs and errors

## Limitations of Foursquare API

- only 50 queries per second, which means that it's not possible to see the full list of coffee shops at one go

## Bugs
<!-- - While testing on various browsers, I came across an error on Mozilla Firefox saying:
>  "Uncaught (in promise) ReferenceError: can't access lexical declaratio'coffeePlacesList' before initialization" -->

1. Leaflet marker not popping up automatically
    - couldn't get the markers to open automatically when clicking on the shop in the discover box
    - added some instructions so that they'll have to click on the icons first

2. For the bookmarks feature to work seamlessly, user is advised either:
    - not to immediately click on other shop markers while one is opened
    - or click on the 'close' button or anywhere on the map before clicking on others (bookmark button has to "reset" before it works on another marker)

3. Even though a specific region is chosen, shops from other areas (and even countries – Malaysia & Indonesia) showed up
    - setting a radius in the parameters of the API call helped to narrow the search down
    - created another array and pushed only shops in Singapore into it
    
        > if(allCoffeePlacesList[i].location.country == "Singapore"){  
        > &nbsp&nbsp&nbsp coffeePlacesList.push(allCoffeePlacesList[i]);  
        > }

5. UI not appearing as intended on iOS 15
    - The bottom position of the search bar in Safari causes issues with the UI
    - The discover box is supposed to be hidden below the 100% height of the browser window (overflow:hidden)
        - In iOS 15, when you scroll up, the search bar collapses downwards, exposing the rest of the discover box (a small issue but still bugs me)


## Errors I ran into:

1. Clicking on the "Coffee Randomiser" or "Check out coffee places" buttons even before the API has been called causes multiple errors and the application to not function
    - to fix this error, I have added a short loader animation of a floating cup, which lasts for 0.3s, so that the array will already be loaded when user is presented with the two buttons

2. Foursquare had an update (V2 -> V3) shortly after learning it in class, causing things to work differently. The Client ID & Client Secret keys that were generated on my own account do not work
    - After extensive testing, I discovered that this seems to be a Foursquare issue, so I've contacted Foursquare's support for help. I'm still waiting for a response from them to this day
    - Thank you Neel for letting me use your keys & taking some time out to figure out what went wrong, appreciate your help very much


## Feedbacks I've received
1. Other than the regions, perhaps I could add in another dropdown to sort the shops according to types of coffee (like the ones in the randomiser)
    - **Did I implement this feature?** No
    - **Why?** Information derived from Foursquare Venue API is not extensive enough
    - **What could I have done?** My initial plan was to use Foursquare Places API, since it contains more information. However, due to unexpected errors I faced (authorization keys, Client ID & Client Secret not working, CORS errors), I've decided to stick to the Venues API since it was working for me

2. Make some indication for CTA buttons
    - **Did I implement this feature?** Yes
    - **What did I implement?** Whenever user changes regions, a green popup at the top will appear when it's loading & done (it takes a around 0.5seconds for the map to reset & generate new markers)



# Deployment
<!-- describe the process you used to host your website. -->

1. Used Visual Studio Code
2. Utilised the Live Server extension to view UI updates on the browser in real time upon saving the files
3. Pushed to Github repository via Github Desktop Client (lovely and intuitive GUI)
4. From Github, make the repository public (if it's private)
5. Publish GitHub page to view project on a live URL


# This project has been tested on:
| Macbook Pro         | Windows 10       | Other Devices           |
| ------------------- | ---------------- | ----------------------- |
| Google Chrome       | Google Chrome    | iPhone 12 Mini (iOS 15) |
| Safari              | Microsoft Edge   | Samsung Galaxy A22      |
| Microsoft Edge      |                  | 11" iPad Pro 2018       |
| Mozilla Firefox     |                  |                         |




# Credits
<!-- put all the code, content and assets that you have used. acknowledge and provide links to those. -->

**Design**
- <a href="https://www.flaticon.com/">Flaticon</a>
- <a href="https://fontawesome.com/">Fontawesome</a>
- <a href="https://fonts.google.com/">Google Fonts</a>


**Information**
- <a href="https://www.tasteofhome.com/article/types-of-coffee/">Types of coffee</a>
- <a href="https://developer.foursquare.com/reference/v2-venues-search">Foursquare API parameters/search terms</a>
- <a href="https://en.wikipedia.org/wiki/List_of_places_in_Singapore">List of places in Singapore</a>
- <a href="https://leafletjs.com/reference.html">Leaflet Documentation</a>

**Additional Help**
- Neel