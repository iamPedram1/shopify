import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import products from "./products";

export default combineReducers({
  user,
  products,
});
