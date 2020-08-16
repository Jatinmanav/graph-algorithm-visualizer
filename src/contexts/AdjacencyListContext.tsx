import React, { createContext, useState, ReactNode } from "react";
import node from "../types/node";
import edge from "../types/edge";
import adjacencyListProvider from "../types/adjacencyListProvider";

const initialState: adjacencyListProvider = {
  nodeList: [],
  edgeList: [],
  addNode: (node: node) => {},
  addEdge: (edge: edge) => {},
  deleteNode: (x: number, y: number) => {},
  clearNodes: () => {},
};

export const AdjacencyListContext = createContext<adjacencyListProvider>(
  initialState
);

type IProps = {
  children: ReactNode;
};

export const AdjacencyListContextProvider = (props: IProps) => {
  const [nodeList, setNodeList] = useState<node[]>([]);
  const [edgeList, setEdgeList] = useState<edge[]>([]);

  const addNode = (node: node) => {
    setNodeList([...nodeList, node]);
  };

  const addEdge = (edge: edge) => {
    setEdgeList([...edgeList, edge]);
  };

  const deleteNode = (x: number, y: number) => {
    let index;
    for (let iter of nodeList) {
      if (Math.abs(x - iter.clientX) < 20 && Math.abs(y - iter.clientY) < 20) {
        index = iter.count;
        break;
      }
    }
    if (index) {
      let temp = nodeList.splice(index, 1);
      console.log("spliced");
      setNodeList(temp);
    }
  };

  const clearNodes = () => {
    setNodeList([]);
    setEdgeList([]);
  };

  return (
    <AdjacencyListContext.Provider
      value={{ nodeList, edgeList, addNode, addEdge, clearNodes, deleteNode }}
    >
      {props.children}
    </AdjacencyListContext.Provider>
  );
};
