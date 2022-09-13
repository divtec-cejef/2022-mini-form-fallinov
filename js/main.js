/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';
// Récupère la liste déroulante
const listeBackground = document.getElementById('background');
// Écoute le changement de valeur de la liste
listeBackground.addEventListener('change', function () {
    let img = './img/backgrounds/' + listeBackground.value;
    document.body.style.backgroundImage = `url(${img})`;
});