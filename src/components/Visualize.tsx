import React, { useState, useContext } from "react";
import "../styles/Visualize.scss";
import visualizeAlgorithm from "../actions/visualizeAlgorithm";
import topologicalSort from "../algorithms/topologicalSort";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import node from "../types/node";
import { CanvasContext } from "../contexts/CanvasContext";
import breadthFirstTraversal from "../algorithms/breadthFirstTraversal";

const Visualize = () => {
  const { nodeList, edgeList, adjacencyList } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  const [algorithm, setAlgorithm] = useState<number>(1);

  const handleVisualize = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    let result: number[] = [];
    if (algorithm === 1) {
      result = topologicalSort(adjacencyList, nodeList);
    } else if (algorithm === 2) {
      result = breadthFirstTraversal(adjacencyList);
    }
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setAlgorithm(+event.target.value);
  };

  return (
    <div className="visualize-container">
      <select
        name="algorithm"
        className="visualize-select"
        value={algorithm}
        onChange={handleSelectChange}
      >
        <option className="visualize-option" value={1}>
          Topological Sort
        </option>
        <option className="visualize-option" value={2}>
          Breadth First Traversal
        </option>
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
