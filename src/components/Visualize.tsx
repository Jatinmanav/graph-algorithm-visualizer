import React from "react";
import "../styles/Visualize.scss";

const Visualize = () => {
  console.log("rendered");
  return (
    <div className="visualize-container">
      <select name="algorithm" className="visualize-select">
        <option className="visualize-option">Topological Sort</option>
        {/* <option className="visualize-option"></option>
        <option className="visualize-option"></option>
        <option className="visualize-option"></option>
        <option className="visualize-option"></option>
        <option className="visualize-option"></option> */}
      </select>
      <div className="visualize-button">Visualize</div>
    </div>
  );
};

export default Visualize;
