//1.2
//NIVEL 1
let a = 1;
let b = 2;

(() => {
  console.log(a + b);
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
