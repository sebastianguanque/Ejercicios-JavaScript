/*
 * EJERCICIO:
 * Utilizando tu lenguaje, crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
 */

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function ejecutarTarea(nombre, duracionSegundos) {
  const ms = duracionSegundos * 1000;
  // 1. inicio
  console.log(
    `[${nombre}] INICIA a las ${new Date().toLocaleTimeString()}. Duración: ${duracionSegundos} segundos.`
  );

  // 2. Llama a 'delay' usando 'await'
  await delay(ms);

  // 3. finalización
  console.log(`[${nombre}] FINALIZA a las ${new Date().toLocaleTimeString()}.`);
}

// --- Ejecución ---
ejecutarTarea("Tarea A (Corta)", 2);
ejecutarTarea("Tarea B (Larga)", 5);
ejecutarTarea("Tarea C (Media)", 3);

// Dificultad extra
async function ejecutarTareasEnOrden() {
  const tareaC = ejecutarTarea("Tarea C", 3);
  const tareaB = ejecutarTarea("Tarea B", 2);
  const tareaA = ejecutarTarea("Tarea A", 1);

  // Espera a que todas las tareas A, B y C finalicen
  await Promise.all([tareaA, tareaB, tareaC]);

  // Luego ejecuta la tarea D
  await ejecutarTarea("Tarea D", 1);
}

ejecutarTareasEnOrden();
