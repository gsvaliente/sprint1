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
// func()
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((mensaje) => {
//     console.log(mensaje);
//   });

//EJERCICIO 2
const arrow = (par, cb) => {
  cb(par);
};

const getHour = (hour) => {
  if (hour <= 11) {
    console.log(`Buenos dias`);
  } else if (hour <= 18) {
    console.log(`Buenas tardes`);
  } else {
    console.log(`Buenas noches`);
  }
};

// arrow(9, getHour1);

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
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        let emName = { Employee: employees[i++].name };
        resolve(emName);
      }
    }
    reject('id not found');
  });
};

// getEmployee(1)
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log('Error: ' + error);
//   });

// //EJERCICIO 2
const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name === obj.Employee) {
        let emSalary = salaries[i++].salary;
        resolve(emSalary);
      }
    }
    reject('User was not found');
  });
};
// getSalary({ Employee: 'Linux Torvalds' })
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((mensaje) => {
//     console.log(mensaje);
//   });

module.exports = { getEmployee, getSalary };

// //EJERCICIO 3
const nameAndSalary = (id) => {
  getEmployee(id)
    .then((employee) => {
      console.log(employee);
      return getSalary(employee);
    })
    .then((salary) => {
      console.log(salary);
    })
    .catch((err) => {
      console.log(err);
    });
};
// nameAndSalary(3);
