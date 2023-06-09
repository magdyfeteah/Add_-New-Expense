
import React ,{useState} from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
        ...enteredExpenseData,
        id :Math.random().toString()
    };
    props.onAddExpense(expenseData)
}
const [isEditing, setIsEditing] = useState(false)
const startEditing = ()=>{
    setIsEditing(true)
}
const stopEditing=()=>{
    setIsEditing(false)
}
return <div className="new-expense">
   { !isEditing && <button onClick={startEditing}>Add New Expense</button>}
{isEditing && <ExpenseForm onSaveExpensrData={saveExpenseDataHandler} onCancel = {stopEditing}/>}
</div>
}

export default NewExpense