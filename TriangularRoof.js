function triangularRoof(xPanel, yPanel, baseTriangule, alturaTriangule) {
  const areaTriangule = (baseTriangule * alturaTriangule) / 2;
  const areaPanel = xPanel * yPanel;
  return Math.floor(areaTriangule / areaPanel);
}

module.exports = triangularRoof;
