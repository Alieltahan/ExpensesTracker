import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const initialState = () =>
    JSON.parse(localStorage.getItem("bookExpenses") || null);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [localStorageExpenses, setlocalStorageExpenses] =
    useState(initialState);

  useEffect(
    () =>
      window.localStorage.setItem(
        "bookExpenses",
        JSON.stringify(localStorageExpenses)
      ),
    [localStorageExpenses]
  );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // localStorage.setItem("bookExpenses", JSON.stringify(expenses));
    setlocalStorageExpenses(expenses);
  };

  const handleDelItem = (id) => {
    const updatedExpense = expenses.filter((exp) => exp.id !== id);
    setExpenses(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onHandleClick={handleDelItem} />
    </div>
  );
};

export default App;
