import node from "../types/node";
import edge from "../types/edge";

const createEdge = (nodeOne: node, nodeTwo: node): edge => {
  const newEdge: edge = {
    source: nodeOne,
    target: nodeTwo,
  };
  return newEdge;
};

export default createEdge;
