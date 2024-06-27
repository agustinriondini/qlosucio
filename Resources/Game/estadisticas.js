function estadisticasLocales() {
    var nombreJugador = document.getElementById("player1").textContent;
    var puntosJugador = parseFloat(document.getElementById("playerPoints").textContent);
    var puntosCpu = parseFloat(document.getElementById("machinePoints").textContent);
    var totalPartidas = (puntosJugador + puntosCpu);
    var rondasGanadas = puntosJugador;
    //Porcentaje de victorias

    var porcentajeVictorias;
    if (totalPartidas < 1){
        porcentajeVictorias = 0;
    }else{
        porcentajeVictorias = (rondasGanadas * 100) / totalPartidas;
    }

    // Calcular nivel de suciedad
    //categoria del jugador
    var nivelSuciedad;
    var categoria;
    if (totalPartidas < 5){
        nivelSuciedad = "Aun en revision";
        categoria = "Aun en revision";
    }else if (porcentajeVictorias >= 90) {
        nivelSuciedad = "Q-Lo impecable";
        categoria = "Leyenda letal 🏆";
    } else if (porcentajeVictorias >= 80) {
        nivelSuciedad = "Q-Lo limpio";
        categoria = "Rey de reyes 👑";
    } else if (porcentajeVictorias >= 60) {
        nivelSuciedad = "Q-Lo aceptable";
        categoria = "Rey 👸🏻";
    } else if (porcentajeVictorias >= 40) {
        nivelSuciedad = "Al limite 🚩";
        categoria = "Suertudo 🍀";
    } else if(porcentajeVictorias >= 30){
        categoria = "Sin suerte 🍀";
    }else if (porcentajeVictorias >= 20) {
        nivelSuciedad = "Q-Lo sucio";
        categoria = "Principiante 🧑🏻‍🎓";
    } else {
        nivelSuciedad = "Q-LO Irrecuperable";
        categoria = "Amigo, busque ayuda!";
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
    //push categoria
    document.getElementById("letalidad").textContent = categoria;

}   

document.addEventListener('DOMContentLoaded', function() {
    estadisticasLocales();
});
