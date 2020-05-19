let quotes = 
[
    "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
    "Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.",
    "Jesus Christ est né en 1940 avant Chuck Norris.",
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris. ",
    "Quand Chuck Norris utilise Windows, il ne plante pas.",
    "Chuck Norris peut écouter un CD complet de Diam's. Ça marche aussi avec Tragédie. ",
    "C´est lorsque Mickael Jackson a croisé Chuck Norris qu'il est devenu blanc.",
    "Chuck Norris peut supprimer la corbeille.",
    "Chuck Norris reçoit des spams lui proposant de réduire la taille de son sexe.",
    "Chuck Norris ne vit pas sur Terre, la Terre vit sous Chuck Norris.",
    "Quand un moustique pique Chuck Norris, c'est le moustique qui se gratte.",
    "Chuck Norris peut diviser par zéro.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Chuck Norris sait coder en binaire avec que des 0.",
    "Chuck Norris peut taguer le mur du son.",
    "Si Chuck Norris attaque l'Empire, l'Empire ne contre attaque pas.",
    "Chuck Norris nettoie Mr Propre.",
    "Google, c'est le seul endroit où tu peux taper Chuck Norris...",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo. ",
    "Chuck Norris n'utilise pas de suppositoire. Les voies du seigneur sont impénétrables.",
    "Chuck Norris mange les emballages des carambars. On ne blague pas avec Chuck Norris.",
    "Chuck Norris peut remonter le terrain de foot dans Olive et Tom en moins d'un épisode.",
    "Chuck Norris a fini Super Mario Bros sans sauter.",
    "Chuck Norris est capable de laisser un message avant le bip sonore.",
    "Maitre Yoda a perdu la vie le jour où il a appelé Chuck Norris \"Norris Chuck\".",
    "Chuck Norris a fini son forfait illimité.",
    "Un film de Bruce Lee montre Chuck Norris se faire battre par Bruce Lee. C'est là l'effet spécial le plus cher de toute l'histoire du cinéma.",
    "Chuck Norris a fini Pokemon sans AUCUN pokemon. Chuck Norris n'a besoin de personne.",
    "Chuck Norris peut monter en bas.",
    "Un jour, les Power Rangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies."

];

let body = document.querySelector("body");
let cadre = document.querySelector(".cadre");
let quoteText = document.querySelector(".cadre__quote");
let btn = document.querySelector(".cadre__btn");

btn.addEventListener("click",magic);

function magic() {
    let indexQuote = Math.floor(Math.random()*quotes.length);
    setColor();    
    quoteText.textContent = quotes[indexQuote];
    console.log("Coucou")
;}

function setColor(){
    let color = [];
    for (let i=0; i<3; i++) {
        color.push(Math.floor(Math.random()*256));
    }
    color = `rgb(${color[0]},${color[1]}, ${color[2]})`;
    body.style.backgroundColor = color;
    btn.style.backgroundColor = color;
    quoteText.style.color = color;
}

