//Ejemplo de un objeto LITERAL:

const persona = {
  nombre: "Ángela",
  edadAnyos: 18,
  pesoKG: 60,

  andar: function () {
    console.log("¡Estoy andando!");
  },
};

persona.comer = function () {
  console.log("¡Estoy comiendo!");
};

//Ejemplo de "clase" con prototype y función constructora:

function Persona(nombre, edadAnyos, pesoKG) {
  this.edadAnyos = edadAnyos;
  this.nombre = nombre;
  this.pesoKG = pesoKG;
}

Persona.prototype.comer = function () {
  console.log("estoy comiendo");
};

function Estudiante(nombre, edadAnyos, pesoKG, nota) {
  Persona.call(this, nombre, edadAnyos, pesoKG);
  this.nota = nota;
}

//Permite que los métodos definidos en el prototipo de Persona estén disponibles para los objetos Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);

//Instancia del objeto Estudiante
var estudiante1 = new Estudiante("Juan", 20, 70, 8);

console.log(estudiante1.nombre); // Juan
console.log(estudiante1.edadAnyos); // 20
console.log(estudiante1.pesoKG); // 70
console.log(estudiante1.nota); // 8
estudiante1.comer(); // estoy comiendo

//Ejemplo de clases

class Person {
  constructor(nombre, edadAnyos, pesoKG) {
    this.nombre = nombre;
    this.edadAnyos = edadAnyos;
    this.pesoKG = pesoKG;
  }

  correr() {
    console.log("Estoy corriendo");
  }
}

//La clase Student HEREDA la clase Person con extends
class Student extends Person {
  constructor(nombre, edadAnyos, pesoKG, nota) {
    super(nombre, edadAnyos, pesoKG);
    this.nota = nota;
  }

  estudiar() {
    console.log("Estoy estudiando");
  }
}

const estudiante2 = new Student("Esther", 16, 45, 7);

console.log("Hola soy " + estudiante2.nombre);
estudiante2.correr();
estudiante2.estudiar();
