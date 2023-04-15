import React, { useState } from "react";

import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense =props.item.filter(expense =>{
    return  expense.date.getFullYear().toString() ===filteredYear
    })

   
    
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandle}
        />
        <ExpenseChart expenses ={filteredExpense}/>
        <ExpensesList item = {filteredExpense} />
      </Card>
    </div>
  );
  }

export default Expenses;
