function darkenColor(rgbColor, factor) {
  const [r, g, b] = rgbColor
    .substring(4, rgbColor.length - 1)
    .split(",")
    .map((value) => parseInt(value.trim()));

  const newR = Math.max(0, r - factor);
  const newG = Math.max(0, g - factor);
  const newB = Math.max(0, b - factor);
  return `rgb(${newR}, ${newG}, ${newB})`;
}
export default darkenColor;
