import React, { useState, ReactNode, createContext } from "react";
import canvasProvider from "../types/canvasProvider";

const initialState = {
  canvas: null,
  context: null,
  setCanvas: () => {},
  setContext: () => {},
};

export const CanvasContext = createContext<canvasProvider>(initialState);

type Iprops = {
  children: ReactNode;
};

export const CanvasContextProvider = (props: Iprops) => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  return (
    <CanvasContext.Provider value={{ canvas, context, setCanvas, setContext }}>
      {props.children}
    </CanvasContext.Provider>
  );
};
