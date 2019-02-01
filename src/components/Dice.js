import React from "react";
import "../App.css";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";

const Dice = ({ roll }) => {
  if (roll === 1) {
    return <img className="Dice" src={one} alt="1" />;
  } else if (roll === 2) {
    return <img className="Dice" src={two} alt="2" />;
  } else if (roll === 3) {
    return <img className="Dice" src={three} alt="3" />;
  } else if (roll === 4) {
    return <img className="Dice" src={four} alt="4" />;
  } else if (roll === 5) {
    return <img className="Dice" src={five} alt="5" />;
  } else if (roll === 6) {
    return <img className="Dice" src={six} alt="6" />;
  }
};

export default Dice;
