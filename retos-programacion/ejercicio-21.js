/*
 * EJERCICIO:
 * Explora el concepto de callback en tu lenguaje creando un ejemplo
 * simple (a tu elección) que muestre su funcionamiento.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
 * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
 *   procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
 */

/* Callback
    Un callback (o "función de devolución de llamada") es simplemente una función que se pasa a otra función como argumento. La función que recibe el callback se encarga de ejecutarlo ("llamar de vuelta") en un momento posterior.
    Es la forma fundamental de manejar la asincronía y los eventos en JavaScript.
 */

// Ejemplo simple de Callback
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num) => console.log(num));

// Ejemplo mas complejo de Callback

// 1. La función que recibe el callback
function ejecutarAccionDespues(callback) {
  console.log("Paso 1: Iniciando la operación...");

  console.log("Paso 2: Operación principal completada.");

  // 2. Aca la función llama al callback
  // La función llama a la función que le fue pasada como argumento.
  callback();
}

// 3. La función que se pasa como callback
function accionFinal() {
  console.log(
    "Paso 3: ¡El callback ha sido ejecutado! (Esta es la acción final)"
  );
}

// 4. Invocación: Se pasa la función 'accionFinal' como argumento
ejecutarAccionDespues(accionFinal);

// Difucultad extra: Simulador de pedidos de restaurante con callbacks

function procesarPedido(plato, confirmar, listo, entregar) {
  console.log(`Confirmación: Su pedido de "${plato}" ha sido recibido.`);
  confirmar();

  // Simular tiempo aleatorio entre 1 a 10 segundos
  const tiempoPreparacion = Math.floor(Math.random() * 10000) + 1000;

  setTimeout(() => {
    console.log(
      `Notificación: Su plato "${plato}" está listo para ser servido.`
    );
    listo();

    setTimeout(() => {
      console.log(`Notificación: Su plato "${plato}" ha sido entregado.`);
      entregar();
    }, 2000); // Simular tiempo de entrega
  }, tiempoPreparacion);
}

// Callbacks
function confirmarPedido() {
  console.log("Callback: Pedido confirmado.");
}

function platoListo() {
  console.log("Callback: Plato listo para servir.");
}

function platoEntregado() {
  console.log("Callback: Plato entregado al cliente.");
}

// Ejemplo de uso del simulador de pedidos
procesarPedido(
  "Spaghetti Carbonara",
  confirmarPedido,
  platoListo,
  platoEntregado
);
