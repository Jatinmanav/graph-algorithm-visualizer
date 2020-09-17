import React, { useState } from "react";
import node from "../types/node";

type AppProps = {
  nodeList: node[];
  count: number;
  setNode(value: number): void;
};

const Dropdown = ({ nodeList, count, setNode }: AppProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="dropdown-container" onClick={handleClick}>
      <p className="dropdown-button">Node {count}</p>
      {open ? (
        <ul className="dropdown-ul">
          {nodeList.map((item) => {
            if (item.count !== count) {
              return <li>Hello</li>;
            } else {
              return <React.Fragment />;
            }
          })}
        </ul>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Dropdown;
