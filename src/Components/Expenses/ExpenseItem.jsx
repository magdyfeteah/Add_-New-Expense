import React from 'react'

import "./ExpeneItem.css";
import Card from '../UI/Card'
import ExpeneDate from "./ExpeneDate";


const ExpeneItem= (props) =>{


  return (
    <li>
    <Card className="expense-item">
      <ExpeneDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card></li>
  );
}

export default ExpeneItem;
