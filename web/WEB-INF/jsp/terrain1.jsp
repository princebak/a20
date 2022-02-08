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
    <body onload="remplirArbo();translateSaveModal();">
        <div class="container-fluid" id="bg" style="display: flex;flex-direction: column;">
            <div style="flex-grow: 1;">
                <jsp:include page="/WEB-INF/jsp/header1.jsp"/>
                <div id="msgDiv" >
                    <label id="msglbl1"></label> 
                </div>
                <input type="hidden" value="${saved_game_exist1}" id="saved_game_exist1"/>
                <input type="hidden" name="new_continue_game" id="new_continue_game" value="${new_continue_game != null ? new_continue_game : 'new'}" />
            </div>

            <div id="ground" style="flex-grow: 1;">
                <div class="case_group">
                     <div class="row">
                        <div class="col-xs-offset-1 col-xs-2 une-case form-control boderLeft boderTop" name="c11" id="c11" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderTop"  name="c12" id="c12" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderTop"  name="c13" id="c13" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderTop"  name="c14" id="c14" maxlength="1"></div>
                        <div class="col-xs-2 une-case col-push-1 form-control boderRight boderTop"  name="c15" id="c15" maxlength="1"></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-offset-1 col-xs-2 une-case form-control boderLeft"  name="c21" id="c21" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c22" id="c22" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c23" id="c23" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c24" id="c24" maxlength="1"></div>
                        <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="c25" id="c25" maxlength="1"></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-offset-1 col-xs-2 une-case form-control boderLeft"  name="c31" id="c31" maxlength="1"></div>

                        <div class="col-xs-2 une-case form-control"  name="c32" id="c32" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c33" id="c33" maxlength="1" disabled></div>
                        <div class="col-xs-2 une-case form-control"  name="c34" id="c34" maxlength="1"></div>
                        <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="c35" id="c35" maxlength="1"></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-offset-1 col-xs-2 une-case form-control boderLeft"  name="c41" id="c41" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c42" id="c42" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c43" id="c43" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control"  name="c44" id="c44" maxlength="1"></div>
                        <div class="col-xs-2 une-case col-push-1 form-control boderRight"  name="c45" id="c45" maxlength="1"></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-offset-1 col-xs-2 une-case form-control boderLeft boderBottom"  name="c51" id="c51" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderBottom"  name="c52" id="c52" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderBottom"  name="c53" id="c53" maxlength="1"></div>
                        <div class="col-xs-2 une-case form-control boderBottom"  name="c54" id="c54" maxlength="1"></div>
                        <div class="col-xs-2 une-case col-push-1 form-control boderRight boderBottom" name="c55" id="c55" maxlength="1"></div>
                    </div>
                </div>
               
                <div class="btn-group-lg">
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
                        <input style="color:#fff;background-color:#d9534f;border-color:#d43f3a" class="btn btn-info" type="button" name="bx" id="bx" value="X"/>
                    </div>
                    
                </div>

            </div>
            
            <div style="flex-grow: 1;">
                <jsp:include page="/WEB-INF/jsp/footer.jsp"/>
            </div>
            <jsp:include page="/WEB-INF/jsp/footer_without_btns.jsp"/>
           
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