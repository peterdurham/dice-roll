import React from 'react';
import './Button.css';

const Button = (props) => {
    let button = (props.num === 1) ?
    <button className="Button" onClick={()=>props.diceRoll(props.num)}>Roll {props.num} die</button> :
    <button className="Button" onClick={()=>props.diceRoll(props.num)}>Roll {props.num} dice</button>
    
    return(
        <div>{button}</div>
    );
}

export default Button;