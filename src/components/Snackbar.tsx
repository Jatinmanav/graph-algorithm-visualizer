import React, { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";
import "../styles/Snackbar.scss";
import snackbarProvider from "../types/snackbarProvider";

const Snackbar = () => {
  const { open, message } = useContext<snackbarProvider>(SnackbarContext);
  return (
    <div>
      {open ? (
        <div className="snackbar-container">
          <p className="snackbar-text">{message}</p>
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Snackbar;
