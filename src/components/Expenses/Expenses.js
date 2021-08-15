import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const [filteredYear, setFilteredYear] = useState(`${year}`);
  const [filteredMonth, setFilteredMonth] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const handleFilterMonth = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return filteredMonth === "All"
      ? expense.date.getFullYear().toString() === filteredYear
      : expense.date.getFullYear().toString() === filteredYear &&
          expense.date.getMonth().toString() === filteredMonth;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          onChangeFilterMonth={handleFilterMonth}
          items={props.items}
          selectedMonth={filteredMonth}
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
