import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  open: boolean;
  message: string;
};

const initialState: SliceState = {
  open: false,
  message: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    CLEAR_MESSAGE: () => {
      return {
        open: false,
        message: "",
      };
    },

    SET_MESSAGE: (state, action: PayloadAction<string>) => {
      return {
        open: true,
        message: action.payload,
      };
    },
  },
});

export const getSnackBarStateReducer = (state: { snackbar: SliceState }) =>
  state.snackbar.open;

export const getSnackBarMessageReducer = (state: { snackbar: SliceState }) =>
  state.snackbar.message;

export const { CLEAR_MESSAGE, SET_MESSAGE } = snackbarSlice.actions;
export default snackbarSlice.reducer;
