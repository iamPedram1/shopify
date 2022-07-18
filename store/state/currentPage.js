import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "currentPage",
  initialState: 1,
  reducers: {
    pageChanged: (page, { payload }) => {
      return (page = payload);
    },
  },
});

export const { pageChanged } = slice.actions;
export default slice.reducer;
