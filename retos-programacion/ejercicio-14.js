/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 */

// Ejercicio

const fecha1 = new Date();

const fecha2 = new Date(1997, 8, 1, 1, 38, 0);

const fechaTranscurrida = fecha1.getTime() - fecha2.getTime();

const msAnual = 1000 * 60 * 60 * 24 * 365;

console.log(fecha1.toDateString());
console.log(fecha1.toLocaleDateString("es-ES"));
console.log(fecha2.toLocaleString("es-ES"));

const resultado = Math.floor(fechaTranscurrida / msAnual);

console.log("Años Transcurridos:", resultado);

// Dificultad extra

const msDia = 1000 * 60 * 60 * 24;
const inicio = new Date(1997, 0, 1);

const fechaTranscurrida2 = fecha2.getTime() - inicio.getTime();
const diaAnual = Math.floor(fechaTranscurrida2 / msDia) + 1;

console.log("Formato 1:", fecha2.toDateString());
console.log("Formato 2:", fecha2.toLocaleDateString("es-ES"));
console.log("Formato 3:", fecha2.toLocaleString("es-ES"));
console.log("Formato 4:", diaAnual);
console.log(
  "Formato 5:",
  fecha2.toLocaleDateString("es-ES", { weekday: "long" })
);
console.log(
  "Formato 6:",
  fecha2.toLocaleDateString("es-ES", { month: "long" })
);
console.log("Formato 7:", fecha2.toLocaleTimeString("es-ES"));
console.log("Formato 8:", fecha2.getFullYear());
console.log("Formato 9:", fecha2.toISOString());
console.log(
  "Formato 10:",
  fecha2.toLocaleDateString("es-ES", { day: "numeric", month: "long" })
);
