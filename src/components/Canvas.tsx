import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowSize from "../hooks/windowSize";
import node from "../types/node";
import createNode from "../actions/createNode";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";
import { CanvasContext } from "../contexts/CanvasContext";
import canvasProvider from "../types/canvasProvider";
import drawNode from "../actions/drawNode";

const Canvas = () => {
  const [contextmenu, setContextMenu] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const { nodeList, edgeList, addNode } = useContext<adjacencyListProvider>(
    AdjacencyListContext
  );
  const { canvas, context, setCanvas, setContext } = useContext<canvasProvider>(
    CanvasContext
  );
  console.log(edgeList);

  const handleClick = (event: React.MouseEvent): void => {
    if (contextmenu === false) {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (context) {
          const nodeCount: number = nodeList.length;
          drawNode(nodeCount, context, x, y);
          const newNode: node = createNode(
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
    } else {
      setContextMenu(false);
    }
  };

  const handleRightClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setContextMenu(true);
    console.log(event.clientX, event.clientY);
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
        onClick={handleClick}
        className="canvas"
        onContextMenu={handleRightClick}
      />
    </div>
  );
};

export default Canvas;
