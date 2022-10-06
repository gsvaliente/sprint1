const { getEmployee } = require('../app/entrega1-3');

describe('Test de la getEmployee', () => {
  it('should be a function', () => {
    expect(typeof getEmployee).toBe('function');
  });
  // it('should throw if the parameter is not a number', () => {
  //   expect(() => getEmployee('a')).toThrow();
  // });
  it('works with resolve', () => {
    expect(getEmployee(1)).toBe({ Employee: 'Linux Torvalds' });
  });
});
