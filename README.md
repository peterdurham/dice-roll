## :game_die: Dice Roll 

Basic **React** App built using Create React App

## Instructions
To install, clone or download the package

in the root directory, run the command
`npm install` 
to install dependencies

then run the command 
`npm start` 
to host the project and view it in your browser

## Tools
This project was built using Create-React-App
This project is hosted on Github Pages [Hosted App](http://https://peterdurham.github.io/dice-roll/)


### Create and Deploy Simple apps using React & Github Pages

React is a library for building dynamic HTML views using Javascript. Create React App is a great way to get started using React with minimal configuration.

In this tutorial I will be building a dice roll simulator using Create React App

In order to get started, first make sure you have Node installed
[Link to Node Install](https://nodejs.org/en/)

My create-react-app project will be called dice-roll
Choose a name for your own project

Then type the command
`npx create-react-app project-name`
to build out the main files for your project

## Initial Setup

Your Project folder should look like this: 
<img src="http://www.peterdurham.site/images/tutorials/cra-demo.jpg" alt="create react app setup" />

Create React App provides us with some files and lines of code we can delete

Delete the following files for a basic setup:
`-App.test.js`
`-index.css`
-logo.svg
-serviceWorker.js

Then remove: 
-the imports for 'logo.svg' and 'App.css' from `App.js`
-the import for 'index.css', '* as serviceWorker', and serviceWorker.unregister(); from `index.js`
-all the code inside <div className="App"></div> in `App.js`

Now, with the project cleaned up we can begin building

## The Plan
We will be building an app that allows the user to roll between 1 and 5 dice, and displays the results using dice images.




