import { createSlice } from "@reduxjs/toolkit";

// Local Storage

const addToLocalStorage = (value) => {
  localStorage.setItem("cart", JSON.stringify(value));
};

// Action Creater
const slice = createSlice({
  name: "shoppingCart",
  initialState: [],
  reducers: {
    itemAdded: (cart, { payload }) => {
      let itemItsInState = false;
      let itemIndex;

      if (cart.length === 0) {
        cart.push({
          ...payload,
          count: 1,
        });
        addToLocalStorage(cart);
      } else {
        cart.map((item) => {
          if (item.id === payload.id) {
            itemItsInState = cart.includes(item);
            itemIndex = cart.indexOf(item);
          }
        });
        if (itemItsInState) {
          cart[itemIndex].count = cart[itemIndex].count + 1;
          addToLocalStorage(cart);
          return cart;
        } else {
          cart.push({
            ...payload,
            count: 1,
          });
          addToLocalStorage(cart);
        }
      }
    },
    itemRemoved: (cart, { payload }) => {
      let updatedCart;
      cart.forEach((item) => {
        if (item.id === payload.id) {
          if (item.count === 1) {
            updatedCart = cart.filter((item) => item.id !== payload.id);
          } else {
            const itemIndex = cart.indexOf(item);
            cart[itemIndex].count = cart[itemIndex].count - 1;
            updatedCart = cart;
          }
        }
      });
      addToLocalStorage(cart);
      return updatedCart;
    },
    cartDataReceived: (cart, { payload }) => {
      return (cart = payload);
    },
  },
});
export const { itemAdded, itemRemoved, cartDataReceived } = slice.actions;
export default slice.reducer;
