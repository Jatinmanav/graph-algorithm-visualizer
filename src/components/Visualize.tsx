import React, { useState, useContext } from "react";
import "../styles/Visualize.scss";
import visualizeAlgorithm from "../actions/visualizeAlgorithm";
import edgeColor from "../actions/edgeColor";
import topologicalSort from "../algorithms/topologicalSort";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import node from "../types/node";
import { CanvasContext } from "../contexts/CanvasContext";
import breadthFirstTraversal from "../algorithms/breadthFirstTraversal";
import depthFirstTraversal from "../algorithms/depthFirstTraversal";
import Algorithmdropdown from "../components/Algorithmdropdown";
import cycleDetection from "../algorithms/cycleDetection";

const Visualize = () => {
  const { nodeList, edgeList, adjacencyList } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
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
      console.log(errorDetected);
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
    visualizeAlgorithm(
      nodeList,
      resultNodes,
      edgeList,
      canvas,
      context,
      edgeColor(document)
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
