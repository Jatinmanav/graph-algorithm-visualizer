import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "../store/snackbar";

export default () =>
  configureStore({
    reducer: {
      snackbar: snackbarReducer,
    },
  });
