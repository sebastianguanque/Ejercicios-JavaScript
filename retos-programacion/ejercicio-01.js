//#01 OPERADORES Y ESTRUCTURAS DE CONTROL

/* Operadores Aritméticos */

let a = 10;
let b = 5;

// Suma
let suma = a + b; // 15

// Resta
let resta = a - b; // 5

// Multiplicación
let multiplicacion = a * b; // 50

// División
let division = a / b; // 2

// Módulo (residuo)
let modulo = a % b; // 0

// Exponenciación
let potencia = a ** b; // 100000

// Incremento
a++; // a es ahora 11

// Decremento
b--; // b es ahora 4


/* Operadores de Asignación */

let x = 10;

// Asignación simple
x = 5; // x es 5

// Suma y asignación
x += 3; // x es 8 (equivalente a x = x + 3)

// Resta y asignación
x -= 2; // x es 6

// Multiplicación y asignación
x *= 4; // x es 24

// División y asignación
x /= 2; // x es 12

// Módulo y asignación
x %= 5; // x es 2


/** Operadores de Comparación */

let num1 = 10;
let num2 = 5;

// Igualdad
console.log(num1 == 10); // true
console.log(num1 == "10"); // true (compara solo el valor)

// Igualdad estricta (valor y tipo)
console.log(num1 === 10); // true
console.log(num1 === "10"); // false

// Desigualdad
console.log(num1 != 5); // true

// Desigualdad estricta
console.log(num1 !== 10); // false

// Mayor que
console.log(num1 > num2); // true

// Menor que
console.log(num1 < num2); // false

// Mayor o igual que
console.log(num1 >= 10); // true

// Menor o igual que
console.log(num1 <= 5); // false


/** Operadores Lógicos */
let esMayor = true;
let tieneDinero = false;

// AND lógico (&&)
// Devuelve true si ambas expresiones son verdaderas
console.log(esMayor && tieneDinero); // false

// OR lógico (||)
// Devuelve true si al menos una expresión es verdadera
console.log(esMayor || tieneDinero); // true

// NOT lógico (!)
// Invierte el valor booleano
console.log(!esMayor); // false


/** Operador de Tipo (typeof) */
let nombre = "Juan";
let edad = 30;
let esActivo = true;

console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esActivo); // "boolean"


/** Operador Ternario (Condicional) */
let edad1 = 20;

// Si la edad es mayor o igual a 18, el mensaje es "Adulto", de lo contrario es "Menor"
let mensaje = (edad1 >= 18) ? "Adulto" : "Menor";

console.log(mensaje); // "Adulto"



/** Estructuras de Control Condicionales **/

let edad2 = 18;
let tieneLicencia = true;

if (edad2 >= 18 && tieneLicencia) {
  console.log("Puedes conducir un auto.");
} else if (edad2 >= 18) {
  console.log("Necesitas obtener tu licencia de conducir.");
} else {
  console.log("No tienes la edad suficiente para conducir.");
}

/** Estructuras de Control Iterativas (Bucles) **/

for (let i = 0; i < 5; i++) {
  // Inicialización (let i = 0)
  // Condición (i < 5)
  // Incremento (i++)
  console.log("El valor de i es: " + i);
}

let contador = 0;
while (contador < 3) {
  console.log("El contador es: " + contador);
  contador++;
}

let numero = 5;
do {
  console.log("El número es: " + numero);
  numero--;
} while (numero > 5);


/* Manejo de Excepciones */
try {
  let resultado = 10 / 0; // Esto no lanzará un error, ya que en JavaScript es `Infinity`
  let objeto = null;
  console.log(objeto.propiedad); // Esto sí lanzará un error de tipo
} catch (error) {
  console.log("Se ha producido un error: " + error.message);
} finally {
  console.log("Este bloque siempre se ejecuta.");
}


/*** DIFUCULTAD EXTRA ***/

//Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

for(let i = 10; i <= 55; i++) {
  if(i % 2 === 0 && i != 16 && i % 3 != 0) {
    console.log(i)
  }
}

