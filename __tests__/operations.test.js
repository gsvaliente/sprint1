const { add, sub, mult, div } = require('../app/operations');
//addition
describe('The functionality of the add function', () => {
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
  test('if the function can add more than 2 numbers', () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(-8, -5, 20, 4)).toBe(11);
  });
});
//subtraction
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
//multiplication
describe('If the mult function works accordingly', () => {
  it('tests if the answer to the function is a number', () => {
    expect(mult(2, 5)).toBe(10);
    expect(mult('a', 5)).toBe(NaN);
    expect(mult('a', 'b')).toBe(NaN);
  });
  it('tests if the actual multiplication function works', () => {
    expect(mult(1, 100)).toBe(100);
    expect(mult(5, 4)).toBe(20);
  });
  it('tests if a parameter is not set that it equals to 0', () => {
    expect(mult(1)).toBe(0);
    expect(mult(1000)).toBe(0);
  });
  it('tests if the function works with more than 2 parameters', () => {
    expect(mult(1, 2, 3)).toBe(6);
    expect(mult(15, 10, 0)).toBe(0);
  });
});
//division
describe('The proper functionality of the div function', () => {
  it('tests if the answer is actually a number', () => {
    expect(div(10, 5)).toBe(2);
    expect(div('a', 100)).toBe(NaN);
    expect(div('a', 'b')).toBe(NaN);
  });
  it('tests if the div function works accordingly', () => {
    expect(div(15, 5)).toBe(3);
    expect(div(100, 5)).toBe(20);
  });
  it('tests if a parameter is 0 to make infinity to 0', () => {
    expect(div(0, 5)).toBe(0);
    expect(div(5, 0)).toBe(0);
    expect(div(10)).toBe(0);
  });
  it('tests if more than 2 numbers can be divided', () => {
    expect(div(25, 5, 2)).toBe(2.5);
    expect(div(100, 25, 2)).toBe(2);
  });
});
