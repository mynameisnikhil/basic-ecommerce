import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/all.js";
import "./index.css";
import "./filtersboxstyle.css";
import "./productCard.css";

// const loadstate = () => {
//   try {
//     const state = localStorage.getItem("state");
//     if (state == null) return undefined;
//     return JSON.parse(state);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// };

const saveToLocalStorage = state => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};

const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const localStorageState = loadState();
const store = createStore(allReducers, localStorageState);

//Subscribe my store to local storage so Everytime state will change, local storage will updates
store.subscribe(() => saveToLocalStorage(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  rootElement
);
