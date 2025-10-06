// #05 VALOR Y REFERENCIA

// Por valor (Tipos Primitivos)
// Ejemplo con un número
let a = 10;
let b = a; // Se copia el valor de 'a' a 'b'
b = 20;    // Se cambia 'b'

console.log(a); // Salida: 10
console.log(b); // Salida: 20
// 'a' no se ve afectada porque 'b' es una copia independiente.

// Por referencia  (Tipos No Primitivos)

// Ejemplo con un objeto
let obj1 = { valor: 10 };
let obj2 = obj1; // Se copia la referencia (apuntan al mismo objeto)
obj2.valor = 20; // Se modifica la propiedad del objeto a través de 'obj2'

console.log(obj1.valor); // Salida: 20
console.log(obj2.valor); // Salida: 20
// 'obj1' se ve afectado porque ambas variables acceden a la misma dirección de memoria.

/** Funciones con variables "por valor" y "por referencia" */

// Valor (Tipos Primitivos)
function modificarNumero(num) {
  num = 100; // Modifica la copia local, no la variable original
  console.log("Dentro de la función:", num); // Salida: 100
}

let numeroOriginal = 50;
modificarNumero(numeroOriginal);

console.log("Fuera de la función:", numeroOriginal); // Salida: 50
// La variable 'numeroOriginal' no se ha modificado.



// Referencia (Tipos No Primitivos)

function modificarObjeto(obj) {
  obj.nombre = "Ana"; // Modifica la propiedad del objeto original
  console.log("Dentro de la función:", obj); // Salida: { nombre: "Ana" }
}

let persona = { nombre: "Juan" };
modificarObjeto(persona);

console.log("Fuera de la función:", persona); // Salida: { nombre: "Ana" }
// El objeto 'persona' se ha modificado permanentemente.



/* DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas. Comprueba también que se ha conservado el valor original en las primeras.
 */

function primeraFuncion(str1, str2) {
  let str3 = str1;
  str1 = str2
  str2 = str3
  

  return [str1, str2];

}

let strOriginal1 = 'Hola mundo';
let strOriginal2 = 'Hello world';

console.log(primeraFuncion(strOriginal1, strOriginal2));
console.log("Fuera de la función:", strOriginal1, strOriginal2)

function segundaFuncion(str1, str2) {

let objTemp = str1.nombre

str1.nombre = str2.nombre
str2.nombre = objTemp

return [str1, str2];

}

let persona1 = { nombre: "Seba" };
let persona2 = { nombre: "Lionel" };
console.log("Persona 1:", persona1);
console.log("Persona 2:", persona2);
console.log(segundaFuncion(persona1, persona2));




