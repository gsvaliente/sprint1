const { div } = require('../app/operations');

describe('the proper functionality of the div function', () => {
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
