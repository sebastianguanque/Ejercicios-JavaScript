// 31) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function añosTranscurridos(date) {

  if (date > 2023) {
    console.log('El año ingresado aun no ha transcurrido.')
  } else if (date == 2023) {
    console.log('El año ingresado es el año actual')
  } else {
    let result = 2023 - date;
    console.log(
      `
      De acuerdo con el año ingresado: ${date}
      Hasta el momento actual: 2023
      Han transcurridos ${result} años`);
  }
}

let fecha = Number(prompt('Ingrese un año: '))
añosTranscurridos(fecha)