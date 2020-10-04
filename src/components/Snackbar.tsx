import React, { useState } from "react";
import "../styles/Snackbar.scss";

const Snackbar = () => {
  const [message, setMessage] = useState<String>("Test String");
  return (
    <div className="snackbar-container">
      <p className="snackbar-text">{message}</p>
    </div>
  );
};

export default Snackbar;
