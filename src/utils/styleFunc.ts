export const setStyle = (width: string | number, height: string | number) => {
  if (typeof width === "number") {
    width = width + "px";
  }
  if (typeof height === "number") {
    height = height + "px";
  }
  return {
    width: width,
    height: height,
  };
};
