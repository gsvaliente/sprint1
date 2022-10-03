const sub = (a = 0, b = 0, ...c) => {
  let total = a - b;
  c.forEach((num) => {
    total -= num;
  });
  return total;
};

module.exports = sub;
