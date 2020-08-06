import React, { useContext } from "react";
import "../styles/Header.scss";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";

const Header = () => {
  const { nodeList, edgeList, addNode, addEdge } = useContext(
    AdjacencyListContext
  );
  console.log(nodeList, edgeList, addNode, addEdge);

  const handleChange = (value: boolean): void => {
    console.log("test");
    if (value) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  return (
    <header className="navbar">
      <div className="toggle-container">
        <input
          type="checkbox"
          id="switch"
          className="toggle-switch"
          onClick={(event) => {
            handleChange((event.target as HTMLInputElement).checked);
          }}
        />
        <label className="toggle-label" htmlFor="switch">
          Toggle
        </label>
      </div>
    </header>
  );
};

export default Header;
