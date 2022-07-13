import { createSlice, createAction } from "@reduxjs/toolkit";

// Create Action

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

//Create Reducer
const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    productsReceived: (data, action) => {
      action.payload.forEach((item) => data.push(item));
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
