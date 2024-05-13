function rectangularRoof(xPanel, yPanel, xRoof, yRoof) {
  if (xPanel > xRoof || yPanel > yRoof) {
    return 0;
  }
  const large = xRoof / xPanel;
  const width = yRoof / yPanel;
  return Math.floor(large * width);
}

module.exports = rectangularRoof;
