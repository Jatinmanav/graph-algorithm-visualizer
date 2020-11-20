import { configureStore } from "@reduxjs/toolkit";
import adjacencyListReducer from "../store/adjacencyList";
import snackbarReducer from "../store/snackbar";

export default () =>
  configureStore({
    reducer: {
      adjacencyList: adjacencyListReducer,
      snackbar: snackbarReducer,
    },
  });
