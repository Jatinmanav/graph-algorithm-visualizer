import React, { useEffect, useRef, useContext } from "react";
import useWindowSize from "../hooks/windowSize";
import node from "../types/node";
import createNode from "../actions/createNode";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";
import { CanvasContext } from "../contexts/CanvasContext";
import canvasProvider from "../types/canvasProvider";
import drawNode from "../actions/drawNode";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const { nodeList, edgeList, addNode } = useContext<adjacencyListProvider>(
    AdjacencyListContext
  );
  const { canvas, context, setCanvas, setContext } = useContext<canvasProvider>(
    CanvasContext
  );
  console.log(edgeList);

  const handleClick = (clientX: number, clientY: number): void => {
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (context) {
        const nodeCount: number = nodeList.length;
        drawNode(nodeCount, context, x, y);
        let newNode: node = createNode(
          nodeCount,
          x,
          y,
          rect.right,
          rect.bottom
        );
        addNode(newNode);
        console.log(newNode);
        console.log(nodeList);
      }
    }
  };

  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas) {
      setCanvas(canvas);
      setContext(canvas.getContext("2d"));
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, [width, height, setCanvas, setContext]);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        onClick={(event) => handleClick(event.clientX, event.clientY)}
        className="canvas"
      />
    </div>
  );
};

export default Canvas;
