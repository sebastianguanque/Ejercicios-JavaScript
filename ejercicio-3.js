// Realiza un programa que lea 4 valores numéricos e informe su suma y su producto.
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
let num3 = Number(prompt("Ingrese el tercer número"));
let num4 = Number(prompt("Ingrese el cuarto número"));

let suma = num1 + num2 + num3 + num4;
let producto = num1 * num2 * num3 * num4;

document.write("La suma de los números es: " + suma + "<br>");
document.write("El producto de los números es: " + producto);

