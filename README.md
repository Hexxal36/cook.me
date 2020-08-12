# Cook.me
## A cookbook for everyone

Cookme is a platform designed to give users the ability to share their recipes with the world.

## How to run the app
1. Either fork or download the app and open the folder in the cli
2. Install the dependencies in the main folder using 'npm i'
3. Start the web server by using the 'npm start' command. The app will be served at http://localhost:3000/
4. Install the dependencies in the restapi folder using 'npm i'
5. Setup your MongoAtlas db by editing the dbUrl in ./restapi/config/config.js
6. Start the backend web server by using the 'nodemon' command in the restapi folder of the project
7. Go to http://localhost:3000/ and start creating your recipes

## User Stories
  - A user can create an account
  - A user can create a recipe
  - A user can edit and delete their own recipe
  - A user can comment on all recipes
  - A user can search for a recipe
  - A user can customize their profile icon
 
## Features
  - Users
    * A user can register a profile
    * A user can log into their profile
      ** Some pages in the app require the user to be logged in and if they are not, they will get redirected to the login page
      
  - Recipe
    * Recipes have a title, an image, a list of ingredients, time and a description
    * Recipes have validation checks
    * All users can see all recipes
    * Recipes get send to a backend, where they are stored
    * Recipes can be opened to show their own page
    * Editing a recipe
      ** If a user is the creator of a recipe they will have access to the editing page of that recipe
      ** The backend checks if the creator has permissions to edit a given recipe before editing the db
    * Deleting a recipe
      ** If a user is the creator of a recipe thew will have access to the delete button of said recipe
      ** The backend checks if the creator has permissions to delete a given recipe before editing the db 

  - Commenting on a recipe
    * All users (logged in or not) can comment as many comments as they want on as many recipes as they want
    * Once a users comments on a recipe the comment box disappears
      ** If the user enters the same recipe page the comment box will be shown again
      ** This is done to prevent spam and will be one of the first revisited features
    * Comments cannot be deleted but are deleted with the deletion of a recipe
      ** This is another feature that may change in the future
  
  - Profile customization
    * A logged in user can change their profile picture to 1 of 8 custom pictures
    
  - Searching for a recipe
    * All users (logged in or not) can search for a recipe based on its title

## Future features
  - CRUD operations for comments
  - More user interactions
    * Show the author for a recipe
    * A public profile page for every user with all their recipes
  - Pagination on the main page (for the list of recipes)
  - Create a meal
    * Every recipe will have a category
    * A user can click the create a meal button and select different dishes from those categories
    * Once they have selected their wanted dishes, the app will sort them by time
    * The user can say when they want the meal to be ready
    * Then the app will setup timers to send notification on when the user needs to make a dish
      ** For example if its 1 hour to dinner and the recipe takes 45 min to be prepared, after 15 min the app will notify the user to begin with the recipe
      ** This will be done to ensure a warm/fresh meal 
  - More user profile pictures
    * Have at least 10 custom pictures
      ** Currently there are 8 profile picture 4 men and 4 women with different background colors
      ** I would like to have 10 different profile pictures with the option each of them to be male or female and 4 backgrounds for the 20 different presets
      ** This will be a total of 80 pictures
    * A new interface to change the profile picture

### How to setup an account
1. Click the second button at the top of the page, which will display the login page
2. Below the form of the login page there is a prompt, asking you if you have a profile, if you dont click on the 'Register' link
3. Enter a unique username and a password in the 2 password fields
4. Click the register button.
5. This will create an account an log you into it

### How to log into an account 
1. Click the second button at the top of the page, which will display the login page
2. Fill out your account credentials
3. Click the login button

### How to create a recipe
1. Log in an account
2. Click the 'Create a recipe' button that is displayed on the left sidebar
3. Fill out the recipe details and add your image of the final product
4. Click the 'Create' button at the bottom of the form

### How to edit a recipe
1. Log in an account
2. Click on a recipe that you have created from this account
3. At the top of the recipe page there should be 2 buttons - 1 for editing and 1 for deleting the recipe
4. Click on the edit button
5. Fill out the recipe details and add your image of the final product
6. Click the 'Edit' button at the bottom of the form

### How to delete a recipe
1. Log in an account
2. Click on a recipe that you have created from this account
3. At the top of the recipe page there should be 2 buttons - 1 for editing and 1 for deleting the recipe
4. Click on the delete button

### How to change profile picture
1. Log in an account
2. Click the big image in a circle on the left sidebar
3. Choose your desired profile picture

### How to comment on a recipe
1. Click on a recipe to open the recipe page
2. Select the textarea with the label 'Comment'
3. Enter your comment
4. Click the comment button
