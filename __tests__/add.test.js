const add = require('../app/operations');

describe('the functionality of the add function', () => {
  test('if the response is a numbers', () => {
    expect(typeof add(5, 5)).toBe('number');
    expect(typeof add(5, 'a')).toBe('string');
  });
  test('if the operation actually adds numbers', () => {
    expect(add(5, 1)).toBe(6);
    expect(add(-5, 15)).toBe(10);
  });
  test('if the parameter is not set it defaults to 0', () => {
    expect(add(5)).toBe(5);
    expect(add(167)).toBe(167);
  });
  test('if the function can more than 2 numbers', () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(-8, -5, 20, 4)).toBe(11);
  });
});
