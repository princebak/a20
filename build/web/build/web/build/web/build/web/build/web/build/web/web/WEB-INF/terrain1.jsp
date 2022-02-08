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
    <body onload="remplirArbo()">
        <div class="container-fluid" id="bg">

            <!--                <div class="navbar navbar-default container-fluid row">
                                <div class="navbar-header">
                                <a class="navbar-brand" href="#" id="logo-a20"><span>A20</span></a><span>ArboTwenty</span>
                                </div>
                                <span id="niv">Niveau : </span><i id="numNiv">${niv}</i>
                            </div>-->
            <jsp:include page="/WEB-INF/header1.jsp"/>
            <jsp:include page="/WEB-INF/header2.jsp"/>
            
            <div class="alert-success" id="msgDiv"><label id="msglbl1"></label> 
                <!--                    <p>Jouer une nouvelle partie du <a href="/a20/solo"> meme niveau</a> ou <a href="/a20">changer niveau</a></p>--> 
            </div>
            <div class="row" id="ground">
                <div class="row">
                    <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="c11" id="c11" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c12" id="c12" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c13" id="c13" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c14" id="c14" maxlength="1"/>
                    <input class="col-xs-2 col-push-1 form-control" type="text" name="c15" id="c15" maxlength="1"/>
                </div>
                <div class="row">
                    <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="c21" id="c21" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c22" id="c22" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c23" id="c23" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c24" id="c24" maxlength="1"/>
                    <input class="col-xs-2 col-push-1 form-control" type="text" name="c25" id="c25" maxlength="1"/>
                </div>
                <div class="row">
                    <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="c31" id="c31" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c32" id="c32" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c33" id="c33" maxlength="1" disabled/>
                    <input class="col-xs-2 form-control" type="text" name="c34" id="c34" maxlength="1"/>
                    <input class="col-xs-2 col-push-1 form-control" type="text" name="c35" id="c35" maxlength="1"/>
                </div>
                <div class="row">
                    <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="c41" id="c41" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c42" id="c42" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c43" id="c43" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c44" id="c44" maxlength="1"/>
                    <input class="col-xs-2 col-push-1 form-control" type="text" name="c45" id="c45" maxlength="1"/>
                </div>
                <div class="row">
                    <input class="col-xs-offset-1 col-xs-2 form-control" type="text" name="c51" id="c51" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c52" id="c52" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c53" id="c53" maxlength="1"/>
                    <input class="col-xs-2 form-control" type="text" name="c54" id="c54" maxlength="1"/>
                    <input class="col-xs-2 col-push-1 form-control" type="text" name="c55" id="c55" maxlength="1"/>
                </div>
                <div class="row btn-group-lg">
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