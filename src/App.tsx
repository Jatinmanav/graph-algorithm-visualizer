import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import { AdjacencyListContextProvider } from "./contexts/AdjacencyListContext";
import { CanvasContextProvider } from "./contexts/CanvasContext";

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
