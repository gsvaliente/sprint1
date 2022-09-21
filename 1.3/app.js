'use strict';
// NIVEL 1
//EJERCICIO 1
const ejercicio1 = new Promise((resolve, reject) => {
  let suma = 1 + 1;
  if (suma === 2) {
    resolve('Correcto, la respuesta es 2');
  } else {
    reject('Incorrecto, la respuesta es 2');
  }
});

ejercicio1
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensaje) => {
    console.log(mensaje);
  });

//EJERCICIO 2
const ejercicio2 = (algo, cb) => {
  cb(algo);
};

ejercicio2(5, (num) => {
  let doblar = num * 2;
  console.log(`${doblar} es la multiplicacion de ${num} por 2`);
});

//NIVEL 2
//EJERCICIO 1
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
    if (employees[0].id === id) {
      resolve(employees[0].name);
    } else if (employees[1].id === id) {
      resolve(employees[1].name);
    } else if (employees[2].id === id) {
      resolve(employees[2].name);
    } else {
      reject('User does not exist');
    }
  });
};

getEmployee(1)
  .then((name) => {
    console.log(`Employee's name: ${name}`);
  })
  .catch((name) => {
    console.log('Error: ' + name);
  });

//EJERCICIO 2
const getSalary = (obj) => {
  return new Promise((resolve, reject) => {
    if (obj === employees[0].id) {
      resolve(salaries[0].salary);
    } else if (obj === employees[1].id) {
      resolve(salaries[1].salary);
    } else if (obj === employees[2].id) {
      resolve(salaries[2].salary);
    } else {
      reject('User does not exist');
    }
  });
};

getSalary(1)
  .then((salary) => {
    console.log('salary: ' + salary);
  })
  .catch((salary) => {
    console.log(salary);
  });

Promise.all([getEmployee(1), getSalary(1)])
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensaje) => {
    console.log(mensaje);
  });
