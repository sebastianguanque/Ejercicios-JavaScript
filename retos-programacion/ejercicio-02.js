// Funcion sin parametro ni retorno
function suma() {
  console.log(2+2);
}
suma()

// Funcion con parametro y retorno
function sumaConParametros(a,b) {
  return a + b
}

console.log(sumaConParametros(1,2))


// Funcion con otra funcion dentro
function funcionesConFunciones(num1, num2) {

  function resta(a,b) {
    return a - b
  }

  console.log(`La resta es: ${resta(2,1)}`)

  return num1 * num2
}

console.log(funcionesConFunciones(3,3))

// Funcion integrada en JS
console.log('Funcion integrada en JavaScript')

// Funcin Global
function funcionGlobal() {
  console.log('Esto es una funcion global, y se puede llamar desde cualquier lado')

  // Funcion Local
  function funcionLocal() {
    console.log('Esto es una función local, y solo se puede llamar dentro de funcionGlobal')
  }
  funcionLocal()
}

funcionGlobal()



/** DIFUCULTAD EXTRA  **/

/* 
Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/


function difucultadExtra(str1, str2) {
  let result = 0

  for(let i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log(`Numero ${i}: ${str1} ${str2}`)
    } else if( i % 3 == 0) {
      console.log(`Numero ${i}: ${str1}`)

    } else if (i % 5 == 0) {
      console.log(`Numero ${i}: ${str2}`)

    } else {
      console.log(`Numero ${i}`)
      result++

    }
  }

  return result
}


let miFuncion = difucultadExtra('Palabra 1', 'Palabra 2')
console.log(`Numero de veces que se ha impreso el numero en lugar de los textos: ${miFuncion}`)

