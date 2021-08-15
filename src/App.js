import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e4",
    title: "TEST",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function useLocal() {
  const initialState = () =>
    JSON.parse(window.localStorage.getItem("bookExpenses")) || DUMMY_EXPENSES;

  const [expenses, setExpenses] = useState(initialState);
  const addExpenseHandler = (expense) => {
    if (!expense) return;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(
    () => window.localStorage.setItem("bookExpenses", JSON.stringify(expenses)),
    [expenses]
  );
  const handleDelItem = (id) => {
    const expensesClone = [...expenses];
    const updatedExpense = expensesClone.filter((exp) => exp.id !== id);
    setExpenses(updatedExpense);
  };
  return { addExpenseHandler, expenses, handleDelItem };
}

const App = () => {
  const { expenses, addExpenseHandler, handleDelItem } = useLocal();
  return (
    <React.StrictMode>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} onHandleClick={handleDelItem} />
      </div>
    </React.StrictMode>
  );
};

export default App;
