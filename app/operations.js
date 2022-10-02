// addition
const add = (a = 0, b = 0, ...c) => {
  let total = a + b;
  c.forEach((i) => {
    total += i;
  });
  return total;
};

module.exports = add;
