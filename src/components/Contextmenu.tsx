import React, { useContext } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import node from "../types/node";
import contextMenu from "../types/contextMenu";
import canvasProvider from "../types/canvasProvider";
import adjacencyListProvider from "../types/adjacencyListProvider";
import drawNode from "../actions/drawNode";
import createNode from "../actions/createNode";

type AppProps = { contextmenu: contextMenu };

const Contextmenu = ({ contextmenu, setContextMenuState }: any) => {
  //eslint-disable-next-line
  const { isOpen, x, y } = contextmenu;
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  const { nodeList, addNode, clearNodes } = useContext<adjacencyListProvider>(
    AdjacencyListContext
  );
  let innerX = x;
  let innerY = y;
  if (x + 200 > window.innerWidth) {
    innerX = x - 200;
  }
  if (y + 170 > window.innerHeight) {
    innerY = y - 170;
  }

  const handleRightClick = (event: React.MouseEvent): void => {
    event.preventDefault();
  };

  const handleAddNode = (event: React.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const xPos = x - rect.left;
      const yPos = y - rect.top;
      if (context) {
        const nodeCount: number = nodeList.length;
        drawNode(nodeCount, context, xPos, yPos);
        const newNode: node = createNode(
          nodeCount,
          xPos,
          yPos,
          rect.right,
          rect.bottom
        );
        addNode(newNode);
      }
      setContextMenuState(false);
    }
  };

  const handleClearCanvas = (event: React.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    console.log("Clear Canvas");
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      clearNodes();
    }
    setContextMenuState(false);
  };

  const handleAddDirectedEdge = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();
    console.log("Add Directed Edge");
    setContextMenuState(false);
  };

  const handleAddUndirectedEdge = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();
    console.log("Add Undirected Edge");
    setContextMenuState(false);
  };

  return (
    <div
      className="context-menu"
      style={{ left: innerX, top: innerY, position: "absolute" }}
      onContextMenu={handleRightClick}
    >
      <div className="context-menu-option" onClick={handleAddNode}>
        Add Node
      </div>
      <div className="context-menu-option" onClick={handleClearCanvas}>
        Clear Canvas
      </div>
      <div className="context-menu-option" onClick={handleAddDirectedEdge}>
        Add Direceted Edge
      </div>
      <div className="context-menu-option" onClick={handleAddUndirectedEdge}>
        Add Undirected Edge
      </div>
    </div>
  );
};

export default Contextmenu;
