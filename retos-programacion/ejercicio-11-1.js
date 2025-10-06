import fs from "fs";

const NOMBRE_ARCHIVO = "ventas.txt";

// Lógica para verificar si el archivo existe
if (!fs.existsSync(NOMBRE_ARCHIVO)) {
  // Si no existe, lo creas con contenido inicial o vacío.
  try {
    fs.writeFileSync(NOMBRE_ARCHIVO, "");
    console.log(`Archivo '${NOMBRE_ARCHIVO}' creado con éxito.`);
  } catch (error) {
    console.log(`Error al crear el archivo: ${error}`);
    // Podrías salir del programa aquí si el archivo no se puede crear
    process.exit(1);
  }
}

// Bucle principal para interactuar con el usuario
// y el resto de la lógica de gestión de ventas.

let activo = true;

while (activo) {
  // Aquí iría el código para mostrar el menú y manejar las opciones
  // como añadir, consultar, actualizar, eliminar productos, calcular ventas, etc.

  let consultaUsuario = prompt(
    "Seleccione una opción: 1. añadir, 2. consultar, 3. actualizar, 4. eliminar, 5. calcular_total, 6. calcular_por_producto, 7. salir "
  );

  switch (consultaUsuario) {
    case "1":
      // Lógica para añadir un producto
      let nombre = prompt("Ingrese el nombre del producto: ");
      let cantidad = parseInt(prompt("Ingrese la cantidad vendida: "));
      let precio = parseFloat(prompt("Ingrese el precio del producto: "));
      agregarProducto(nombre, cantidad, precio);
      break;
    case "2":
      // Lógica para consultar productos
      let opcionConsulta = prompt(
        "¿Qué quieres consultar? 1. Todos los productos, 2. Un producto específico"
      );

      if (opcionConsulta === "1") {
        let productos = leerProductos();
        console.log("Productos en el archivo:");
        // Asegúrate de manejar el caso donde el archivo está vacío.
        if (productos.length === 0) {
          console.log("No hay productos registrados.");
        } else {
          console.table(productos);
        }
      } else if (opcionConsulta === "2") {
        let nombreProducto = prompt(
          "Ingresa el nombre del producto a consultar:"
        );
        let productos = leerProductos();
        let productoEncontrado = productos.find(
          (producto) =>
            producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
        );

        if (productoEncontrado) {
          console.log("Producto encontrado:");
          console.table([productoEncontrado]); // El `console.table` funciona mejor con arrays.
        } else {
          console.log(`El producto '${nombreProducto}' no fue encontrado.`);
        }
      }

      break;
    case "3":
      // Lógica para actualizar un producto
      let nombreActualizar = prompt(
        "Ingrese el nombre del producto a actualizar: "
      );
      let nuevaCantidad = prompt(
        "Ingrese la nueva cantidad vendida (deje vacío para no cambiar): "
      );
      let nuevoPrecio = prompt(
        "Ingrese el nuevo precio (deje vacío para no cambiar): "
      );
      actualizarProducto(
        nombreActualizar,
        nuevaCantidad ? parseInt(nuevaCantidad) : null,
        nuevoPrecio ? parseFloat(nuevoPrecio) : null
      );
      break;
    case "4":
      // Lógica para eliminar un producto
      let nombreEliminar = prompt(
        "Ingrese el nombre del producto a eliminar: "
      );
      eliminarProducto(nombreEliminar);
      break;
    case "5":
      // Lógica para calcular la venta total
      calcularVentaTotal();
      break;
    case "6":
      // Lógica para calcular la venta por producto
      let nombreCalcular = prompt(
        "Ingrese el nombre del producto para calcular la venta: "
      );
      calcularVentaPorProducto(nombreCalcular);
      break;
    case "7":
      // Salir del bucle y borrar el archivo
      activo = false;
      break;
    default:
      console.log("Opción no válida, por favor intenta de nuevo.");
  }
}

// Al salir, borrar el archivo
try {
  fs.unlinkSync(NOMBRE_ARCHIVO);
  console.log(`Archivo '${NOMBRE_ARCHIVO}' borrado con éxito.`);
} catch (error) {
  console.log(`Error al borrar el archivo: ${error}`);
}

// Funcion para añadir productos al archivo
function agregarProducto(nombre, cantidad, precio) {
  const nuevaLinea = `${nombre}, ${cantidad}, ${precio}\n`;
  try {
    fs.appendFileSync(NOMBRE_ARCHIVO, nuevaLinea);
    console.log(`Producto '${nombre}' agregado con éxito.`);
  } catch (error) {
    console.log(`Error al agregar el producto: ${error}`);
  }
}

// Función para leer productos del archivo
function leerProductos() {
  try {
    const data = fs.readFileSync(NOMBRE_ARCHIVO, "utf8");
    const lineas = data.trim().split("\n");
    const productos = lineas.map((linea) => {
      const [nombre, cantidad, precio] = linea
        .split(", ")
        .map((item) => item.trim());
      return {
        nombre,
        cantidad: parseInt(cantidad),
        precio: parseFloat(precio),
      };
    });
    return productos;
  } catch (error) {
    console.log(`Error al leer los productos: ${error}`);
    return [];
  }
}

// Función para actualizar un producto
function actualizarProducto(nombre, nuevaCantidad, nuevoPrecio) {
  let productos = leerProductos();
  let productoEncontrado = false;

  productos = productos.map((producto) => {
    if (producto.nombre === nombre) {
      productoEncontrado = true;
      return {
        nombre: producto.nombre,
        cantidad: nuevaCantidad !== null ? nuevaCantidad : producto.cantidad,
        precio: nuevoPrecio !== null ? nuevoPrecio : producto.precio,
      };
    }
    return producto;
  });

  if (productoEncontrado) {
    try {
      const contenidoActualizado =
        productos
          .map((p) => `${p.nombre}, ${p.cantidad}, ${p.precio}`)
          .join("\n") + "\n";
      fs.writeFileSync(NOMBRE_ARCHIVO, contenidoActualizado);
      console.log(`Producto '${nombre}' actualizado con éxito.`);
    } catch (error) {
      console.log(`Error al actualizar el producto: ${error}`);
    }
  } else {
    console.log(`Producto '${nombre}' no encontrado.`);
  }
}

// Función para eliminar un producto
function eliminarProducto(nombre) {
  let productos = leerProductos();
  const productosFiltrados = productos.filter(
    (producto) => producto.nombre !== nombre
  );

  if (productos.length === productosFiltrados.length) {
    console.log(`Producto '${nombre}' no encontrado.`);
    return;
  }

  try {
    const contenidoActualizado =
      productosFiltrados
        .map((p) => `${p.nombre}, ${p.cantidad}, ${p.precio}`)
        .join("\n") + "\n";
    fs.writeFileSync(NOMBRE_ARCHIVO, contenidoActualizado);
    console.log(`Producto '${nombre}' eliminado con éxito.`);
  } catch (error) {
    console.log(`Error al eliminar el producto: ${error}`);
  }
}
// Función para calcular la venta total
function calcularVentaTotal() {
  const productos = leerProductos();
  const total = productos.reduce(
    (acc, producto) => acc + producto.cantidad * producto.precio,
    0
  );
  console.log(`Venta total: $${total.toFixed(2)}`);
}

// Función para calcular la venta por producto
function calcularVentaPorProducto(nombre) {
  const productos = leerProductos();
  const producto = productos.find((p) => p.nombre === nombre);
  if (producto) {
    const total = producto.cantidad * producto.precio;
    console.log(
      `Venta total para '${nombre}': $${total.toFixed(2)} (Cantidad: ${
        producto.cantidad
      }, Precio unitario: $${producto.precio})`
    );
  } else {
    console.log(`Producto '${nombre}' no encontrado.`);
  }
}
