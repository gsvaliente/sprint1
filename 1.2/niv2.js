//EJERCICIO 1
const func = atributo => ({ nombre: atributo });
console.log(func('Gabriel'));

//EJERCICIO 2
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  imprimirNombre() {
    return this.nombre;
  }
}

let persona = new Persona('Gabriel');
console.log(persona.imprimirNombre());
