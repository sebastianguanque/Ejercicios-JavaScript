/**
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 */

// Ejercicio

function suma(a, b) {
  return a + b;
}

// Exportar la función para que el test pueda acceder a ella
module.exports = {
  suma,
};
