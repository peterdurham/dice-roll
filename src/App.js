import React, { Component } from "react";
import "./App.css";

import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <h1>Dice Roll</h1>
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

        {this.state.rolls.map((roll, index) => (
          <DiceImage roll={roll} key={index} />
        ))}
        {this.state.numberOfDice ? (
          <h2>
            Roll Total: <span className="sum">{this.state.rollSum}</span> /{" "}
            {this.state.numberOfDice * 6}
          </h2>
        ) : null}
      </div>
    );
  }
}

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

export default App;
