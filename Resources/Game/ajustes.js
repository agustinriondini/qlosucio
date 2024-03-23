function showAjustes() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("ajustes").style.display = "flex";
}
// vuelve al menu principal del togglemenu
function backToMainMenu() {
    document.getElementById("mainMenu").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
}
// vuelve al menu dentro de ajustes
function backToSettings() {
    document.getElementById("avatarsBox").style.display = "none";
    document.getElementById("dorsosBox").style.display = "none";
    document.getElementById("mesasBox").style.display = "none";
    document.getElementById("helpBox").style.display = "none"
    document.getElementById("estadisticas").style.display = "none";
    document.getElementById("ajustes").style.display = "flex"; 
}
//Reset de estadisticas
function borrarPuntaje() {
    localStorage.clear();
    alert("Metricas reestablecidas.");
    location.reload();
}
//Cambiar mesa---> funcion de la betta_release_RC1-->funcion sustituta en RC2
//function cambiarMesa() {
//    var table = document.body;
//    if (table.style.backgroundImage.includes("casino.jpg")) {
//        table.style.backgroundImage = "url(./Resources/Images/Table/mesa_madera.jpg)";
//    } else {
//        table.style.backgroundImage = "url('./Resources/Images/Table/casino.jpg')"; // Cambia a la nueva imagen de la mesa
//       table.style.backgroundRepeat = "round";
//        table.style.backgroundSize = "cover";
//        
//    }
//}
//Cambiar nombre del jugador
function editarNombreJugador() {
    var nuevoNombre = prompt("Ingrese un nombre");
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        document.getElementById("player1").textContent = nuevoNombre;
    } else {
        alert("El nombre no puede estar vacio!!!");
    }
}
//Cambio de avatar
function mostrarAvatars() {
    document.getElementById("avatarsBox").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
    document.getElementById("menuToggle").style.display = "none";
}

function pushAvatar(element) {
    var avatarURL = element.src;
    document.getElementById("avatarPlayer1").style.backgroundImage = "url('" + avatarURL + "')";

}
//Cambio de mesa
function mostrarMesas() {
    document.getElementById("mesasBox").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
    document.getElementById("menuToggle").style.display = "none";
}

function pushBackground(element) {
    var mesaURL = element.src;
    document.getElementById("body").style.backgroundImage = "url('" + mesaURL + "')";
}
//cambiar el dorso del mazo
function cambiarDorso() {
    document.getElementById("dorsosBox").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
}

function pushDorso(element) {
    var dorsoURL = element.src;
    document.getElementById("userDrawButton").style.backgroundImage = "url('" + dorsoURL + "')";

}
//Boton ayuda menu
function helpme(){
    document.getElementById("helpBox").style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
}
//Boton tyc menu
function tyc() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
    document.getElementById("ajustes").style.display = "none";
    document.getElementById("menuToggle").style.display = "flex";
}
//Boton Mi puntaje
function estadisticas(){
   document.getElementById("estadisticas").style.display = "flex";
   document.getElementById("ajustes").style.display = "none";

}
//funcion de cierre especifica del area de estadisticas
function closeAll(){
    document.getElementById("estadisticas").style.display = "none";
    document.getElementById("menuToggle").style.display = "flex";
}