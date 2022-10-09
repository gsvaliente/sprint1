const getEmployee = require('../app/getEmployee');

describe('Test de la getEmployee', () => {
  it('should be a function', () => {
    expect(typeof getEmployee).toBe('function');
  });
  it('should throw if the parameter is not a number', () => {
    return expect(getEmployee('a')).rejects.toMatch('id must be a number');
  });
  it('should resolve an object', () => {
    return expect(typeof getEmployee(1)).toBe('object');
  });
  it('should give the right result', () => {
    return expect(getEmployee(1)).resolves.toStrictEqual({
      Employee: 'Linux Torvalds',
    });
  });
});
