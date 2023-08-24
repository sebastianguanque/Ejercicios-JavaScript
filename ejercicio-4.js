// Realizar un programa donde se ingresen 3 notas de un alumno, si el promedio es mayor o igual a 7 mostrar el mensaje “Aprobó”, en su defecto “Desaprobó”.


let nota1 = Number(prompt("Ingrese la primer nota"));
let nota2 = Number(prompt("Ingrese la segunda nota"));
let nota3 = Number(prompt("Ingrese la tercera nota"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
  document.write("Aprobó con " + promedio.toFixed(2))
}

else {
  document.write("Desaprobó con " + promedio.toFixed(2));
}
