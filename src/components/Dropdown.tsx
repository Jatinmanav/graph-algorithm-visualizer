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
      <div className="dropdown-text">
        <p>Node {count}</p>
      </div>
      {open ? (
        <div className="dropdown-item-container">
          {nodeList.map((item) => {
            if (item.count !== count) {
              return <div className="dropdown-item">Hello</div>;
            } else {
              return <React.Fragment />;
            }
          })}
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Dropdown;
