import React from "react";
import { AdjacencyListContextProvider } from "./contexts/AdjacencyListContext";
import { CanvasContextProvider } from "./contexts/CanvasContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";
import "./styles/Variables.scss";
import "./styles/App.scss";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Visualize from "./components/Visualize";
import Snackbar from "./components/Snackbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <AdjacencyListContextProvider>
        <CanvasContextProvider>
          <SnackbarContextProvider>
            <Header />
            <div className="container">
              <Canvas />
              <Visualize />
              <Snackbar />
            </div>
          </SnackbarContextProvider>
        </CanvasContextProvider>
      </AdjacencyListContextProvider>
    </div>
  );
};

export default App;
