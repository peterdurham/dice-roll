import React, { Component } from 'react';
import './App.css';
import Dice from './Dice/Dice';

class App extends Component {
  state = {
    diceNum: null,
    rolls: [],
    diceSum: ''
  }

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

  render() {
    return (
      <div className="App">
        <h1 className="Title">Dice Roll</h1>
        <button className="Button" onClick = {()=>this.diceRollHandler(1)}>Roll 1 die</button>
        <button className="Button" onClick = {()=>this.diceRollHandler(2)}>Roll 2 dice</button>
        <button className="Button" onClick = {()=>this.diceRollHandler(3)}>Roll 3 dice</button>
        <button className="Button" onClick = {()=>this.diceRollHandler(4)}>Roll 4 dice</button>
        <button className="Button" onClick = {()=>this.diceRollHandler(5)}>Roll 5 dice</button>
        <br/><br/>
        {this.state.rolls.map((roll)=> <Dice roll={roll}/>)}
        <h2>Roll Total: <span className="Sum">{this.state.diceSum}</span> / {this.state.diceNum*6}</h2>
      </div>
    );
  }
}





export default App;
