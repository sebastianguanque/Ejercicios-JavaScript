/**
 * SON (JavaScript Object Notation)

  JSON es un formato de texto ligero y fácil de leer.  Su sintaxis se basa en la de los objetos de JavaScript, lo que lo hace muy popular entre los desarrolladores web.

  Características:

    Sintaxis sencilla: Se organiza en pares de clave/valor. Las claves son siempre cadenas de texto entre comillas dobles, y los valores pueden ser cadenas, números, booleanos, arrays u otros objetos.

    Fácil de usar: Es muy fácil de parsear y generar en casi todos los lenguajes de programación. En JavaScript, por ejemplo, puedes convertir un objeto en una cadena JSON con JSON.stringify() y una cadena JSON en un objeto con JSON.parse().

    Estructura: Se utiliza para representar datos estructurados. Un objeto se delimita con llaves {} y los arrays con corchetes [].

    Ejemplo: 
      {
        "nombre": "Juan",
        "edad": 30,
        "esEstudiante": false,
        "habilidades": ["JavaScript", "HTML", "CSS"],
        "direccion": {
          "calle": "Calle Falsa",
          "numero": 123
        }
      }
*/

/**
 * XML (eXtensible Markup Language)

    XML es un lenguaje de marcado diseñado para almacenar y transportar datos.

    Aunque su popularidad ha disminuido con el auge de JSON, sigue siendo muy relevante en muchos sistemas empresariales y tecnologías antiguas.

  Características:

    Sintaxis basada en etiquetas: Utiliza una estructura de etiquetas similar a HTML. Cada elemento tiene una etiqueta de apertura y una de cierre (<etiqueta>...</etiqueta>).

    Extensible: Puedes crear tus propias etiquetas para describir tus datos de forma precisa.

    Más verboso: Su estructura de etiquetas lo hace más "pesado" y menos conciso que JSON.

    Validación: Puede ser validado con un DTD (Document Type Definition) o un esquema XML para asegurar que los datos cumplen con un formato específico.

  Ejemplo de XML:
    <persona>
    <nombre>Juan</nombre>
    <edad>30</edad>
    <esEstudiante>false</esEstudiante>
    <habilidades>
      <habilidad>JavaScript</habilidad>
      <habilidad>HTML</habilidad>
      <habilidad>CSS</habilidad>
    </habilidades>
    <direccion>
      <calle>Calle Falsa</calle>
      <numero>123</numero>
    </direccion>
  </persona>

 */

/**
 * Diferencias Clave

    Legibilidad y tamaño: JSON es más conciso y fácil de leer para los humanos. XML es más verboso, lo que lo hace más grande en tamaño de archivo para la misma cantidad de datos.

    Sintaxis: JSON usa llaves y corchetes con pares clave/valor. XML usa una estructura de etiquetas de apertura y cierre.

    Comunidad y uso: JSON es el formato preferido en el desarrollo web moderno. XML se usa a menudo en aplicaciones de legado, servicios web (SOAP), y en la industria de la banca y telecomunicaciones.
 */

/* * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos. */

import fs from "fs";

const NOMBRE_ARCHIVO_JSON = "datos.json";
const NOMBRE_ARCHIVO_XML = "datos.xml";

const datos = {
  nombre: "Sebastián Guanque",
  edad: 27,
  fecha_nacimiento: "1997-01-09",
  lenguajes_programacion: ["JavaScript", "Python", "Java"],
};

// Crear y escribir archivo JSON
try {
  fs.writeFileSync(NOMBRE_ARCHIVO_JSON, JSON.stringify(datos, null, 2));
  console.log(`Archivo '${NOMBRE_ARCHIVO_JSON}' creado con éxito.`);
} catch (error) {
  console.log(`Error al crear el archivo JSON: ${error}`);
}

// Crear y escribir archivo XML
const datosXML = `
<persona>
  <nombre>${datos.nombre}</nombre>
  <edad>${datos.edad}</edad>
  <fecha_nacimiento>${datos.fecha_nacimiento}</fecha_nacimiento>
  <lenguajes_programacion>
    ${datos.lenguajes_programacion
      .map((lang) => `<lenguaje>${lang}</lenguaje>`)
      .join("\n    ")}
  </lenguajes_programacion>
</persona>
`;

try {
  fs.writeFileSync(NOMBRE_ARCHIVO_XML, datosXML.trim());
  console.log(`Archivo '${NOMBRE_ARCHIVO_XML}' creado con éxito.`);
} catch (error) {
  console.log(`Error al crear el archivo XML: ${error}`);
}

// Leer y mostrar contenido del archivo JSON
try {
  const contenidoJSON = fs.readFileSync(NOMBRE_ARCHIVO_JSON, "utf8");
  console.log(`Contenido de '${NOMBRE_ARCHIVO_JSON}':\n${contenidoJSON}`);
} catch (error) {
  console.log(`Error al leer el archivo JSON: ${error}`);
}

// Leer y mostrar contenido del archivo XML
try {
  const contenidoXML = fs.readFileSync(NOMBRE_ARCHIVO_XML, "utf8");
  console.log(`Contenido de '${NOMBRE_ARCHIVO_XML}':\n${contenidoXML}`);
} catch (error) {
  console.log(`Error al leer el archivo XML: ${error}`);
}

// Borrar archivos
try {
  fs.unlinkSync(NOMBRE_ARCHIVO_JSON);
  console.log(`Archivo '${NOMBRE_ARCHIVO_JSON}' borrado con éxito.`);
} catch (error) {
  console.log(`Error al borrar el archivo JSON: ${error}`);
}

try {
  fs.unlinkSync(NOMBRE_ARCHIVO_XML);
  console.log(`Archivo '${NOMBRE_ARCHIVO_XML}' borrado con éxito.`);
} catch (error) {
  console.log(`Error al borrar el archivo XML: ${error}`);
}

/* DIFICULTAD EXTRA (opcional):
 * Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
 */

class Persona {
  constructor(nombre, edad, fecha_nacimiento, lenguajes_programacion) {
    this.nombre = nombre;
    this.edad = edad;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lenguajes_programacion = lenguajes_programacion;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Fecha de Nacimiento: ${this.fecha_nacimiento}`);
    console.log(
      `Lenguajes de Programación: ${this.lenguajes_programacion.join(", ")}`
    );
  }
}

// Función para parsear XML simple (sin librerías externas)
function parsearXML(xml) {
  const nombre = xml.match(/<nombre>(.*?)<\/nombre>/)[1];
  const edad = parseInt(xml.match(/<edad>(.*?)<\/edad>/)[1]);
  const fecha_nacimiento = xml.match(
    /<fecha_nacimiento>(.*?)<\/fecha_nacimiento>/
  )[1];
  const lenguajes = Array.from(
    xml.matchAll(/<lenguaje>(.*?)<\/lenguaje>/g),
    (m) => m[1]
  );
  return new Persona(nombre, edad, fecha_nacimiento, lenguajes);
}

// Leer y transformar datos del archivo JSON
try {
  const contenidoJSON = fs.readFileSync(NOMBRE_ARCHIVO_JSON, "utf8");
  const datosJSON = JSON.parse(contenidoJSON);
  const personaDesdeJSON = new Persona(
    datosJSON.nombre,
    datosJSON.edad,
    datosJSON.fecha_nacimiento,
    datosJSON.lenguajes_programacion
  );
  console.log("Datos desde JSON:");
  personaDesdeJSON.mostrarInfo();
} catch (error) {
  console.log(`Error al procesar el archivo JSON: ${error}`);
}

// Leer y transformar datos del archivo XML
try {
  const contenidoXML = fs.readFileSync(NOMBRE_ARCHIVO_XML, "utf8");
  const personaDesdeXML = parsearXML(contenidoXML);
  console.log("Datos desde XML:");
  personaDesdeXML.mostrarInfo();
} catch (error) {
  console.log(`Error al procesar el archivo XML: ${error}`);
}

// Borrar archivos nuevamente
try {
  fs.unlinkSync(NOMBRE_ARCHIVO_JSON);
  console.log(`Archivo '${NOMBRE_ARCHIVO_JSON}' borrado con éxito.`);
} catch (error) {
  console.log(`Error al borrar el archivo JSON: ${error}`);
}

try {
  fs.unlinkSync(NOMBRE_ARCHIVO_XML);
  console.log(`Archivo '${NOMBRE_ARCHIVO_XML}' borrado con éxito.`);
} catch (error) {
  console.log(`Error al borrar el archivo XML: ${error}`);
}
