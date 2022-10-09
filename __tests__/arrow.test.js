const { arrow, getHour } = require('../app/arrow');

describe('1.3 Nivel 1 Ejercicio 2', () => {
  it('tests if it is a function', () => {
    expect(typeof arrow).toBe('function');
  });
  it('tests if there is another function to call back', () => {
    expect(typeof getHour).toBe('function');
  });
  it('test if getHour returns a string', () => {
    expect(typeof getHour(12)).toBe('string');
  });
  it('should throw if the parameter in arrow is not a number', () => {
    expect(() => arrow('a', getHour)).toThrow();
  });
  it('test the functionality of arrow', () => {
    expect(arrow(12, getHour)).toBe('Buenas tardes');
  });
});
