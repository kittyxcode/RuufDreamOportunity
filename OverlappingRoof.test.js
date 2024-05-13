const overlappingRoof = require('./OverlappingRoof');

test('Superposicion Paneles 1x2 y techo 2x4 => Caben 7', () => {
  expect(overlappingRoof(1, 2, 2, 4, 1)).toBe(7);
});

test('Superposicion Paneles 1x2 y techo 2x4 => Caben 6', () => {
  expect(overlappingRoof(1, 2, 2, 4, 2)).toBe(6);
});

test('Superposicion Paneles 2x2 y techo 2x4 => Caben 2', () => {
  expect(overlappingRoof(2, 2, 2, 4, 4)).toBe(2);
});