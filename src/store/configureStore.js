import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";

export default configureStore({
  reducer: entitiesReducer,
});
