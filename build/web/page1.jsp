<%-- 
    Document   : index
    Created on : 7 janv. 2021, 03:22:23
    Author     : leprince
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
        <link href="images/LogoSeul.jpg" rel="icon" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/arbo20Style.css" />
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
    <body onload="translateHome();">
        <div class="container-fluid" id="bg" style="display: flex;flex-direction: column;">
            <div style="flex-grow: 1;">
                <input type="hidden" id="registered" value="${registered}"/>
                <input type="hidden" id="connected" value="${connected}"/>
                <input type="hidden" id="registered_name" value="${registered_name}"/>
                <jsp:include page="/WEB-INF/jsp/header_without_home.jsp"/>
            </div>
            <div style="flex-grow: 3;">
                <div class="container-fluid form-inline" id="home"  style="display: flex;flex-direction: column">

                <form id="frm_lang" action="menu" method="POST" style="flex-flow: 1; display: flex;flex-direction: column;">
                    <input type="hidden" id="txt_lang" name="txt_lang" value="" />
                    <div style="flex-grow: 1;display: flex;flex-direction: row;justify-content: flex-end;">
                        <label id="lang">Langue :</label>
                        <select id="cmbLang" style="margin-left: 5px;">
                            <option>ANGLAIS</option>
                            <option>FRANÇAIS</option>
                        </select>
                    </div>
                    <div style="flex-grow: 1;display: flex;flex-direction: row;justify-content: flex-start;">
                        <input class="btn btn-danger btn-md" type="submit" id="btn_jouer" value="Jouer"/>
                    </div>

                </form>
               <div style="flex-flow: 1;">
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="regle_a20">Règles du jeu</a>
                    <div class="col-xs-12 details" id="regle_a20_div">
                        <ol>
                            <li>ArboTwenty se joue dans un carré de 25 cases avec 5 cases de chaque coté, en utilisant les 
                                10 chiffres de la numération décimale. Un chiffre occupe la case centrale du carré et il est repris une et une 
                                seule fois. Il s’agit de l’un des chiffres suivants : 4, 5, 6, 7, 8, 9.
                            </li>
                            <li>Les autres chiffres sont inscrits 0, 1, 2 ou 3 fois dans les autres cases du carré;</li>
                            <li>Les chiffres sont placés de telle sorte que sur chaque ligne et sur chaque colonne leur  
                                addition donne toujours comme total le nombre 20
                            </li>

                        </ol>
                        <i>N.B. : La combinaison des règles n° 2 et n° 3 induit que les chiffres 0, 1, 2 et 3 ne peuvent 
                            occuper la case centrale.     
                        </i>

                    </div>
                </div>

                     <div class="row topRow">
                    <a href="#" class="col-xs-12" id="cons_dev_a20">Propiétaire/Concepteur</a>
                    <div class="col-xs-12 details" id="cons_dev_a20_div">
                        <u><h5 id="lbl_prop">Propriétaire</h5></u>
                        <div><b>Arbomeric</b><br/> 
                            <a href="www.arbomeric.com">www.arbomeric.com</a>,<br/>
                            <a href='mailto:arbotwenty@arbomeric.com?subject=Contact ArboTwenty'>arbotwenty@arbomeric.com</a> ;
                            <a href='mailto:arbotwenty@gmail.com?subject=Contact ArboTwenty'>arbotwenty@gmail.com</a>,<br/>
                            Phone : <a href='tel:00243898911464'>+243 89 89 11 464</a> ; 
                            <a href='tel:001(226)2898419'>+1 (226) 289 8419</a><br/>
                            <label id="bankAccount">Bank Account :</label>
                            
                            <table>
                                <tr>
                                    <td>- Bank Name : </td><td>TD Canada Trust</td>
                                </tr>
                                 <tr>
                                    <td>- Transit Number : </td><td>01142</td>
                                </tr>
                                 <tr>
                                    <td>- Institution Number : </td><td>004</td>
                                </tr>
                                  <tr>
                                    <td>- Account : </td><td>6767058</td>
                                </tr>
                            </table>
                        </div>
                        <u><h5 id="lbl_dev">Concepteur logiciel</h5></u>
                        <div><b>Kindev SARL</b><br/>
                            <a href="www.kindev-cd.com">www.kindev-cd.com</a>,<br/>
                            it@kindev-cd.com,<br/>
                            Phone : +243 81 70 82 666
                        </div>
                    </div>
                </div>
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="terms-ou-link">Conditions générales d’utilisation</a>
                </div> 
                <div class="row topRow">
                    <a href="#" class="col-xs-12" id="apropo_a20">À propos d'ArboTwenty</a>
                    <div class="col-xs-12 details" id="apropo_a20_div">
                        L’Arbotwenty a été conçu à l’origine comme un jeu  individuel.
                        Il peut néanmoins mettre en compétition plusieurs joueurs,
                        le défi étant alors d’être le plus rapide et le plus correct à remplir les cases du jeu.
                        Étant donné l’éventail de ses niveaux de difficulté, ce jeu s’adresse à un public de tout âge et de tout niveau de capacité.<br/>

                        L’Arbotwenty se présente sous la forme d’une arborescence comportant un carré unique ou plusieurs carrés avec une surface de jonction sur laquelle ils se chevauchent. <br/>

                        Chaque carré de l’Arbotwenty est composé de 25 cases au total, avec 5 cases de chaque côté. Les cases sont remplies avec les 10 chiffres de la numération arabe, soit 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.<br/>
                    </div>
                </div>
                <div class="row bottomRow">
                    <a class="col-xs-12" href="#" id="abonlink1">Payer l'abonnement</a>
                </div>
                </div>

                
            </div>
            </div>
            
            <jsp:include page="/WEB-INF/jsp/footer_without_btns.jsp"/>
            
            <!-- Button trigger modal -->


            <jsp:include page="/WEB-INF/jsp/modals.jsp"/>

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
            
            <script type="text/javascript" src="js/jquery-3-5-1.min.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script type="text/javascript" src="js/arbo20Script.js"></script>
            <script language="javascript">
                $("#abonlink1").click(function(e){
                    e.preventDefault();
                    console.log("abonlink1 clicked");
                    $("#frm_lang").attr("action","abonnement").submit();
                });
                $("#frm_lang").on("submit",function(){
                    console.log("frm submitted");
                });
                $(document).ready(function() {
                    launchHomeMsg();
                });
    //        $("#btnmodal").click(function () {
    //
    //        });
    //        populateCountries("country", "state"); // first parameter is id of country drop-down and second parameter is id of state drop-down
           </script>

        </div>

    </body>
</html>

