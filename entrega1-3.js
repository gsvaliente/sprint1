'use strict';
// NIVEL 1
//EJERCICIO 1
//create a function that returns a promise that calls the resolve or reject function
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
//crea una arrow function que reciba un parametro y una cb
const arrow = (para, cb) => {};

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

getEmployee(3)
  .then((name) => {
    console.log(`Employee's name: ${name}`);
  })
  .catch((name) => {
    console.log('Error: ' + name);
  });

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
getSalary('Bill Gates')
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensaje) => {
    console.log(mensaje);
  });
// const getSalary = (obj) => {
//   return new Promise((resolve, reject) => {
//     if (obj === employees[0].id) {
//       resolve(salaries[0].salary);
//     } else if (obj === employees[1].id) {
//       resolve(salaries[1].salary);
//     } else if (obj === employees[2].id) {
//       resolve(salaries[2].salary);
//     } else {
//       reject('User does not exist');
//     }
//   });
// };

// getSalary(1)
//   .then((salary) => {
//     console.log('salary: ' + salary);
//   })
//   .catch((salary) => {
//     console.log(salary);
//   });

// //EJERCICIO 3
// Promise.all([getEmployee(1), getSalary(1)])
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((mensaje) => {
//     console.log(mensaje);
//   });
