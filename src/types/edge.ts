import node from "../types/node";

export default interface edge {
  directed: boolean;
  source: node;
  target: node;
}
