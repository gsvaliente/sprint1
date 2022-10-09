const trial = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
      resolve('Promise passed 🎉');
    } else {
      reject('Promise failed⛔️');
    }
  });
};
const timeout = async () => {
  try {
    const result = await trial();
    setTimeout(() => {
      return result;
    }, 2000);
  } catch (error) {
    setTimeout(() => {
      return error;
    }, 2000);
  }
};
// timeout();
module.exports = { trial, timeout };
