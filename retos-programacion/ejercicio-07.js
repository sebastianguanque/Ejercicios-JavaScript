// #07 PILAS Y COLAS

/** Pilas (Stacks - LIFO) */ 

// Crear una pila
const pila = [];

// Función para añadir (push) elementos
function pushElemento(elemento) {
  pila.push(elemento);
  console.log(`Se ha añadido '${elemento}'. Pila actual:`, pila);
}

// Función para recuperar (pop) elementos
function popElemento() {
  if (pila.length > 0) {
    const elementoRecuperado = pila.pop();
    console.log(`Se ha recuperado '${elementoRecuperado}'. Pila actual:`, pila);
    return elementoRecuperado;
  } else {
    console.log("La pila está vacía.");
    return undefined;
  }
}

// Ejemplo de uso
pushElemento("Primer elemento");
pushElemento("Segundo elemento");
pushElemento("Tercer elemento");

popElemento();
popElemento();
popElemento();
popElemento(); // Intento de pop en una pila vacía


/** Colas (Queues - FIFO) */

// Crear una cola
const cola = [];

// Función para añadir (enqueue) elementos
function enqueueElemento(elemento) {
  cola.push(elemento);
  console.log(`Se ha añadido '${elemento}'. Cola actual:`, cola);
}

// Función para recuperar (dequeue) elementos
function dequeueElemento() {
  if (cola.length > 0) {
    const elementoRecuperado = cola.shift();
    console.log(`Se ha recuperado '${elementoRecuperado}'. Cola actual:`, cola);
    return elementoRecuperado;
  } else {
    console.log("La cola está vacía.");
    return undefined;
  }
}

// Ejemplo de uso
enqueueElemento("Cliente 1");
enqueueElemento("Cliente 2");
enqueueElemento("Cliente 3");

dequeueElemento();
dequeueElemento();
dequeueElemento();
dequeueElemento(); // Intento de dequeue en una cola vacía


/* DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una impresora compartida que recibe documentos y los imprime cuando así se le indica. La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se interpretan como nombres de documentos.
 */


const pilaPrincipal = [];
const pilaAux = [];

// Función para añadir (enqueue) elementos
function apilarPaginas(pag) {
  pilaPrincipal.push(pag);
  console.log(`Se ha añadido '${pag}'. Página actual:`, pilaPrincipal);
}


function adelante(){
  if(pilaAux.length > 0) {
    const paginaAdelante = pilaAux.pop(); // Saca la página de la pila auxiliar
    pilaPrincipal.push(paginaAdelante); // La añade a la pila principal
    console.log(`Se ha recuperado '${paginaAdelante}'. Pagina actual:`, pilaPrincipal);
    return pilaPrincipal
  }
  else {
    console.log('No hay paginas para adelantar.')
    return undefined;
  }

}

function atras() {
  if(pilaPrincipal.length > 0) {
    const paginaAtras = pilaPrincipal.pop(); // Saca la página de la pila principal
    pilaAux.push(paginaAtras); // La añade a la pila auxiliar
    console.log(`Se ha retrocedido a '${paginaAtras}'. Pagina actual:`, pilaPrincipal);
    return pilaAux
  }
  else {
    console.log('No hay paginas para retroceder.')
    return undefined;
  }
}


// 2. Bucle principal para interactuar con el usuario
let continuar = true;
while (continuar) {
  // 3. Obtener la entrada del usuario
  const entrada = prompt("Escribe una URL, 'atras', 'adelante' o 'salir':");

  // 4. Manejar la entrada
  if (entrada.toLowerCase() === 'salir') {
    continuar = false;
    console.log("¡Historial de navegación cerrado!");
  } else if (entrada.toLowerCase() === 'atras') {
    atras();
  } else if (entrada.toLowerCase() === 'adelante') {
    adelante();
  } else {
    apilarPaginas(entrada);
  }
}

/*Ejercicio 2*/
const impresora = []


function enviarDocumento(doc) {
  impresora.push(doc)
}

function imprimirDocumento() {
  if(impresora.length > 0) {
    const primerDocumento = impresora.shift()
    console.log(`Elemento a imprimir ${primerDocumento}`)
    return primerDocumento;
  } else {
    console.log('No existen documentos para imprimir')
    return undefined;
  }
}

// 2. Bucle principal para interactuar con el usuario
let continuar = true;
// while (continuar) {
  // 3. Obtener la entrada del usuario
  const entrada = prompt("Escribe un Documento a enviar, 'imprimir' o 'salir':");

  // 4. Manejar la entrada
  if (entrada.toLowerCase() === 'salir') {
    console.log("Documentos restantes en la cola de impresión:", impresora);

    continuar = false;
    console.log("¡Impresora cerrada!");
  } else if (entrada.toLowerCase() === 'imprimir') {
    imprimirDocumento();
  } else {
    enviarDocumento(entrada);
  }
  
}





