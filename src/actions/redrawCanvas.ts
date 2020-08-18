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
    for (let item of edgeList) {
      console.log(item);
      drawEdge(nodeList, item.source.count, item.target.count, context);
    }
    for (let item of nodeList) {
      drawNode(item.count, context, item.canvasX, item.canvasY);
    }
  }
};

export default redrawCanvas;
