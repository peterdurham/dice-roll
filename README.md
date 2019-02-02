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

<img src="http://www.peterdurham.site/images/tutorials/cra-demo.jpg" alt="create react app setup" align="center" width="500" height="337"/>

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

- `numberOfDice`: number of dice selected
- `rolls`: results (roll) of each die
- `rollSum`: sum of the rolls

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

Now that the functionality is set up, we need a way to trigger the `diceRoll` function. We will next wire up 5 different buttons, one for each `numberOfDice` option.

React allows us to map over arrays and return JSX (html created with javascript) in our component. We will map over the integers 1-5 and make buttons that trigger the `diceRoll` method, passing in the number of dice for the button text.

```javascript
<div className="buttons">
  {[1, 2, 3, 4, 5].map(number => {
    let text = number === 1 ? "die" : "dice";
    return (
      <button
        key={number}
        onClick={() => this.diceRoll(number)}
        className="button"
      >
        {number} {text}
      </button>
    );
  })}
</div>
```

In this code, for each number in the array, map returns a button with a `key` (unique identifer for React), an `onClick` function calling `diceRoll` with the `number` passed in as an argument, the `number` from the array, and a `text` label so that our app doesn't say '1 dice'.

We can now test our app by running it in the browser using `npm start`.

This step involves using React Devtools, so if you don't have it installed go here:

[React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

With the Devtools installed, now open your browsers devtools (f12 for chrome) and switch to the React tab.

Your browser should look something like this when you click one of the buttons.

<img src="http://www.peterdurham.site/images/tutorials/cra-demo2.jpg" alt="create react app setup" />


## Display the results using dice images

Now that we have our dice roll logic working using buttons and our results stored in state, we can render different images based on what the roll was.

For this I created a folder called `assets` in the `src` directory and added 6 image files (one for each result). To download the images, run the [hosted application](https://peterdurham.github.io/dice-roll/) and copy them to your folder.

To import the image files, add the following code to the top of `App.js`

```javascript
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";
```

Make sure the folders and file names all line up, and then we can work on rendering them to the page.

Now we need to associate each image file with a number 1-6. One way we can do this is to create a seperate component below the `App` class in `App.js` which will receive a `number` as props and render a picture for that number accordingly.

```javascript
const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src={one} alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src={three} alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src={four} alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src={five} alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src={six} alt="6" />;
  }
};
```

Here we have a stateless functional component called `DiceImage` which receives the prop `roll` and checks if it is each value 1-6. The component returns an image (JSX) which can be rendered in the `App` component.

In our `App.js` file, under the div with `className=buttons` add the following:

```javascript
{
  this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />);
}
```

We are mapping our `rolls` array into `DiceImage` components that have the `roll` value and a unique `key` passed as props.

### Show the sum of the rolls

Lastly we need to display the sum of the rolls which we have stored in `this.state.rollSum`. We can also display the total possible roll given the number of dice.

```javascript
{
  this.state.numberOfDice ? (
    <h2>
      Roll Total: <span className="sum">{this.state.rollSum}</span> /{" "}
      {this.state.numberOfDice * 6}
    </h2>
  ) : null;
}
```

In this code, I am including a ternary operator so that the h2 is only displayed if `this.state.numberOfDice` is not null. When the user clicks a button, `numberOfDice` is switched from the default of `null` to a number `1-5`. Each side of the colon above represent the JSX to return if the condition is `true` or `false`. If the number of dice is `null` we don't want to display anything.

## Styling the app

Now that we have the functionality of the dice roll app built out, we can add css to the project. Here are some basic styles that I made, feel free to make your own or adjust mine.

```javascript
.App {
  text-align: center;
  border: 1px solid grey;
  background-color: rgb(250, 250, 250);
  margin: auto;
  width: 1000px;
  height: 450px;
  margin-top: 50px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.button {
  background-color: rgb(27, 136, 27);
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  margin-right: 10px;
}

.dice-image {
  margin: 10px;
}

.sum {
  font-size: 48px;
}
```

## Deploy to Github Pages

Now that we have a working application, we can push it to github and deploy it to Github Pages. First thing to do is make sure you have a Github account, and git on your computer.

Before deploying the app, make sure that everything works in the browser and that all files are saved.

### Create a repository

Login to Github and create a new repository for your app. Github will provide you with a link to your repository when you create it. Copy this link.

<img src="http://www.peterdurham.site/images/tutorials/cra-demo3.jpg" alt="create react app setup" />

### Push project to Github

Next type the following commands to commit the project:

`git init`  
creates a new git repository

`git add .`  
adds changed files to staged changes

`git commit -m "initial commit"`  
commits staged changes

Next connect your git repository to Github by pasting
in your remote to the following command:

`git remote add origin https://github.com/peterdurham/dice-roll-demo.git`  
adds remote repository

`git push origin master`  
pushes your project to the master branch on Github

### Setup GH Pages

Next, in the project folder run the command:

`yarn add gh-pages`  
installs Github Pages package

In the `package.json` file add the following line, replacing `user-name` and `repo-name` with your github name and repo names

```javascript
"homepage": "https://user-name.github.io/repo-name/",
```

Also add the following 2 lines to the list of scripts in `package.json`

```javascript
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

This tells github pages how to setup your project

Lastly run the following command to publish your React Application:

```javascript
yarn run deploy
```

Congratulations, you have just built and deployed a simple React application using create-react-app and Github Pages!!!
