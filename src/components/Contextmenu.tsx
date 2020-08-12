import React from "react";
import contextMenu from "../types/contextMenu";

type AppProps = { contextmenu: contextMenu };

const Contextmenu = ({ contextmenu }: AppProps) => {
  //eslint-disable-next-line
  const { isOpen, x, y } = contextmenu;
  let innerX = x;
  let innerY = y;
  if (x + 200 > window.innerWidth) {
    innerX = x - 200;
  }
  if (y + 300 > window.innerHeight) {
    innerY = y - 300;
  }
  console.log(x, y);
  return (
    <div
      className="context-menu"
      style={{ left: innerX, top: innerY, position: "absolute" }}
    >
      <h3>This is the context menu</h3>
    </div>
  );
};

export default Contextmenu;
