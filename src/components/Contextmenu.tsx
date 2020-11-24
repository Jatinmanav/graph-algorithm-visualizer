import React, { useState, useEffect, useContext, useRef } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import { ReactComponent as RightArrow } from "../icons/right_arrow.svg";
import Newedge from "../components/Newedge";
import contextMenuState from "../actions/contextMenuState";
import createNode from "../actions/createNode";
import getNextIndex from "../actions/getNextIndex";
import adjacencyListProvider from "../types/adjacencyListProvider";
import canvasProvider from "../types/canvasProvider";
import contextMenu from "../types/contextMenu";
import node from "../types/node";
import nodeColor from "../actions/nodeColor";

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

type newedgePosition = {
  x: number;
  edgeCase: boolean;
  y1: number;
  y2: number;
};

const Contextmenu = ({ contextmenu, setContextMenuState }: AppProps) => {
  const [newedge, setNewedge] = useState<DropdownMenu>({ isOpen: false });
  const [pos, setPos] = useState<position>({ x: 0, y: 0 });
  const [divpos, setDivpos] = useState<newedgePosition>({
    x: 0,
    edgeCase: false,
    y1: 0,
    y2: 0,
  });
  const [index, setIndex] = useState<number>(-1);
  const [result, setResult] = useState<boolean>(true);
  const divElementOne = useRef<HTMLDivElement>(null);
  const divElementTwo = useRef<HTMLDivElement>(null);
  const { x, y } = contextmenu;
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  const { nodeList, addNode, clearNodes, deleteNode } = useContext<
    adjacencyListProvider
  >(AdjacencyListContext);

  useEffect(() => {
    let innerX = x;
    let innerY = y;
    if (x + 200 > window.innerWidth) {
      innerX = x - 200;
    }
    if (y + 150 > window.innerHeight) {
      if (!result) innerY = y - 150;
      else innerY = y - 100;
    }
    if (divElementOne.current != null) {
      const rectOne = divElementOne.current.getBoundingClientRect();
      const rectTwo = divElementOne.current.getBoundingClientRect();
      let edgePos = false;
      let right = rectOne.right;
      let top = rectOne.top;
      let bottom = rectOne.bottom;
      if (rectOne.right + 200 > window.innerWidth) {
        right = right - 403;
      }
      if (rectOne.top + 200 > window.innerHeight) {
        top = window.innerHeight - rectTwo.top - 45;
        bottom = window.innerHeight - rectTwo.bottom - 45;
        edgePos = true;
      }
      console.log("top ", top);
      console.log("bottom ", bottom);
      setDivpos({ x: right, edgeCase: edgePos, y1: top, y2: bottom });
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
        const newNode: node = createNode(
          nodeCount,
          xPos,
          yPos,
          x,
          y,
          rect.right,
          rect.bottom,
          nodeColor(document)
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
          style={
            divpos.edgeCase
              ? {
                  left: divpos.x,
                  bottom: newedge.directed ? divpos.y1 : divpos.y2,
                  position: "absolute",
                }
              : {
                  left: divpos.x,
                  top: newedge.directed ? divpos.y1 : divpos.y2,
                  position: "absolute",
                }
          }
        >
          {nodeList.length === 1 ? (
            <div className="context-menu-option context-menu-edge-option">
              Nodes Unavailable
            </div>
          ) : (
            nodeList.map((value: node) => {
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
            })
          )}
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
              <span className="context-menu-text">Add Node</span>
            </div>
            <div className="context-menu-option" onClick={handleClearCanvas}>
              <span className="context-menu-text">Clear Canvas</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="context-menu-option" onClick={handleDeleteNode}>
              <span className="context-menu-text">Delete Node</span>
            </div>
            <div
              className="context-menu-option context-menu-arrow"
              ref={divElementOne}
              onMouseEnter={handleMouseInDirected}
            >
              <span className="context-menu-arrow-text context-menu-text">
                Add Direceted Edge
              </span>
              <RightArrow className="context-menu-arrow-head" />
            </div>
            <div
              className="context-menu-option context-menu-arrow"
              ref={divElementTwo}
              onMouseEnter={handleMouseInUndirected}
            >
              <span className="context-menu-arrow-text context-menu-text">
                Add Undireceted Edge
              </span>
              <RightArrow className="context-menu-arrow-head" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contextmenu;
