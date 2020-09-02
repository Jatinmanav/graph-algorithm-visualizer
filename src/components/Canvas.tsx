import React, { useState, useEffect, useRef, useContext } from "react";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import { CanvasContext } from "../contexts/CanvasContext";
import useWindowSize from "../hooks/windowSize";
import node from "../types/node";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import contextMenu from "../types/contextMenu";
import getNextIndex from "../actions/getNextIndex";
import redrawCanvas from "../actions/redrawCanvas";
import createNode from "../actions/createNode";
import drawNode from "../actions/drawNode";
import Contextmenu from "../components/Contextmenu";

const Canvas = () => {
  const initialContextMenu: contextMenu = { isOpen: false, x: 0, y: 0 };
  const [newnode, setNewnode] = useState<node | null>(null);
  const [contextmenu, setContextMenu] = useState<contextMenu>(
    initialContextMenu
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const { nodeList, edgeList, moveNode, addNode } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);
  const { canvas, context, setCanvas, setContext } = useContext<canvasProvider>(
    CanvasContext
  );

  const setContextMenuState = (
    state: boolean,
    x: number = 0,
    y: number = 0
  ): void => {
    console.log(state);
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
    //eslint-disable-next-line
  }, [width, height, nodeList, edgeList, setCanvas, setContext]);

  const handleRightClick = (event: React.MouseEvent): void => {
    event.preventDefault();
  };

  const handleMouseDown = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (canvas && event.buttons === 1) {
      const x = event.clientX;
      const y = event.clientY;
      const rect = canvas.getBoundingClientRect();
      let index: number = -1;
      for (let iter in nodeList) {
        if (
          Math.abs(x - nodeList[iter].clientX) < 20 &&
          Math.abs(y - nodeList[iter].clientY) < 20
        ) {
          index = +iter;
        }
      }
      if (index > -1) {
        console.log(index);
        let node = nodeList[index];
        node.clientX = x;
        node.clientY = y;
        node.canvasX = x - rect.left;
        node.canvasY = y - rect.top;
        setNewnode(node);
      }
    }
    if (event.buttons === 2) {
      setContextMenuState(true, event.clientX, event.clientY);
    }
  };

  const handleMouseMove = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (newnode && canvas && event.buttons === 1) {
      const x = event.clientX;
      const y = event.clientY;
      let node = newnode;
      let rect = canvas.getBoundingClientRect();
      node.clientX = x;
      node.clientY = y;
      node.canvasX = x - rect.left;
      node.canvasY = y - rect.top;
      setNewnode(node);

      moveNode(newnode);
      redrawCanvas(nodeList, edgeList, canvas, context);
    }
  };

  const handleMouseUp = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (newnode) {
      setNewnode(null);
    } else {
      if (contextmenu.isOpen === false && canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (context) {
          const nodeCount: number = getNextIndex(nodeList);
          drawNode(nodeCount, context, x, y, "#ffffff");
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
      } else {
        console.log("here");
        setContextMenuState(false);
      }
    }
  };

  const handleMouseOut = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewnode(null);
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
