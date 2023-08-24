// 22) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function eliminarCaracteres(oracion) {
  let result = oracion.replaceAll('xyz', '');
  console.log(result);
}

let oracion = 'xyz1, xyz2, xyz3, xyz4 y xyz5'
eliminarCaracteres(oracion) 