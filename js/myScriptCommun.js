$(document).ready(function(){
    
    // Activer ou désactiver l'affichage du menu rapide
    var ask = 0;
    $('#disabledButton').click(function() {

        if ( ask == 0 ) {
            $('.slider').show('slow');
            $('#disabledButton span')
                .removeClass("text-success")
                .addClass("text-danger")
                .html("<strong>Cacher</strong>");
            ask = 1;
        } else {
            $('.slider').hide('slow');
            $('#disabledButton span')
                .removeClass("text-danger")
                .addClass("text-success")
                .html("<strong>Voir</strong>");
            ask = 0;
        }
    });


    // Affichez un rapide descriptif du menu de navigation
    var ask = true;
    $('.slider #icone button').click(function() {

        if ( ask == true) {
            $('.slider .information').show('slow');
            $('.slider #icone button i')
                .addClass('fa fa-eye-slash')
                .css("color", "#d9534f");
            $('.slider #icone button i span').text("Masquer la description");
            ask = false;
        } else {
            $('.slider .information').hide('slow');
            $('.slider #icone button i')
                .removeClass('fa fa-eye-slash')
                .addClass('fa fa-eye')
                .css("color", "#0275d8");
            $('.slider #icone button i span').text("Ré-afficher la description");
            ask = true;
        }
    });


    // Présentation
    $('header nav a.item-presentation').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Présentation</h2>");            
        $('.slider .information h3').replaceWith("<h3 class='h5'>Découvrez ce que je pense sur le plaisir, ma vision des choses sur les statistiques du site et bien entendu du mot famille</h3>");        
    });

    // Règles
    $('header nav a.item-regles').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Règles</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Découvrez les règles qui sont à connaître pour le bon déroulement des activités.</h3>");        
    });

    // Participants
    $('header nav a.item-participant').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Participants</h2>");        
        $('.slider .information h3').replaceWith("<h3 class='h5'>Retrouvez ici, les protagonistes qui ont la joie de s'éclater autour de toutes ces activités.</h3>");
    });

    // Scores
    $('header nav a.item-scores').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Scores</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Découvrez tous les scores qui ont été enregistré ici.</h3>");
    });

    // Classements
    $('header nav a.item-classements').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Statistiques</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Qui n'a jamais rêvé de se mesurer à son frère ou ça soeur sans avoir papa ou maman sur le dos ? Là, en plus de ça vous pourrez vous amusez à voir ou es ce que vous avez des lacunes et ainsi les combler en vous entraînant !</h3>");
    });

    // Dates des prochaines confrontations 
    $('header nav a.item-dates').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Dates à venir</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Venez découvrir les prochaines confrontations. Bien entendue les parents seront présent afin que tout se déroule dans le meilleur des mondes</h3>");
    });

    // Login
    $('header nav a.item-login').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Login</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Seule l'administrateur peut se connecter</h3>");
    });

    // Déconnexion 
    $('header nav a.item-logout').mouseover(function() {
        $('.slider .information p').hide('slow');
        $('.slider .information h2').replaceWith("<h2 class='display-3'>Déconnexion</h2>");
        $('.slider .information h3').replaceWith("<h3 class='h5'>Simplement c'est le bouton qui s'ervira pour la déconnexion</h3>");
    });

});