/**
 * Calcula el número de paneles que caben en un techo rectangular.
 *
 * @param {number} xPanel - El ancho de un panel.
 * @param {number} yPanel - La altura de un panel.
 * @param {number} xRoof - El ancho del techo (puede ser un número decimal).
 * @param {number} yRoof - La altura del techo (puede ser un número decimal).
 * @returns {number} El número de paneles que caben en el techo.
 * @throws {Error} Si alguna de las dimensiones del panel o del techo no es un número positivo.
 */
function rectangularRoof(xPanel, yPanel, xRoof, yRoof) {
  // Valida que los parámetros sean números positivos
  if (xPanel <= 0 || yPanel <= 0 || xRoof <= 0 || yRoof <= 0) {
    throw new Error('Todas las dimensiones deben ser números positivos.');
  }
  let x = xRoof / xPanel;
  let y = Math.floor(yRoof / yPanel);
  if (Math.floor(yRoof) % 2 == 0 && yPanel % 2 == 0) {
    return Math.floor(x) * y;
  }
  return Math.floor(x * y);
}

module.exports = rectangularRoof;
