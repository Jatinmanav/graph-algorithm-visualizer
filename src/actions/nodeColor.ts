const nodeColor = (document: Document): string => {
  let theme = document.documentElement.getAttribute("data-theme");
  let nodeColor = "#eeeeee";
  if (theme === "dark") {
    nodeColor = "#1f1b24";
  }
  return nodeColor;
};

export default nodeColor;
