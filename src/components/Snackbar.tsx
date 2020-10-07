import React, { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";
import "../styles/Snackbar.scss";
import snackbarProvider from "../types/snackbarProvider";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

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
