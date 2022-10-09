const arrow = (par, cb) => {
  if (typeof par !== 'number') {
    throw new Error('parameter must be a number');
  } else {
    return cb(par);
  }
};

const getHour = (hour) => {
  if (hour <= 11) {
    return 'Buenos dias';
  } else if (hour <= 18) {
    return 'Buenas tardes';
  } else {
    return 'Buenas noches';
  }
};
module.exports = { arrow, getHour };
