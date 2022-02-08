<%-- 
    Document   : index
    Created on : 7 janv. 2021, 03:22:23
    Author     : bakenga ilunga prince
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
        <link href="images/LogoSeul.jpg" rel="icon" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/arbo20Style.css" />
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
    <body onload="translateMenu();translateHome();">
        <div class="container-fluid" id="bg" style="display: flex;flex-direction: column;">
            <div style="flex-grow: 1;">
                <div class="tou-modal"></div>
                <jsp:include page="/WEB-INF/jsp/header1.jsp"/>
            </div>
            
            <form class="form-inline" method="POST" action="solo" style="flex-grow: 1;">
                <input type="hidden" name="abonnementValid" id="abonnementValid" value="${abonnementValid != null ? abonnementValid : 'false'}" />
                <input type="hidden" name="new_continue_game" id="new_continue_game" value="${new_continue_game != null ? new_continue_game : 'new'}" />
                <div class="container-fluid" id="home">
                    <div class="row topRow">
                        <label class="col-xs-6" id="lbl_level">Niveau :</label>
                        <select class="col-xs-6" id="cmbNiv" name="cmbNiv">
                            <option>APPRENTISSAGE</option>
                            <option>MOYEN</option>
                        </select>
                    </div>
                    <div class="row topRow">
                        <label class="col-xs-8" id="lbl_nc">Nombre de carré(s):</label>
                        <select class="col-xs-4" id="cmbNbrCarre" name="cmbNbrCarre">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div class="row topRow">
                        <label class="col-xs-4">Mode :</label>
                        <select class="col-xs-8" id="cmbMode" name="cmbMode">
                            <option>SOLO</option>
                        </select>
                    </div>
                    <input type="hidden" id="txt_chrono_cr" name="txt_chrono_cr" value="Chrono" />
                    <div class="row topRow">
                        <label class="cursor-pointer col-xs-12" id="lbl_chro"><input type="radio" id="rd-chrono" name="radio" checked="checked"/>Chrono</label>
                    </div>
                    <div class="row bottomRow">
                        <label class="cursor-pointer col-xs-8" id="lbl_cpte_rb"><input type="radio" id="rd-ctp-rebours" name="radio" /><span id="lbl_creb">Cpte à Rebours (')</span></label>
                        <input class="form-control col-xs-4" type="number" id="cmbMun" name="cmbMun" value="1" style="width: 100px; float: right;" placeholder="Minute(s)" min="1" disabled="disabled"/>
                    </div>
                    <c:if test="${abonnementValid != null && abonnementValid == false }">
                        <div class="row">
                            <a href="abonnement" id="abonlink" style="margin-left: 25px;font-weight: bold;"></a>
                        </div>
                    </c:if>
                    <div class="btn-group btn-group-justified">
                        <c:if test="${saved_game_exist1 == 'true'}">
                            <div class="row myBtn">
    <!--                            <i class="col-xs-1 fa fa-play-circle"></i>-->
                                <input class="col-xs-11 btn btn-block btn-primary btn-lg" id="btn_continue1" type="submit" value="Continuer la dernière partie avec 1 carré"/>
                            </div>
                        </c:if>
                         <c:if test="${saved_game_exist2 == 'true'}">
                            <div class="row myBtn">
    <!--                            <i class="col-xs-1 fa fa-play-circle"></i>-->
                                <input class="col-xs-11 btn btn-block btn-primary btn-lg" id="btn_continue2" type="submit" value="Continuer la dernière partie avec 2 carrés"/>
                            </div>
                        </c:if>
                

                        <div class="row myBtn">
<!--                            <i class="col-xs-1 fa fa-play"></i>-->
                            <input class="col-xs-11 btn btn-block btn-danger btn-lg" id="btn_nouvelle" type="submit" value="Commencer une nouvelle partie"/>
                        </div>
                    </div> 
                </div>
            </form>
      
            <jsp:include page="/WEB-INF/jsp/footer_without_btns.jsp"/>

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
                <jsp:include page="/WEB-INF/jsp/modals.jsp"/>
                <script type="text/javascript" src="js/jquery-3-5-1.min.js"></script>
                <script type="text/javascript" src="js/bootstrap.min.js"></script>
                <script type="text/javascript" src="js/arbo20Script.js"></script>
                <script>
                    $("#btn_continue1").click(function(){
                        $("#cmbNbrCarre").val(1);
                        $("#new_continue_game").val("continue");
                    });
                     $("#btn_continue2").click(function(){
                        $("#cmbNbrCarre").val(2);
                        $("#new_continue_game").val("continue");
                    });
                     $("#btn_nouvelle").click(function(){
                        $("#new_continue_game").val("new");
                    });

                </script>
            </div>
        </div>
    </body>
</html>