/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */


/**
 * Excepciones:
 * Las excepciones son un mecanismo para manejar errores y situaciones inesperadas que ocurren durante la ejecución de un programa, sin que este se detenga abruptamente.

    En lugar de que el programa se "cuelgue" cuando algo sale mal (por ejemplo, al dividir por cero o intentar acceder a un archivo que no existe), el código puede "lanzar" una excepción. Esta excepción es como una señal de alerta que se propaga hasta que es "capturada" y manejada por una parte del código.

    El manejo de excepciones se estructura en tres bloques principales:

      try: Es el bloque de código que se intenta ejecutar. Aquí se coloca el código que podría generar un error.

      catch: Este bloque se ejecuta solo si ocurre una excepción dentro del bloque try. El catch "captura" la excepción y te permite definir cómo responder al error (por ejemplo, mostrar un mensaje al usuario o registrar el error).

      finally: Este bloque de código siempre se ejecuta, sin importar si hubo una excepción o no. Se usa para realizar tareas de limpieza, como cerrar un archivo o una conexión a la base de datos.
 */



// try {
//   const numero = parseInt(prompt('Ingresa un numero'))
//   const resultado = 10 / numero

//   if (numero === 0) {
//     throw new Error("No se puede dividir por cero."); 
//   }

//   console.log(`El resultado de la división es: ${resultado}`)
// } catch(error) {
//   console.log('UPS! Ocurrio un error', error.message);
// }finally {
//   console.log("Fin de la operación.");
// }



/** DIFICULTAD EXTRA */

// Clase para error personalizado
class MiErrorPersonalizado extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = 'MiErrorPersonalizado';
  }
}

// Función para manjo de errores
function procesarParametros(num) {

  if(isNaN(num) ) {
    throw new TypeError('El parametro debe ser un número.')
  }

  if(num < 0) {
    throw new RangeError('El parametro debe ser un número positivo.')
  }

  if(num === 0 || num === 1) {
    throw new MiErrorPersonalizado('El número no puede ser ni 0, ni tampoco 1, prueba otro número.')

  }
}

// 3. El bloque try...catch para llamar a la función.
try {
  procesarParametros(1); 

  console.log("¡No se ha producido ningún error!");

} catch (error) {
  if (error instanceof MiErrorPersonalizado) {
    console.log("Error personalizado capturado:", error.message);
  } else if (error instanceof TypeError) {
    console.log("Error de tipo de dato:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  } else {
    console.log("Error genérico capturado:", error.message);
  }
} finally {
  console.log("La ejecución ha finalizado.");
}






