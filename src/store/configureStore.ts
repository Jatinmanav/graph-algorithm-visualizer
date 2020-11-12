import { configureStore } from "@reduxjs/toolkit";
import adjacencyListReducer from "../store/adjacencyList";
import canvasReducer from "../store/canvas";
import snackbarReducer from "../store/snackbar";

export default () =>
  configureStore({
    reducer: {
      adjacencyList: adjacencyListReducer,
      canvas: canvasReducer,
      snackbar: snackbarReducer,
    },
  });
