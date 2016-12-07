<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Tournoi Familiale</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- LINK Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Aref+Ruqaa" rel="stylesheet">
        <!-- CSS Bootstrap -->
        <link rel="stylesheet" href="components/bootstrap/css/bootstrap.min.css">
        <!-- CSS Font-Awesome -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        
        <style>
            body {
                box-sizing: border-box;
                background-image: url('images/bg2.png');
                background-repeat: repeat;
                height: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            #firstPresentation {
                padding: 20px;
                width: 50%;
            }
            #firstPresentation h1, #access {
                text-align: center;
            }
            #firstPresentation blockquote {
                text-align: center;
            }            
            #access a:hover {
                text-decoration: none;
                font-size: 1.5em;
                transition: font-size .5s linear;
            }
        </style>
    </head>

    <body>
        <div id="firstPresentation">
            <h1 class="display-1">Tournoi-familiale</h1>
            <hr />
            <p class="lead">Bienvenue sur ce site familiale. Il n'y a aucune inscription possible en tout cas pour le moment <br />
                et ce pour une durée encore inconnue. Cette restriction est obligatoire afin de limiter<br />
                toutes triche qui fausserai les statistiques qui seront disponible également dans <br />
                un futur plus ou moins proche.<br /><br />
                Celà dit, vous avez tout de même la possibilitée de voir le contenu du site, les résultats, la galerie et j'en passe.<br />
                Après cette courte introduction, je vous souhaite une très bonne visite sur ce site.<br /><br /> 
                Bien cordialement
            </p>
            <hr />
            <blockquote class="blockquote">
                <legend>Description rapide de l'auteur du site</legend>
                <hr />
                <p><span class="lead">Ils s'appel monsieur GUILLON Alain. Il a 32 ans avec 3 enfants à charge. Au jour d'aujourd'hui il est en reconversion professionnel suite à des soucis de santé.
                De base, il est technicien de maintenance informatique micro et réseau et comme dit précédemment, il est en reconversion professionnel en tant que
                Développeur Back & Front-End <span class="text-danger">"<strong>Junior</strong>"</span>. Ce site est pour lui une façon de présenter son savoir faire.</p>
                <footer class="blockquote-footer">
                    Alain
                </footer>
            </blockquote>
            <hr />
        </div>
        <div id="access">
            <legend>Se rendre sur le site</legend>
            <p>Je vous invite à cliquer sur le lien ci-dessous afin d'accéder aux contenus</p>
            <hr />
            <a href="presentation.php">Cliquez ici</a>
        </div>
    </body>    
    <!-- Script JQuery -->
    <script src="components/jquery/jquery-3.1.0.min.js" type="text/javascript"></script>
    <!-- Script Bootstrap -->
    <script src="components/bootstrap/js/tether.min.js" type="text/javascript"></script>
    <script src="components/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
</html>