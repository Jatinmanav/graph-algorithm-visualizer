import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../icons/down_arrow.svg";
import { ReactComponent as UpArrow } from "../icons/up_arrow.svg";

type AppProps = {
  algoList: string[];
  count: number;
  setAlgorithm(value: number): void;
};

const Dropdown = ({ algoList, count, setAlgorithm }: AppProps) => {
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
    setAlgorithm(index);
  };

  return (
    <div className="algorithm-dropdown-container" onClick={handleClick}>
      {open ? (
        <div className="algorithm-dropdown-item-container">
          {algoList.map((item) => {
            return (
              <div
                className="algorithm-dropdown-item"
                key={item}
                onClick={(event) =>
                  handleChangeNode(event, algoList.indexOf(item))
                }
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <React.Fragment />
      )}
      <div className="algorithm-dropdown-text-container">
        <div className="algorithm-dropdown-text"> {algoList[count]} </div>
        <div className="algorithm-dropdown-arrow">
          {open ? <UpArrow /> : <DownArrow />}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
