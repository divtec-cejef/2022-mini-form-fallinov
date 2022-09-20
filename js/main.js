/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// Animation du bouton
const btCreer = document.querySelector('[type="submit"]');
btCreer.addEventListener('animationend', function () {
    alert('Envoyé !');
    formulaire.reset();
    btCreer.classList.remove('animate__heartBeat');
});

// A l'envoi du formulaire
const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function(event){
    event.preventDefault(); // Annule l'envoi du formulaire
    btCreer.classList.add('animate__heartBeat');
});

// Au changement de la valeur de la liste
const listeBackground = document.getElementById('background');
listeBackground.addEventListener('change', function(){
    const image = `./img/backgrounds/${listeBackground.value}`
    document.body.style.backgroundImage = `url(${image})`
});