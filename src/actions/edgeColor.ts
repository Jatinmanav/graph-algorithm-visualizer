const edgeColor = (document: Document): string => {
  let theme = document.documentElement.getAttribute("data-theme");
  let edgeColor = "#333333";
  if (theme === "dark") {
    edgeColor = "#bb86f6";
  }
  return edgeColor;
};

export default edgeColor;
