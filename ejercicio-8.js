// Crear un programa que nos diga si algunos de los tres números ingresados son mayores a 10.

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let num3 = Number(prompt("Ingrese el tercero número: "));

if (num1 < 10 || num2 < 10 || num3 < 10) {
  document.write("Uno de los números es menor a 10");
} else {
  document.write("Todos los números son mayores a 10")
}