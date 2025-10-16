/*
 * EJERCICIO:
 * Utilizando tu lenguaje, emplea 3 mecanismos diferentes para imprimir
 * números del 1 al 10 mediante iteración.
 * DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10?
 */

// Mecanismo 1: Usando un bucle for
console.log("Mecanismo 1: Bucle for");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Mecanismo 2: Usando un bucle while
console.log("Mecanismo 2: Bucle while");
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

// Mecanismo 3: Usando un bucle for...of con un array
console.log("Mecanismo 3: Bucle for...of con array");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (num of numeros) {
  console.log(num);
}

// Difucultad extra

// Mecanismo 4: Usando forEach con un array
console.log("Mecanismo 4: forEach con array");

numeros.forEach((num) => console.log(num));

// Mecanismo 5: Usando un bucle do...while
console.log("Mecanismo 5: Bucle do...while");
let contador = 1;
do {
  console.log(contador);
  contador++;
} while (contador <= 10);

// Mecanismo 6: Usando Array.from y for...of
console.log("Mecanismo 6: Array.from y for...of");
for (let n of Array.from({ length: 10 }, (_, i) => i + 1)) {
  console.log(n);
}

// Mecanismo 7: Usando un generador
console.log("Mecanismo 7: Generador");
function* generarNumeros() {
  for (let i = 1; i <= 10; i++) {
    yield i;
  }
}

for (let n of generarNumeros()) {
  console.log(n);
}

// Mecanismo 8: Usando recursión
console.log("Mecanismo 8: Recursión");
function imprimirRecursivo(n) {
  if (n > 10) return;
  console.log(n);
  imprimirRecursivo(n + 1);
}
imprimirRecursivo(1);

// Mecanismo 9: Usando map con un array
console.log("Mecanismo 9: map con array");
[...Array(10).keys()].map((n) => console.log(n + 1));

// Mecanismo 10: Usando un bucle for...in con un objeto
console.log("Mecanismo 10: Bucle for...in con objeto");
const objNumeros = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
};

for (let key in objNumeros) {
  console.log(objNumeros[key]);
}
