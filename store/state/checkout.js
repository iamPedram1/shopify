import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "checkout",
  initialState: { shipping: {}, payment: {} },
  reducers: {
    shippingDetailsChanged: (state, { payload }) => {
      state.shipping = payload;
      return state;
    },
    paymentDetailsChanged: (state, { payload }) => {
      state.payment = payload;
      return state;
    },
  },
});

export const { shippingDetailsChanged, paymentDetailsChanged } = slice.actions;
export default slice.reducer;
