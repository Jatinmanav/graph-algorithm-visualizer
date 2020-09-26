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

  const handleChangeNode = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    setOpen(!open);
    setNode(index);
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
              return (
                <div
                  className="dropdown-item"
                  onClick={(event) => handleChangeNode(event, item.count)}
                >
                  Node {item.count}
                </div>
              );
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
