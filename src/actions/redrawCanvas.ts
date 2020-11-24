import drawNode from "../actions/drawNode";
import drawEdge from "../actions/drawEdge";
import nodeColor from "../actions/nodeColor";
import visualizeColor from "../actions/visualizeColor";
import node from "../types/node";
import edge from "../types/edge";

const redrawCanvas = (
  nodeList: node[],
  edgeList: edge[],
  canvas: HTMLCanvasElement | null,
  context: CanvasRenderingContext2D | null,
  edgeColor: string,
  nodeTextColor: string
) => {
  if (canvas && context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const rect = canvas.getBoundingClientRect();
    for (let item of nodeList) {
      item.color = nodeColor(document);
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
      drawEdge(item.source, item.target, item.directed, context, edgeColor);
    }
    for (let item of nodeList) {
      if (item.visualize) {
        item.color = visualizeColor(document);
      }
      drawNode(
        item.count,
        context,
        item.canvasX,
        item.canvasY,
        item.color,
        nodeTextColor
      );
    }
  }
};

export default redrawCanvas;
