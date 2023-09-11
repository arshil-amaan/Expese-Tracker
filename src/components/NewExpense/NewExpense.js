import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  return (
    <div className='new-expense'>
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      }
      {!isEditing &&
        <button onClick={startEditingHandler}>Add Expense</button>
      }
    </div>
  );
};

export default NewExpense;