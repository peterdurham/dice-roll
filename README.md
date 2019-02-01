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

create-react-app will ask you for a project name

Open up the command line and type:  
  
`npx create-react-app project-name`  
  
to build out the main files for your project

## Initial Setup

Your Project folder should look like this: 
<img src="http://www.peterdurham.site/images/tutorials/cra-demo.jpg" alt="create react app setup" />

Create React App makes a lot of files for configuration. Since we only need a basic setup, we can delete the following files:  
- `App.test.js`  
- `index.css`  
- `logo.svg`  
- `serviceWorker.js`  

Since we deleted files which are imported in `index.js` and `App.js`, we will clean up those files by replacing them with the following code

In `index.js`:  
```Javascript  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
``` 
  
  
In `App.js`
```javascript
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dice Roll Demo</h1>
      </div>
    );
  }
}

export default App;
```

We can now view the application in our browser by typing:  
  
`npm start`
  
## The Application
The app we are building will:  
1. allow the user to roll between 1 and 5 dice  
2. display the results using dice images  
3. show the sum of the rolls. 


### Allow the user to roll between 1 and 5 dice

We will be using React to store the following data in component state:  
  
- number of dice selected  
- results (roll) of each die  
- sum of the rolls  

We can store all this data with a single function `diceRoll` which accepts a number between 1 and 5 as its argument  
  
```javascript
diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
  };
```

First, we initialize an empty array for the `rolls` (results) and set the `rollSum` to 0. Since, the function has a number between 1 and 5 as its argument, we can loop over this number. In each iteration of the loop we can store a random integer between 1 and 6 to the `rolls` array and add it to the `rollSum` variable.

This function is written purely in javascript, but we need React to store our data so we can display to to user. We will be using the method `setState` to store our `numberOfDice`, `rolls`, and `rollSum` variables in the component state.  

To add this functionality, add the follow code to `App.js` inside of the App class and above the render method  
  
```javascript
state = {
    numberOfDice: null,
    rolls: [],
    rollSum: null
  };

  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };
  ```





