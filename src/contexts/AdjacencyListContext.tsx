import React, { createContext, useState, ReactNode } from "react";
import adjacencyListProvider from "../types/adjacencyListProvider";
import adjacencyListObject from "../types/adjacencyListObject";
import edge from "../types/edge";
import node from "../types/node";

const initialState: adjacencyListProvider = {
  nodeList: [],
  edgeList: [],
  adjacencyList: [],
  addNode: (node: node) => {},
  addEdge: (edge: edge) => {},
  addUndirectedEdge: (edgeOne: edge, edgeTwo: edge) => {},
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
  const [adjacencyList, setAdjacencyList] = useState<adjacencyListObject[]>([]);

  const addNode = (node: node) => {
    let tempAdjacencyList = adjacencyList;
    tempAdjacencyList.push({ count: node.count, target: [] });
    setNodeList([...nodeList, node]);
    setAdjacencyList(adjacencyList);
  };

  const addUndirectedEdge = (edgeOne: edge, edgeTwo: edge) => {
    let tempAdjacencyList = adjacencyList;
    for (let item of tempAdjacencyList) {
      if (item.count === edgeOne.source.count) {
        item.target.push(edgeOne.target.count);
      } else if (item.count === edgeTwo.source.count) {
        item.target.push(edgeTwo.target.count);
      }
    }
    setEdgeList([...edgeList, edgeOne, edgeTwo]);
    setAdjacencyList(tempAdjacencyList);
    console.log(adjacencyList);
    console.log(edgeList);
  };

  const addEdge = (edge: edge) => {
    let tempAdjacencyList = adjacencyList;
    for (let item of tempAdjacencyList) {
      if (item.count === edge.source.count) {
        item.target.push(edge.target.count);
      }
    }
    setEdgeList([...edgeList, edge]);
    setAdjacencyList(tempAdjacencyList);
    console.log(adjacencyList);
    console.log(edgeList);
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
    let tempAdjacencyList = adjacencyList;
    let count = tempAdjacencyList.length;
    while (count--) {
      if (tempAdjacencyList[count].count === index) {
        tempAdjacencyList.splice(count, 1);
      }
    }
    for (let item of tempAdjacencyList) {
      let count = item.target.length;
      while (count--) {
        if (item.target[count] === index) {
          item.target.splice(count, 1);
        }
      }
    }

    setAdjacencyList(tempAdjacencyList);
    setNodeList(temp);
  };

  const clearNodes = () => {
    setNodeList([]);
    setEdgeList([]);
    setAdjacencyList([]);
  };

  return (
    <AdjacencyListContext.Provider
      value={{
        nodeList,
        edgeList,
        adjacencyList,
        addNode,
        addEdge,
        addUndirectedEdge,
        clearNodes,
        moveNode,
        deleteNode,
      }}
    >
      {props.children}
    </AdjacencyListContext.Provider>
  );
};
