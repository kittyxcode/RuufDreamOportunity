const rectangularRoof = require("./RectangularRoof");

test('Paneles 2x1 en techo rectangular de 2x1 => 1', () => {
  expect(rectangularRoof(2, 1, 2, 1)).toBe(1);
});

test('Paneles 2x1 en techo rectangular de 4x2 => 4', () => {
  expect(rectangularRoof(2, 1, 4, 2)).toBe(4);
});

test('Paneles 2x1 en techo rectangular de 5x3 => 7', () => {
  expect(rectangularRoof(2, 1, 5, 3)).toBe(7);
});

test('Paneles 2x1 en techo rectangular de 10x1 => 5', () => {
  expect(rectangularRoof(2, 1, 10, 1)).toBe(5);
});

test('Paneles 2x1 en techo rectangular de 20x3 => 30', () => {
  expect(rectangularRoof(2, 1, 20, 3)).toBe(30);
});

test('Paneles 2x1 en techo rectangular de 21x3 => 31', () => {
  expect(rectangularRoof(2, 1, 21, 3)).toBe(31);
});

test('Paneles 2x1 en techo rectangular de 21x4 => 40', () => {
  expect(rectangularRoof(2, 1, 20, 4)).toBe(40);
});

test('Paneles 2x1 en techo rectangular de 21x4 => 42', () => {
  expect(rectangularRoof(2, 1, 21, 4)).toBe(42);
});

test('Paneles 2x1 en techo rectangular de 2.5x2 => 2', () => {
  expect(rectangularRoof(2, 1, 2.5, 2)).toBe(2);
});

test('Paneles 2x1 en techo rectangular de 2.9x2 => 2', () => {
  expect(rectangularRoof(2, 1, 2.9, 2)).toBe(2);
});

test('Paneles 2x1 en techo rectangular de 2.5x2.5 => 2', () => {
  expect(rectangularRoof(2, 1, 2.5, 2.5)).toBe(2);
});



test('Paneles 2x2 en techo rectangular de 2x2 => 1', () => {
  expect(rectangularRoof(2, 2, 2, 2)).toBe(1);
});

test('Paneles 2x2 en techo rectangular de 5x3 => 2', () => {
  expect(rectangularRoof(2, 2, 5, 3)).toBe(2);
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

test('Paneles 2x2 en techo rectangular de 20x4 => 20', () => {
  expect(rectangularRoof(2, 2, 20, 4)).toBe(20);
});

test('Paneles 2x2 en techo rectangular de 21x4 => 20', () => {
  expect(rectangularRoof(2, 2, 21, 4)).toBe(20);
});

test('Paneles 2x2 en techo rectangular de 25x4 => 24', () => {
  expect(rectangularRoof(2, 2, 25, 4)).toBe(24);
});

test('Paneles 2x2 en techo rectangular de 25.5x4 => 24', () => {
  expect(rectangularRoof(2, 2, 25.5, 4)).toBe(24);
});

test('Paneles 2x2 en techo rectangular de 25.5x4.5 => 24', () => {
  expect(rectangularRoof(2, 2, 25.5, 4.5)).toBe(24);
});

test('no debería lanzar un error si todas las dimensiones son positivas', () => {
  expect(() => {
    rectangularRoof(2, 2, 10.5, 6.3);
  }).not.toThrow();
});

test('debería lanzar un error si alguna dimension es <= 0', () => {
  expect(() => {
    rectangularRoof(2, 2, 10.5, 0);
  }).toThrow('Todas las dimensiones deben ser números positivos.');

  expect(() => {
    rectangularRoof(2, 2, 10.5, -6.3);
  }).toThrow('Todas las dimensiones deben ser números positivos.');
});