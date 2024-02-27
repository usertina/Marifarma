let productosEnCarritoCompra = localStorage.getItem("productos-en-carrito");
productosEnCarritoCompra = JSON.parse(productosEnCarritoCompra);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const ContenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
    if(productosEnCarritoCompra && productosEnCarritoCompra.length >0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarritoCompra.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio} €</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad} €</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="fa-solid fa-trash elemento-carrito"></i></button>        
            `;
            contenedorCarritoProductos.append(div);
    
        });
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
    actualizarNumeritoCarrito();
}


cargarProductosCarrito();

function actualizarNumeritoCarrito() {
    // Calcular la cantidad total de productos en el carrito
    let cantidadTotal = productosEnCarritoCompra.reduce((acc, producto) => acc + producto.cantidad, 0);
    
    // Seleccionar el elemento del numerito del carrito
    let numeritoCarritoElemento = document.getElementById("numeritoCarrito");
    
    // Actualizar el contenido del numerito con la cantidad total
    numeritoCarritoElemento.innerText = cantidadTotal;
}


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
    });
};


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    console.log("ID Botón:", idBoton);

    // Encuentra el índice del producto con el ID correspondiente
    const index = productosEnCarritoCompra.findIndex(producto => producto.id == idBoton);
    console.log("Índice encontrado:", index);

    if (index !== -1) {
        // Elimina el producto del array
        productosEnCarritoCompra.splice(index, 1);

        // Actualiza el localStorage con los productos actualizados
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritoCompra));

        // Elimina el elemento correspondiente del DOM
        const productoEliminado = document.getElementById(idBoton);
        if (productoEliminado) {
            productoEliminado.parentNode.removeChild(productoEliminado);
        }

        // Recarga los productos en el carrito
        cargarProductosCarrito();
    } else {
        console.log("No se encontró el ID en el carrito.");
    }
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarritoCompra.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritoCompra));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarritoCompra.reduce((acc,producto) => acc + (producto.precio * producto.cantidad), 0);
    ContenedorTotal.innerText = `${totalCalculado.toFixed(2)} €`;
}

botonComprar.addEventListener("click", comparCarrito);

function comparCarrito() {

contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.add("disabled");
contenedorCarritoAcciones.classList.add("disabled");
contenedorCarritoComprado.classList.remove("disabled");
            
let precioDiv = document.getElementById("total");
let precio = precioDiv.textContent.trim();
            
localStorage.setItem("precioGuardado", precio);
window.location.href = "/checkout.html";    
}




