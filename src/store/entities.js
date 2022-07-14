import { combineReducers } from "@reduxjs/toolkit";
import user from "./state/user";
import products from "./state/products";
import shoppingCart from "./state/shoppingCart";
export default combineReducers({
  user,
  products,
  shoppingCart,
});
