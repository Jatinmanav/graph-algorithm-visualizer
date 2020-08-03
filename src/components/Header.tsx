import React from "react";
import "../styles/Header.scss";

const Header = () => {
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
          className="toggleSwitch"
          onClick={(event) => {
            handleChange((event.target as HTMLInputElement).checked);
          }}
        />
        <label htmlFor="switch">Toggle</label>
      </div>
    </header>
  );
};

export default Header;
