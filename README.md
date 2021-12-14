# Where's my coffee?
Can't decide which coffee to drink?
<!-- Insert the iamge of the design across the 3 devices here -->


# Project name and summary
"What coffee should I drink today?" is a question I find myself asking rather frequently. I tend to stick to the same order (cold brew) at the same two shops (Starbucks / Coffee Bean). Life won't be interesting if we keep drinking the same coffee every day for the rest of our lives.

This inspired me to start "Where's my coffee?", a coffee shop explorer and randomiser that recommends users a type of coffee and shop, so that they can go on to explore the shop's menu and perhaps even make an order with them.

If you find yourself asking the same question like I do, then this is for you.

<!-- Make sure to justify why the project should exist -->

**As the site owner, I want to:**
- Allow users to discover coffee shops
- Pre-set some search terms for the users so they won't have to do so (in this case, 'coffee', 'cafe', 'bistro')
- decide type of coffee to drink for the user
- introduce user to different types of coffee

**Putting myself in the shoes of the end user, I would want to:**
- easily check out coffee shops
- find interesting shops and add them to my bookmarks list
- have a machine decide for me a drink I should try out
- UI that's pleasing to look at so it won't repel me/drive me away from using it


<!-- Include a URL to the deployed version of the project -->


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


**Responsive design features**

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
- As mentioned, the key word for my design is 'round'. I wanted a font that matches the overall look and feel but at the same be legible on smaller body text
- Some fonts that were shortlisted:
<img src="https://github.com/harihaysrun/coffee/blob/main/images/readme/fonts.jpg">
    1. Poppins
    2. Nunito
    3. Rubik - Decided to go with this. It's not too wide, rounded but has a slight sharpness to it, and the font weight makes it the most legible of the bunch 

## Icons
- Rather than using realistic images, I chose to use icons as they're simpler, and won't clash with the intricateness of the map
- Icons were either made on Adobe Illustrator or sourced from Flaticon and Font Awesome



# Main features of the website
<!-- list down major features of the application, and also the algorithms you have used to implement those features. if there are any limitations or bugs, please describe them as well. if you have any features pending implementation, you can also take the opportunity to discuss them here -->

## Features
- coffee shop map explorer
- randomiser (for both coffee type & shop)
- bookmarks function

## Pending Implementions
- (If Foursquare API isn't used in this website) A form for user to submit a shop that's not on the list
- Setting up a database for the bookmarks so they will be stored somewhere and won't be gone once the user refreshes the browser



## Technologies used in this project in order to achieve the above features:

<!-- /provide overview of the languages, frameworks, libraries or other tools you have used to produce the project. provide short description of where in the project the technology is used, and a URL to its github repository -->

1. HTML
    - to set the bare bones of the website

2. CSS
    - stylise according to my wireframes/mockups
    - allow simple animations and transitions to happen

3. Vanilla Javascript
    - Make the whole website work (Effects, clicking on a button will result to e.g a box popping up)
    - Majority of the content is inserted via javascript (innerHTML/innerText)

4. JSON
    - able to handle lots of information in one file
    – information of types of coffees is stored here, so that it can be easily updated, added or deleted in the future if needed

5. Axios
    - used to make the GET call to the third-party Foursquare API

6. Foursquare API
    - Retrieve location information to display on the website – the ones used are: shop name, address & coordinates

7. Leaflet & Leaflet Marker Cluster
    - Provide markers to be placed on the map
    - Has a popup feature for each marker to make it more intuitive
    - Markers are customisable

8. Mapbox
    - to stylise the map tiles
    - able to choose from ready-made styles or customise our own ones

9. Google Fonts
    - Font used for this project: <a href="">Rubik</a>

10. FontAwesome
    - Search & Reset icons in the bookmarks popup


## Project Complexity Matrix
| No. | Description | Implemented? |
|-----|-------------|------------------|
| 1 | Consume the GET endpoint of an API, or consume a CSV/JSON file | Yes <br> 1 foursquare API + 1 local JSON file |
| 2 | Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions | Yes |
| 3 | Modifying the CSS of DOM elements based on the user's actions | Yes |
| 4 | Use of 1D traversal of array | Yes |
| 5 | Each use of a unique functional mapping method (map, reduce, filter) | - |
| 6 | Each use of CSS layout technique (Bootstrap columns, flex box, grid) | Yes <br> flex box |
| 7 | Each possible search or filtering criteria in the user interface | Yes <br> Search box in bookmarks tab | 
| 8 | Each case of the map updating base on the user's actions | Yes <br> Map & markers reset when user changes regions |
| 9 | Each group of layers in the Leaflet map | - |
| 10 | Each group of marker clustering | Yes <br> 1 marker clustering |
| 11 | Each type of custom marker (using images or custom behaviour) | Yes <br> Used coffee bean image, added a functional bookmark button inside of popup |



# Test Cases
<!-- provide description of test case
steps for performing the test
the expected results
any assumptions or prerequisites

examiner must be able to follow your test case -->

## Test Case 1: "Wow shops"

<!-- | Image here | -->

| Step No. | Description | Expected result |
| --------- | ---------- | --------------- |
| 1. | From the main page, click on "Check out coffee places" | Popup disappears and map shows up |
| 2. | On mobile, click on the arrow at the top of the discover box | discover box moves upwards and unveils itself |
| 3. | Sift through the listings in the discover box & click on them | (mobile: discover box collapses downwards and) Map zooms in to the store's location |
| 4. | Click on the coffee beans | You will see the shop name, address & bookmarks button |
| 5. | Click on "Add to bookmarks" if the shop intrigues you | "Add to bookmarks" changes to "Added to bookmarks!" |
| 6. | Change regions to see shops in specific locations | A dialog box will popup to indicate that you're changing regions, and the map will refresh & plant new markers |



## Test Case 2A: "I'm just here for the coffee, not the shops"

<!-- | Image here | -->

| Step No. | Description | Expected result |
| --------- | ---------- | --------------- |
| 1. | From the main page, click on the "Coffee Randomiser" button | A coffee type and shop will be generated |
| 2. | If you're not interested in the recommendation, click on "Give me another one" | Content in the box refreshes to generate another suggestion |
| 3. | Once satisfied, click on "Take Me There" | Popup disappears and map shows up, zooming in to the location of the shop |



## Test Case 2B: "Cool shops, now what should I drink?"

<!-- | Image here | -->

| Step No. | Description | Expected result |
| --------- | ---------- | --------------- |
| 1. | Click on the "Coffee Randomiser" button on the top right hand corner of the nav bar | Popup window will appear and suggest a random coffee & shop |
| 2. | If you're not interested in the recommendation, click on "Give me another one" | Content in the box refreshes to generate another suggestion |
| 3. | Once satisfied, click on "Take Me There" | Popup disappears and map shows up, zooming in to the location of the shop |
| 4. | If not satisfied, click on the close (X) at the top right hand corner | Popup closes, yoy may resume exploring the map |



## Test Case 3: "What was the name of that shop again...?"

<!-- | Image here | -->

| Step No. | Description | Expected result |
| --------- | ---------- | --------------- |
| 1. | **On mobile & tab:** |                                       **On mobile & tab:** |
|    |  1. Click on the hamburger menu icon at the top right           | hamburger menu drops down, bookmarks window will popup
|    |  2. Click on "Bookmarks" tab                                    |
|    | **On desktop:** Click on the "Bookmarks" button in the navbar   |
| 2. | Scroll through whole list | Listing is not clickable |
| 3. | In the case that there's an interesting name that stays on your mind (but you can't remember its full name), type what you remember in the search bar | Search results won't automatically appear |
| 4. | Click on the search icon button | Relevant results will appear |
| 5. | Click on the reset icon next to the search button | View all bookmarks again |
| 6. | Click on the close button to go back to the map | Popup closes |



**Rationale for adding a search bar in the bookmarks and not in the discover box**
- I, the site owner, assume that users are here to look for new shops
- If they don't know that a certain shop exists, they won't know or have any keywords to search up on the discover box
- Get the users to click on the markers and not rely heavily on the discover box
- When they've already bookmarked certain shops, they would be more inclined to search for the names that intrigue them






# Limitations, bugs and errors

## Limitations of Foursquare API**

- only 50 queries per second, which means that it's not possible to see the full list of coffee shops at one go

## Bugs
<!-- - While testing on various browsers, I came across an error on Mozilla Firefox saying:
>  "Uncaught (in promise) ReferenceError: can't access lexical declaratio'coffeePlacesList' before initialization" -->

- Leaflet marker not popping up automatically
    - couldn't get the markers to open automatically when clicking on the shop in the discover box
    - added some instructions so that they'll have to click on the icons first

- For the bookmarks feature to work seamlessly, user is advised either
    - not to immediately click on other shop markers while one is opened
    - or click on the 'close' or anywhere on the map before clicking on others (bookmark button has to "reset" before it works on another marker)

- Even though a specific region is chosen, shops from other areas (and even countries – Malaysia & Indonesia) show up
    - setting a radius in the parameters of the API call helped to narrow it down


## Errors I ran into:

1. Clicking on the "Coffee Randomiser" or "Check out coffee places" buttons even before the API has been called, which causes multiple errors and the application to not function
    - to fix this error, I have added a short loader animation of a floating cup, which lasts for 0.3s, so that the array will already be loaded when user is presented with the two buttons

2. Foursquare had an update (V2 -> V3) shortly after learning it in class, causing things to work differently. The Client ID & Client Secret keys that were generated on my own account do not work
    - After extensive testing, I discovered that this seems to be a Foursquare issue, so I've contacted Foursquare's support for help. I'm still waiting for a response from them to this day
    - Thank you Neel for letting me use your keys & taking some time out to figure out what went wrong, appreciate your help very much

3. UI not working as smoothly on iOS 15
    - when Apple shifted the position of the search bar in Safari to the bottom, it made my UI work not as smoothly as I thought it would. Here's the thing that bugs me the most:
        - The discover box is hidden below the 100% height of the browser window
        - If you're not familiar with how iOS 15 works, when you scroll up, the search bar collapses
        - And when it collapses, it exposes the rest of my discover box (which I've purposely hidden for aesthetic purposes)


## Feedbacks I've received
1. Other than the regions, perhaps I could add in another dropdown to sort the shops according to types of coffee (like the ones in the randomiser)
    - **Did I implement this feature?** No
    - **Why?** Information derivedfrom Foursquare Venue API is not extensive enough and doesn't include further info
    - **What could I have done?** My initial plan was to use Foursquare Places API, since it seems to have more information, however due to unexpected errors I faced when trying to make the API call (authorization keys, Client ID & Client Secret not working, CORS errors), I've decided to stick to the Venues API since it was working for me

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
| Mac OS:             | Windows 10       |
| ------------------- | ---------------- |
| Google Chrome       | Google Chrome    |
| Safari              | Microsoft Edge   |
| Microsoft Edge      |                  |
| Mozilla Firefox     |                  |
|----------------------------------------|
| iPhone 12 Mini (ios 15) | Samsung ??? | 11" iPad Pro 2018 |



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