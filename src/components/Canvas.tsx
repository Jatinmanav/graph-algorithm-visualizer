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
import Contextmenu from "../components/Contextmenu";
import getNextIndex from "../actions/getNextIndex";
import redrawCanvas from "../actions/redrawCanvas";

const Canvas = () => {
  const initialContextMenu: contextMenu = { isOpen: false, x: 0, y: 0 };
  const [mousedown, setMousedown] = useState<boolean>(false);
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

  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas) {
      setCanvas(canvas);
      setContext(canvas.getContext("2d"));
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    redrawCanvas(nodeList, edgeList, canvas, context);
  }, [width, height, nodeList, edgeList, setCanvas, setContext]);

  const handleClick = (event: React.MouseEvent): void => {
    if (contextmenu.isOpen === false) {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (context) {
          const nodeCount: number = getNextIndex(nodeList);
          drawNode(nodeCount, context, x, y);
          const newNode: node = createNode(
            nodeCount,
            x,
            y,
            event.clientX,
            event.clientY,
            rect.right,
            rect.bottom
          );
          addNode(newNode);
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

  const handleMouseDown = (event: React.MouseEvent): void => {
    event.preventDefault();
    setMousedown(true);
    console.log(event.clientX, event.clientY);
  };

  const handleMouseMove = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (mousedown) {
      console.log(event.clientX, event.clientY);
    }
  };

  const handleMouseUp = (event: React.MouseEvent): void => {
    event.preventDefault();
    setMousedown(false);
  };

  const handleMouseOut = (event: React.MouseEvent): void => {
    event.preventDefault();
    setMousedown(false);
  };

  return (
    <div className="canvas-container">
      {contextmenu.isOpen ? (
        <Contextmenu
          contextmenu={contextmenu}
          setContextMenuState={setContextMenuState}
        />
      ) : (
        <React.Fragment />
      )}
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        className="canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onContextMenu={handleRightClick}
      />
    </div>
  );
};

export default Canvas;
