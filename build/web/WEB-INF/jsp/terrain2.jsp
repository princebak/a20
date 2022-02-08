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
        <link href="images/LogoSeul.jpg" rel="icon" />
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/arbo20Style.css" />
    </head>
    <body onload="remplirArbo2()">
        <div class="container-fluid" id="bg2" style="display: flex;flex-direction: column;">
            <div style="flex-grow: 1;">
                <jsp:include page="/WEB-INF/jsp/header1.jsp"/>
                <div class="alert-success" id="msgDiv">
                    <label id="msglbl2"></label> 
                </div>
                <input type="hidden" value="${saved_game_exist2}" id="saved_game_exist2"/>
                <input type="hidden" name="new_continue_game" id="new_continue_game" value="${new_continue_game != null ? new_continue_game : 'new'}" />
            </div>
            
            <div class="row" id="ground2" style="flex-grow: 1;">
                <div class="case_group2">                
                    <div id="car1"><%-- debut carre un --%>
                        <div class="row">
                            <div class="col-xs-2 une-case form-control boderLeft boderTop"  name="a11" id="a11" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderTop"  name="a12" id="a12" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderTop"  name="a13" id="a13" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderTop"  name="a14" id="a14" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderRight boderTop"  name="a15" id="a15" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft"  name="a21" id="a21" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a22" id="a22" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a23" id="a23" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a24" id="a24" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="a25" id="a25" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft"  name="a31" id="a31" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a32" id="a32" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a33" id="a33" maxlength="1" disabled></div>
                            <div class="col-xs-2 une-case form-control"  name="a34" id="a34" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="a35" id="a35" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft"  name="a41" id="a41" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a42" id="a42" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a43" id="a43" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a44" id="a44" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control"  name="a45" id="a45" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft boderBottom"  name="a51" id="a51" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderBottom"  name="a52" id="a52" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderBottom"  name="a53" id="a53" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="a54" id="a54" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control"  name="a55" id="a55" maxlength="1"></div>
                        </div>
                    </div><%-- fin carre un(a) --%>
                    <div id="car2"> <%--debut carre deux --%>
                        <div class="row">
                            <div class=" col-xs-2 une-case boderTopDashed boderLeftDashed form-control"  name="b11" id="b11" maxlength="1"></div>
                            <div class="col-xs-2 une-case boderTopDashed boderRightDashed form-control"  name="b12" id="b12" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderTop"  name="b13" id="b13" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderTop"  name="b14" id="b14" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderTop boderRight"  name="b15" id="b15" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case boderLeftDashed boderBottomDashed form-control"  name="b21" id="b21" maxlength="1"></div>
                            <div class="col-xs-2 une-case boderRightDashed boderBottomDashed form-control"  name="b22" id="b22" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b23" id="b23" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b24" id="b24" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="b25" id="b25" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft"  name="b31" id="b31" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b32" id="b32" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b33" id="b33" maxlength="1" disabled></div>
                            <div class="col-xs-2 une-case form-control"  name="b34" id="b34" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="b35" id="b35" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft"  name="b41" id="b41" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b42" id="b42" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b43" id="b43" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control"  name="b44" id="b44" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderRight"  name="b45" id="b45" maxlength="1"></div>
                        </div>
                        <div class="row">
                            <div class=" col-xs-2 une-case form-control boderLeft boderBottom"  name="b51" id="b51" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderBottom"  name="b52" id="b52" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderBottom"  name="b53" id="b53" maxlength="1"></div>
                            <div class="col-xs-2 une-case form-control boderBottom"  name="b54" id="b54" maxlength="1"></div>
                            <div class="col-xs-2 une-case col-push-1 form-control boderBottom boderRight"  name="b55" id="b55" maxlength="1"></div>
                        </div>
                    </div><%-- fin carre deux(b) --%>
                </div>
                <div class="row btn-group-lg" id="btngrp">
                    <div>
                        <input class="btn btn-info" type="button" name="b0" id="b0" value="0"/>
                        <input class="btn btn-info" type="button" name="b1" id="b1" value="1"/>
                        <input class="btn btn-info" type="button" name="b2" id="b2" value="2"/>
                        <input class="btn btn-info" type="button" name="b3" id="b3" value="3"/>
                        <input class="btn btn-info" type="button" name="b4" id="b4" value="4"/>
                        <input class="btn btn-info" type="button" name="b5" id="b5" value="5"/>
                    </div>
                    <div style="margin-top: 4px;">
                        <input class="btn btn-info" type="button" name="b6" id="b6" value="6"/>
                        <input class="btn btn-info" type="button" name="b7" id="b7" value="7"/>
                        <input class="btn btn-info" type="button" name="b8" id="b8" value="8"/>
                        <input class="btn btn-info" type="button" name="b9" id="b9" value="9"/>
                        <input <input style="color:#fff;background-color:#d9534f;border-color:#d43f3a" class="btn btn-info" type="button" name="bx" id="bx" value="X"/>
                    </div>
                    
                </div>

            </div>
            <div style="flex-grow: 1;">
                <jsp:include page="/WEB-INF/jsp/footer.jsp"/>
            </div>
            <jsp:include page="/WEB-INF/jsp/footer_without_btns.jsp"/>
        </div>
        <div>
            <jsp:include page="/WEB-INF/jsp/modals.jsp"/>
            <script type="text/javascript" src="js/jquery-3-5-1.min.js"></script>
            <script type="text/javascript" src="js/arbo20Script.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script language="javascript">
                var saved_game = [];
                <%
                    Object[] array = (Object[])session.getAttribute("saved_game");
                    for(int i = 0; i  < array.length; ++i)
                    {
                %>
                     saved_game["<%= i %>"] = "<%= array[i] %>";
                    
                <% 
                    }
                %>  
                  
            </script>
        </div>
    </body>
</html>
















<%-- 
    Document   : terrain1
    Created on : 29 juil. 2020, 12:01:50
    Author     : BAKENGA ILUNGA PRINCE
--%>