import { combineReducers } from "@reduxjs/toolkit";
import user from "./state/user";
import products from "./state/products";

export default combineReducers({
  user,
  products,
});
