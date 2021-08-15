import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// import Expenses from './components/Expenses/Expenses'

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
  // console.log(JSON.parse(storage));
  //  setlocalStorageExpenses(JSON.parse(storage));

  const [expenses, setExpenses] = useState(initialState);
  const addExpenseHandler = (expense) => {
    if (!expense) return;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // localStorage.setItem("bookExpenses", JSON.stringify(expenses));
    // setlocalStorageExpenses(expenses);
  };

  useEffect(
    () =>
      window.localStorage.setItem(
        "bookExpenses",
        // setExpenses(JSON.stringify(localStorageExpenses))
        JSON.stringify(expenses)
      ),
    [expenses]
  );
  const handleDelItem = (id) => {
    const expensesClone = [...expenses];
    const updatedExpense = expensesClone.filter((exp) => exp.id !== id);
    setExpenses(updatedExpense);
    // console.log(updatedExpense);
  };
  return { addExpenseHandler, expenses, handleDelItem };
}

const App = () => {
  const { expenses, addExpenseHandler, handleDelItem } = useLocal();
  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [localStorageExpenses, setlocalStorageExpenses] = useState([]);

  // const handleDelItem = (id) => {
  //   const expensesClone = [...expenses];
  //   const updatedExpense = expensesClone.filter((exp) => exp.id !== id);
  //   setExpenses(updatedExpense);
  //   // console.log(updatedExpense);
  // };

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
