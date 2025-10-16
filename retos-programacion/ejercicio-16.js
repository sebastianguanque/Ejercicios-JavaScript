/*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */

const texto =
  "En 2024, la población mundial alcanzó los 8 mil millones. El código postal de mi ciudad es 28013 y mi número de teléfono es +34 600 123 456.";

// Expresión regular para encontrar todos los números en el texto
const regexNumeros = /\d+/g;
const numerosEncontrados = texto.match(regexNumeros);
console.log("Números encontrados:", numerosEncontrados);

// Expresión regular para validar un email
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailEjemplo = "guanquesebastian@gmail.com";
console.log("¿Email válido?", regexEmail.test(emailEjemplo));

// Expresión regular para validar un número de teléfono (formato internacional)
const regexTelefono =
  /^\+?[0-9]{1,3}?[ -]?[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{3,4}$/;
console.log(
  "¿Número de teléfono válido?",
  regexTelefono.test("+34 600 123 456")
);

// Expresión regular para validar una URL
const regexURL =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._%+-]*)*\/?$/;
const urlEjemplo = "https://www.ejemplo.com/ruta";
console.log("¿URL válida?", regexURL.test(urlEjemplo));
