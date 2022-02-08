<%-- 
    Document   : modals
    Created on : 23 août 2021, 04:39:59
    Author     : leprince
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- Connection Modal -->
<div class="modal fade" id="cnxModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">x</button>
        <h4 class="modal-title">ArboTwenty</h4>
      </div>
      <div class="modal-body">
            <div class="col-xs-12" id="con_a20_div">
                <h3 id="lbl_con">Connectez-vous :</h3>
                <form id="frm_connection" class="container-fluid form-inline" method="POST" action="connection">
                    <div class="row">
                        <input class="form-control col-xs-12" type="text" placeholder="Nom du joueur" id="txt_login" name="txt_login" maxlength="8" required/>
                    </div>
                    <div class="row">
                        <input class="form-control col-xs-12" type="password" placeholder="Votre mot de passe" id="txt_pw" name="txt_pw" required/>
                    </div>
                    <div class="row">
                        <input class="form-control btn btn-primary col-xs-12 submit" type="submit" value="Valider" id="btn_val_con"/>
                    </div>
                </form>
                <a href="#" id="btn_ins">Inscrivez-vous ici</a>
            </div>
            <div class="col-xs-12 non_visibl" id="ins_a20_div">
                <h3 id="lbl_ins">Inscriver vous : </h3>
                <form id="frm_inscription" class="container-fluid form-inline" method="POST" action="inscription">
                    <div class="row">
                        <input class="form-control col-xs-12" type="text" placeholder="nom du joueur" id="txt_login2" name="txt_login2" maxlength="8" required/>
                     </div>
                    <div class="row">
                        <input class="form-control col-xs-12" type="email" placeholder="email" id="txt_email" name="txt_email" required/>
                    </div>
                    <div class="row">
                         <input class="form-control col-xs-12 pwd" type="password" placeholder="Votre mot de passe" id="txt_pw2" name="txt_pw2" required/><br/>
                    </div>
                    <div class="row">
                        <input class="form-control btn btn-primary col-xs-12 submit" type="submit" value="Valider" id="btn_val_ins"/>
                    </div>
                </form>
                <a href="#" id="btn_cnx">Connectez-vous ici</a>
            </div>

      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>


<!-- Terme of use Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">
                    <u>ArboTwenty General Terms Of Use</u>
                </h4>
                <div id="cmbLang2_div" class="d-visible" style="float: right">
                    <label id="lang2">Langue :</label>
                    <select id="cmbLang2" style="margin-left: 5px;font-size: 14px;">
                        <option>ANGLAIS</option>
                        <option>FRANÇAIS</option>
                    </select>
                </div>
                
            </div>
            <div class="modal-body" id="terms_modal">
                <h5>By cliicking on "Accept" Button below, you are agree of the following Terms Of Use :</h5>
                <ol>
                    <li> These “General Terms of Use” or “General Conditions” apply to the  ARBOTWENTY game;</li>
                    <li> Arbotwenty is a game which is the exclusive property of its publisher whose name is ARBOMERIC;</li>
                    <li> The terms of use must be acknowledged prior to accessing the Arbotwenty game;</li>
                    <li> Access to the game is free for the “Standard” category and paid for the “Premium” category;</li>
                    <li> The Standard category concerns grids placed on pages containing cookies, advertisements and other promotional messages;</li>
                    <li> The Premium category refers to access grids free of cookies, advertisements and other promotional messages;</li>
                    <li> The Premium category is also intended for players who wish to financially support to Arbomeric;</li>
                    <li> Arbomeric reserves the right to modify, at any time and without prior notification, these general terms. Each user connecting to the site is invited to regularly consult these general terms;</li>
                    <li> The Arbotwenty site, its general structure, as well as the embedded texts, graphics, images, sounds and videos, are the exclusive property of Arbomeric;</li>
                    <li> Arbomeric shall endeavor to keep the site accessible 24 hours a day. However, Arbomeric shall not be liable in the event of interruption or temporary inaccessibility to the site; </li>
                    <li> Arbomeric offers 2 types and 4 different levels of grids for Arbotwenty;</li>
                    <li> The types include: single-square grids and two-square grids. The levels include: Level 1 or Beginner; Level 2 or Intermediate; Level 3 or Advanced and Level 4 or Master;</li>
                    <li> A player accessing the Premium category shall submit to the obligation to pay the price for the chosen type and level of grid;</li>
                    <li> For any complaint, the player first agrees to contact ARBOMERIC, specifically at the following addresses:</li>
                    <li> The player and Arbomeric shall make every effort to resolve any litigation or dispute arising from the use of the Arbotwenty game;</li>
                    <li> The player accepts that they may not resort to any action beyond the rights provided for in article 15, unless the provisions of that article have been exhausted.</li>
                </ol>
            </div>
            <div class="modal-footer" id="gtu_footer">
                <i class="col-xm-6" id="gtu_question">Do you accept the above Terms Of Use ppp ? </i>

                <button id="gtu_btn" type="button" class="btn btn-primary col-xm-6" data-dismiss="modal">Accept</button>
            </div>
        </div>
    </div>
</div>


<!-- Save Game Modal 1 -->
<div class="modal fade" id="saveGameModal_1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ArboTwenty</h4>
      </div>
      <div class="modal-body">
            <div class="col-xs-12">
                <h3 class="lbl_save_game">Save Game :</h3>
                <p class="lbl_save_game_qst">Voulez-vous sauvegarder cette partie ?</p>
            </div>
      </div>
      <div class="modal-footer">
          <a href="#" class="btn btn-primary btn_yes" onclick="saveGame = true;saveTheGame();window.location = '/a20';" data-dismiss="modal">Yes</a>
          <a href="#" class="btn btn-danger btn_no" data-dismiss="modal" onclick="window.location = '/a20';">No</a>
          <a href="#" class="btn btn-default btn_cancel" data-dismiss="modal" onclick="$('#btn_play_pause').trigger('click');">Cancel</a>
      </div>
    </div>
  </div>
</div>

<!-- Save Game Modal -->
<div class="modal fade" id="saveGameModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ArboTwenty</h4>
      </div>
      <div class="modal-body">
            <div class="col-xs-12">
                <h3 class="lbl_save_game">Save Game :</h3>
                <p class="lbl_save_game_qst">Save this game ?</p>
            </div>
      </div>
      <div class="modal-footer">
          <a href="#" class="btn btn-primary btn_yes" onclick="saveGame = true;saveTheGame();window.location = 'menu';" data-dismiss="modal">Yes</a>
          <a href="#" class="btn btn-danger btn_no" data-dismiss="modal" onclick="window.location = 'menu';">No</a>
          <a href="#" class="btn btn-default btn_cancel" data-dismiss="modal" onclick="$('#btn_play_pause').trigger('click');">Cancel</a>
      </div>
    </div>
  </div>
</div>


<!-- Solver Modal -->
<div class="modal fade" id="solverModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ArboTwenty</h4>
      </div>
      <div class="modal-body">
            <div class="col-xs-12">
                <h3 id="lbl_solve_game">Solve the game :</h3>
                <p id="lbl_solve_game_qst">En consultant le solutionnaire vous acceptez que la partie est terminée.</p>
            </div>
      </div>
      <div class="modal-footer">
          <a href="#" class="btn btn-primary btn_yes" onclick="solveGame();" data-dismiss="modal">Yes</a>
          <a href="#" class="btn btn-default btn_cancel" data-dismiss="modal" onclick="$('#btn_play_pause').trigger('click');">Cancel</a>
      </div>
    </div>
  </div>
</div>
