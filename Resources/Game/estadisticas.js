function estadisticasLocales() {
    var nombreJugador = document.getElementById("player1").textContent;
    var puntosJugador = parseFloat(document.getElementById("playerPoints").textContent);
    var totalPartidas = Math.floor((puntosJugador + parseFloat(document.getElementById("machinePoints").textContent)) / 25) * -1;
    var rondasGanadas = totalPartidas - Math.abs(totalPartidas - (puntosJugador / 25));
    var porcentajeVictorias = ((rondasGanadas / totalPartidas) * 100) + 100;

    // Calcular nivel de suciedad
    var nivelSuciedad;
    if (porcentajeVictorias >= 90) {
        nivelSuciedad = "Q-Lo inpecable";
    } else if (porcentajeVictorias >= 80) {
        nivelSuciedad = "Q-Lo limpio";
    } else if (porcentajeVictorias >= 60) {
        nivelSuciedad = "Q-Lo aceptable";
    } else if (porcentajeVictorias >= 40) {
        nivelSuciedad = "Q-Lo dudoso";
    } else if (porcentajeVictorias >= 20) {
        nivelSuciedad = "Q-Lo sucio";
    } else {
        nivelSuciedad = "Q-LO Irrecuperable";
    }
    var avatarStyle = window.getComputedStyle(document.getElementById("avatarPlayer1")).backgroundImage;
    document.getElementById("avatarPlayer1Estadisticas").style.backgroundImage = avatarStyle;
    document.getElementById("avatarPlayer1Estadisticas").style.backgroundSize = "cover";
    document.getElementById("avatarPlayer1Estadisticas").style.backgroundPosition = "center";
    document.getElementById("player1Estadisticas").textContent = nombreJugador;
    document.getElementById("playerPointsEstadisticas").textContent = puntosJugador;

    //push nivel suciedad
    document.getElementById("nivelSuciedad").textContent = nivelSuciedad;
    //push % de victorias
    document.getElementById("perVictorias").textContent = porcentajeVictorias.toFixed(2) + "%";
    //push rondas jugadas
    document.getElementById("totalRondas").textContent = totalPartidas;
}
document.addEventListener('DOMContentLoaded', function() {
    estadisticasLocales();
});
