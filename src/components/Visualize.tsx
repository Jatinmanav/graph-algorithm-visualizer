import React, { useState, useContext } from "react";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import { CanvasContext } from "../contexts/CanvasContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import Algorithmdropdown from "../components/Algorithmdropdown";
import breadthFirstTraversal from "../algorithms/breadthFirstTraversal";
import cycleDetection from "../algorithms/cycleDetection";
import depthFirstTraversal from "../algorithms/depthFirstTraversal";
import topologicalSort from "../algorithms/topologicalSort";
import visualizeAlgorithm from "../actions/visualizeAlgorithm";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import node from "../types/node";
import snackbarProvider from "../types/snackbarProvider";
import "../styles/Visualize.scss";

const Visualize = () => {
  const { nodeList, edgeList, adjacencyList } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  const { toggleSnackbar } = useContext<snackbarProvider>(SnackbarContext);
  const [algorithm, setAlgorithm] = useState<number>(0);

  const algoList = [
    "Topological Sort",
    "Breadth First Traversal",
    "Depth First Traversal",
    "Graph Cycle Detection",
  ];

  const handleVisualize = (event: React.FormEvent<HTMLDivElement>) => {
    let errorDetected: boolean = false;
    event.preventDefault();
    let result: number[] = [];
    if (algorithm === 0) {
      result = topologicalSort(adjacencyList, nodeList);
    } else if (algorithm === 1) {
      result = breadthFirstTraversal(adjacencyList);
    } else if (algorithm === 2) {
      result = depthFirstTraversal(adjacencyList);
    } else if (algorithm === 3) {
      ({ errorDetected, result } = cycleDetection(adjacencyList));
    }
    let resultNodes: node[] = [];
    for (let item of result) {
      for (let item2 of nodeList) {
        if (item2.count === item) {
          resultNodes.push(item2);
        }
      }
    }
    console.log(edgeList);
    visualizeAlgorithm(nodeList, resultNodes, edgeList, canvas, context).then(
      (val) => {
        if (val && algorithm === 3) {
          if (errorDetected) toggleSnackbar("Cycle Detected");
          else toggleSnackbar("No Cycle Detected");
        }
      }
    );
  };

  return (
    <div className="visualize-container">
      <Algorithmdropdown
        algoList={algoList}
        count={algorithm}
        setAlgorithm={setAlgorithm}
      />
      <div className="visualize-button" onClick={handleVisualize}>
        Visualize
      </div>
    </div>
  );
};

export default Visualize;
