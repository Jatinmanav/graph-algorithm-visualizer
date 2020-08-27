import node from "../types/node";
import edge from "../types/edge";
import drawNode from "../actions/drawNode";
import drawEdge from "../actions/drawEdge";

const redrawCanvas = (
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
    for (let item of nodeList) {
      drawNode(item.count, context, item.canvasX, item.canvasY, "#ffffff");
    }
  }
};

export default redrawCanvas;
