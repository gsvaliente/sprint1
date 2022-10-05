'use strict';
//NIVEL 1
////EJERCICIO 1
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

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    if (id === undefined || typeof id === 'string')
      throw new Error('id must be a number');
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        let emName = { Employee: employees[i++].name };
        resolve(emName);
      }
    }
    reject('id not found');
  });
};

const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'object') {
      throw new Error('parameter must be an object');
    }
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name === obj.Employee) {
        let emSalary = salaries[i++].salary;
        resolve(emSalary);
      }
    }
    reject('User was not found');
  });
};

const nameAndSalary = async (id) => {
  const employeeId = await getEmployee(id);
  const employeeSalary = await getSalary(employeeId);
  console.log(JSON.stringify(employeeId) + ` Salary: ${employeeSalary}`);
};
nameAndSalary(2);
console.log('async test');

//EJERCICIO 2
const trial = () => {
  try {
    return new Promise((resolve, reject) => {
      if (Math.random() >= 0.5) {
        resolve('Promise passed');
      } else {
        reject('Promise failed⛔️');
      }
    });
  } catch (err) {
    console.log(err);
  }
};
const timeout = async () => {
  const result = await trial();
  setTimeout(() => {
    console.log(result);
  }, 2000);
};
// timeout();

////NIVEL 2
//EJERCICIO 1
// const double = async (num) => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//       return num * 2;
//     }, 2000);
//   });
// };

// // double(2);

// const getSum = (num1, num2, num3) => {
//   const one = double(num1);
//   const two = double(num2);
//   const three = double(num3);
//   console.log(one + two + three);
// };
// getSum(1, 2, 3);
