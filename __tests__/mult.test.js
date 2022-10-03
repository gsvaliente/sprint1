const { mult } = require('../app/operations');
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
