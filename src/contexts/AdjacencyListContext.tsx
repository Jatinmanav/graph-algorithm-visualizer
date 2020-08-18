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
    let index: number = 0;
    for (let iter of nodeList) {
      if (Math.abs(x - iter.clientX) < 20 && Math.abs(y - iter.clientY) < 20) {
        console.log(index);
        break;
      }
      index += 1;
    }
    if (index !== null) {
      let temp = nodeList;
      temp.splice(index, 1);
      console.log("spliced");
      setNodeList(temp);
      for (let itr = edgeList.length - 1; itr > 0; itr--) {
        if (
          edgeList[itr].source.count === index ||
          edgeList[itr].target.count === index
        ) {
          let temp = edgeList;
          temp.splice(index, 1);
          setEdgeList(temp);
        }
      }
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
