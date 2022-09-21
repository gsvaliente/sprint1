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
const employee = new Promise((resolve, reject) => {});
