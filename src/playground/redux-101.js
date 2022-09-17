import { createStore } from "redux";

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };

// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const resetCount = ({ count } = {}) => ({
  type: "RESET",
  count,
});

let a = 10;
const add = (b) => {
  // impure because it depends on a global variable
  return a + b;
};

// Reducer
// separate reducer - real world apps have multiple reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// gets called every time the store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
// store.subscribe(() => {
//   console.log(store.getState());
// });

// increment, decrement, reset
// allows us to change the state over time by dispatching various actions

// I'd like to increment the count
// capitalized is a convention in REDUX for action type name
// we want to send this off to the store
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());
// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
