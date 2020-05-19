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
    "Si Chuck Norris attaque l'Empire, l'Empire ne contre attaque pas."
];

let body = document.querySelector("body");
let cadre = document.querySelector(".cadre");
let quoteText = document.querySelector(".cadre__quote");
let btn = document.querySelector(".cadre__btn");

btn.addEventListener("click",magic);

function magic() {
    let indexQuote = Math.floor(Math.random()*quotes.length);

    let colorR = Math.floor(Math.random()*256);
    let colorG = Math.floor(Math.random()*256);
    let colorB = Math.floor(Math.random()*256);

    body.style.backgroundColor = `rgb(${colorR},${colorG}, ${colorB})`;
    btn.style.backgroundColor = `rgb(${colorR},${colorG}, ${colorB})`;
    quoteText.style.color = `rgb(${colorR},${colorG}, ${colorB})`;
    
    quoteText.textContent = quotes[indexQuote];
}