import React, { useContext } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import contextMenu from "../types/contextMenu";
import canvasProvider from "../types/canvasProvider";

type AppProps = { contextmenu: contextMenu };

const Contextmenu = ({ contextmenu, setContextMenuState }: any) => {
  //eslint-disable-next-line
  const { isOpen, x, y } = contextmenu;
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
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
    console.log("Add Node");
    setContextMenuState(false);
  };

  const handleClearCanvas = (event: React.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    console.log("Clear Canvas");
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
