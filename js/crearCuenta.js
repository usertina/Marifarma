document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById('email').value;

    // Verificar si el usuario existe en el localStorage
    var user = JSON.parse(localStorage.getItem(username));
    var emailExists = false;

    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            var storedUser = JSON.parse(localStorage.getItem(key));
            if (storedUser && storedUser.email === email) {
                emailExists = true;
                break;
            }
        }
    }

    if (user && user.password === password && emailExists) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; // Redirigir a la página inicial
    } else {
        document.getElementById("error").innerText = "Nombre de usuario, correo electrónico o contraseña incorrectos";
    }
});