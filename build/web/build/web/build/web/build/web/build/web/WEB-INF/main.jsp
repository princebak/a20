<%-- 
    Document   : index
    Created on : 7 janv. 2021, 03:22:23
    Author     : bakenga ilunga prince
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
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></s cript>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></scrip t>
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

                <form class="form-inline" method="POST" action="/a20/solo">
                    <div class="container-fluid" id="home">
                        <div class="row topRow">
                            <label class="col-xs-6">Niveau :</label>
                            <select class="form-control col-xs-6" id="cmbNiv" name="cmbNiv">
                                <option>APPRENTISSAGE</option>
                                <option>MOYEN</option>
                                <option>MAITRISE</option>
                                <option>AVANCE</option>
                            </select>
                        </div>
                        <div class="row topRow">
                            <label class="col-xs-6">Nombre de carré(s):</label>
                            <select class="form-control col-xs-6" id="cmbNbrCarre" name="cmbNbrCarre">
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div class="row topRow">
                            <label class="col-xs-6">Mode(NF) :</label>
                            <select class="form-control col-xs-6" id="cmbMode" name="cmbMode">
                                <option>Solo</option>
                                <!--                               <option>Avec Adversaire(s)</option>-->
                            </select>
                        </div>
                        <input type="hidden" id="txt_chrono_cr" name="txt_chrono_cr" value="chrono" />
                        <div class="row topRow">
                            <label class="cursor-pointer col-xs-12"><input type="radio" id="rd-chrono" name="radio" checked="checked"/>Chrono</label>
                        </div>
                        <div class="row bottomRow">
                            <label class="cursor-pointer col-xs-9"><input type="radio" id="rd-ctp-rebours" name="radio"/>Cpt. à Rebours (')</label>

                            <select class="form-control col-xs-3" id="cmbMun" name="cmbMun" disabled="disabled">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </div>

                        <div class="btn-group btn-group-justified">
                            <div class="row myBtn">
                                <input class="btn btn-block btn-primary btn-lg" type="submit" value="Continuer la dernière partie (NF)"/>
                                <!-- on doit telecharger le fichier font awesome  pou les icons... -->  
                            </div>

                            <div class="row myBtn">
                                <input class="btn btn-block btn-danger btn-lg" type="submit" value="Commencer une nouvelle partie"/>
                                <!-- on doit telecharger le fichier font awesome  pou les icons... -->
                            </div>
                        </div> 
                    </div>
                </form>
                <!--            <div class="container-fluid" id="pied-home">
                                <label>
                                    (NF)<a> Connnectez vous</a> ou <a>Enregistrez vous</a> , pour jouer en mode <i>"Avec adversaire(s)"</i>
                                </label>
                            </div>-->
          
            <div>
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
            </div>
        </div>
    </body>
</html>