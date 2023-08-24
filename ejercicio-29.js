
// 29) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// Función para convertir de base binaria a decimal
function binarioADecimal(binario) {
  return parseInt(binario, 2);
}

// Función para convertir de decimal a base binaria
function decimalABinario(decimal) {
  return decimal.toString(2);
}

// Ejemplos de uso
const numeroBinario = "100";
const numeroDecimal = 4;

const resultadoDecimal = binarioADecimal(numeroBinario);
const resultadoBinario = decimalABinario(numeroDecimal);

console.log(`El número binario ${numeroBinario} es igual a ${resultadoDecimal} en base decimal.`);
console.log(`El número decimal ${numeroDecimal} es igual a ${resultadoBinario} en base binaria.`);
