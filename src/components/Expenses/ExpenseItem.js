import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button className="expense-item__del" onClick={props.onHandleDelItem}>
            X
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;