const rectangularRoof = require("./RectangularRoof");

test('Paneles 2x1 en techo rectangular de 4x2 => 4', () => {
  expect(rectangularRoof(2, 1, 4, 2)).toBe(4);
});

test('Paneles 2x1 en techo rectangular de 5x3 => 7', () => {
  expect(rectangularRoof(2, 1, 5, 3)).toBe(7);
});

test('Paneles 2x2 en techo rectangular de 10x1 => 0', () => {
  expect(rectangularRoof(2, 2, 10, 1)).toBe(0);
});

test('Paneles 2x2 en techo rectangular de 20x3 => 10', () => {
  expect(rectangularRoof(2, 2, 20, 3)).toBe(10);
});

test('Paneles 2x2 en techo rectangular de 21x3 => 10', () => {
  expect(rectangularRoof(2, 2, 21, 3)).toBe(10);
});