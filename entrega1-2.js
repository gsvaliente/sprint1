//1.2
//NIVEL 1
console.log(
  ((a, b) => {
    return a + b;
  })(2, 3)
);
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
