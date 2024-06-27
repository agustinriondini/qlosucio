document.addEventListener("DOMContentLoaded", function() {
    var acceptCheckbox = document.getElementById("accept-checkbox");
    var acceptButton = document.getElementById("accept-button");
    var popup = document.getElementById("popup");
    fetch('Resources/JarSoft/tyc.txt')
      .then(response => response.text())
      .then(text => {
        var tycContent = document.getElementById("tyc-content");
        tycContent.innerHTML = text;
      })
      .catch(error => {
        console.error('Error al cargar los términos y condiciones:', error);
      });
    var tycAccepted = localStorage.getItem("tycAccepted") === "true";
    if (!tycAccepted) {
      popup.style.display = "flex";
      document.getElementById("body").style.overflow = "hidden";
    }
    acceptCheckbox.addEventListener("change", function() {
      acceptButton.disabled = !acceptCheckbox.checked;
      if (acceptCheckbox.checked) {
        acceptButton.classList.remove("disabled");
      } else {
        acceptButton.classList.add("disabled");
        document.getElementById("body").style.overflow = "auto";
      }
    });
    window.guardarEstadoJuego = function() {
      localStorage.setItem("tycAccepted", acceptCheckbox.checked);
      location.reload();
    };
    window.closePopup = function() {
      if (acceptCheckbox.checked) {
        guardarEstadoJuego();
        popup.style.display = "none";
      } else {
        alert("Debe aceptar los términos y condiciones para continuar.");
      }
    };
});
