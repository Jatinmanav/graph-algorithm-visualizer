import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../icons/down_arrow.svg";
import { ReactComponent as UpArrow } from "../icons/up_arrow.svg";
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
      <div className="dropdown-text-container">
        <div className="dropdown-text"> Node {count} </div>
        <div className="dropdown-arrow">
          {open ? <UpArrow /> : <DownArrow />}
        </div>
      </div>
      {open ? (
        <div className="dropdown-item-container">
          {nodeList.length <= 1 ? (
            <div className="dropdown-item">Nodes Unavailable</div>
          ) : (
            nodeList.map((item) => {
              if (item.count !== count) {
                return (
                  <div
                    className="dropdown-item"
                    key={item.count}
                    onClick={(event) => handleChangeNode(event, item.count)}
                  >
                    Node {item.count}
                  </div>
                );
              } else {
                return <React.Fragment key={item.count} />;
              }
            })
          )}
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Dropdown;
