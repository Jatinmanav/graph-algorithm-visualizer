import node from "../types/node";
import edge from "../types/edge";
import drawNode from "../actions/drawNode";
import drawEdge from "../actions/drawEdge";

const slowDrawNode = (
  wait: number,
  count: number,
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) => {
  console.log(count);
  drawNode(count, context, x, y, "#ffffff");
  setTimeout(() => {
    drawNode(count, context, x, y, color);
  }, 1000 * wait);
};

const visualizeAlgorithm = (
  nodeList: node[],
  edgeList: edge[],
  canvas: HTMLCanvasElement | null,
  context: CanvasRenderingContext2D | null
) => {
  if (canvas && context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const rect = canvas.getBoundingClientRect();
    for (let item of nodeList) {
      if (rect.right !== item.windowX || rect.bottom !== item.windowY) {
        console.log(item.count);
        console.log(item.windowY);
        console.log(window.innerHeight);
        item.clientX = item.clientX * (rect.right / item.windowX);
        item.clientY = item.clientY * (rect.bottom / item.windowY);
        item.canvasX = item.clientX - rect.left;
        item.canvasY = item.clientY - rect.top;
        item.windowX = rect.right;
        item.windowY = rect.bottom;
      }
    }
    for (let item of edgeList) {
      drawEdge(item.source, item.target, item.directed, context);
    }
    let i = 0;
    console.log(nodeList);
    for (let item of nodeList) {
      // drawNode(item.count, context, item.canvasX, item.canvasY, "#410000");
      i++;
      slowDrawNode(
        i,
        item.count,
        context,
        item.canvasX,
        item.canvasY,
        "#414141"
      );
    }
  }
};

export default visualizeAlgorithm;
