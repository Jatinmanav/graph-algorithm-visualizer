const visualizeColor = (document: Document): string => {
  let theme = document.documentElement.getAttribute("data-theme");
  let visualizeColor = "#6002ee";
  if (theme === "dark") {
    visualizeColor = "#c51162";
  }
  return visualizeColor;
};

export default visualizeColor;
