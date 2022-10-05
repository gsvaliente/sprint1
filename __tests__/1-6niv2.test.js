const { getEmployee } = require('../app/entrega1-3');

describe('The functionality of the getEmployee function', () => {
  it('should be a function', () => {
    expect(typeof getEmployee).toBe('function');
  });

  it('should throw if a parameter is set as string', () => {
    expect(() => getEmployee('a')).toThrow();
  });

  it('should throw if a parameter is not set', () => {
    expect(() => getEmployee()).toThrow();
  });

  it('should return a string value', () => {
    return getEmployee(3).then((data) => {
      expect(typeof data).toBe('string');
    });
  });
  it('should return a correct name', () => {
    return getEmployee(1).then((data) => {
      expect(data).toBe('Linux Torvalds');
    });
  });
});
