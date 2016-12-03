$(document).ready(function(){

    // Présentation
    $('header nav a.item-presentation').mouseover(function() {
        $('.slider hgroup h2')
            .replaceWith("<h2 class='display-2'>Présentation</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Je vous propose une description courte sur ce que contiendra ce site</h3>");
    });

    // Règles
    $('header nav a.item-regles').mouseover(function() {
        $('.slider hgroup h2')
            .replaceWith("<h2 class='display-2'>Règles</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Les règles qui sont indispensable au bon déroulement des activités</h3>");
    });

    // Participants
    $('header nav a.item-participant').mouseover(function() {
        $('.slider hgroup h2')
            .fadeIn("slow")
            .replaceWith("<h2 class='display-2'>Participants</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Détails des participants lors des activités à la maison</h3>");
    });

    // Scores
    $('header nav a.item-scores').mouseover(function() {
        $('.slider hgroup h2')
            .replaceWith("<h2 class='display-2'>Scores</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Retrouvé ici les scores. Celà permet d'avoir un historique et ainsi s'améliorer si besoin</h3>");
    });
    // Classements
    $('header nav a.item-classements').mouseover(function() {
        $('.slider hgroup h2')
            .replaceWith("<h2 class='display-2'>Classements</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Retrouvé le classement du meilleur au moins bon</h3>");
    });
    // Dates des prochaines confrontations 
    $('header nav a.item-dates').mouseover(function() {
        $('.slider hgroup h2')
            .replaceWith("<h2 class='display-2'>Dates à venir</h2>");
        $('.slider hgroup h3')
            .replaceWith("<h3>Ne manquer pas les prochaines rencontre qui permettront de chamboulé les classements</h3>");
    });

});