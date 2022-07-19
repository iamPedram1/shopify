import { combineReducers } from "@reduxjs/toolkit";
import products from "./state/products";
import shoppingCart from "./state/shoppingCart";
import currentPage from "./state/currentPage";
import pageSize from "./state/pageSize";
import wishlist from "./state/wishlist";
import checkout from "./state/checkout";

export default combineReducers({
  products,
  shoppingCart,
  currentPage,
  pageSize,
  wishlist,
  checkout,
});
