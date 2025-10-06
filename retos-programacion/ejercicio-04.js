// #04 CADENAS DE CARACTERES

/* Acceso y Propiedades */

// Acceso a una letra
let saludo = "Hola mundo";
console.log(saludo[0]); // Salida: "H"
console.log(saludo[5]); // Salida: " " (espacio)

// Longitud 
let texto = "JavaScript";
console.log(texto.length); // Salida: 10

/* Modificación y Transformación*/

// Concatenar
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // Salida: "Juan Pérez"

// Conversión a mayúsculas y minúsculas

console.log(nombre.toLowerCase())
console.log(apellido.toUpperCase())

// Reemplazo
console.log(nombre.replace('J', 'L'))

let frase = 'El sol es sol.'
console.log(frase.replaceAll('sol', 'calor'))

/* Búsqueda y Verificación */

// Verificación (Inclusión)

let pais = 'Argentina'

console.log(pais.includes('Argentina')) // Salida: "true"
console.log(pais.includes('Brasil')) // Salida: "false"

// Búsqueda (Índice)

let animales = "gato, perro, gato";
console.log(animales.indexOf("gato")); // Salida: 0
console.log(animales.indexOf("perro")); // Salida: 6
console.log(animales.lastIndexOf("gato")); // Salida: 13

// Verificación (Inicio/Fin)

let archivo = "documento.pdf";
console.log(archivo.startsWith("doc")); // Salida: true
console.log(archivo.endsWith(".txt")); // Salida: false

/* Subcadenas y División */

// Subcadenas
let cadena = "JavaScript";
console.log(cadena.slice(4, 10)); // Salida: "Script"
console.log(cadena.substring(4, 10)); // Salida: "Script"

// División
let colores = "rojo,verde,azul";
let arrayColores = colores.split(",");
console.log(arrayColores); // Salida: ["rojo", "verde", "azul"]

/* Otras Operaciones */

// Recorrido
let palabra = "programación";
for (const char of palabra) {
  console.log(char);
} // Salida: p, r, o, g, r, a, m, a, c, i, ó, n (cada uno en una línea)

// Unión
let frutas = ["manzana", "banana", "uva"];
let frutasStr = frutas.join(" - ");
console.log(frutasStr); // Salida: "manzana - banana - uva"

// Interpolación
let edad = 30;
let fraseInterpolada = `Tengo ${edad} años.`;
console.log(fraseInterpolada); // Salida: "Tengo 30 años."


/* DIFICULTAD EXTRA (opcional):
 Crea un programa que analice dos palabras diferentes y realice comprobaciones para descubrir si son:
 * - Palíndromos: Es una palabra o una secuencia de palabras que se lee igual de izquierda a derecha que de derecha a izquierda
 * - Anagramas: Cambio en el orden de las letras de una palabra o frase que da lugar a otra palabra o frase distinta.
 * - Isogramas: Una palabra o frase que tiene un isograma usa cada letra solo una vez, como en el ejemplo "lumberjacks" o "dermatoglyphics"
 */



function analizadorPalabras(str1, str2) {

  let palabra1 = str1.toLowerCase().split('').reverse().join('');
  let palabra2 = str2.toLowerCase().split('').reverse().join('');

  if(palabra1 == str1.toLowerCase()) {
    console.log(`La palabra ${str1} es palindromo`)
  }
  if(palabra2 == str2.toLowerCase()) {
    console.log(`La palabra ${str2} es palindromo`)
  }


}
analizadorPalabras('Neuquen', 'oso')



function anagrama(str1, str2) {
  let palabra1 = str1.toLowerCase().split('').sort().join('')
  let palabra2 = str2.toLowerCase().split('').sort().join('')

  console.log(palabra1)
  console.log(palabra2)

  
  if(palabra1 == palabra2) {
    console.log('Las palabras son iguales')
  } else {
    console.log('Las palabras no son iguales')

  }

}

anagrama('oso', 'oao')



function isograma(str1) {
  let palabra1 = str1.split('')
  const set1 = new Set(palabra1)

  if(set1.size == str1.length) {
    console.log(`La palabra ${str1} es isograma`)
  } else {
    console.log(`La palabra ${str1} no es isograma`)

  }

}

isograma('asd')
isograma('asdaaa')
isograma('asde')
isograma('asds')
