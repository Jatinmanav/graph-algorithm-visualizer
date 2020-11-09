import node from "../types/node";
import edge from "../types/edge";
import drawNode from "../actions/drawNode";
import drawEdge from "../actions/drawEdge";

const slowDrawNode = async (
  resultList: node[],
  context: CanvasRenderingContext2D,
  nodeColor: string,
  res: (value: boolean) => any
) => {
  let promises = [];
  for (let item of resultList) {
    promises.push(
      new Promise((res, rej) => {
        setTimeout(() => {
          drawNode(item.count, context, item.canvasX, item.canvasY, nodeColor);
          res(true);
        }, 1000 * resultList.findIndex((node) => node.count === item.count));
      })
    );
  }
  Promise.all(promises).then(() => res(true));
};

const visualizeAlgorithm = (
  nodeList: node[],
  resultList: node[],
  edgeList: edge[],
  canvas: HTMLCanvasElement | null,
  context: CanvasRenderingContext2D | null,
  edgeColor: string,
  highlightColor: string
): Promise<boolean> => {
  if (canvas && context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const rect = canvas.getBoundingClientRect();
    for (let item of nodeList) {
      if (rect.right !== item.windowX || rect.bottom !== item.windowY) {
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
      drawNode(item.count, context, item.canvasX, item.canvasY, "#ffffff");
    }
    return new Promise<boolean>((res) =>
      slowDrawNode(resultList, context, highlightColor, res)
    );
  }
  return new Promise<boolean>((res, rej) => {
    rej(0);
  });
};

export default visualizeAlgorithm;
