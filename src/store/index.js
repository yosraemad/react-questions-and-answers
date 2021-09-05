import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questions-slice";

const store = configureStore({ reducer: questionsSlice.reducer });

export default store;
