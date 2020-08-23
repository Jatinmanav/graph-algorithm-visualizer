import React from "react";
import { AdjacencyListContextProvider } from "./contexts/AdjacencyListContext";
import { CanvasContextProvider } from "./contexts/CanvasContext";
import "./styles/App.scss";
import Header from "./components/Header";
import Canvas from "./components/Canvas";

const App: React.FC = () => {
  return (
    <div className="App">
      <AdjacencyListContextProvider>
        <CanvasContextProvider>
          <Header />
          <div className="container">
            <Canvas />
          </div>
        </CanvasContextProvider>
      </AdjacencyListContextProvider>
    </div>
  );
};

export default App;
