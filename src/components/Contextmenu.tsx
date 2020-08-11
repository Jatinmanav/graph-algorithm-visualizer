import React from "react";
import contextMenu from "../types/contextMenu";

type AppProps = { contextmenu: contextMenu };

const Contextmenu = ({ contextmenu }: AppProps) => {
  //eslint-disable-next-line
  const { isOpen, x, y } = contextmenu;
  console.log(x, y);
  return (
    <div
      className="context-menu"
      style={{ left: x, top: y, position: "absolute" }}
    >
      <h1>This is the context menu</h1>
    </div>
  );
};

export default Contextmenu;
