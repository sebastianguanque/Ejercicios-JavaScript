// Realizar un script que defina e inicialice una variable tipo string que almacene nombre de empleado. Y otra variable tipo entero para almacenar el sueldo. Mostrar las dos variables en pantalla.

let empleado = prompt("Nombre del empleado");
let sueldo = Number(prompt("Sueldo del empleado"));

document.write("El empleado " + empleado + " tiene un sueldo de $" + sueldo);