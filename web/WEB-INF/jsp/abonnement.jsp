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
    <body onload="translateSubscription();">
        <input type="hidden" id="langue" value="${lang}" />
        <div class="container-fluid" id="bg" style="display: flex;flex-direction: column;">
            <div style="flex-grow: 1;">
                <input type="hidden" id="registered" value="${registered}"/>
                <input type="hidden" id="connected" value="${connected}"/>
                <input type="hidden" id="registered_name" value="${registered_name}"/>
                <jsp:include page="/WEB-INF/jsp/header1.jsp"/>
            </div>
            
            <div id="home" style="flex-grow: 1;">

                <form id="frm_abon" action="payment" method="POST">
                    <div class="row text-center">
                        <h3 id="abon_txt1">SYSTEME DE TARIFICATION</h3>
                    </div>
                    <div class="row text-center">
                         <h4 id="abon_txt2">Accès aux niveaux 3 et 4 du jeu</h4>
                    </div>
                   
                    <div style="font-size: 65%;" class="tarif text-center">
                        <div class="row"><label class="col-xs-4 abon_txt3">Accès pendant </label><label class="col-xs-4" id="24h">24 heures :</label><label class="col-xs-4">1 $ US</label></div>
                        <div class="row"><label class="col-xs-4 abon_txt3">Accès pendant </label><label class="col-xs-4" id="7j">7 jours :</label><label class="col-xs-4">6 $ US</label></div>
                        <div class="row"><label class="col-xs-4 abon_txt3">Accès pendant </label><label class="col-xs-4" id="15j">15 jours :</label><label class="col-xs-4">10 $ US</label></div>
                        <div class="row"><label class="col-xs-4 abon_txt3">Accès pendant </label><label class="col-xs-4" id="30j">30 jours :</label><label class="col-xs-4">17 $ US</label></div>
                        <div class="row"><label class="col-xs-4 abon_txt3">Accès pendant </label><label class="col-xs-4" id="90j">90 jours :</label><label class="col-xs-4">45 $ US</label></div>
                    </div>
                    
                    <div style="border: 2px solid #777;margin-top: 10px;">
                        <div class="row" style="padding-left:20px; padding-right:40px;">
                             <label class="col-xs-6" id="period">Période de</label>
                             <select class="col-xs-6" name="abonDays" style="font-size: 80%">
                                <option value="1" id="op24h">24 heures</option>
                                <option value="7" id="op7j">7 jours</option>
                                <option value="15" id="op15j">15 jours</option>
                                <option value="30" id="op30j">30 jours</option>
                                <option value="90" id="op90j">90 jours</option>
                            </select>
                        </div>
                        <div class="row" style="padding-left:20px; padding-right:30px;">
                            <a href="#" class="btn btn-primary col-xs-12" id="btn_abon" style="margin: 5px;margin-left: 5px; width: 100%" id="subscribeBtn">Abonnez-vous</a>
                        </div>
                    </div>
                </form>
                                
            </div>
            
            <jsp:include page="/WEB-INF/jsp/footer_without_btns.jsp"/>
            
            <jsp:include page="/WEB-INF/jsp/modals.jsp"/>
            <script type="text/javascript" src="js/jquery-3-5-1.min.js"></script>
            <script type="text/javascript" src="js/arbo20Script.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script>
                $("#btn_abon").click(function(e){
                    e.preventDefault();
                    checkConnectedPlayer(function(){$("#frm_abon").submit();});
                });
            </script>
        </div>

    </body>
</html>

