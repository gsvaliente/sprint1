const { trial, timeout } = require('../app/asyncawait');

const mockMath = Object.create(global.Math);
// mockMath.random = () => 0.5;
// mockMath.random = () => 0.4;
global.Math = mockMath;

describe('test async/await function', () => {
  it('tests if trial is a function', () => {
    expect(typeof trial).toBe('function');
  });
  it('test the resolve of the trial function', () => {
    return expect(trial()).resolves.toBe('Promise passed 🎉');
  });
  it('tests if the the rejection of trial works', () => {
    return expect(trial()).rejects.toMatch('Promise failed⛔️');
  });
  it('tests if timeout is a function', () => {
    expect(typeof timeout).toBe('function');
  });
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  it('test if it waits 2 seconds before responding', async () => {
    await timeout();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
