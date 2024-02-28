//salta al siguiente input al presionar tecla 13(enter)

function saltar(event, nextInputId) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById(nextInputId).focus();
    }
  }