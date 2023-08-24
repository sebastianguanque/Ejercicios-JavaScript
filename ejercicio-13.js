// Realizar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y altura del triángulo.El programa tiene que informar la superficie de cada triangulo y la cantidad de triangulo cuya superficie es mayor a 12.

let mayor = 0;
for (let i = 0; i < 3; i++) {
  let superficie = 0;
  let base = Number(prompt("Ingrese el valor de la base: "));
  let altura = Number(prompt("Ingrese el valor de la altura: "));

  superficie = base * altura / 2;
  document.write("La superficie es: " + superficie + "<br>");

  if (superficie > 12) {
    mayor++
  }

}
document.write(`Existen ${mayor} triangulos que su superficie es mayor a 12.`);
