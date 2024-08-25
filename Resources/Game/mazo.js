var cartaActualIndex = 0;
var cartas = [];
var turnoUsuario = true;
var userDrawButton; 
var gameStatus = false;

// Variables para acumular victorias consecutivas
var playerStreak = 0;
var cpuStreak = 0;
var maxuserwins = 0;

// Cargar rachas desde el cache (si existen)
if (localStorage.getItem('playerStreak')) {
    playerStreak = parseInt(localStorage.getItem('playerStreak'), 10);
}
if (localStorage.getItem('cpuStreak')) {
    cpuStreak = parseInt(localStorage.getItem('cpuStreak'), 10);
}
// Cargar el máximo histórico de victorias consecutivas del usuario
if (localStorage.getItem('maxuserwins')) {
    maxuserwins = parseInt(localStorage.getItem('maxuserwins'), 10);
}

document.addEventListener('DOMContentLoaded', function() {
    userDrawButton = document.getElementById("userDrawButton");

    // Mostrar alerta al finalizar el juego
    function showAlert(){
        var alertStatus = document.getElementById("reload");
        alertStatus.style.display = "flex";
    }

    // Llenar el mazo de cartas y mezclar
    function llenarMazo() {
        var mazo = document.getElementById("mazo");
        mazo.childNodes.forEach(function(node) {
            if (node.nodeType === 1) {
                cartas.push(node);
            }
        });
        shuffle(cartas);
    }

    // Alternar turno entre usuario y CPU
    function alternarTurno() {
        turnoUsuario = !turnoUsuario;
        if (!turnoUsuario) {
            userDrawButton.disabled = true;
            document.getElementById("avatarPlayer1").classList.remove("turno");
            document.getElementById("avatarPlayer0").classList.add("turno");
            setTimeout(sacarCartaCPU, 1000);
        } else {
            userDrawButton.disabled = false;
            document.getElementById("avatarPlayer0").classList.remove("turno");
            document.getElementById("avatarPlayer1").classList.add("turno");
        }
    }

    // Jugada de la CPU
    function sacarCartaCPU() {
        if (cartaActualIndex < cartas.length) {
            var cartaActual = cartas[cartaActualIndex];
            cartaActualIndex++;
            var waste = document.getElementById("waste");
            waste.appendChild(cartaActual);

            // Verificar si la CPU pierde
            if (cartaActual.id === "oro1") {
                gameStatus = true;
                alert("¡Ganaste, la Rookie tiene el Q-lo sucio!");
                actualizarRachas('player');
                calcularProbabilidades();
                sumarPuntos("playerPoints", 1);
                showAlert();
                reiniciarJuego();
                return;
            }
            alternarTurno();
        }
    }

    // Jugada del Usuario
    userDrawButton.addEventListener("click", function() {
        if (turnoUsuario) {
            sacarCartaUsuario();
        }
    });

    function sacarCartaUsuario() {
        if (cartaActualIndex < cartas.length) {
            var cartaActual = cartas[cartaActualIndex];
            cartaActualIndex++;
            var waste = document.getElementById("waste");
            waste.appendChild(cartaActual);

            // Verificar si el usuario pierde
            if (cartaActual.id === "oro1") {
                gameStatus = true;
                alert("¡Perdiste! Que olor!");
                actualizarRachas('cpu');
                calcularProbabilidades();
                sumarPuntos("machinePoints", 1);
                showAlert();
                reiniciarJuego();
                userDrawButton.disabled = true;
                return;
            }
            alternarTurno();
        }
    }

    // Actualizar rachas de victorias
    function actualizarRachas(winner) {
        if (winner === 'player') {
            playerStreak++;
            cpuStreak = 0;
            actualizarMaxWins();
        } else if (winner === 'cpu') {
            cpuStreak++;
            playerStreak = 0;
        }
        localStorage.setItem('playerStreak', playerStreak);
        localStorage.setItem('cpuStreak', cpuStreak);
    }

    // Calcular probabilidades de éxito
    function calcularProbabilidades() {
        var probabilidadJugador = 50 / Math.pow(2, playerStreak);
        var probabilidadCpu = 100 - probabilidadJugador;

        const limiteInferior = 0.1;
        const limiteSuperior = 99.9;
        probabilidadJugador = Math.max(limiteInferior, Math.min(probabilidadJugador, limiteSuperior));
        probabilidadCpu = 100 - probabilidadJugador;

        var probUserElement = document.getElementById('probUser');
        var probRookieElement = document.getElementById('probRookie');

        applyStyles(probUserElement, probabilidadJugador);
        applyStyles(probRookieElement, probabilidadCpu);
    }

    function applyStyles(element, probabilidad) {
        let color = "";
        let symbol = "";

        if (probabilidad <= 20) {
            color = "red";
            symbol = " ↓";
        } else if (probabilidad >= 21 && probabilidad <= 40) {
            color = "brown";
            symbol = " ↘";
        } else if (probabilidad >= 41 && probabilidad <= 59) {
            color = "white";
            symbol = " →";
        } else if (probabilidad >= 60) {
            color = "yellowgreen";
            symbol = " ↗↗";
        }

        element.textContent = probabilidad.toFixed(2) + '%' + symbol;
        element.style.color = color;
        element.style.animation = "blink 1s infinite";
    }

    // Sumar puntos al jugador
    function sumarPuntos(playerId, puntos) {
        var puntosSpan = document.getElementById(playerId);
        var puntosActuales = parseInt(puntosSpan.textContent) || 0;
        puntosSpan.textContent = puntosActuales + puntos;
    }

    // Reiniciar el juego
    function reiniciarJuego() {
        cartaActualIndex = 0;
        cartas = [];
        llenarMazo();
    }

    // Mezclar las cartas
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Guardar la mayor cantidad de victorias consecutivas del jugador
    function actualizarMaxWins() {
        if (playerStreak > maxuserwins) {
            maxuserwins = playerStreak;
            localStorage.setItem('maxuserwins', maxuserwins);
        }
    }

    // Inicializar el mazo y calcular probabilidades al cargar la página
    llenarMazo();
    calcularProbabilidades();
});
