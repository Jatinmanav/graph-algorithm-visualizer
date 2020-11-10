import React, { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import snackbarProvider from "../types/snackbarProvider";
import "../styles/Snackbar.scss";

const Snackbar = () => {
  const { open, message, toggleSnackbar } = useContext<snackbarProvider>(
    SnackbarContext
  );
  return (
    <div>
      {open ? (
        <div className="snackbar-container">
          <p className="snackbar-text">{message}</p>
          <CloseIcon
            onClick={() => toggleSnackbar()}
            className="snackbar-close-icon"
          />
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Snackbar;
