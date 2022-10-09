//1.2
//NIVEL 1
// ((a, b) => {
//   console.log(a + b);
// })(2, 4);
(() => {
  let sum = 2 + 2;
  console.log(sum);
})();
///////////////////////////
//NIVEL 2
const func = (atributo) => ({ nombre: atributo });
console.log(func('Gabriel'));

//EJERCICIO 2
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  imprimirNombre() {
    console.log(this.nombre);
  }
}

let persona = new Persona('Gabriel');
persona.imprimirNombre();
