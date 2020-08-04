import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Canvas from "./components/Canvas";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
