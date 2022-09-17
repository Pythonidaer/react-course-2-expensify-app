// import validator from "validator";
// yarn run dev-server
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// sorted by date -> Gas bill
// sorted by amount -> Rent

// store.dispatch(setTextFilter("water"));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);
// console.log(store.getState());

// Now all of the components has access to the store
// Basically what it looks like for the rest of the course
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<AppRouter />, document.getElementById("app"));
ReactDOM.render(jsx, document.getElementById("app"));
