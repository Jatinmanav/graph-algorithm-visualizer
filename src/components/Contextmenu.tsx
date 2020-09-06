import React, { useState, useEffect, useContext, useRef } from "react";
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
import Newedge from "./Newedge";

type AppProps = {
  contextmenu: contextMenu;
  setContextMenuState(state: boolean, x?: number, y?: number): void;
};

type DropdownMenu = {
  isOpen: boolean;
  directed?: boolean;
};

type position = {
  x: number;
  y: number;
};

type positionTwo = {
  x: number;
  y1: number;
  y2: number;
};

const Contextmenu = ({ contextmenu, setContextMenuState }: AppProps) => {
  const [newedge, setNewedge] = useState<DropdownMenu>({ isOpen: false });
  const [pos, setPos] = useState<position>({ x: 0, y: 0 });
  const [divpos, setDivpos] = useState<positionTwo>({ x: 0, y1: 0, y2: 0 });
  const [index, setIndex] = useState<number>(-1);
  const [result, setResult] = useState<boolean>(true);
  const divElement = useRef<HTMLDivElement>(null);
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
    if (y + 150 > window.innerHeight) {
      innerY = y - 100;
    }
    if (divElement.current != null) {
      const rect = divElement.current.getBoundingClientRect();
      let right = rect.right;
      let top = rect.top;
      let bottom = rect.bottom;
      if (rect.right + 200 > window.innerWidth) {
        right = right - 400;
      }
      if (rect.top + 150 > window.innerHeight) {
        top = top - 200;
      }
      if (rect.bottom + 150 > window.innerHeight) {
        bottom = bottom - 200;
      }
      setDivpos({ x: right, y1: top, y2: bottom });
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
    directed: boolean = true
  ): void => {
    const newEdge = { isOpen: isOpen, directed: directed };
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

  const handleDeleteNode = (event: React.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
    deleteNode(x, y);
    redrawCanvas(nodeList, edgeList, canvas, context);
    setContextMenuState(false);
  };

  const handleMouseInDirected = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewEdgeWrapper(true, true);
  };

  const handleMouseInUndirected = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewEdgeWrapper(true, false);
  };

  const handleMouseOut = (event: React.MouseEvent): void => {
    event.preventDefault();
    setNewEdgeWrapper(false);
  };

  return (
    <div className="context-menu-container" onMouseLeave={handleMouseOut}>
      {newedge.isOpen ? (
        <div
          className="context-menu context-menu-new-edge"
          style={{
            left: divpos.x,
            top: newedge.directed ? divpos.y1 : divpos.y2,
            position: "absolute",
          }}
        >
          {nodeList.map((value: node) => {
            if (value.count !== index && newedge.directed !== undefined) {
              return (
                <Newedge
                  key={value.count}
                  source={index}
                  target={value.count}
                  directed={newedge.directed}
                />
              );
            }
            return null;
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
              ref={divElement}
              onMouseEnter={handleMouseInDirected}
            >
              <span className="context-menu-arrow-text">
                Add Direceted Edge
              </span>
              <span className="context-menu-arrow-head">&#129170;</span>
            </div>
            <div
              className="context-menu-option context-menu-arrow"
              onMouseEnter={handleMouseInUndirected}
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
