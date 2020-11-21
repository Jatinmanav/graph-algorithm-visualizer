import React from "react";
import { Provider } from "react-redux";
import { AdjacencyListContextProvider } from "./contexts/AdjacencyListContext";
import { CanvasContextProvider } from "./contexts/CanvasContext";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Visualize from "./components/Visualize";
import Snackbar from "./components/Snackbar";
import configureStore from "./store/configureStore";
import "./styles/Variables.scss";
import "./styles/App.scss";

const App: React.FC = () => {
  const store = configureStore();

  return (
    <div className="App">
      <AdjacencyListContextProvider>
        <CanvasContextProvider>
          <Provider store={store}>
            <Header />
            <div className="container">
              <Canvas />
              <Visualize />
              <Snackbar />
            </div>
          </Provider>
        </CanvasContextProvider>
      </AdjacencyListContextProvider>
    </div>
  );
};

export default App;
