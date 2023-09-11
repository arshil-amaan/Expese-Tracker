import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses for Selected Year</h2>;
  }
  return <ul className="expenses-list">
    {props.items.map((item) => {
      return <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    })};
  </ul>;
}

export default ExpenseList;