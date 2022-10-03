// addition
const add = (a = 0, b = 0, ...c) => {
  let total = a + b;
  c.forEach((i) => {
    total += i;
  });
  return total;
};

const sub = (a = 0, b = 0, ...c) => {
  let total = a - b;
  c.forEach((num) => {
    total -= num;
  });
  return total;
};

const mult = (a = 0, b = 0, ...c) => {
  let total = a * b;
  c.forEach((num) => {
    total *= num;
  });
  return total;
};
module.exports = { add, sub, mult };
