
    const btnMostrarModal = document.getElementById("producto-agregar");
    const modal = document.getElementById("modal-productos-index");
  
    // Mostrar modal al hacer clic en el botón
    btnMostrarModal.addEventListener("click", function() {
      modal.style.display = "block"; // Mostrar el modal
  
      // Ocultar el modal después de 3 segundos (3000 milisegundos)
      setTimeout(function() {
        modal.style.display = "none";
      }, 3000);
    });
  
    // Cerrar modal si se hace clic en el botón de cerrar (×)
    document.getElementById("cerrar-modal-productos-index").addEventListener("click", function() {
      modal.style.display = "none";
    });
