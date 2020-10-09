import React, { useState, ReactNode, createContext } from "react";
import snackbarProvider from "../types/snackbarProvider";

const initialState = {
  open: false,
  message: "",
  toggleSnackbar: (message: string = "") => {},
};

export const SnackbarContext = createContext<snackbarProvider>(initialState);

type Iprops = {
  children: ReactNode;
};

export const SnackbarContextProvider = (props: Iprops) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const toggleSnackbar = (message: string = "") => {
    if (message.length < 1) {
      setOpen(false);
      setMessage("");
    } else {
      setOpen(true);
      setMessage(message);
    }
  };

  return (
    <SnackbarContext.Provider value={{ open, message, toggleSnackbar }}>
      {props.children}
    </SnackbarContext.Provider>
  );
};
