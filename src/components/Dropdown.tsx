import React from "react";
import node from "../types/node";

type AppProps = {
  nodeList: node[];
  count: number;
  setNode(value: number): void;
};

const Dropdown = ({ nodeList, count, setNode }: AppProps) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown-ul">
        {nodeList.map((item) => {
          if (item.count !== count) {
            return <li>Hello</li>;
          } else {
            return <React.Fragment />;
          }
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
