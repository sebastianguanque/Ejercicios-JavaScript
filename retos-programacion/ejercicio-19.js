/*
 * EJERCICIO:
 * Empleando tu lenguaje, explora la definición del tipo de dato
 * que sirva para definir enumeraciones (Enum).
 * Crea un Enum que represente los días de la semana del lunes
 * al domingo, en ese orden. Con ese enumerado, crea una operación
 * que muestre el nombre del día de la semana dependiendo del número entero
 * utilizado (del 1 al 7).
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un pequeño sistema de gestión del estado de pedidos.
 * Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos.
 */

/* Definción de Enum

    Una Enumeración (Enum) es un tipo de dato especial que representa un conjunto fijo de constantes con nombre. En esencia, le da nombres significativos a valores numéricos (o de cadena). Esto evita el uso de "números mágicos" en el código (como usar 1 para "Lunes" y 7 para "Domingo"), haciendo que el código sea más legible y menos propenso a errores.

    A diferencia de lenguajes como TypeScript o C#, JavaScript no tiene un tipo Enum nativo. Sin embargo, la forma más común y efectiva de simular un Enum es usando un Objeto Congelado (Object.freeze).

    Por qué usar Object.freeze

    Al congelar el objeto, aseguras que nadie pueda modificar los días de la semana (por ejemplo, añadiendo un día extra o cambiando el valor de LUNES), lo que mantiene la integridad de tu conjunto de constantes.
  */

const DIAS_SEMANA = Object.freeze({
  LUNES: 1,
  MARTES: 2,
  MIERCOLES: 3,
  JUEVES: 4,
  VIERNES: 5,
  SABADO: 6,
  DOMINGO: 7,
});

function obtenerDiaPorNumero(numero) {
  // Obtener todas las entradas
  const entradas = Object.entries(DIAS_SEMANA);

  // Buscar la entrada donde el valor (el número) coincida con el número que se pasó
  const diaEncontrado = entradas.find(([clave, valor]) => valor === numero);

  // Manejar el resultado
  if (diaEncontrado) {
    // Si se encuentra, la clave es el nombre del día
    return diaEncontrado[0]; // Retorna el primer elemento de la entrada (el nombre)
  } else {
    // Manejar el caso de un número inválido
    return "Error: Número fuera del rango (1-7).";
  }
}

console.log(obtenerDiaPorNumero(1));

// Difucultad extra

const ESTADO_PEDIDO = Object.freeze({
  PENDIENTE: "PENDIENTE",
  ENVIADO: "ENVIADO",
  ENTREGADO: "ENTREGADO",
  CANCELADO: "CANCELADO",
});

class Pedido {
  constructor(id) {
    this.id = id;
    this.estado = ESTADO_PEDIDO.PENDIENTE;
  }

  enviarPedido() {
    if (this.estado === ESTADO_PEDIDO.PENDIENTE) {
      this.estado = ESTADO_PEDIDO.ENVIADO;
    } else {
      console.log(`No se puede enviar el pedido en estado: ${this.estado}`);
    }
  }

  cancelarPedido() {
    if (
      this.estado === ESTADO_PEDIDO.PENDIENTE ||
      this.estado === ESTADO_PEDIDO.ENVIADO
    ) {
      this.estado = ESTADO_PEDIDO.CANCELADO;
    } else {
      console.log(`No se puede cancelar el pedido en estado: ${this.estado}`);
    }
  }

  entregarPedido() {
    if (this.estado === ESTADO_PEDIDO.ENVIADO) {
      this.estado = ESTADO_PEDIDO.ENTREGADO;
    } else {
      console.log(`No se puede entregar el pedido en estado: ${this.estado}`);
    }
  }

  mostrarEstado() {
    console.log(`El pedido ${this.id} está actualmente: ${this.estado}`);
  }
}

// Ejemplos de uso
const pedido1 = new Pedido(1);
pedido1.mostrarEstado();
pedido1.enviarPedido();
pedido1.mostrarEstado();
pedido1.entregarPedido();
pedido1.mostrarEstado();

const pedido2 = new Pedido(2);
pedido2.mostrarEstado();
pedido2.cancelarPedido();
pedido2.mostrarEstado();
pedido2.entregarPedido(); // Intento inválido
