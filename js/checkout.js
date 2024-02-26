let totalAPagar = localStorage.getItem("precioGuardado");

document.getElementById("mostrarID").textContent = totalAPagar;

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const totalCantidad = productosEnCarrito.reduce((acc,producto) => acc + (producto.cantidad), 0);

document.getElementById("mostrarCantidad").textContent = "  " + totalCantidad;



