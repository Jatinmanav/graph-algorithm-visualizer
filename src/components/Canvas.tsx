import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowSize from "../hooks/windowSize";
import node from "../types/node";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import contextMenu from "../types/contextMenu";
import createNode from "../actions/createNode";
import drawNode from "../actions/drawNode";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import { CanvasContext } from "../contexts/CanvasContext";
import Contextmenu from "./Contextmenu";

const Canvas = () => {
  const initialContextMenu: contextMenu = { isOpen: false, x: 0, y: 0 };
  const [contextmenu, setContextMenu] = useState<contextMenu>(
    initialContextMenu
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const { nodeList, edgeList, addNode } = useContext<adjacencyListProvider>(
    AdjacencyListContext
  );
  const { canvas, context, setCanvas, setContext } = useContext<canvasProvider>(
    CanvasContext
  );

  console.log(edgeList);

  const setContextMenuState = (
    state: boolean,
    x: number = 0,
    y: number = 0
  ): void => {
    const newContextMenuState: contextMenu = {
      isOpen: state,
      x: x,
      y: y,
    };
    setContextMenu(newContextMenuState);
  };

  const handleClick = (event: React.MouseEvent): void => {
    if (contextmenu.isOpen === false) {
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
      setContextMenuState(false);
    }
  };

  const handleRightClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setContextMenuState(true, event.pageX, event.pageY);
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
      {contextmenu.isOpen ? (
        <Contextmenu contextmenu={contextmenu} />
      ) : (
        <React.Fragment />
      )}
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
