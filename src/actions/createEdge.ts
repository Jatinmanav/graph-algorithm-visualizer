import node from "../types/node";
import edge from "../types/edge";

const createEdge = (
  nodeOne: node,
  nodeTwo: node,
  directed: boolean,
  weight: number = 0
): edge => {
  const newEdge: edge = {
    source: nodeOne,
    target: nodeTwo,
    directed: directed,
    weight: weight,
  };
  return newEdge;
};

export default createEdge;
