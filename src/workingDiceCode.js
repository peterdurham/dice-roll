import React, { Component } from 'react';
import './App.css';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';

class App extends Component {
  state = {
    diceNum: null,
    rolls: [],
    diceSum: ''
  }

  diceRollHandler = (num) => {
    this.setState({diceNum: num})
    let diceRolls = [];
    let diceSum = 0;
    for(let i=0;i<num;i++){
      diceRolls[i]=Math.floor(Math.random()*6)+1;
      diceSum+=diceRolls[i];
    }
    this.setState({
      rolls: diceRolls,
      diceSum : diceSum
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Dice Game</h1>
        <button onClick = {()=>this.diceRollHandler(1)}>Roll 1 die</button>
        <button onClick = {()=>this.diceRollHandler(2)}>Roll 2 dice</button>
        <button onClick = {()=>this.diceRollHandler(3)}>Roll 3 dice</button>
        <button onClick = {()=>this.diceRollHandler(4)}>Roll 4 dice</button>
        <button onClick = {()=>this.diceRollHandler(5)}>Roll 5 dice</button>

        <br/><br/>
        {this.state.rolls.map((roll)=>{
          if(roll === 1){
            return <img src={one}/>
          } else if( roll===2){
            return <img src={two}/>
          } else if( roll===3){
            return <img src={three}/>
          } else if( roll===4){
            return <img src={four}/>
          } else if( roll===5){
            return <img src={five}/>
          } else if( roll===6){
            return <img src={six}/>
          }
        })}
        <h3>Roll Sum: {this.state.diceSum}/{this.state.diceNum*6}</h3>
      </div>
    );
  }
}
