// 30) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


function montoFinal(precio, descuento) {

  if( descuento >= precio ) {
    console.log('El descuento es igual o mayor que el precio, por lo tanto el producto es gratis.');
  } else {
    let result = precio * descuento / 100;
    result = precio - result;

    if(result > 0) {
      console.log(`El producto tiene un precio de: $${precio}, pero con el descuento de %${descuento}, quedo a un precio de: $${result}`)
    } else {
      console.log('El descuento es igual o mayor que el precio, por lo tanto el producto es gratis.');
    }

  }
  
}

let precio = Number(prompt('Ingrese el precio: '))
let numero = Number(prompt('Ingrese el % de descuento: '))
montoFinal(precio, numero)