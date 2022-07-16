import { combineReducers } from "@reduxjs/toolkit";
import user from "./state/user";
import products from "./state/products";
import shoppingCart from "./state/shoppingCart";
import currentPage from "./state/currentPage";
import pageSize from "./state/pageSize";

export default combineReducers({
  user,
  products,
  shoppingCart,
  currentPage,
  pageSize,
});
