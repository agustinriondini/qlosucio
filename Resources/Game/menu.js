document.addEventListener('DOMContentLoaded', function() {
    var activateMenu = document.getElementById("menuToggle");
    var closeBtn = document.getElementById("close");
    var menuContainer = document.querySelector(".menuContainer");

    activateMenu.addEventListener("click", function() {
        toggleMenu();
    });

    closeBtn.addEventListener("click", function() {
        toggleMenu();
    });

    function toggleMenu() {
        if (menuContainer.style.display === "flex") {
            menuContainer.style.display = "none";
            activateMenu.style.display = "flex";
        } else {
            menuContainer.style.display = "flex";
            activateMenu.style.display = "none";
            document.getElementById("changelog").style.display = "none";
        }
    }
    
});