var cartaActualIndex = 0;
var cartas = [];
var turnoUsuario = true;
var userDrawButton; 
var gameStatus = false;
document.addEventListener('DOMContentLoaded', function() {
    userDrawButton = document.getElementById("userDrawButton"); 
    // array mazo
    function llenarMazo() {
        var mazo = document.getElementById("mazo");
        mazo.childNodes.forEach(function(node) {
            if (node.nodeType === 1) {
                cartas.push(node);
            }
        });
        // Mezclar
        shuffle(cartas);
    }
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
    // jugador cpu
    function sacarCartaCPU() {
        if (cartaActualIndex < cartas.length) {
            var cartaActual = cartas[cartaActualIndex];
            cartaActualIndex++;
            // push carta al waste
            var waste = document.getElementById("waste");
            waste.appendChild(cartaActual);
            // cuando pierde la cpu
            if (cartaActual.id === "oro1") {
                gameStatus = true;
                alert("¡Ganaste, la Rookie tiene el Q-lo sucio!");
                restarPuntos("machinePoints", 25);
                reiniciarJuego();
                return;
            }
            alternarTurno();
        }
    }

    //revisar aca
    function restarPuntos(playerId, puntos) {
        var puntosSpan = document.getElementById(playerId);
        var puntosActuales = parseInt(puntosSpan.textContent) || 0;
        puntosSpan.textContent = puntosActuales - puntos;
    }
    function reiniciarJuego() {
        cartaActualIndex = 0;
        cartas = [];
        llenarMazo();
    }
    userDrawButton.addEventListener("click", function() {
        if (turnoUsuario) {
            sacarCartaUsuario();
        }
    });
    function sacarCartaUsuario() {
        if (cartaActualIndex < cartas.length) {
            var cartaActual = cartas[cartaActualIndex];
            cartaActualIndex++;

            // push carta al waste
            var waste = document.getElementById("waste");
            waste.appendChild(cartaActual);

            // cuando pierde el usuario
            if (cartaActual.id === "oro1") {
                gameStatus = true;
                alert("¡Perdiste!");
                restarPuntos("playerPoints", 25);
                reiniciarJuego();
                userDrawButton.disabled = true;
                return;
            }
            alternarTurno();
        }
    }
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    llenarMazo();
});
