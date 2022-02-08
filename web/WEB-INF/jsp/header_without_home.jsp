<%-- 
    Document   : header_without_home
    Created on : 26 févr. 2021, 14:21:42
    Author     : leprince
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="row container-fluid" id="header1">
    <div style="display: flex; flex-direction: row;">
        <div style="flex-grow: 1;display: flex;justify-content: flex-start;align-items: center;">
            <a href="/"><img src="images/LogoSeul.jpg" style="width: 50px;height: 50px;border-radius: 50%;" /></a>
        </div>
        <div style="flex-grow: 2;display: flex;justify-content: center;align-items: center;">
            <span id="titre-a20">ArboTwenty</span>
        </div>
        <div style="flex-grow: 1;display: flex;justify-content: flex-end;align-items: center;">
            <c:choose>
                <c:when test="${ null == joueurConnecte}">
                    <a href="#" type="button" data-toggle="modal" data-target="#cnxModal" class="option_style" style="border: none;float: right;">
                        <i class="glyphicon glyphicon-log-in"></i>
                    </a>
                </c:when>
                <c:otherwise>
                    <a style="float:right;" href="logout"><i class="option_style glyphicon glyphicon-log-out"></i></a>
                </c:otherwise>
            </c:choose>
        </div>
    </div>
    <div style="display: flex; flex-direction: row;margin-top: 5px;">
        <div style="flex-grow: 1;display: flex;justify-content: flex-end;align-items: flex-end;">
            <c:choose>
                <c:when test="${ null != joueurConnecte }">
                    <span class="option_style">
                        <label id="player_name"><c:out value="${joueurConnecte.pseudo}"></c:out></label>
                    </span>
                </c:when>
            </c:choose>
        </div>
    </div>
    <div id="msgGen"></div>
    <input type="hidden" id="langue" name="langue" value="${lang}" />
</div>
