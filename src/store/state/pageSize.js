import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "pageSize",
  initialState: 999,
  reducers: {
    pageSizeChanged: (size, { payload }) => {
      return (size = payload);
    },
  },
});

export const { pageSizeChanged } = slice.actions;
export default slice.reducer;
