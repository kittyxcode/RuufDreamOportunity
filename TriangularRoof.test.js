const triangularRoof = require('./TriangularRoof');

test('Paneles 1x2 en techo triangular de base 1 y altura 2 => 0', () => {
  expect(triangularRoof(1, 2, 1, 2)).toBe(0);
});

test('Paneles 1x2 en techo triangular de base 2 y altura 2 => 1', () => {
  expect(triangularRoof(1, 2, 2, 2)).toBe(1);
});

test('Paneles 2x2 en techo triangular de base 5 y altura 10 => 6', () => {
  expect(triangularRoof(2, 2, 5, 10)).toBe(6);
});

test('Paneles 2x2 en techo triangular de base 1 y altura 2 => 0', () => {
  expect(triangularRoof(2, 2, 1, 2)).toBe(0);
});