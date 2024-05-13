const rectangularRoof = require("./RectangularRoof");

test('Paneles 1x2 en techo rectangular de 2x4 => 4', () => {
  expect(rectangularRoof(1, 2, 2, 4)).toBe(4);
});

test('Paneles 1x2 en techo rectangular de 3x5 => 7', () => {
  expect(rectangularRoof(1, 2, 3, 5)).toBe(7);
});

test('Paneles 2x2 en techo rectangular de 1x10 => 0', () => {
  expect(rectangularRoof(2, 2, 1, 10)).toBe(0);
});