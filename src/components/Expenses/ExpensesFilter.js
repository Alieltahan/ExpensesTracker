import React from "react";

import "./ExpensesFilter.css";

const dateNow = new Date();
const year = dateNow.getFullYear();

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const dropdownChangeHandlerMonth = (event) => {
    props.onChangeFilterMonth(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value={year - 2}>{year - 2}</option>
          <option value={year - 1}>{year - 1}</option>
          <option value={year}>{year}</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filter by Month</label>
        <select
          value={props.selectedMonth}
          onChange={dropdownChangeHandlerMonth}
        >
          <option value="All">All</option>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Aug</option>
          <option value="8">Sep</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
