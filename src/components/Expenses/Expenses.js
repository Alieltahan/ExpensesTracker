import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  // const [yearList, setYearList] = useState("");

  // props.handleYear.length === 1 && setFilteredYear(props.handleYear[0]);
  // const yearArray = props.items.map((y) => y.date.getFullYear().toString());
  // const yearList = Array.from(new Set(yearArray));

  // console.log(yearList);
  // yearList.length === 0 && setFilteredYear(yearList[0]);
  // console.log(yearList);
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const [filteredYear, setFilteredYear] = useState(`${year}`);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const filteredExpenses = props.items.filter((expense) => {
  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear().toString(), "Filter");
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          items={props.items}
          yearList={props.handleYear}
          // filterYearChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          onHandleDelItem={props.onHandleClick}
          items={filteredExpenses}
        />
      </Card>
    </div>
  );
};

export default Expenses;
