# SNAPGRAM

XXXXXXXXXXX PICAGRAM IMAGE 1

---

## Link to site
Link: 

---

## Introduction to Snapgram

Snapgram is an Instagram/Snapchat reminiscent social media sharing application. The app is creeated with the aim of to enhancing social connections both locally and globally. Snapgram also allows users to stay up to date with friends, family and followers in a controlled and genuine environment

---
## Contents XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

-   [Picagram](#picagram)
    -   [Intro](#intro)
        -   [Live Site](#live-site)
        -   [Project Stack](#project-stack)
        -   [Getting Started](#get-started)
    -   [Design Thinking](#design-thinking)
        -   [Problem ID](#problem-id)
        -   [Problem Statement](#problem-statement)
        -   [Site Goals](#site-goals)
    -   [UX](#ux-user-experience-design)
        -   [User Stories](#user-stories)
            -   [Site Admin](#site-admin)
            -   [User](#user)
            -   [Registered User](#registered-user)
        -   [Wireframe](#wireframe)
        -   [Visual Design](#visual-design)
            -   [Color Scheme](#color-scheme)
            -   [Fonts](#fonts)
            -   [Icons](#icons)
            -   [Logo](#logo)
    -   [Database](#database)
    -   [Development](#deployment)
        -   [Agile Design](#agile-design)
            -   [Github Issues](#github-issues)
                -   [Template](#template)
                -   [Labels](#labels)
            -   [Product Backlog](#product-backlog)
            -   [Iterations](#iterations)
                -   [Backend Iteration](#backend-iteration)
            -   [Kanban Board](#kanban-board)
    -   [Features](#features)
        -   [Current Features](#current-features)
            -   [Landing Page](#landing-page)
            -   [Sign Up Form](#sign-up-form)
            -   [Login Form](#login-form)
            -   [Navbar](#navbar)
            -   [Header](#header)
            -   [Feed Page](#feed-page)
            -   [Saved Posts](#saved-posts)
            -   [Notifications](#notifications)
            -   [Search Bar](#search-bar)
            -   [Create Post](#create-post-form)
            -   [Edit Post](#edit-post-form)
            -   [Delete Objects](#delete-objects)
            -   [Post Details Page](#post-details-page)
                -   [Likes](#liking)
                -   [Comments](#commenting)
            -   [Profile Page](#profile-page)
                -   [Follow](#follow)
            -   [Update Profile](#update-profile)
        -   [CRUD Functionality](#crud-functionality)
        -   [Future Features](#future-features)
        -   [Reusable Components](#reusable-components)
    -   [Contexts/ Hooks](#contexts-hooks)
        -   [CurrentUserContext.js](#currentusercontextjs)
        -   [ProfileDataContext.js](#profiledatacontextjs)
        -   [useRedirectUser.js](#useredirectuserjs)
    -   [Libraries/ Dependencies](#libraries-and-dependencies)
    -   [Testing](testing.md)
    -   [Bugs](#bugs)
        -   [Resolved Bugs](#resolved-bugs)
        -   [Unresolved Bugs](#unresolved-bugs)
    -   [Deployment](#deployment)
        -   [Github Cloning](#github-cloning)
        -   [Heroku Deployment](#heroku-deployment)
    -   [Credits](#credits)
        -   [Tools](#tools)
        -   [Resources](#resources)

---

## UX

### Site Goals & Audience

In general, the Snapgram provides a similar experience to the most popular social media apps, such as Instagram, with the added implementation of AI.
Embedding a chat function with the latest technology makes Snapgram a pioneer in the constantly evolving field of sociial media. The broader idea is to allow the users to edit photos, write captions/comments/posts, translate content, create a personal algorith based on interestes and enhance the user experience using AI. As the site grows, the AI-tool will be applied into multiple aspects of the platform with the end goal being the AI transforming into a "spider in the web", i.e. becoming the cornerstone on which the app´s foundation rests and grows. Advertisment will not be a significant generater of income for Snapgram but it is not excluded from future plans. In order to avoid irriitating ads, fees can be collected for using certain feautures such as advertising large scale events hosted by establisshed companies.  


 ### Site layout

The site follows a harmonious grid-based layout in which all components align. This creates a streamline expereince as the user scrolls and interacts with the site. 
Snapgram follows the general layout of popular social media apps as they have proven to work and function in the most logical way possible.
Everything the user needs on a regular basis is only one click away. More advanced setting and functions are easy to find thanks to the clean and minimalistic layout. 

### Color Scheme

Harmonious, muted and soft colours were selected in order to not interrupt the focus of the user as they scroll. 
The colours are neutral as not to clash nor draw attention from the uploaded images.
The dominating colours of Snapgram can be visualized by the image below:

XXXXXXXXXX COlour SCHEME


### Symbols/ Icons

Symbols and icons have become a global language in the most simplistic way possible. 
This has become familiar with a majority of social media users thus motivating the use of icons as shortcuts/links and as a tool of navigation.

### Logo
A straight forward, elegant and familiar logo spelling out the name "Snapgram". 
The cursive feels more traditional and intimate, creating trust and a nostalgic feeling for the user.
 
---

### Current User Goals
- Share images, messages and comments with the selected group of users.
- Allowing the users to start using and exploring AI on a basic level.
- Creating a controlled environment in which useres feel comfortable sharing personal images, thoughts, messages and plans.

### Broader Goals and Features
- Create a hub for people to connect and share moment and ideas.
- Introducing users to the AI-function and allowing them to grow as the software grows over time.
- Making it clear that Snapgram is safe from illegal activities including sharing and selling images, products and services.
- Gaining the trust of the users by catering to their wants and needs over the demands of advertisers.
- Optimising the algorithm in order to highlight post/diiscussions/events that are of higher intereest for the individual user.
- Sign up with Google to make it easier for users to become members.
- Allow users to report bugs/posts/users without using the "contact Snapgram"-form.
- Allow for users to become verified by linkiing their account to a physical person/company/organisation.

---

## UX Design of Snapgram

### User Stories

---

XXXXXXXXXXXXXXXXXXXXXXXXXX

### Wireframe

#### Web Version
#### Mobile Version

---

XXXXXXXXXXXXXX Image WIIREFRAME

### Navigation Map

---


## Main Features 

### User Profile
Represented by an image and "Profile" in writing.
This model focuses on the personal and private information of the user, such as their profile name, number of followers, profile picture and personally uploaded feed.
This also displays the library of all uploads made by the user. If the number of posts, followers or following are changed by adding/removing a post/person, the tally will change in accordance.

### Upload/Post
Represented by an icon depicting a plus inside a box.
Clicking this allows user to add an image.

### Home
Represented by an icon depicting a house.
Home pushes the user to the common feed consiting of post uploaded by other users. 

### Feed
Represented by an icon depicting a list.
Allows user to search by using keywords or name of user in order to get their specific feed. 

### Like
Represented by an icon depicting a heart.
As the title sugests, this sections allows the user to view liked posts.
The same icon is placed under an uploaded image and allows users to like a post. 

### AI Chat Bot
Represented by an icon depicitng a robot.
This functionality can be accessed by clicking the robot-head. It opens up a chat-room in which the responder is AI.

### Events
Represented by an icon depicting an almanac.
All users, verified companies and organisations included, may advertise an event.

### Contact Snapgram
Represented by an icon depicting a personal ID.
For users who need to report, inquire, complain or get in contact with the support team for any reason, this function was deemed nessesary.

### Comments
Found under an uploaded image, this is represented by an icon depicitng chat bubbles.
Allows user to write, edit, remove and view comments on posts. It is the core on which relationships are built and maintained on Snapgram.  

### Search bar
Embedded on the very top as to make it easy for the user to find posts. 
 
---

## Viisualised Features

### Landing Page
A minimalistic layout following a grid based structure greets the person who visits Snapgram.
To encourage interaction, the optioin top sign in and sign up are highlighted. 

XXXXXXXXXXXXXXXX LAndingg page image

### Sign Up Page
Easy, straightforward and fast form needs to be filled in order for a new user to create an account. 
The option to sign in is found below the form. 

XXXXXXXXXXXXXXX SIGN UP PICTURE

### Sign In Page
Easy, straightforward and fast form needs to be filled in order for an existing user to acces their personal account.
Information can be saved as to make it easy for the user to sign in quickly.
The option to sign up is found below the form. 

XXXXXXXXXXXXXXXX LAndingg page image AGAIN

### Home Page
This is the landing page/feed for the signed in user of Snapgram. It contains the heart of the app; being greeted by the latest images and corresponding comments of friends.
The feed is sorted in chronological order, newest post being placed at the top of the page. Datestamp is pinned to the top of the post.
The suggested users are found on this page aswell.
The navbar and searchbar are also present as they simplify the site navigation.

XXXXXXXXXXXX IMAGE OF SIGNED IN FEED

### Upload Page
This allows the usser to select an image on the device, add a title to the image and a description.
By clicking "create" the post will be published.
The user can cancel the post at anytime by clicking "cancel".

XXXXXXXXXXXXXXXXX IMAGE OF UPLOAD

### Likes Page
The images one like can be saved to a separate feed by clickiing the heart icon under the upload. 
A feed sorted in chronological order is created allowing the user to view all prviously liked posts.
The feed of like-library can be found by clicking the heart-icon at the navigation bar pinned to the top. 

XXXXXXXXXXXXXXXX IMAGE OF LIKES

### Feed & Search Bar
To access a specific user´s feed, the list-icon is clicked. It opens up a page with a search bar that pushes the user to start typing the name of the user they wish to find. 
This also visualises the implementation of the search bar that is added as a function to Snapgram. 

XXXXXXXXXXXXXXX IMAGE OF FEED SEARCH

### AI Chat Bot
Snapgram is distinguishing itself from mainstream social media platforms by having an AI chat bot function as a part of the experience.
Depicted by the robot head, the AI function greets the user by commanding an imput in order to function.

XXXXXXXXXX IMAGE OF AI

### Events
Social media are built around digital and virtual experiences but including physical experiences attracts a larger audience.
Allowing people, companies and organisations to create events both digitally and physically creates a platform that encourages bonds to be built on all levels. 
Naturally, only events that fall in accordance with the rules and regulations of the platform are allowed.
The creator of the event can, at any time, edit/remove the advertising. 

XXXXXXXX IMAGE OF EVENTS

### Personal Profile
Only personal information about the specific user is found in this section.
When a user uploads a new post, it will be added to the page. If a post is edited or removed, the page will be updated in accordance to the changes made.
There is also a tally that keeps track of a users number of uploads, followers and following.
Adding/removing post(s)/person(s) results in an updated table displayiing the refreshed set of data.

XXXXXXXXX IMAGE OF PROFILE

### Edit & Delete Post
Users have the obvious option of editing an existing post or removing it completely. 
If they select edit, they can change image, title and description and repost it. The editing can be cancelled at anytime by presing cancel.

XXXXXXXXX IMAGE od EDIT 1   &    EDIT 2

### Edit & Delete Personal Profile
Users have the obvious option of editing an existing profile.
If they wish to edit, they can change profile picture, password, username and (by clicking "edit profile") change information presented in the bio. 
The editing can be cancelled at anytime by presing cancel.

XXXXXXXXXXX IImage of EDIT 3    &   EDIT 4

### Most Followed Profiles
In order to make it easy for people to find accounts of profiles they are most likley to interact with, a simple list with a number of usernames plus a "follow"-option are pinned at the side-bar.
Once "follow" has been selected, the user can choose to unfollow immidietly. 

XXXXXX Image of SIDEBAR

---

## Tech Used

### Components
This project features several reusable components that enhance functionality and user experience across various sections of the site:

- axiosDefault.js: Simplifies communication with the backend API.
- Asset.js: Provides assets like the loading spinner and user avatar used throughout the site.
- DropdownMenu.js: Enables users to edit or delete their Articles, Events, and Posts.
- CurrentUserContext.js: Checks the logged-in status of users to customize available functionalities.
- ProfileDataContext.js: Facilitates the following and unfollowing of other users within the PopProf and ProfPage components.
- ToggleCollapse.js: Currently used in the NavBarMini, this component is designed for potential future use in other dropdown menus to automate the collapse of elements with a mouse click.
- useRedirect.js: Manages redirections for unauthorized users attempting to access restricted pages.
- utils.js: Supports all components that implement the Infinite Scroll feature, enhancing their functionality.


### Languages
- CSS3
- JavaScript
- HTML5
- SQL - Postgres
- HTML5
  

### Frameworks & Programs

The development of the project involved a range of tools and resources to ensure a comprehensive and effective build:

- ReactJS: Utilized to construct the components that form the front-end application.
- Django: Employed to develop the backend database, functioning as an API for the front-end.
- GitPod: Used to build the project, creating JSX and CSS files before pushing them to GitHub.
- GitHub: Served as the storage for the project repository, facilitating submission.
- React-Bootstrap: A styling library that enhanced the site layout, introduced during our program.
- Google Fonts: Selected for the website’s typography.
- Font Awesome: Integrated to add icons to the social links in the footer and navigation sections.
- Balsamiq: Applied to create project mockups before development commenced.
- DrawSQL: An interactive tool used for creating database mock-ups to visualize model relationships.
- Am I Responsive?: Ensured the project's appearance was optimized across various devices.
- Favicon: Provided the necessary code and image for the browser tab icon.


### Deployed to Database
- ElephantSQL
- Heroku

---


## Testing
All tests for the Picagram have been passed, demonstrating its readiness for deployment and public use. See [full testing documentation](testing.md).

---

[⏫ contents](#contents)

## Bugs

---

## Deployment

### Connecting to API

### Deploy to Heroku

### Deploy to Render & ElephantSQL


---

## Credits

