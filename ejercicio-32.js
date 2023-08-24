// 32) Programa una función que dada una cadena de texto cuente el número de vocales, pe. miFuncion("Hola Mundo") devuelva Vocales: 4.

function contarVocalesConsonantes(cadena) {
  const vocales = "aeiouAEIOU";
  let numVocales = 0;
  let numConsonantes = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      numVocales++;
    } else if (cadena[i] !== " ") {
      numConsonantes++;
    }
  }

  return `Vocales: ${numVocales}, Consonantes: ${numConsonantes}`;
}

const texto = "Hola Mundo";
const resultado = contarVocalesConsonantes(texto);
console.log(resultado);