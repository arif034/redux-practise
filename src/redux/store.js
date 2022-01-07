import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducer.js";
export const store = createStore(CakeReducer);
