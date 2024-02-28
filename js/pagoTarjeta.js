document.addEventListener('DOMContentLoaded', function() {
    // obtiene el modal
    var modal = document.getElementById('firstModal');
    // obtiene el boton de radio
    var radio = document.getElementById('Tarjeta');
  
    // Agregar un event listener al botón de radio
    radio.addEventListener('change', function() {
        if (this.checked) {
            modal.style.display = 'block'; // Mostrar el modal
        } else {
            modal.style.display = 'none';  // Ocultar el modal
        }
    });
  
    // Obtener el botón de cerrar
    var closeButton = document.querySelector('.close');
  
    // Cerrar modal cuando se da al boton
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
  });
  /////////////////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function() {
    // obtiene el modal
    var modal1 = document.getElementById('secondModal');
    // obtiene el boton de radio
    var radio1 = document.getElementById('Transferencia');
  
    // Agregar un event listener al botón de radio
    radio1.addEventListener('change', function() {
        if (this.checked) {
            modal1.style.display = 'block'; // Mostrar el modal
        } else {
            modal1.style.display = 'none'; // Ocultar el modal
        }
    });
  
     // Obtener el botón de cerrar
    var closeButton1 = modal1.querySelector('.close');
  
  
    // Cerrar modal cuando se da al boton
    closeButton1.addEventListener('click', function() {
        modal1.style.display = 'none';
    });
  });
  /////////////////////////////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');// Obtener el botón para abrir el modal
    var modal = document.getElementById('terceraModal'); // Obtener el elemento modal
    var closeButton = modal.querySelector('.close');// Obtener el botón de cierre dentro del modal
  
    // Event listener para abrir la ventana modal
    openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    // Event listener para cerrar la ventana modal al hacer clic en el botón de cierre
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });