import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, reduxDev(applyMiddleware(thunk)));

export default store;
