import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import { AdjacencyListContextProvider } from "./contexts/AdjacencyListContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <AdjacencyListContextProvider>
        <Header />
        <div className="container">
          <Canvas />
        </div>
      </AdjacencyListContextProvider>
    </div>
  );
};

export default App;
