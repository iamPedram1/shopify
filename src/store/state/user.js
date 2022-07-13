import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: { username: "Pedram", password: 123456 },
  reducers: {},
});

export default slice.reducer;
