import node from "../types/node";

const createNode = (count: number, x: number, y: number): node => {
  const newNode: node = {
    count: count,
    x: x,
    y: y,
    windowX: window.innerWidth,
    windowY: window.innerHeight,
  };
  return newNode;
};

export default createNode;
