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
        <!-- CSS Perso -->
        <link rel="stylesheet" href="css/myStyle.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <header>
            <nav class="navbar navbar-light bg-faded">
                <h1 class="navbar-brand mb-0"><a href="index.php">Tournoi Familiale</a></h1> <!-- mb-0 === margin-bottom : 0; -->
                <ul class="nav navbar ml-3 float-xs-left">
                    <form methode="get" class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Votre recherche ici" style="width:350px;">
                            <span class="input-group-addon" id="basic-addon1">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </form>
                </ul>
                <ul class="nav navbar ml-3 float-xs-left">
                    <form class="form-inline">
                        <button type="button" id="disabledButton" class="form-control button-disabled"><span class="text-success"><strong>Open</strong></span> this description
                    </form>
                </ul>
                <ul class="nav navbar-nav float-xs-right mr-3">
                    <li class="nav-item">
                        <a href="presentation.php" class="nav-link item-presentation">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i> Présentation
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="regles.php" class="nav-link item-regles">
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Règles
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="participant.php" class="nav-link item-participant">
                            <i class="fa fa-users" aria-hidden="true"></i> Participants
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="scores.php" class="nav-link item-scores">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i> Statistiques
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="classement.php" class="nav-link item-classements">
                            <i class="fa fa-cubes" aria-hidden="true"></i> Classements
                            
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="date.php" class="nav-link item-dates">
                            <i class="fa fa-calendar" aria-hidden="true"></i> Dates
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="login.php" class="nav-link item-login">
                            <i class="fa fa-sign-in" aria-hidden="true"></i> Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="login.php" class="nav-link item-login">
                            <i class="fa fa-sign-out" aria-hidden="true"></i> Déconnexion
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        
