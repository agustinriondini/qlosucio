function showAjustes() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("ajustes").style.display = "flex";
}
// vuelve al menu principal del togglemenu
function backToMainMenu() {
    document.getElementById("mainMenu").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
}
function borrarPuntaje() {
    localStorage.clear();
    alert("Metricas reestablecidas.");
    location.reload();
}
function cambiarMesa() {
    var table = document.body;
    if (table.style.backgroundImage.includes("casino.jpg")) {
        table.style.backgroundImage = "url(./Resources/Images/Table/mesa_madera.jpg)";
    } else {
        table.style.backgroundImage = "url('./Resources/Images/Table/casino.jpg')"; // Cambia a la nueva imagen de la mesa
        table.style.backgroundRepeat = "round";
        table.style.backgroundSize = "cover";
        
    }
}
function editarNombreJugador() {
    var nuevoNombre = prompt("Ingrese un nombre");
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
document.getElementById("player1").textContent = nuevoNombre;
    } else {
alert("El nombre no puede estar vacio!!!");
    }
}
