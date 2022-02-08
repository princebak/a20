<%-- 
    Document   : header1
    Created on : 7 janv. 2021, 03:16:47
    Author     : leprince
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="row container-fluid" id="header1">
    <div style="display: flex; flex-direction: row;">
        <div style="flex-grow: 1;display: flex;justify-content: flex-start;align-items: center;">
            <a href="https://arbotwenty.net"><img src="images/LogoSeul.jpg" style="width: 50px;height: 50px;border-radius: 50%;" /></a>
            <a href="https://arbotwenty.net" style="margin-left: 4px;">
                <i class="option_style glyphicon glyphicon-home"></i>
            </a>
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
        <div style="flex-grow: 1;display: flex;justify-content: flex-start;align-items: center;">
            <c:choose>
                <c:when test="${ null != niv }">
                   <span id="niv">Niveau : </span><i id="numNiv">${niv}</i>
                </c:when>
            </c:choose>
        </div>
        <div style="flex-grow: 1;display: flex;justify-content: flex-end;align-items: center;">
            <c:choose>
                <c:when test="${ null != joueurConnecte }">
                    <span class="option_style">
                        <label id="player_name"><c:out value="${joueurConnecte.pseudo}"></c:out></label>
                    </span>
                </c:when>
            </c:choose>
            <c:choose>
                <c:when test="${ null != lang and null != nmbrCarre }">
                    <input type="hidden" id="langue" value="${lang}" />
                    <input type="hidden" id="nmbrDeCarre" value="${nmbrCarre}" />
                </c:when>
            </c:choose>
        </div>
    </div>
    <div id="msgGen"></div>
</div>