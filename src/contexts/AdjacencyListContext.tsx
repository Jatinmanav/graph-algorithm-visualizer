import React, { createContext, useState, ReactNode } from "react";
import node from "../types/node";
import edge from "../types/edge";
import adjacencyListProvider from "../types/adjacencyListProvider";

const initialState: adjacencyListProvider = {
  nodeList: [],
  edgeList: [],
  addNode: (node: node) => {},
  addEdge: (edge: edge) => {},
  moveNode: (index: node) => {},
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

  const moveNode = (node: node) => {
    const count = node.count;
    const temp = nodeList;
    for (let iter in temp) {
      if (temp[iter].count === count) {
        temp[iter] = node;
      }
    }
    setNodeList(temp);
  };

  const deleteNode = (x: number, y: number) => {
    let index: number = 0;
    for (let iter of nodeList) {
      if (Math.abs(x - iter.clientX) < 20 && Math.abs(y - iter.clientY) < 20) {
        index = iter.count;
      }
    }
    const tempTwo = edgeList.filter((item) => {
      console.log(item.source.count, item.target.count, index);
      return item.source.count !== index && item.target.count !== index;
    });
    setEdgeList(tempTwo);
    const temp = nodeList.filter((item) => {
      return item.count !== index;
    });

    console.log("spliced");
    setNodeList(temp);
    console.log(edgeList);
  };

  const clearNodes = () => {
    setNodeList([]);
    setEdgeList([]);
  };

  return (
    <AdjacencyListContext.Provider
      value={{
        nodeList,
        edgeList,
        addNode,
        addEdge,
        clearNodes,
        moveNode,
        deleteNode,
      }}
    >
      {props.children}
    </AdjacencyListContext.Provider>
  );
};
