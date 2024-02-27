
let totalAPagar = localStorage.getItem("precioGuardado");

document.getElementById("mostrarID").textContent =  totalAPagar;

let productosEnCarritoCheckout = localStorage.getItem("productos-en-carrito");

productosEnCarritoCheckout = JSON.parse(productosEnCarritoCheckout);
console.log(productosEnCarritoCheckout);

const totalCantidad = productosEnCarritoCheckout.reduce((acc,producto) => acc + (producto.cantidad), 0);
console.log(totalCantidad);

document.getElementById("mostrarCantidad").textContent =  totalCantidad;

/* let totalFinal = getElementById(); */

document.getElementById("total-final").textContent =  totalAPagar;

gastos();

function gastos() {
    let valorSubtotal;
    let valorGastosEnvio;
    let resultadoTotal;

    valorSubtotal = parseFloat(totalAPagar);

    valorGastosEnvio = 5;

    if (valorSubtotal > 50) {
        resultadoTotal = parseFloat(valorSubtotal);

        document.getElementById("gastosGratis").textContent = "Gratis";

    } else {
        resultadoTotal = (parseFloat(valorSubtotal) + valorGastosEnvio) + "€";
    }
    document.getElementById("total-final").textContent = resultadoTotal + " €";
}
