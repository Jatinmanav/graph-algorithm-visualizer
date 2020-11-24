const fontColor = (document: Document): string => {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") return "#bb86f6";
  else return "#121212";
};

export default fontColor;
