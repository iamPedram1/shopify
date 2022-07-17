import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    itemAdded: (wishlist, { payload }) => {
      wishlist.push(payload);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      return wishlist;
    },
    itemRemoved: (wishlist, { payload }) => {
      wishlist = wishlist.filter((item) => item.id !== payload.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      return wishlist;
    },
    wishDataReceived: (wishlist, { payload }) => {
      wishlist = payload;
      return wishlist;
    },
  },
});

export const { itemAdded, itemRemoved, wishDataReceived } = slice.actions;
export default slice.reducer;
