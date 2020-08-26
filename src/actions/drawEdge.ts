import node from "../types/node";

const drawEdge = (
  source: node,
  target: node,
  context: CanvasRenderingContext2D
): void => {
  let sourceX = source.canvasX;
  let sourceY = source.canvasY;
  let targetX = target.canvasX;
  let targetY = target.canvasY;
  const theta = Math.atan((targetY - sourceY) / (targetX - sourceX));
  console.log(theta);
  if (
    (targetY - sourceY > 0 && targetX - sourceX > 0) ||
    (targetY - sourceY < 0 && targetX - sourceX > 0)
  ) {
    targetX = targetX - 20 * Math.cos(theta);
    targetY = targetY - 20 * Math.sin(theta);
    sourceX = sourceX + 20 * Math.cos(theta);
    sourceY = sourceY + 20 * Math.sin(theta);
  } else {
    targetX = targetX + 20 * Math.cos(theta);
    targetY = targetY + 20 * Math.sin(theta);
    sourceX = sourceX - 20 * Math.cos(theta);
    sourceY = sourceY - 20 * Math.sin(theta);
  }
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(sourceX, sourceY);
  context.lineTo(targetX, targetY);
  context.stroke();
};

export default drawEdge;
