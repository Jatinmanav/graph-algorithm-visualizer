import node from "../types/node";

export default interface edge {
  directed: boolean;
  weight: number;
  source: node;
  target: node;
}
