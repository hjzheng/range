const range = require('./index');

test('range()', () => {
  expect(() => {
    range();
  }).toThrowError(/range function expect at least 1 argument/);
});

test('range(4)', () => {
  expect(range(4)).toEqual([0, 1, 2, 3]);
});

test('range(1, 4)', () => {
  expect(range(1, 4)).toEqual([1, 2, 3]);
});

test('range(1, 4, 2)', () => {
  expect(range(1, 4, 2)).toEqual([1, 3]);
});

test('range(5, 20, 4)', () => {
  expect(range(5, 20, 4)).toEqual([5, 9, 13, 17]);
});

test('range(2, -10, -4)', () => {
  expect(range(2, -10, -4)).toEqual([2, -2, -6]);
});

test('range(2, -10, 0)', () => {
  expect(() => {
    range(2, -10, 0);
  }).toThrowError(/range function argument step can not be 0/);
});

test('range(2, 2, 1)', () => {
  expect(range(2, 2, 1)).toEqual([]);
});

test('range(2, -10, 1)', () => {
  expect(() => {
    range(2, -10, 1);
  }).toThrowError(/range function argument start/);
});

test('range(2, 10, -3)', () => {
  expect(() => {
    range(2, 10, -3);
  }).toThrowError(/range function argument start/);
});
