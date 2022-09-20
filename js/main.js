/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const btConfirmer = document.querySelector('[type="submit"]');
btConfirmer.addEventListener('animationend', function () {
    btConfirmer.classList.remove('animate__animated', 'animate__tada');
    alert('Compte créé avec succès !');
    formulaire.reset();
    cpt += 1;
    console.log(cpt);
})

// Récupère la liste déroulante
const listeBackground = document.getElementById('background');
// Écoute le changement de valeur de la liste
listeBackground.addEventListener('change', function () {
    let img = './img/backgrounds/' + listeBackground.value;
    document.body.style.backgroundImage = `url(${img})`;
});
// Récupération du formulaire
const formulaire = document.querySelector('form');
let cpt = 0;
// Ecoute l'événement submit (envoi) du formulaire
formulaire.addEventListener('submit', function (event){
    event.preventDefault(); // Annuler l'envoi du formulaire
    btConfirmer.classList.add('animate__animated', 'animate__tada');
});
