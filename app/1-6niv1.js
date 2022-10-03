const arrow = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    return `${i}: ${cb()}`;
  }
};

const callback = () => {
  return 'Hola que tal';
};

arrow(2, callback);

module.exports = { arrow, callback };
