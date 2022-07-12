import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiCreateAction";

const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    productsReceived: (data, action) => {
      data.push(action.payload);
    },
    productsReceiveFailed: (data, action) => {},
  },
});

export const { productsReceived } = slice.actions;

export default slice.reducer;

export const loadProducts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      onSuccess: productsReceived.type,
    })
  );
};
