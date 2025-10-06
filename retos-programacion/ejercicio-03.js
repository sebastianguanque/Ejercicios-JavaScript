// #03 ESTRUCTURAS DE DATOS

/** Arrays */

// Creación de un array vacío
let numeros = [];

// Creación de un array con valores iniciales
let frutas = ["manzana", "banana", "uva"];

// Acceder a un elemento
console.log(frutas[0]); // Salida: 'manzana'

// Modificar un elemento
frutas[1] = "naranja";
console.log(frutas); // Salida: ['manzana', 'naranja', 'uva']

/** Objetos */

// Objeto vacio
let coche = {};

// Objeto con datos
const person = {
  name: "Sebastián",
  age: 18,
  city: "Neuquén",
};

// Acceder a datos

console.log(person.name);

// Modificar datos

console.log((person.age = 28));
console.log(person);

/** Set */

// Creación de un Set
let numerosUnicos = new Set([1, 2, 3, 2, 4, 5]);

// El Set solo contendrá los valores únicos
console.log(numerosUnicos); // Salida: Set { 1, 2, 3, 4, 5 }

// Agregar un nuevo elemento
numerosUnicos.add(6);

// Intentar agregar un duplicado no tendrá efecto
numerosUnicos.add(2);

// Verificar si un valor existe
console.log(numerosUnicos.has(3)); // Salida: true

// Eliminar un elemento
numerosUnicos.delete(1);

/** Map */

// Creación de un Map
let usuarios = new Map();

// Agregar elementos
usuarios.set("id1", "Juan");
usuarios.set("id2", "María");

// Acceder a un valor
console.log(usuarios.get("id1")); // Salida: 'Juan'

// Verificar si una clave existe
console.log(usuarios.has("id2")); // Salida: true

// Eliminar una entrada
usuarios.delete("id1");

// Obtener el tamaño del Map
console.log(usuarios.size); // Salida: 1

/** WeakMap y WeakSet */

// WeakMap
let wm = new WeakMap();
let obj1 = {};
wm.set(obj1, "valor"); // La clave debe ser un objeto

// WeakSet
let ws = new WeakSet();
let obj2 = {};
ws.add(obj2); // Los valores deben ser objetos

/* DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

let agenda = [];

function insertarContacto() {
  // Aquí irá toda la lógica para pedir datos, validarlos y guardar el contacto.
  let nombre = prompt("Introduce el nombre del contacto:");
  let telefonoStr = prompt("Introduce el número de teléfono:");

  if (isNaN(telefonoStr) || telefonoStr.length > 11) {
    console.log("Número invalido o demasiado largo.");
  } else {
    const nuevoContacto = {
      nombre: nombre,
      telefono: telefonoStr,
    };
    agenda.push(nuevoContacto);
    console.log("¡Contacto guardado con éxito!");
  }
}

let agendaActiva = true;

while (agendaActiva) {
  let operacion = Number(
    prompt("Que operación desea realizar: 1. Agegar contacto 2. Salir")
  );

  switch (operacion) {
    case 1:
      insertarContacto();
      break;
    case 2:
      agendaActiva = false;
      break;
    default:
      console.log("Opción no válida. Por favor, elige 1 o 2.");
      break;
  }
}

function buscarContacto() {
  let buscar = prompt("Escribe el nombre de la persona: ");

  const nombreEncontrado = agenda.find((contacto) => contacto.nombre == buscar);

  if (nombreEncontrado) {
    return nombreEncontrado;
  } else {
    console.log("El nombre ingresado no se encuentra.");
  }
}

function actualizarContacto() {
  let buscar = prompt("Escribe el nombre de la persona: ");

  const nombreEncontrado = agenda.find((contacto) => contacto.nombre == buscar);

  if (nombreEncontrado) {
    let nuevoNumero = prompt("Escribe el nuevo número: ");

    if (isNaN(nuevoNumero) || nuevoNumero.length > 11) {
      console.log("Número invalido o demasiado largo.");
    } else {
      nombreEncontrado.telefono = nuevoNumero;
    }
  } else {
    console.log("El nombre ingresado no se encuentra.");
  }
}

function eliminarContacto() {
  let buscar = prompt("Escribe el nombre de la persona: ");

  const nombreEncontrado = agenda.findIndex(
    (contacto) => contacto.nombre === buscar
  );

  if (nombreEncontrado != -1) {
    agenda.splice(nombreEncontrado, 1);
  } else {
    console.log("El nombre ingresado no se encuentra.");
  }
}

console.log("Agenda final:", agenda);

/* Forma Profesional */
/*
// Clase para representar un contacto
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// Clase para gestionar la agenda
class Agenda {
  constructor() {
    this.contactos = [];
  }

  agregar(nombre, telefono) {
    // Validar que el nombre y teléfono no estén vacíos
    if (!nombre || !telefono) {
      return "El nombre y el teléfono son obligatorios.";
    }

    // Validar el teléfono
    if (isNaN(Number(telefono)) || telefono.length > 11) {
      return "Número de teléfono no válido o demasiado largo.";
    }

    this.contactos.push(new Contacto(nombre, telefono));
    return "¡Contacto guardado con éxito!";
  }

  buscar(nombre) {
    const nombreNormalizado = nombre.trim().toLowerCase();
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre.toLowerCase() === nombreNormalizado
    );
    return contactoEncontrado;
  }

  actualizar(nombre, nuevoTelefono) {
    const contacto = this.buscar(nombre);

    if (contacto) {
      if (isNaN(Number(nuevoTelefono)) || nuevoTelefono.length > 11) {
        return "Número de teléfono no válido o demasiado largo.";
      }
      contacto.telefono = nuevoTelefono;
      return "¡Contacto actualizado con éxito!";
    }
    return "El nombre ingresado no se encuentra.";
  }

  eliminar(nombre) {
    const nombreNormalizado = nombre.trim().toLowerCase();
    const indice = this.contactos.findIndex(
      (contacto) => contacto.nombre.toLowerCase() === nombreNormalizado
    );

    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      return "¡Contacto eliminado con éxito!";
    }
    return "El nombre ingresado no se encuentra.";
  }

  mostrar() {
    if (this.contactos.length === 0) {
      return "La agenda está vacía.";
    }
    let lista = "--- Agenda de Contactos ---\n";
    this.contactos.forEach((contacto) => {
      lista += `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}\n`;
    });
    return lista;
  }
}

// --- Lógica principal y manejo de la interfaz ---

 const miAgenda = new Agenda();
let agendaActiva = true;

while (agendaActiva) {
  const operacion = prompt(
    "Selecciona una opción:\n1. Agregar contacto\n2. Buscar contacto\n3. Actualizar contacto\n4. Eliminar contacto\n5. Mostrar agenda\n6. Salir"
  );

  switch (operacion) {
    case "1":
      const nombreAgregar = prompt("Introduce el nombre del contacto:");
      const telefonoAgregar = prompt("Introduce el número de teléfono:");
      alert(miAgenda.agregar(nombreAgregar, telefonoAgregar));
      break;

    case "2":
      const nombreBuscar = prompt("Escribe el nombre de la persona a buscar:");
      const resultadoBuscar = miAgenda.buscar(nombreBuscar);
      if (resultadoBuscar) {
        alert(
          `Contacto encontrado:\nNombre: ${resultadoBuscar.nombre}\nTeléfono: ${resultadoBuscar.telefono}`
        );
      } else {
        alert("El nombre ingresado no se encuentra.");
      }
      break;

    case "3":
      const nombreActualizar = prompt("Escribe el nombre de la persona a actualizar:");
      const nuevoNumero = prompt("Escribe el nuevo número:");
      alert(miAgenda.actualizar(nombreActualizar, nuevoNumero));
      break;

    case "4":
      const nombreEliminar = prompt("Escribe el nombre de la persona a eliminar:");
      alert(miAgenda.eliminar(nombreEliminar));
      break;

    case "5":
      alert(miAgenda.mostrar());
      break;

    case "6":
      agendaActiva = false;
      alert("Saliendo de la agenda. ¡Hasta pronto!");
      break;

    default:
      alert("Opción no válida. Por favor, elige una opción del 1 al 6.");
      break;
  }
} */
