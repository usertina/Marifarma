let totalAPagar = localStorage.getItem("precioGuardado");

document.getElementById("mostrarID").textContent = totalAPagar;

let productosEnCarritoCheckout = localStorage.getItem("productos-en-carrito");
productosEnCarritoCheckout = JSON.parse(productosEnCarritoCheckout);

const totalCantidad = productosEnCarritoCheckout.reduce((acc,producto) => acc + (producto.cantidad), 0);

document.getElementById("mostrarCantidad").textContent = "  " + totalCantidad;



