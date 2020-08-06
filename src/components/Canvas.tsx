import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowSize from "../hooks/windowSize";
import node from "../types/node";
import createNode from "../actions/createNode";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import adjacencyListProvider from "../types/adjacencyListProvider";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [width, height] = useWindowSize();
  const { nodeList, edgeList, addNode } = useContext<adjacencyListProvider>(
    AdjacencyListContext
  );
  console.log(edgeList);

  const handleClick = (clientX: number, clientY: number): void => {
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      console.log("x: " + x + " y: " + y);
      if (context) {
        context.beginPath();
        context.arc(x, y, 20, 0, 2 * Math.PI, false);
        context.lineWidth = 3;
        context.stroke();
        context.font = "20px Hack";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("1", x, y);
        let newNode: node = createNode(0, x, y);
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
  }, [width, height]);

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
