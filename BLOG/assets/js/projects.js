const imagenInput = document.getElementById("imagen");
const preview = document.getElementById("preview");

imagenInput.addEventListener("change", () => {
    const file = imagenInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        preview.src = e.target.result;
        preview.classList.add("show");
    };
    reader.readAsDataURL(file);
});


document.getElementById("projectForm").addEventListener("submit", e => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    if (!titulo || !descripcion) {
        alert("Completa todos los campos");
        return;
    }

    alert("Proyecto guardado correctamente");
    window.open("dashboard.html", "_blank");
});
