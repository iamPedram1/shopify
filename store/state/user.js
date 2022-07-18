import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userLoggedIn: (user, { payload }) => {
      user = payload;
      localStorage.setItem("jwt", payload);
      return user;
    },
    userLoggedOut: (user, { payload }) => {
      user = {};
      localStorage.removeItem("jwt");
      return user;
    },
  },
});

export default slice.reducer;
