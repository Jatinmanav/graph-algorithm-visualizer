import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_MESSAGE,
  getSnackBarMessageReducer,
  getSnackBarStateReducer,
} from "../store/snackbar";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import "../styles/Snackbar.scss";

const Snackbar = () => {
  const dispatch = useDispatch();

  const open = useSelector(getSnackBarStateReducer);
  const message = useSelector(getSnackBarMessageReducer);

  return (
    <div>
      {open ? (
        <div className="snackbar-container">
          <p className="snackbar-text">{message}</p>
          <CloseIcon
            onClick={() => dispatch(CLEAR_MESSAGE())}
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
