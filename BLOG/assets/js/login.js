document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(u =>(u.email === email || u.username === email) && u.password === password);

    if(!userFound){
        alert("Usuario o contraseña incorrectos");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(userFound));
    alert("Login exitoso");
    window.open("dashboard.html", "_blank");
});


//Mostrar/ocultar contraseña
