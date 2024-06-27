function mazoPoker() {
    // Mapeo de cartas mazo poker
    const cardBackgrounds = {
        oro1: "url('./Resources/Mazo/Poker/diamante/qlosucio.png')",
        oro2: "url('./Resources/Mazo/Poker/diamante/diamante2.png')",
        oro3: "url('./Resources/Mazo/Poker/diamante/diamante3.png')",
        oro4: "url('./Resources/Mazo/Poker/diamante/diamante4.png')",
        oro5: "url('./Resources/Mazo/Poker/diamante/diamante5.png')",
        oro6: "url('./Resources/Mazo/Poker/diamante/diamante6.png')",
        oro7: "url('./Resources/Mazo/Poker/diamante/diamante7.png')",
        oro8: "url('./Resources/Mazo/Poker/diamante/diamante8.png')",
        oro9: "url('./Resources/Mazo/Poker/diamante/diamante9.png')",
        oro10: "url('./Resources/Mazo/Poker/diamante/diamante10.png')",
        oro11: "url('./Resources/Mazo/Poker/diamante/diamante1.png')",
        oro12: "url('./Resources/Mazo/Poker/diamante/diamante12.png')",
        espada1: "url('./Resources/Mazo/Poker/pikas/pikas1.png')",
        espada2: "url('./Resources/Mazo/Poker/pikas/pikas2.png')",
        espada3: "url('./Resources/Mazo/Poker/pikas/pikas3.png')",
        espada4: "url('./Resources/Mazo/Poker/pikas/pikas4.png')",
        espada5: "url('./Resources/Mazo/Poker/pikas/pikas5.png')",
        espada6: "url('./Resources/Mazo/Poker/pikas/pikas6.png')",
        espada7: "url('./Resources/Mazo/Poker/pikas/pikas7.png')",
        espada8: "url('./Resources/Mazo/Poker/pikas/pikas8.png')",
        espada9: "url('./Resources/Mazo/Poker/pikas/pikas9.png')",
        espada10: "url('./Resources/Mazo/Poker/pikas/pikas10.png')",
        espada11: "url('./Resources/Mazo/Poker/pikas/pikas11.png')",
        espada12: "url('./Resources/Mazo/Poker/pikas/pikas12.png')",
        basto1: "url('./Resources/Mazo/Poker/corazon/corazon1.png')",
        basto2: "url('./Resources/Mazo/Poker/corazon/corazon2.png')",
        basto3: "url('./Resources/Mazo/Poker/corazon/corazon3.png')",
        basto4: "url('./Resources/Mazo/Poker/corazon/corazon4.png')",
        basto5: "url('./Resources/Mazo/Poker/corazon/corazon5.png')",
        basto6: "url('./Resources/Mazo/Poker/corazon/corazon6.png')",
        basto7: "url('./Resources/Mazo/Poker/corazon/corazon7.png')",
        basto8: "url('./Resources/Mazo/Poker/corazon/corazon8.png')",
        basto9: "url('./Resources/Mazo/Poker/corazon/corazon9.png')",
        basto10: "url('./Resources/Mazo/Poker/corazon/corazon10.png')",
        basto11: "url('./Resources/Mazo/Poker/corazon/corazon11.png')",
        basto12: "url('./Resources/Mazo/Poker/corazon/corazon12.png')",
        copa1: "url('./Resources/Mazo/Poker/trebol/trebol1.png')",
        copa2: "url('./Resources/Mazo/Poker/trebol/trebol2.png')",
        copa3: "url('./Resources/Mazo/Poker/trebol/trebol3.png')",
        copa4: "url('./Resources/Mazo/Poker/trebol/trebol4.png')",
        copa5: "url('./Resources/Mazo/Poker/trebol/trebol5.png')",
        copa6: "url('./Resources/Mazo/Poker/trebol/trebol6.png')",
        copa7: "url('./Resources/Mazo/Poker/trebol/trebol7.png')",
        copa8: "url('./Resources/Mazo/Poker/trebol/trebol8.png')",
        copa9: "url('./Resources/Mazo/Poker/trebol/trebol9.png')",
        copa10: "url('./Resources/Mazo/Poker/trebol/trebol10.png')",
        copa11: "url('./Resources/Mazo/Poker/trebol/trebol11.png')",
        copa12: "url('./Resources/Mazo/Poker/trebol/trebol12.png')"
    };

    // Mapep de cartas
    Object.entries(cardBackgrounds).forEach(([id, backgroundImage]) => {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundImage = backgroundImage;
        }
    });

    // Guardar el estado en localStorage
    localStorage.setItem('cardBackgrounds', JSON.stringify(cardBackgrounds));

    alert("Mazo de poker seleccionado correctamente, ten cuidado con el comodin");
}
function mazoEspa(){
    //mapeo cartas mazo españolas
    const cardBackgrounds = {
        oro1: "url('./Resources/Mazo/Españolas/Oro/oro1.png')",
        oro2: "url('./Resources/Mazo/Españolas/Oro/oro2.png')",
        oro3: "url('./Resources/Mazo/Españolas/Oro/oro3.png')",
        oro4: "url('./Resources/Mazo/Españolas/Oro/oro4.png')",
        oro5: "url('./Resources/Mazo/Españolas/Oro/oro5.png')",
        oro6: "url('./Resources/Mazo/Españolas/Oro/oro6.png')",
        oro7: "url('./Resources/Mazo/Españolas/Oro/oro7.png')",
        oro8: "url('./Resources/Mazo/Españolas/Oro/oro8.png')",
        oro9: "url('./Resources/Mazo/Españolas/Oro/oro9.png')",
        oro10: "url('./Resources/Mazo/Españolas/Oro/oro10.png')",
        oro11: "url('./Resources/Mazo/Españolas/Oro/oro11.png')",
        oro12: "url('./Resources/Mazo/Españolas/Oro/oro12.png')",
        espada1: "url('./Resources/Mazo/Españolas/Espada/espada1.png')",
        espada2: "url('./Resources/Mazo/Españolas/Espada/espada2.png')",
        espada3: "url('./Resources/Mazo/Españolas/Espada/espada3.png')",
        espada4: "url('./Resources/Mazo/Españolas/Espada/espada4.png')",
        espada5: "url('./Resources/Mazo/Españolas/Espada/espada5.png')",
        espada6: "url('./Resources/Mazo/Españolas/Espada/espada6.png')",
        espada7: "url('./Resources/Mazo/Españolas/Espada/espada7.png')",
        espada8: "url('./Resources/Mazo/Españolas/Espada/espada8.png')",
        espada9: "url('./Resources/Mazo/Españolas/Espada/espada9.png')",
        espada10: "url('./Resources/Mazo/Españolas/Espada/espada10.png')",
        espada11: "url('./Resources/Mazo/Españolas/Espada/espada11.png')",
        espada12: "url('./Resources/Mazo/Españolas/Espada/espada12.png')",
        basto1: "url('./Resources/Mazo/Españolas/Basto/basto1.png')",
        basto2: "url('./Resources/Mazo/Españolas/Basto/basto2.png')",
        basto3: "url('./Resources/Mazo/Españolas/Basto/basto3.png')",
        basto4: "url('./Resources/Mazo/Españolas/Basto/basto4.png')",
        basto5: "url('./Resources/Mazo/Españolas/Basto/basto5.png')",
        basto6: "url('./Resources/Mazo/Españolas/Basto/basto6.png')",
        basto7: "url('./Resources/Mazo/Españolas/Basto/basto7.png')",
        basto8: "url('./Resources/Mazo/Españolas/Basto/basto8.png')",
        basto9: "url('./Resources/Mazo/Españolas/Basto/basto9.png')",
        basto10: "url('./Resources/Mazo/Españolas/Basto/basto10.png')",
        basto11: "url('./Resources/Mazo/Españolas/Basto/basto11.png')",
        basto12: "url('./Resources/Mazo/Españolas/Basto/basto12.png')",
        copa1: "url('./Resources/Mazo/Españolas/Copa/copa1.png')",
        copa2: "url('./Resources/Mazo/Españolas/Copa/copa2.png')",
        copa3: "url('./Resources/Mazo/Españolas/Copa/copa3.png')",
        copa4: "url('./Resources/Mazo/Españolas/Copa/copa4.png')",
        copa5: "url('./Resources/Mazo/Españolas/Copa/copa5.png')",
        copa6: "url('./Resources/Mazo/Españolas/Copa/copa6.png')",
        copa7: "url('./Resources/Mazo/Españolas/Copa/copa7.png')",
        copa8: "url('./Resources/Mazo/Españolas/Copa/copa8.png')",
        copa9: "url('./Resources/Mazo/Españolas/Copa/copa9.png')",
        copa10: "url('./Resources/Mazo/Españolas/Copa/copa10.png')",
        copa11: "url('./Resources/Mazo/Españolas/Copa/copa11.png')",
        copa12: "url('./Resources/Mazo/Españolas/Copa/copa12.png')"
    };
    Object.entries(cardBackgrounds).forEach(([id, backgroundImage]) => {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundImage = backgroundImage;
        }
    });

    // Guardar el estado en localStorage
    localStorage.setItem('cardBackgrounds', JSON.stringify(cardBackgrounds));

    alert("Mazo de españolas seleccionado correctamente, ten cuidado con el uno de oro");
}

// mantener el mazo seleccionado
function loadCardBackgrounds() {
    const storedBackgrounds = localStorage.getItem('cardBackgrounds');
    if (storedBackgrounds) {
        const cardBackgrounds = JSON.parse(storedBackgrounds);
        Object.entries(cardBackgrounds).forEach(([id, backgroundImage]) => {
            const element = document.getElementById(id);
            if (element) {
                element.style.backgroundImage = backgroundImage;
            }
        });
    }
}
window.onload = loadCardBackgrounds;
