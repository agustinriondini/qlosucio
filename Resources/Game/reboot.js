document.addEventListener('DOMContentLoaded', function() {
    var rebootButton = document.getElementById("play");
    var rebootOverlay = document.getElementById("rebootOverlay");
    rebootButton.addEventListener("click", function() {
        reiniciarJuego();
    });
    rebootOverlay.addEventListener("click", function() {
        reiniciarJuego();
    });

    function guardarEstadoJuego() {
        // Guardar el contenido de gameDataSection
        var gameDataSectionContent = document.getElementById("gameDataSection").innerHTML;
        localStorage.setItem('gameDataSectionContent', gameDataSectionContent);

        // Guardar el background-image del body
        var bodyBackgroundImage = getComputedStyle(document.body).backgroundImage;
        localStorage.setItem('bodyBackgroundImage', bodyBackgroundImage);
    }

    function cargarEstadoJuego() {
        // Cargar el contenido de gameDataSection
        var savedGameDataSectionContent = localStorage.getItem('gameDataSectionContent');
        if (savedGameDataSectionContent) {
            document.getElementById("gameDataSection").innerHTML = savedGameDataSectionContent;
        }

        // Cargar el background-image del body
        var savedBodyBackgroundImage = localStorage.getItem('bodyBackgroundImage');
        if (savedBodyBackgroundImage) {
            document.body.style.backgroundImage = savedBodyBackgroundImage;
        }
    }

    function reiniciarJuego() {
        guardarEstadoJuego();
        location.reload();
    }

    cargarEstadoJuego();

    function mostrarBotonReinicio() {
        rebootOverlay.style.display = "flex";
    }

    var oro1Card = document.getElementById("oro1");
    oro1Card.addEventListener("click", mostrarBotonReinicio);
});
