function triangularRoof(xPanel, yPanel, baseTriangulo, alturaTriangulo) {
  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  const areaPanel = xPanel * yPanel;
  return Math.floor(areaTriangulo / areaPanel);
}

module.exports = triangularRoof;
