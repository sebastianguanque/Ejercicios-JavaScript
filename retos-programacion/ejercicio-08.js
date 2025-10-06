/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

/**
 * Concepto de Clase

    Una clase es como un molde o un plano para crear objetos. En lugar de crear un objeto con propiedades y métodos uno por uno, una clase te permite definir una estructura una sola vez y luego crear múltiples objetos (instancias) que siguen ese mismo patrón.

      Inicializador (constructor): Es una función especial dentro de la clase que se ejecuta automáticamente cuando creas un nuevo objeto. Se usa para inicializar los atributos del objeto con los valores que le pasas como parámetros. Piensa en él como la fábrica que prepara tu objeto para su uso.

      Atributos: Son las variables o datos que pertenecen a una instancia de la clase. Representan las características o propiedades del objeto, como el color de un coche o el nombre de una persona.

      Función (Método): Es una función que está asociada a la clase. Los métodos te permiten definir el comportamiento de los objetos creados a partir de esa clase. Por ejemplo, un método podría ser imprimirInfo(), que muestra todos los atributos del objeto. */

class Saludar {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hola() {
    return `Hola ${this.nombre}, como estuvo tu día?`
  }

  adios() {
    return `${this.nombre}, nos vemos pronto.`
  }
}

const miSaludo = new Saludar('Sebastián')

console.log(miSaludo.hola()) // "Hola Sebastián, como estuvo tu día?"
miSaludo.nombre = 'Seba'
console.log(miSaludo.adios()) // "Seba, nos vemos pronto."


// DIFICULTAD EXTRA

class Pila {
  constructor() {
    this.pilaPrincipal = []
  }

  // Función para añadir (enqueue) elementos
  push(elemento) {
    this.pilaPrincipal.push(elemento);
    return `Se ha añadido el siguiente elemento: '${elemento}'.`;
  }

  // Función para eliminar (enqueue) elementos

  pop() {
    if(this.pilaPrincipal.length > 0) {
      const elementoEliminado = this.pilaPrincipal.pop(); // Saca la página de la pila principal
      return `Se ha eliminado el siguiente elemento:' ${elementoEliminado}'.`;
  }
  else {
    console.log('No hay elementos.')
    return undefined;
  }

  }

  // Método para retornar el número de elementos.
  size() {
    return `Números de elementos: ${this.pilaPrincipal.length}`
  }

  // Método para imprimir todo el contenido de la pila.
  print() {
    return `Contenido: ${this.pilaPrincipal}`

  }

}

const pila1 = new Pila()
pila1.push('Elemento 1')
pila1.push('Elemento 2')

console.log(pila1.print())
console.log(pila1.size())
console.log(pila1.pop())
console.log(pila1.size())

console.log(pila1.print())



class Cola {
  constructor() {
    this.colaPrincipal = []
  }

    // Función para añadir (enqueue) elementos
  enqueue(elemento) {
    this.colaPrincipal.push(elemento);
    return `Se ha añadido el siguiente elemento: '${elemento}'.`;
  }

  // Función para eliminar (enqueue) elementos

  dequeue() {

    if(this.colaPrincipal.length > 0) {
      const elementoEliminado = this.colaPrincipal.shift();
      console.log(`Se ha eliminado el siguiente elemento:' ${elementoEliminado}'.`);
      return elementoEliminado;
    } else {
      console.log('No existen elementos.')
      return undefined;
    }
    
  }

  // Método para retornar el número de elementos.
  size() {
    return `Números de elementos: ${this.colaPrincipal.length}`
  }

  // Método para imprimir todo el contenido de la pila.
  print() {
    console.log(`Contenido actual: ${this.colaPrincipal}`)
    return this.colaPrincipal

  }
}

const cola1 = new Cola;
cola1.enqueue('Elem 1')
cola1.enqueue('Elem 2')
cola1.enqueue('Elem 3')
console.log(cola1.size())
console.log(cola1.print())

cola1.dequeue()
console.log(cola1.size())
console.log(cola1.print())

