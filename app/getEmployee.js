let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === 'number') {
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
          let emName = { Employee: employees[i++].name };
          resolve(emName);
        }
      }
    } else {
      reject('id must be a number');
    }
  });
};

module.exports = getEmployee;
