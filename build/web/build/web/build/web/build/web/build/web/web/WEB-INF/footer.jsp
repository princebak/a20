<%-- 
    Document   : footer
    Created on : 7 janv. 2021, 03:46:06
    Author     : leprince
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="row container-fluid" id="footer">
    <a class="btn btn-danger col-xs-2" href="/a20">
        <!-- on doit telecharger le fichier font awesome... -->
        <i class="fa fa-refresh fa-spin"></i>Retour
    </a>
    <a class="btn btn-danger col-xs-2" href="/solo" >
        <!-- on doit telecharger le fichier font awesome... -->
        <i class="fa fa-refresh fa-spin"></i>Nouveau
    </a>

    <span class="col-xs-offset-1" id="chrono_cr"><label id="txt_c_cr">${txt_chrono_cr}</label> : <label id="mun">${mun}</label> : <label id="sec">00</label></span>
</div>
