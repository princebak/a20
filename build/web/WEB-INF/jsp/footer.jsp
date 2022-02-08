<%-- 
    Document   : footer
    Created on : 7 janv. 2021, 03:46:06
    Author     : leprince
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="icon-fonts/fontawesome-webfont.svg"/>
<div class="row container-fluid" id="footer">
    <a class="btn btn-danger" href="#" id="btn_return">
        <i class="glyphicon glyphicon-backward"></i>
    </a>
    <a class="btn btn-success" href="solo" id="btn_new">
        <i class="glyphicon glyphicon-repeat"></i>
    </a>
    <a class="btn btn-primary" href="#" id="btn_play_pause">
        <i class="glyphicon glyphicon-pause" id="icon_play_pause"></i>
    </a>
    <a class="btn btn-info" href="#" id="btn_solve">
        <i class="glyphicon glyphicon-ok-circle"></i>
    </a>

    <span id="chrono_cr" style="float: right;">
       <label style="display: none;" id="txt_c_cr">${txt_chrono_cr}</label>
        <c:if test="${txt_chrono_cr == 'Chrono'}">
           <img src="images/chronoOk.gif" style="display: inline-block;width: 25px;height: 25px;border-radius: 50%;"/>
        </c:if>
        <c:if test="${txt_chrono_cr == 'Compte à rebours' || txt_chrono_cr == 'countdown'}">
            <img src="images/cmptrbrs.gif" style="display: inline-block;width: 25px;height: 25px;border-radius: 50%;"/>
        </c:if>

        : <label id="mun" name="mun">${mun}</label> : <label id="sec" name="sec">${sec}</label>
    </span>
</div>