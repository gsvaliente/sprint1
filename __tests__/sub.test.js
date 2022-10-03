const { sub } = require('../app/operations');

describe('the functionality of the subtract function', () => {
  test('if the response is a numbers', () => {
    expect(typeof sub(5, 5)).toBe('number');
    expect(sub(5, 'a')).toBe(NaN);
  });
  test('if the operation actually subtract numbers', () => {
    expect(sub(5, 1)).toBe(4);
    expect(sub(-5, 15)).toBe(-20);
  });
  test('if the parameter is not set it defaults to 0', () => {
    expect(sub(5)).toBe(5);
    expect(sub(167)).toBe(167);
  });
  test('if the function can subtract more than 2 numbers', () => {
    expect(sub(1, 2, 3)).toBe(-4);
    expect(sub(-8, -5, 20, 4)).toBe(-27);
  });
});
