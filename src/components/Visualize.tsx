import React, { useContext } from "react";
import "../styles/Visualize.scss";
import visualizeAlgorithm from "../actions/visualizeAlgorithm";
import topologicalSort from "../algorithms/topologicalSort";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import node from "../types/node";
import { CanvasContext } from "../contexts/CanvasContext";

const Visualize = () => {
  const { nodeList, edgeList, adjacencyList } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);

  const handleVisualize = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const result = topologicalSort(adjacencyList, nodeList);
    let resultNodes: node[] = [];
    for (let item of result) {
      for (let item2 of nodeList) {
        if (item2.count === item) {
          resultNodes.push(item2);
        }
      }
    }
    visualizeAlgorithm(resultNodes, edgeList, canvas, context);
  };

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
      <div className="visualize-button" onClick={handleVisualize}>
        Visualize
      </div>
    </div>
  );
};

export default Visualize;
