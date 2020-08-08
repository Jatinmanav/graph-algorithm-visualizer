import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import node from "../types/node";
import { AdjacencyListContext } from "../contexts/AdjacencyListContext";
import canvasProvider from "../types/canvasProvider";
import { CanvasContext } from "../contexts/CanvasContext";
import drawEdge from "../actions/drawEdge";

const Header = () => {
  const [source, setSource] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const { nodeList, edgeList, addNode, addEdge } = useContext(
    AdjacencyListContext
  );
  const { canvas, context } = useContext<canvasProvider>(CanvasContext);
  console.log(nodeList, edgeList, addNode, addEdge);
  let newNode: node = nodeList[0];
  console.log(newNode);

  const handleThemeChange = (value: boolean): void => {
    console.log("test");
    if (value) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handleSourceChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSource((event.target as HTMLSelectElement).value);
  };

  const handleTargetChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setTarget((event.target as HTMLSelectElement).value);
  };

  const handleNewEdge = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (context && canvas) {
      const sourceNum = +source;
      const targetNum = +target;
      drawEdge(nodeList, sourceNum, targetNum, context);
    }
  };

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  return (
    <header className="navbar">
      <select
        value={source}
        onChange={handleSourceChange}
        className="source-node"
      >
        {nodeList.map((node) => {
          return (
            <option
              key={node.count}
              value={node.count}
            >{`Node ${node.count}`}</option>
          );
        })}
      </select>
      <select
        value={target}
        onChange={handleTargetChange}
        className="target-node"
      >
        {nodeList.map((node: node) => {
          if (node.count.toString() !== source) {
            return (
              <option
                key={node.count}
                value={node.count}
              >{`Node ${node.count}`}</option>
            );
          } else {
            return <React.Fragment key={Math.random() * 100} />;
          }
        })}
      </select>
      <button className="add-edge" onClick={handleNewEdge}>
        Add Edge
      </button>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="switch"
          className="toggle-switch"
          onClick={(event) => {
            handleThemeChange((event.target as HTMLInputElement).checked);
          }}
        />
        <label className="toggle-label" htmlFor="switch">
          Toggle
        </label>
      </div>
    </header>
  );
};

export default Header;