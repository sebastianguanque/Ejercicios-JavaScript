/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

import fs from "fs";

let nombreArchivo = "sebastianguanque";

let contenido = "Sebastián Guanque\n27\nJavaScript";
try {
  // Crear el archivo y escribir contenido
  fs.writeFileSync(`${nombreArchivo}.txt`, contenido);

  // Leer e imprimir el contenido del archivo
  let data = fs.readFileSync(`${nombreArchivo}.txt`, "utf8");
  console.log("Contenido del archivo:");
  console.log(data);

  // Borrar el archivo
  fs.unlinkSync(`${nombreArchivo}.txt`);
  console.log(`El archivo ${nombreArchivo}.txt ha sido borrado.`);
} catch (err) {
  console.error("Error:", err);
}
