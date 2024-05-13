function overlappingRoof(xPanel, yPanel, xRoof, yRoof, superPosition) {
  const areaTecho = xRoof * yRoof * 2;
  console.log(areaTecho);
  const areaPanel = xPanel * yPanel;
  console.log(areaPanel);
  return Math.floor((areaTecho - superPosition * 2) / areaPanel);
}

module.exports = overlappingRoof;
