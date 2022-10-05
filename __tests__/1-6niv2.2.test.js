const { getSalary } = require('../app/entrega1-3');

describe('the functionality of getSalary', () => {
  it('should be a function', () => {
    expect(typeof getSalary).toBe('function');
  });
  it('should throw if it does not have a parameter', () => {
    expect(() => getSalary()).toThrow();
  });
  it('should throw if the parameter is not a string', () => {
    expect(() => getSalary(2)).toThrow();
  });
  it('should return a number', () => {
    return getSalary('Bill Gates').then((data) => {
      expect(typeof data).toBe('number');
    });
  });
  it('should return a proper response', () => {
    return getSalary('Bill Gates').then((data) => {
      expect(data).toBe(1000);
    });
  });
});
