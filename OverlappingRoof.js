function overlappingRoof(xPanel, yPanel, xRoof, yRoof, superPosition) {
  const areaRoof = xRoof * yRoof * 2;
  const areaPanel = xPanel * yPanel;
  return Math.floor((areaRoof - superPosition * 2) / areaPanel);
}

module.exports = overlappingRoof;
