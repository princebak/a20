<%-- 
    Document   : terrain1
    Created on : 29 juil. 2020, 12:01:50
    Author     : BAKENGA ILUNGA PRINCE
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Arbo20</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="bootstrap.min.css"/>
        <link rel="stylesheet" href="arbo20Style.css" />

    </head>
    <body onload="remplirArbo2()">
        <div class="container-fluid" id="bg2">
            <!--                <div class="navbar navbar-default container-fluid row">
                                <div class="navbar-header">
                                <a class="navbar-brand cercle" href="#" id="logo-a20"><span>A20</span></a><span>ArboTwenty</span>
                                </div>
                                <span id="niv">Niveau : </span><i id="numNiv">${niv}</i>
                            </div>-->
            <jsp:include page="/WEB-INF/header1.jsp"/>
            <jsp:include page="/WEB-INF/header2.jsp"/>
            <div class="alert-success" id="msgDiv"><label id="msglbl2"></label> 
                <!--                    <p>Jouer une nouvelle partie du <a href="/a20/solo"> meme niveau</a> ou <a href="/a20">changer niveau</a></p> -->
            </div>
            <div class="row" id="ground2">
                <div id="car1"><%-- debut carre un --%>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="a11" id="a11" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a12" id="a12" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a13" id="a13" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a14" id="a14" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="a15" id="a15" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="a21" id="a21" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a22" id="a22" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a23" id="a23" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a24" id="a24" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="a25" id="a25" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="a31" id="a31" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a32" id="a32" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a33" id="a33" maxlength="1" disabled/>
                        <input class="col-xs-2 form-control" type="text" name="a34" id="a34" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="a35" id="a35" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="a41" id="a41" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a42" id="a42" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a43" id="a43" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a44" id="a44" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="a45" id="a45" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="a51" id="a51" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a52" id="a52" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a53" id="a53" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="a54" id="a54" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="a55" id="a55" maxlength="1"/>
                    </div>
                </div><%-- fin carre un --%>
                <div id="car2"> <%--debut carre deux --%>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 boderTopDashed boderLeftDashed form-control" type="text" name="b11" id="b11" maxlength="1"/>
                        <input class="col-xs-2 boderTopDashed boderRightDashed form-control" type="text" name="b12" id="b12" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b13" id="b13" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b14" id="b14" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="b15" id="b15" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 boderLeftDashed boderBottomDashed form-control" type="text" name="b21" id="b21" maxlength="1"/>
                        <input class="col-xs-2 boderRightDashed boderBottomDashed form-control" type="text" name="b22" id="b22" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b23" id="b23" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b24" id="b24" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="b25" id="b25" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="b31" id="b31" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b32" id="b32" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b33" id="b33" maxlength="1" disabled/>
                        <input class="col-xs-2 form-control" type="text" name="b34" id="b34" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="b35" id="b35" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2" type="text" name="b41" id="b41" maxlength="1"/>
                        <input class="col-xs-2" type="text" name="b42" id="b42" maxlength="1"/>
                        <input class="col-xs-2" type="text" name="b43" id="b43" maxlength="1"/>
                        <input class="col-xs-2" type="text" name="b44" id="b44" maxlength="1"/>
                        <input class="col-xs-2 col-push-1" type="text" name="b45" id="b45" maxlength="1"/>
                    </div>
                    <div class="row">
                        <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="b51" id="b51" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b52" id="b52" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b53" id="b53" maxlength="1"/>
                        <input class="col-xs-2 form-control" type="text" name="b54" id="b54" maxlength="1"/>
                        <input class="col-xs-2 col-push-1 form-control" type="text" name="b55" id="b55" maxlength="1"/>
                    </div>
                </div><%-- fin carre deux --%>

                <div class="row btn-group-lg" id="btngrp">
                    <input class="btn btn-info" type="button" name="b0" id="b0" value="0"/>
                    <input class="btn btn-info" type="button" name="b1" id="b1" value="1"/>
                    <input class="btn btn-info" type="button" name="b2" id="b2" value="2"/>
                    <input class="btn btn-info" type="button" name="b3" id="b3" value="3"/>
                    <input class="btn btn-info" type="button" name="b4" id="b4" value="4"/>
                    <input class="btn btn-info" type="button" name="b5" id="b5" value="5"/>
                    <input class="btn btn-info" type="button" name="b6" id="b6" value="6"/>
                    <input class="btn btn-info" type="button" name="b7" id="b7" value="7"/>
                    <input class="btn btn-info" type="button" name="b8" id="b8" value="8"/>
                    <input class="btn btn-info" type="button" name="b9" id="b9" value="9"/>
                    <input class="btn btn-info" type="button" name="bx" id="bx" value="X"/>
                </div>

            </div>
            <jsp:include page="/WEB-INF/footer.jsp"/>
        </div>
        <div>
            <script type="text/javascript" src="jquery3.5.1.js"></script>
            <script type="text/javascript" src="arbo20Script.js"></script>
        </div>
    </body>
</html>
















<%-- 
    Document   : terrain1
    Created on : 29 juil. 2020, 12:01:50
    Author     : BAKENGA ILUNGA PRINCE
--%>