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
let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    if (typeof obj === 'object') {
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].name === obj.Employee) {
          let emSalary = salaries[i++].salary;
          resolve(emSalary);
        }
      }
    } else {
      reject('User was not found');
    }
  });
};

module.exports = getSalary;
