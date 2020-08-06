import node from "./node";

export default interface adjacencyListProvider {
  adjacencyList: node[];
  addNode: (node: node) => void;
}
