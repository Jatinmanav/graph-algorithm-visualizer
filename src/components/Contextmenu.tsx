import React, { useState, useEffect, useContext } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import node from "../types/node";
import contextMenu from "../types/contextMenu";
import canvasProvider from "../types/canvasProvider";
import adjacencyListProvider from "../types/adjacencyListProvider";
import drawNode from "../actions/drawNode";
import createNode from "../actions/createNode";
import contextMenuState from "../actions/contextMenuState";
import getNextIndex from "../actions/getNextIndex";
import redrawCanvas from "../actions/redrawCanvas";

type AppProps = {
  contextmenu: contextMenu;
  setContextMenuState(state: boolean, x?: number, y?: number): void;
};

type DropdownMenu = {
  isOpen: boolean;
  x?: number;
  y?: number;
};

type position = {
  x: number;
  y: number;
};

const Contextmenu = ({ contextmenu, setContextMenuState }: AppProps) => {
  const [newedge, setNewedge] = useState<DropdownMenu>({ isOpen: false });
  const [pos, setPos] = useState<position>({ x: 0, y: 0 });
  const [index, setIndex] = useState<number>(-1);
  const [result, setResult] = useState<boolean>(true);
  //eslint-disable-next-line
  const { isOpen, x, y } = contextmenu;
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  const { nodeList, edgeList, addNode, clearNodes, deleteNode } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);

  useEffect(() => {
    let innerX = x;
    let innerY = y;
    if (x + 200 > window.innerWidth) {
      innerX = x - 200;
    }
    if (y + 170 > window.innerHeight) {
      innerY = y - 170;
    }
    setPos({ x: innerX, y: innerY });
    setResult(contextMenuState(nodeList, x, y));
    if (result === false) {
      for (let iter of nodeList) {
        if (
          Math.abs(x - iter.clientX) < 20 &&
          Math.abs(y - iter.clientY) < 20
        ) {
          console.log(iter.count);
          setIndex(iter.count);
        }
      }
    }
  }, [x, y, nodeList, index, result]);

  const setNewEdgeWrapper = (
    isOpen: boolean,
    x: number = 0,
    y: number = 0
  ): void => {
    const newEdge = { isOpen: isOpen, x: x, y: y };
    setNewedge(newEdge);
  };

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
        const nodeCount: number = getNextIndex(nodeList);
        drawNode(nodeCount, context, xPos, yPos, "#ffffff");
        const newNode: node = createNode(
          nodeCount,
          xPos,
          yPos,
          x,
          y,
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

  const handleDeleteNode = (event: React.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    deleteNode(x, y);
    redrawCanvas(nodeList, edgeList, canvas, context);
    setContextMenuState(false);
  };

  const handleMouseIn = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewEdgeWrapper(true);
  };
  const handleMouseOut = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewEdgeWrapper(false);
  };

  return (
    <div>
      {newedge.isOpen ? (
        <div className="context-menu" style={{ position: "absolute" }}>
          {nodeList.map((value: node) => {
            console.log(index);
            return value.count === index ? <div>JS</div> : <div>Hello</div>;
          })}
        </div>
      ) : (
        <React.Fragment />
      )}
      <div
        className="context-menu"
        style={{ left: pos.x, top: pos.y, position: "absolute" }}
        onContextMenu={handleRightClick}
      >
        {result ? (
          <div>
            <div className="context-menu-option" onClick={handleAddNode}>
              Add Node
            </div>
            <div className="context-menu-option" onClick={handleClearCanvas}>
              Clear Canvas
            </div>
          </div>
        ) : (
          <div>
            <div className="context-menu-option" onClick={handleDeleteNode}>
              Delete Node
            </div>
            <div
              className="context-menu-option context-menu-arrow"
              onClick={handleAddDirectedEdge}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              <span className="context-menu-arrow-text">
                Add Direceted Edge
              </span>
              <span className="context-menu-arrow-head">&#129170;</span>
            </div>
            <div
              className="context-menu-option context-menu-arrow"
              onClick={handleAddUndirectedEdge}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              <span className="context-menu-arrow-text context-menu-arrow">
                Add Undireceted Edge
              </span>
              <span className="context-menu-arrow-head">&#129170;</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contextmenu;
