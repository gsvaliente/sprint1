//NIVEL 2
//EJERCICIO 1
const saludo = function (nombre, apellido) {
  console.log(`Hola,
  tu nombre es: ${nombre}
  tu apellido es: ${apellido}`);
};

saludo('Gabriel', 'Valiente');

//EJERCICIO 2
const dias = function () {
  return 365;
};

let mensaje = `Hay ${dias()}, en el año.`;
console.log(mensaje);
