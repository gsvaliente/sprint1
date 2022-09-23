'use strict';
// NIVEL 1
//EJERCICIO 1
const func = () => {
  return new Promise((resolve, reject) => {
    let ranNum = Math.floor(Math.random() * 10);
    // console.log(ran);
    if (ranNum <= 5) {
      resolve(`Random number passed: ${ranNum} is lower or equal to 5`);
    } else {
      reject(`Random number failed: ${ranNum} is higher than 5`);
    }
  });
};
func()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensaje) => {
    console.log(mensaje);
  });

//EJERCICIO 2
const arrow = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${i}: ${cb()}`);
  }
};

const callback = () => {
  return 'Hola que tal';
};

arrow(2, callback);

// //NIVEL 2
// //EJERCICIO 1
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
    let i = 0;
    while (i < employees.length) {
      if (employees[i].id === id) {
        resolve(employees[i++].name);
      }
      i++;
    }
    reject('User was not found');
  });
};

// getEmployee(3)
//   .then((name) => {
//     console.log(`Employee's name: ${name}`);
//   })
//   .catch((name) => {
//     console.log('Error: ' + name);
//   });

// //EJERCICIO 2
const getSalary = (nombre) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name === nombre) {
        resolve(salaries[i++].salary);
      }
    }
    reject('User was not found');
  });
};
// getSalary('Bill Gates')
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((mensaje) => {
//     console.log(mensaje);
//   });

// //EJERCICIO 3
const nameAndSalary = (id) => {
  return new Promise((resolve, reject) => {
    getEmployee(id)
      .then((employee) => {
        console.log(`Employee name: ${employee}`);
        return getSalary(employee);
      })
      .then((salary) => {
        console.log(`Salary: ${salary}`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

nameAndSalary(1);
