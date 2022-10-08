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

const div = (a = 0, b = 0, ...c) => {
  let total = a / b;
  c.forEach((num) => {
    total /= num;
  });
  if (total === Infinity) {
    return 0;
  } else {
    return total;
  }
};
module.exports = { add, sub, mult, div };
