import node from "../types/node";

const createNode = (
  count: number,
  x: number,
  y: number,
  clientX: number,
  clientY: number
): node => {
  const newNode: node = {
    count: count,
    x: x,
    y: y,
    windowX: clientX,
    windowY: clientY,
  };
  return newNode;
};

export default createNode;
