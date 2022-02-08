<%-- 
    Document   : index
    Created on : 7 janv. 2021, 03:22:23
    Author     : leprince
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Arbo20</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="a20_icon.png" rel="icon" />
        <link rel="stylesheet" href="bootstrap.min.css" />
        <link rel="stylesheet" href="arbo20Style.css" />
        <!-- pour IE : -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">  
        <!-- pour les mobiles : -->
        <meta name="viewport" content="width=device-width, initialscale=1">  
        <!-- pour IE 8 -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container-fluid" id="bg">
            <!--            <div class="row navbar navbar-default container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#" id="logo-a20"><img id="a20_logo" src="a20.png" alt="a20"/></a><span>ArboTwenty</span>
                            </div>
                        </div>-->
            <jsp:include page="/WEB-INF/header1.jsp"/>

            <div class="container-fluid" id="home">

                <div class="row topRow">
                    <!--                        <label class="col-xs-6">Langue :</label>-->
                    <select class="form-control col-lg-offset-6 col-xs-6" id="cmbLang" name="cmbLang">
                        <option>FRANCAIS</option>
                        <option>ANGLAIS</option>
                    </select>
                </div>
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="apropo_a20">Apropos d'ArboTwenty</a>
                    <div class="col-xs-12 details" id="apropo_a20_div">
                        Apropos d'ArboTwenty est un jeu de reflexion,
                        Apropos d'ArboTwenty est un jeu de reflexion,
                        Apropos d'ArboTwenty est un jeu de reflexion,
                        Apropos d'ArboTwenty est un jeu de reflexion.
                    </div>
                </div>
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="regle_a20">Regles du Jeu</a>
                    <div class="col-xs-12 details" id="regle_a20_div">
                        <ol>
                            <li>Regle un</li>
                            <li>Regle deux</li>
                            <li>Regle trois</li>
                            <li>Regle quatre</li>
                        </ol>
                    </div>
                </div>
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="cons_dev_a20">Propiétaire/Concepteur</a>
                    <div class="col-xs-12 details" id="cons_dev_a20_div">
                        <h3>Concepteur</h3>
                        <div>arbomeric</div>
                        <h3>Developpeur</h3>
                        <div>kindev</div>
                    </div>
                </div>
                <div class="row topRow bottomRow">
                    <a href="#" class="col-xs-12" id="con_ins_a20">Connection/Inscription</a>
                    <div id="con_ins_a20_div">
                        <div class="col-xs-12" id="con_a20_div">
                            <h5>Connection</h5>
                            <form class="container-fluid" method="POST" action="#">
                                <div class="row">
                                    <input class="form-control " type="email" placeholder="votre pseudo"/>
                                    <input class="form-control" type="password" placeholder="votre mot de passe"/>
                                    <input class="form-control btn btn-primary" type="submit" value="Valider" id="btn_val_con"/>

                                </div>
                            </form>
                            <button id="btn_ins" class="btn btn-default">inscrivez vous ici</button>
                        </div>
                        <div class="col-xs-12 non_visibl" id="ins_a20_div">
                            <h5>Inscription</h5>
                            <form class="container-fluid" method="POST" action="#">
                                <div class="row">
                                    <input class="form-control " type="email" placeholder="votre pseudo"/>
                                    <select class="form-control" id="country" name ="country"></select>
                                    <select class="form-control" name ="state" id ="state"></select>
                                    <input class="form-control" type="password" placeholder="votre mot de passe"/>
                                    <input class="form-control" type="password" placeholder="confirmez votre mot de passe"/>

                                </div>
                            </form>
                            <input class="form-control btn btn-primary" type="submit" value="Valider" id="btn_val_ins"/>
                        </div>
                    </div>
                </div>
                <div class="btn-group btn-group-justified">
                    <div class="row myBtn">
                        <a class="btn btn-danger btn-sm" href="Menu" id="btn_jouer">Jouer</a>
                        <!-- on doit telecharger le fichier font awesome  pou les icons... -->
                    </div>
                </div> 
            </div>

            <!--            <embed src="son/ason.mp3" type="audio/mpeg" autostart volume="5"/>           -->

            <!--           <object data="son/bven_5th_sympho.mp3" type="audio/x-mpeg" width="0" height="0">
                            <param name="src" value="son/bven_5th_sympho.mp3"/>
                            <param name="controls" value="concole"/>
                            <param name="autostart" value="true"/>
                            <param name="loop" value="true"/>
                            <param name="volume" value="0.1"/>
                            <script type="text/javascript">
                                
            //                    document.write('');
                                
                            </script>
                        </object>-->
            <!--<audio id="a20-audio" loop="loop" autoplay="autoplay">
                <source src="son/bven_5th_sympho.mp3" type="audio/mpeg"/>
            </audio>-->
            <script type="text/javascript" src="jquery3.5.1.js"></script>
            <script type="text/javascript" src="arbo20Script.js"></script>
            <script type= "text/javascript" src = "countries.js"></script>
            <script language="javascript">
                populateCountries("country", "state"); // first parameter is id of country drop-down and second parameter is id of state drop-down
            </script>

        </div>
    </body>
</html>

