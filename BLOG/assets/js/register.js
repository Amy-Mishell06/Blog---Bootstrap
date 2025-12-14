const formRegistro = document.getElementById("registroForm");

formRegistro.addEventListener("submit", function(e){
    e.preventDefault();

    const user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fecha: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ya puedes iniciar sesión.");
    window.open("login.html", "_blank");
});
