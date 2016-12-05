$(document).ready(function(){




    // Affichez un rapide descriptif du menu de navigation
    var ask = 0;

    $('.slider #icone button').click(function() {

        if ( ask == 0) {
            $('.slider .information').show('slow');
            $('.slider #icone button i')
                .addClass('fa fa-eye-slash')
                .css("color", "red");
            $('.slider #icone button i span').text("Caché le contenu du menu de navigation");
            ask = 1;
        } else {
            $('.slider .information').hide('slow');
            $('.slider #icone button i')
                .removeClass('fa fa-eye-slash')
                .addClass('fa fa-eye')
                .css("color", "blue");
            $('.slider #icone button i span').text("Ré-afficher le contenu du menu de navigation");
            ask = 0;
        }
    });

    

    


    // Présentation
    $('header nav a.item-presentation').on().mouseover(function() {
        $('.slider .information h2')
            .replaceWith("<h2 class='display-3'>Présentation</h2>");
            
        $('.slider .information h3')
            .replaceWith("<h3>Je vous propose une description courte sur ce que contiendra ce site</h3>");
    });

    // Règles
    $('header nav a.item-regles').mouseover(function() {
        $('.slider .information h2')
            .replaceWith("<h2 class='display-3'>Règles</h2>");
        $('.slider .information h3')
            .replaceWith("<h3>Les règles qui sont indispensable au bon déroulement des activités</h3>");
    });

    // Participants
    $('header nav a.item-participant').mouseover(function() {
        $('.slider .information h2')
            .fadeIn("slow")
            .replaceWith("<h2 class='display-3'>Participants</h2>");
        $('.slider .information h3')
            .replaceWith("<h3>Détails des participants lors des activités à la maison</h3>");
    });

    // Scores
    $('header nav a.item-scores').mouseover(function() {
        $('.slider .information h2')
            .replaceWith("<h2 class='display-3'>Scores</h2>");
        $('.slider .information h3')
            .replaceWith("<h3>Retrouvé ici les scores. Celà permet d'avoir un historique et ainsi s'améliorer si besoin</h3>");
    });
    // Classements
    $('header nav a.item-classements').mouseover(function() {
        $('.slider .information h2')
            .replaceWith("<h2 class='display-3'>Classements</h2>");
        $('.slider .information h3')
            .replaceWith("<h3>Retrouvé le classement du meilleur au moins bon</h3>");
    });
    // Dates des prochaines confrontations 
    $('header nav a.item-dates').mouseover(function() {
        $('.slider .information h2')
            .replaceWith("<h2 class='display-3'>Dates à venir</h2>");
        $('.slider .information h3')
            .replaceWith("<h3>Ne manquer pas les prochaines rencontre qui permettront de chamboulé les classements</h3>");
    });

});