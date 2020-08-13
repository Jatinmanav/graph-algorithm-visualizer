import React, { createContext, useState, ReactNode } from "react";
import node from "../types/node";
import edge from "../types/edge";
import adjacencyListProvider from "../types/adjacencyListProvider";

const initialState: adjacencyListProvider = {
  nodeList: [],
  edgeList: [],
  addNode: (node: node) => {},
  addEdge: (edge: edge) => {},
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

  const clearNodes = () => {
    setNodeList([]);
    setEdgeList([]);
  };

  return (
    <AdjacencyListContext.Provider
      value={{ nodeList, edgeList, addNode, addEdge, clearNodes }}
    >
      {props.children}
    </AdjacencyListContext.Provider>
  );
};
