// Create an arrow function that receives a parameter and a callback function and pass the function a message or another (which will be printed to the console) depending on the parameter received.
const func = require('../app/test1-2');

describe('functionality of arrow function', () => {
  it('tests to see if the function is in fact a function', () => {
    expect(typeof func).toBe('function');
  });
});
