const getSalary = require('../app/getSalary');

describe('test the functionality of getSalary', () => {
  it('tests if it is a function', () => {
    expect(typeof getSalary).toBe('function');
  });
  it('it should reject if the type of the parameter is not an object', () => {
    return expect(getSalary(1)).rejects.toMatch('User was not found');
  });
  it('should resolve the right amount', () => {
    return expect(getSalary({ Employee: 'Linux Torvalds' })).resolves.toBe(
      4000
    );
  });
});
