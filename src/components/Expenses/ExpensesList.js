import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="expenses-list__fallback">Found no expenses.</h2>{" "}
        <p className="expenses-item__pragraph">
          Expenses tracker App for the past 2 years
        </p>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {!props.items
        ? null
        : props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              onHandleDelItem={props.onHandleDelItem}
            />
          ))}
      <div className="card expense-item ">
        <div className="expense-item__description expense-item__description--title">
          <h2>Total</h2>{" "}
        </div>
        <div className="expense-item__price total">
          {new Intl.NumberFormat(navigator.language).format(
            props.items.map((v) => +v.amount).reduce((curr, acc) => acc + curr)
          )}
        </div>
      </div>
      <div className="expenses-item__pragraph">
        Expenses tracker App for the past 2 years
        <div>&copy; 2021</div>
      </div>
    </ul>
  );
};

export default ExpensesList;
