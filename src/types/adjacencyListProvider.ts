import node from "../types/node";
import edge from "../types/edge";

export default interface adjacencyListProvider {
  nodeList: node[];
  edgeList: edge[];
  addNode: (node: node) => void;
  addEdge: (edge: edge) => void;
  moveNode: (index: node) => void;
  deleteNode: (x: number, y: number) => void;
  clearNodes: () => void;
}
