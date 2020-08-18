import node from "../types/node";

const drawEdge = (
  nodeList: node[],
  source: number,
  target: number,
  context: CanvasRenderingContext2D
): void => {
  for (let itr in nodeList) {
    if (nodeList[itr].count === source) {
      source = +itr;
    } else if (nodeList[itr].count === target) {
      target = +itr;
    }
  }
  const sourceX = nodeList[source].canvasX;
  const sourceY = nodeList[source].canvasY;
  const targetX = nodeList[target].canvasX;
  const targetY = nodeList[target].canvasY;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(sourceX, sourceY);
  context.lineTo(targetX, targetY);
  context.stroke();
};

export default drawEdge;
