import node from "../types/node";
import edge from "../types/edge";
import adjacencyListObject from "./adjacencyListObject";

export default interface adjacencyListProvider {
  nodeList: node[];
  edgeList: edge[];
  adjacencyList: adjacencyListObject[];
  addNode: (node: node) => void;
  addEdge: (edge: edge) => void;
  addUndirectedEdge: (edgeOne: edge, edgeTwo: edge) => void;
  moveNode: (index: node) => void;
  deleteNode: (x: number, y: number) => void;
  clearNodes: () => void;
}
