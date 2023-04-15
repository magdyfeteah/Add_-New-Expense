import React from "react";
import  './ExpensesList.css'
import ExpeneItem from "./ExpenseItem";
const ExpensesList = (props)=>{

    if (props.item.length ===0) {
    return <h2 className="expenses-list__fallback ">No Found Expenses</h2>
}
return <ul className="expenses-list">
    {props.item.map((expense) => 
      <ExpeneItem
      key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
     
        />
    )}
</ul>
}

export default ExpensesList