/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

/**
 * Concepto de Herencia: 
 * La herencia se basa en una relación de tipo "es un". Por ejemplo: un Perro es un Animal, y un Gato es un Animal. La clase Animal sería la superclase, que contiene las características y comportamientos comunes a todos los animales (como tener patas o poder comer). Las clases Perro y Gato serían las subclases, que heredan esas características y añaden sus propios comportamientos específicos (ladrar para el perro, maullar para el gato).
 */

// Clase Animal

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  comer() {
    console.log(`${this.nombre} está comiendo.`);
  }


}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre)
    this.raza = raza;
  } 

  sonido() {
    console.log(`${this.nombre} está ladrando.`);
  }
}

const miPerro = new Perro("Fido", "Golden Retriever");
miPerro.comer(); // Output: "Fido está comiendo." (Método heredado)


class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre)
    this.color = color
  }

  sonido() { 
    console.log(`${this.nombre} está maullando.`);
  }
}

const miGato = new Gato("Gatito", "Amarillo");
miGato.comer(); // Output: "Gatito está comiendo." (Método heredado)

// La función `emitirSonido` recibe un objeto de tipo `Animal`
function emitirSonido(animal) {
  animal.sonido();
  console.log(animal)
}

emitirSonido(miPerro); // `sonido()` del Perro
emitirSonido(miGato);  // `sonido()` del Gato


// DIFICULTAD EXTRA

class Empleados {
  constructor(nombre, id) {
    this.nombre = nombre
    this.id = id
  }

  mostrarInfo() {
    
    console.log(`Nombre del empleado: ${this.nombre}. ID del empleado ${this.id}`)
  }

}

class Gerente extends Empleados {
  constructor(nombre, id) {
    super(nombre, id)
    this.personas = []

  }

  agregarSubordinado(empleado) {
    this.personas.push(empleado)
    console.log(`${empleado.nombre} ha sido agregado al equipo de ${this.nombre}.`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    const nombresSubordinados = this.personas.map(persona => persona.nombre).join(', ');
    console.log(`Personas a su cargo: ${nombresSubordinados}`);
  }
}

class GerenteProyectos extends Empleados {
  constructor(nombre, id) {
    super(nombre, id)
    this.personas = []
  }

  agregarSubordinado(empleado) {
    this.personas.push(empleado)
    console.log(`${empleado.nombre} ha sido agregado al equipo de ${this.nombre}.`);
  }

  mostrarInfo() {
    super.mostrarInfo();
  
    const nombresSubordinados = this.personas.map(persona => persona.nombre).join(', ');
    console.log(`Personas a su cargo: ${nombresSubordinados}`);
  }



}

class Programadores extends Empleados {
  constructor(nombre, id, lenguaje) {
    super(nombre, id)
    this.lenguaje = lenguaje
  }

  lenguajeProgramacion() {
    console.log(`Se agregó el lenguaje de programación ${this.lenguaje} a: ${this.nombre} `)
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Lenguaje de Programación del ${this.nombre}: ${this.lenguaje}`)
  }

}

const miGerente = new Gerente('Gerente', 1)

const miGerenteProyecto1 = new GerenteProyectos('GerenteProyecto1', 2)
const miGerenteProyecto2 = new GerenteProyectos('GerenteProyecto2', 3)

const programador1 = new Programadores('programador1', 4, 'JavaScript')
const programador2 = new Programadores('programador2', 5, 'Java')
const programador3 = new Programadores('programador3', 6, 'Python')

miGerente.agregarSubordinado(miGerenteProyecto1)
miGerenteProyecto1.agregarSubordinado(programador1)
programador1.lenguajeProgramacion()


function empresa(nombre) {
  nombre.mostrarInfo()
}

empresa(miGerente)
empresa(miGerenteProyecto1)
empresa(programador1)



