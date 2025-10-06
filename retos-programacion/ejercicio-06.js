// #06 RECURSIVIDAD

function recursividad() {
  for(let i = 100; 0 <= i; i--) {
    console.log(i)
  }
}

// recursividad()

function cuentaAtras(numero) {
  // Caso Base: Si el número es menor que 0, detenemos la recursión.
  if (numero < 0) {
    return;
  }

  // Imprimimos el número actual
  console.log(numero);

  // Llamada Recursiva: La función se llama a sí misma con el siguiente número.
  cuentaAtras(numero - 1);
}

// Llamamos a la función para iniciar el proceso desde 100
// cuentaAtras(100);


/* DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la sucesión de Fibonacci (la función recibe la posición).
*/


function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1)
}

console.log(factorial(5))


function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5))

