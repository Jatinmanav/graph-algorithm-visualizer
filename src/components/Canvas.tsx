import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "../hooks/windowSize";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [width, height] = useWindowSize();
  console.log(width, height);

  const handleClick = (clientX: number, clientY: number): void => {
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      console.log("x: " + x + " y: " + y);
      if (context) {
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, false);
        context.fill();
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
  }, []);

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
