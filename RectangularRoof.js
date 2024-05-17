function rectangularRoof(xPanel, yPanel, xRoof, yRoof) {
  let x = xRoof / xPanel;
  let y = Math.floor(yRoof / yPanel);
  return Math.floor(x * y);
}

module.exports = rectangularRoof;
