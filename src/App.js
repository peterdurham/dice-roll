import React, { Component } from 'react';
import './App.css';
import Dice from './Dice/Dice';
import Button from './Button/Button';

class App extends Component {
  state = {
    diceNum: null,  
    rolls: [],  
    diceSum: '',
    numbers: [1,2,3,4,5]  
  }

  // parameters:
  //   num = number of dice to roll0
  // set state (diceNum, rolls, diceSum)
  diceRollHandler = (num) => {
    let diceRolls = [];
    let diceSum = 0;
    for(let i=0;i<num;i++){
      diceRolls[i]=Math.floor(Math.random()*6)+1;
      diceSum+=diceRolls[i];
    }
    this.setState({
      diceNum: num,
      rolls: diceRolls,
      diceSum : diceSum
    })
  }

  // render the gui
  render() {
    return (
      <div className="App">
        <h1 className="Title">Dice Roll</h1>
        <div className="buttons">
          {this.state.numbers.map((number)=><Button num = {number} diceRoll = {this.diceRollHandler}/>)}
        </div>
        
        <br/><br/>
        {this.state.rolls.map((roll)=> <Dice roll={roll}/>)}
        <h2>Roll Total: <span className="Sum">{this.state.diceSum}</span> / {this.state.diceNum*6}</h2>
      </div>
    );
  }
}





export default App;
