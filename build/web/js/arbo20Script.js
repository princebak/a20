/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Variables Globales*/
var chiffreCentral = Math.floor(Math.random() * (9 - 4 + 1) + 4);
var chiffreCentral2C = Math.floor(Math.random() * (7 - 4 + 1) + 4);
var chiffreCentralA = 0;
var chiffreCentralB = 0;
var leNiveau = 1;
var chronoEcroule = false;
var deCompter = true;
var Compter = true;
var gameEnd = false;
var gameIsSolved = false;
var cases = {
    1: "c11", 2: "c12", 3: "c13", 4: "c14", 5: "c15", 6: "c21", 7: "c22", 8: "c23", 9: "c24", 10: "c25",
    11: "c31", 12: "c32", 13: "c33", 14: "c34", 15: "c35", 16: "c41", 17: "c42", 18: "c43", 19: "c44", 20: "c45",
    21: "c51", 22: "c52", 23: "c53", 24: "c54", 25: "c55"
};
var cases2 = {
    1: "a11", 2: "a12", 3: "a13", 4: "a14", 5: "a15", 6: "a21", 7: "a22", 8: "a23", 9: "a24", 10: "a25",
    11: "a31", 12: "a32", 13: "a33", 14: "a34", 15: "a35", 16: "a41", 17: "a42", 18: "a43", 19: "a44", 20: "a45",
    21: "a51", 22: "a52", 23: "a53", 24: "a54", 25: "a55",
    26: "b11", 27: "b12", 28: "b13", 29: "b14", 30: "b15", 31: "b21", 32: "b22", 33: "b23", 34: "b24", 35: "b25",
    36: "b31", 37: "b32", 38: "b33", 39: "b34", 40: "b35", 41: "b41", 42: "b42", 43: "b43", 44: "b44", 45: "b45",
    46: "b51", 47: "b52", 48: "b53", 49: "b54", 50: "b55"
};
var occur = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
};
var occur1 = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
};
var occur2 = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
};

/*Gestion du click sur un bouton*/
// declaration de la variable qui contientdra l'id de la case active
var curentTxtId = "";
var valActC = "";
var valActA = "";
var valActB = "";
var valEntree = "";
var colonneRemplie = false;
var ligneRemplie = false;
//click sur le bouton 'X'
$("#bx").click(function (e) {
    if (curentTxtId !== "") {
        if ($("#" + curentTxtId).attr("disabled") !== "disabled") {
            if (curentTxtId !== "b11" && curentTxtId !== "b12" && curentTxtId !== "b21" && curentTxtId !== "b22") {
                gererBtnX();
            } else {
                gererBtnX2();
            }
        }
    }
});
// click sur un bouton etiqueté par un chiffre
$("input[type=button]:not(input[id=bx])").click(function (e) {
    if (curentTxtId !== "" || $("#" + curentTxtId).attr("disabled") !== "disabled") {
        valEntree = $(this).val();
        if (curentTxtId !== "b11" && curentTxtId !== "b12" && curentTxtId !== "b21" && curentTxtId !== "b22") {
            validValue1();
        } else {
            validValue2();
        }
    }
//$("#" + curentTxtId).trigger("click");
});


// initialisation du Id actuelle
function initCurentId(idact) {
    curentTxtId = idact;
}

// initialisation valeur actuelle
function initValActu() {
    var p = curentTxtId.substring(0, 1);
    if (p === "c") {
        valActC = $("#" + curentTxtId).text();
    } else if (p === "a") {
        valActA = $("#" + curentTxtId).text();
    } else if (p === "b") {
        valActB = $("#" + curentTxtId).text();
    }
}

$("#lbl_chro").click(function () {
    $("#cmbMun").attr("disabled", "disabled");
    $("#txt_chrono_cr").val("Chrono");
});
$("#lbl_cpte_rb").click(function () {
    $("#rd-ctp-rebours").attr("checked", "checked");
    $("#cmbMun").removeAttr("disabled");
    $("#cmbMun").focus();
    checkComboRadio();
});
function checkComboRadio() {
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if($("#rd-ctp-rebours").attr("checked") === "checked"){
        if (langue == "FRANCAIS" || langue == "FRENCH") {
            $("#txt_chrono_cr").val("Compte à rebours");
        } else if (langue == "ANGLAIS" || langue == "ENGLISH") {
            $("#txt_chrono_cr").val("countdown");
        }
    }
  
}
function checkConnectedPlayer( callBack ) {
    if("" != $("#player_name").text() && undefined != $("#player_name").text() && null != $("#player_name").text()){
        if( callBack != null ){
           callBack();
        }
    }else{
       // e.preventDefault();
        showLoginPleaseMsg();
    }
}
function showLoginPleaseMsg(){
    
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if (langue == "FRANCAIS" || langue == "FRENCH") {
        afficherMsg("Connectez-vous d'abord, S.V.P!", "", "");
    } else{
        afficherMsg("Login first, please!", "", "");
    }
}

//Verification de la valeur saisie qui doit etre un chiffre entre 0 et 9,sauf pour les
//cases de jointures pour le terrain à 2 carrés

function validValue1() {
    var premiereLettre = curentTxtId.substring(0, 1);
    if (premiereLettre === "c") {
        traiterSaisie(chiffreCentral);
    } else {
        if (premiereLettre === "a") {
            chiffreCentralA = $("#a33").text();
            traiterSaisie(chiffreCentralA);
        } else if (premiereLettre === "b") {
            chiffreCentralB = $("#b33").text();
            traiterSaisie(chiffreCentralB);
        }
    }
}
//fonction pour traiter la valeur saisie en generale
function traiterSaisie(chifCentral) {
    var valAct;
    var p = curentTxtId.substring(0, 1);
    if (p === "c") {
        valAct = valActC;
    } else if (p === "a") {
        valAct = valActA;
    } else if (p === "b") {
        valAct = valActB;
    }
    if (valEntree === chifCentral + "") {
        lang = $("#langue").val();
        if (lang == "ANGLAIS" || lang == "ENGLISH") {
            afficherMsg("The number", valEntree, "is already in the central box. It must be unique.");
        } else if (lang == "FRANCAIS" || lang == "FRENCH") {
            afficherMsg("Le chiffre", valEntree, "est déjà dans la case centrale et doit être unique.");
        }
        valEntree = "";
        $("#" + curentTxtId).text("");
        $("#" + curentTxtId).trigger("change");
        initValActu();
        modifCasesLiCoNonRemplie(curentTxtId);
        majCouleurCJ();
    } else if (verifNombrOccurMax3(parseInt(valEntree)) === true) {//si le nombre d'occurences de la valeur du btn clické est = 3
        if (valAct !== valEntree) {
            $("#" + curentTxtId).text("");
            $("#" + curentTxtId).trigger("change");
            initValActu();
            //   modifLigColInflu(curentTxtId);
            modifCasesLiCoNonRemplie(curentTxtId);
            majCouleurCJ();
            lang = $("#langue").val();
            if (lang == "ANGLAIS" || lang == "ENGLISH") {
                afficherMsg("The number", valEntree, "occured already 3 times. Please change it!");
            } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                afficherMsg("Le chiffre", valEntree, "a déjà 3 occurrences. Changez de chiffre svp!");
            }
        }
        valEntree = "";
    } else {//si tout est bon avec la valeur entrée par la souris(en clickant sur un de bouton chiffré),
        //sa saisie est acceptée et on incremente le nombre de ses occurences

        if (verifSomLigCol20(curentTxtId, valEntree) === true) {
            $("#" + curentTxtId).text(valEntree);
            if (ligTotRemplie(curentTxtId) === true) {
                modifLigne(curentTxtId);
            }
            if (colTotRemplie(curentTxtId) === true) {
                modifColonne(curentTxtId);
            }
            majCouleurCJ();
            changerCouleurCaseModifiable();
            $("#" + curentTxtId).trigger("change");
            initValActu();
        } else {
            if (somLigne(curentTxtId, valEntree) > 20 || somColonne(curentTxtId, valEntree) > 20 ||
                    (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) < 20) ||
                    (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) < 20)) {
                if (valAct !== valEntree) {
                    $("#" + curentTxtId).text("");
                    $("#" + curentTxtId).trigger("change");
                    initValActu();
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    lang = $("#langue").val();
                    if (lang == "ANGLAIS" || lang == "ENGLISH") {
                        afficherMsg("The number", valEntree, "is not accepted in this box because the total on the line or the column is different from 20");
                    } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                        afficherMsg("Le chiffre", valEntree, "n'est pas accepté dans cette case car la somme sur sa ligne ou sur sa colonne n'est pas égale à 20");
                    }
                }
            } else if (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) === 20) {
                $("#" + curentTxtId).text(valEntree);
                modifLigne(curentTxtId);
                majCouleurCJ();
                changerCouleurCaseModifiable();
                $("#" + curentTxtId).trigger("change");
                initValActu();
            } else if (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) === 20) {
                $("#" + curentTxtId).text(valEntree);
                modifColonne(curentTxtId);
                majCouleurCJ();
                changerCouleurCaseModifiable();
                $("#" + curentTxtId).trigger("change");
                initValActu();
            } else {
                $("#" + curentTxtId).text(valEntree);
                $("#" + curentTxtId).trigger("change");
                initValActu();
            }
        }

        valEntree = "";
    }
}
function changerCouleurCaseModifiable() {
    if ($("#" + curentTxtId).css("background-color") + "" === "rgb(180, 255, 180)") {
        $("#" + curentTxtId).css("background-color", "rgb(220,255,220)");
    }
}
// pour les cases de jointures pour le terrain à 2 carrés
function validValue2() {

    var idAct = curentTxtId;
    chiffreCentralB = $("#b33").text();
    carreBOk = traiterSaisieCJ(chiffreCentralB);
    if (carreBOk === true) {

        chiffreCentralA = $("#a33").text();
        switch (idAct) {
            case "b11":
                curentTxtId = "a44";
                carreAOk = traiterSaisieCJ(chiffreCentralA);
                break;
            case "b12":
                curentTxtId = "a45";
                carreAOk = traiterSaisieCJ(chiffreCentralA);
                break;
            case "b21":
                curentTxtId = "a54";
                carreAOk = traiterSaisieCJ(chiffreCentralA);
                break;
            case "b22":
                curentTxtId = "a55";
                carreAOk = traiterSaisieCJ(chiffreCentralA);
                break;
            default:
                break;
        }
        if (carreAOk === true) {

            $("#" + curentTxtId).text(valEntree); //case sur le carré a
            $("#" + curentTxtId).trigger("change");
            initValActu();
            if (ligTotRemplie(curentTxtId) === true) {
                modifLigne(curentTxtId);
            }
            if (colTotRemplie(curentTxtId) === true) {
                modifColonne(curentTxtId);
            }
            changerCouleurCaseModifiable();
            majCouleurCJ();
            curentTxtId = idAct;
            $("#" + curentTxtId).text(valEntree); //case sur le carré b
            $("#" + curentTxtId).trigger("change");
            initValActu();
            if (ligTotRemplie(curentTxtId) === true) {
                modifLigne(curentTxtId);
            }
            if (colTotRemplie(curentTxtId) === true) {
                modifColonne(curentTxtId);
            }
            changerCouleurCaseModifiable();
        } else if (carreAOk === false) {
            $("#" + curentTxtId).text(""); //reset sur carré a
            $("#" + curentTxtId).trigger("change");
            initValActu();

            modifCasesLiCoNonRemplie(curentTxtId);
            majCouleurCJ();
            curentTxtId = idAct;
            $("#" + curentTxtId).text(""); //reset sur carré b
            $("#" + curentTxtId).trigger("change");
            initValActu();

            modifCasesLiCoNonRemplie(curentTxtId);
        }
    } else if (carreBOk === false) {

        $("#" + curentTxtId).text("");
        $("#" + curentTxtId).trigger("change");
        initValActu();

        modifCasesLiCoNonRemplie(curentTxtId);
        switch (idAct) {
            case "b11":
                curentTxtId = "a44";
                $("#" + curentTxtId).text("");
                $("#" + curentTxtId).trigger("change");
                initValActu();
                modifCasesLiCoNonRemplie(curentTxtId);
                majCouleurCJ();
                break;
            case "b12":
                curentTxtId = "a45";
                $("#" + curentTxtId).text("");
                $("#" + curentTxtId).trigger("change");
                initValActu();
                modifCasesLiCoNonRemplie(curentTxtId);
                majCouleurCJ();
                break;
            case "b21":
                curentTxtId = "a54";
                $("#" + curentTxtId).text("");
                $("#" + curentTxtId).trigger("change");
                initValActu();
                modifCasesLiCoNonRemplie(curentTxtId);
                majCouleurCJ();
                break;
            case "b22":
                curentTxtId = "a55";
                $("#" + curentTxtId).text("");
                $("#" + curentTxtId).trigger("change");
                initValActu();
                modifCasesLiCoNonRemplie(curentTxtId);
                majCouleurCJ();
                break;
            default:
                break;
        }
    }
    curentTxtId = idAct;
    valEntree = "";
}

function gererBtnX() {//cette methode est declenché par le bouton 'X'
    $("#" + curentTxtId).text("");
    $("#" + curentTxtId).trigger("change");
    initValActu();
    modifCasesLiCoNonRemplie(curentTxtId); //reset Ligne/Colonne
    majCouleurCJ();  
}
function gererBtnX2() {
    var idAct = curentTxtId;
    gererBtnX(idAct);
    switch (idAct) {
        case "b11":
            curentTxtId = "a44";
            gererBtnX(curentTxtId);
            curentTxtId = idAct;
            break;
        case "b12":
            curentTxtId = "a45";
            gererBtnX(curentTxtId);
            curentTxtId = idAct;
            break;
        case "b21":
            curentTxtId = "a54";
            gererBtnX(curentTxtId);
            curentTxtId = idAct;
            break;
        case "b22":
            curentTxtId = "a55";
            gererBtnX(curentTxtId);
            curentTxtId = idAct;
            break;
        default:
            break;
    }
}
//fonction pour traiter la valeur saisie pour case de jointure
function traiterSaisieCJ(chifCentral) {
    var valAct;
    var p = curentTxtId.substring(0, 1);
    if (p === "c") {
        valAct = valActC;
    } else if (p === "a") {
        valAct = valActA;
    } else if (p === "b") {
        valAct = valActB;
    }
    if (valEntree === chifCentral + "") {
        lang = $("#langue").val();
        if (lang == "ANGLAIS" || lang == "ENGLISH") {
            afficherMsg("The number", valEntree, "is already in the central box. It must be unique.");
        } else if (lang == "FRANCAIS" || lang == "FRENCH") {
            afficherMsg("Le chiffre", valEntree, "est déjà dans la case centrale et doit être unique.");
        }
    } else if (verifNombrOccurMax3(parseInt(valEntree)) === true) {//si le nombre d'occurences de la valeur du btn clické est = 3
        if (valAct !== valEntree) {
            lang = $("#langue").val();
            if (lang == "ANGLAIS" || lang == "ENGLISH") {
                afficherMsg("The number", valEntree, "occured already 3 times on one of the square. Please change it.");
            } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                afficherMsg("Le chiffre", valEntree, "a déjà 3 occurences sur l'un de carré. Changez de chiffre s'il vous plait!");
            }
            return false;
        }
    } else {//si tout est bon
        if (verifSomLigCol20(curentTxtId, valEntree) === true) {
            return true;
        } else {
            if (somLigne(curentTxtId, valEntree) > 20 || somColonne(curentTxtId, valEntree) > 20 ||
                    (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) < 20) ||
                    (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) < 20)) {

                if (valAct !== valEntree) {
                    lang = $("#langue").val();
                    if (lang == "ANGLAIS" || lang == "ENGLISH") {
                        afficherMsg("The number", valEntree, "is not accepted in this box because the total on the line or the column of one of the square is not equal to 20.");
                    } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                        afficherMsg("Le chiffre", valEntree, "n'est pas accepté dans cette case car la somme sur sa ligne ou sur sa colonne dans l'un des carrés n'est pas égale à 20.")
                    }
                    return false;
                }

            }
            else {
                return true;
            }
//            else if (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) === 20 ||
//                    colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) === 20) {
//                return true;
//            }
        }
    }
}

$(".une-case").click(function () {
    var curId = $(this).attr("id");
    initCurentId(curId);
    if ($("#" + curentTxtId).attr("disabled") !== "disabled") {
        if( curId != "a44" && curId != "a45" && curId != "a54" && curId != "a55" ){
            $("#" + curentTxtId).addClass("une-case-selected");
            $(".une-case:not(" + "#" + curentTxtId + ")").removeClass("une-case-selected");
        }

        initValActu();
    } else {
        curentTxtId = "";
    }
   
    switch (curId) {
        case "b11":
            var curIdOld = curId;
            $("#a44").trigger("click");
            curentTxtId = curIdOld;
            break;
        case "b12":
            var curIdOld = curId;
            $("#a45").trigger("click");
            curentTxtId = curIdOld;
            break;
        case "b21":
            var curIdOld = curId;
            $("#a54").trigger("click");
            curentTxtId = curIdOld;
            break;
        case "b22":
            var curIdOld = curId;
            $("#a55").trigger("click");
            curentTxtId = curIdOld;
            break;
        default:
            break;
    }
   
});
/*test de la somme en ligne ou colonne apres changement de valeur*/
$(".une-case").change(function (e) {
    var p = curentTxtId.substring(0, 1);
    if (p === "c") {
        if (valActC !== "") {
            decrementerOccur(parseInt(valActC));
            valActC = $("#" + curentTxtId).text();
            if (valActC !== "") {
                incrementerOccur(parseInt(valActC));
            }

        } else {
            valActC = $("#" + curentTxtId).text();
            if (valActC !== "") {
                incrementerOccur(parseInt(valActC));
            }
        }

    } else if (p === "a") {
        if (valActA !== "") {
            decrementerOccur(parseInt(valActA));
            valActA = $("#" + curentTxtId).text();
            if (valActA !== "") {
                incrementerOccur(parseInt(valActA));
            }
        } else {
            valActA = $("#" + curentTxtId).text();
            if (valActA !== "") {
                incrementerOccur(parseInt(valActA));
            }
        }
    } else if (p === "b") {
        if (valActB !== "") {
            decrementerOccur(parseInt(valActB));
            valActB = $("#" + curentTxtId).text();
            if (valActB !== "") {
                incrementerOccur(parseInt(valActB));
            }
        } else {
            valActB = $("#" + curentTxtId).text();
            if (valActB !== "") {
                incrementerOccur(parseInt(valActB));
            }
        }
    }
});
//fonction pour gagner
function gagnerA20() {
    var cent = 0;
    var deux_cent = 0;
    var premiereLettre = curentTxtId.substring(0, 1);
    if(gameIsSolved == false){
        if (chronoEcroule === true) {
        $("#msgDiv").css("visibility", "visible");
        $("#msglbl1").css("animation", "redBlinkingText 1.2s infinite");
        $("#msglbl2").css("animation", "redBlinkingText 1.2s infinite");
        lang = $("#langue").val();
        if (lang == "ANGLAIS" || lang == "ENGLISH") {
            gameEnd = true;
            $("#msglbl1").text("Sorry, countdown collapsed. You lost !!");
            $("#msglbl2").text("Sorry, countdown collapsed. You lost !!");

        } else if (lang == "FRANCAIS" || lang == "FRENCH") {
            gameEnd = true;
            $("#msglbl1").text("Désolé, le compte à rebours s'est ecoulé. Vous avez perdu !!");

            $("#msglbl2").text("Désolé, le compte à rebours s'est ecoulé. Vous avez perdu !!");
        }
        desactiverTout();
    } else {
        if (premiereLettre === "c") {
            $(".une-case").each(function (indice) {
                cent = cent + parseInt($(this).text());
                if (cent === 100) {
                    deCompter = false;
                    Compter = false;
                    $("#msgDiv").css("visibility", "visible");
                    $("#msglbl1").css("animation", "greenBlinkingText 1.2s infinite");
                    lang = $("#langue").val();
                    if (lang == "ANGLAIS" || lang == "ENGLISH") {
                        gameEnd = true;
                        $("#msglbl1").text("CONGRATULATION, you win !!");
                    } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                        gameEnd = true;
                        $("#msglbl1").text("BRAVO, vous avez gagné !!");
                    }
                    desactiverTout();
                }
            });
        } else {
            $(".une-case").each(function (indice) {
                deux_cent = deux_cent + parseInt($(this).text());
                if (deux_cent === 200) {
                    deCompter = false;
                    Compter = false;
                    $("#msgDiv").css("visibility", "visible");
                    $("#msglbl2").css("animation", "greenBlinkingText 1.2s infinite");
                    lang = $("#langue").val();
                    if (lang == "ANGLAIS" || lang == "ENGLISH") {
                        gameEnd = true;
                        $("#msglbl2").text("CONGRATULATION,you win !!");
                    } else if (lang == "FRANCAIS" || lang == "FRENCH") {
                        gameEnd = true;
                        $("#msglbl2").text("BRAVO,vous avez gagné !!");

                    }
                    desactiverTout();
                }
            });
        }
    }
    }
}
// fonction pour vider les cases qui dont la ligne ou colonne n'est pas remplie
function modifCasesLiCoNonRemplie(casecourante) {
    resetColonne(casecourante);
    resetLigne(casecourante);
    $("#" + casecourante).css("background-color", "rgb(255, 255, 255)");
}

function modifLigColInflu(idCase) {

    var idAct = idCase;
    switch (idAct) {
        case "b11":
            curentTxtId = "a44";
            $("#a44").val($("#b11").val());
            break;
        case "b12":
            curentTxtId = "a45";
            $("#a45").val($("#b12").val());
            break;
        case "b21":
            curentTxtId = "a54";
            $("#a54").val($("#b21").val());
            break;
        case "b22":
            curentTxtId = "a55";
            $("#a55").val($("#b22").val());
            break;
        default:
            break;
    }
    curentTxtId = idAct;
}

/* Algorithme de remplissage
 * va se lancer au chargement de la page
 * */
// onload
$(function (e) {
    $("#apropo_a20_div").slideUp("fast");
    $("#regle_a20_div").slideUp("fast");
    $("#cons_dev_a20_div").slideUp("fast");
    $("#con_ins_a20_div").slideUp("fast");
    cacheMsgGen();
    translateGround();
    
    setInterval(majCompteARebours, 1000);
});

/*Mes Fonctions*/
var alreadyConnected = false;
function launchHomeMsg() {
    //if ($('#connected').val() == '' || $('#connected').val() == 'false') {
    if ($('#connected').val() != 'true') {
        launchModal("#myModal");
    } else if ($('#registered').val() == 'true') {
        if (lang == 'ANGLAIS' || lang == 'ENGLISH') {
            afficherMsg('Congratulation', $('#registered_name').val(), 'your registration is successful, login to enjoy your advantages.', false);

        } else if (lang == 'FRANCAIS' || lang == 'FRENCH') {
            afficherMsg('Felicitation', $('#registered_name').val(), 'votre enregistrement a reussi, connectez-vous pour jouir de vos avantages.', false);
        }
    } 
//    else if ($('#connected').val() == 'true') {
//        if (alreadyConnected == false) {
//            if (lang == 'ANGLAIS' || lang == 'ENGLISH') {
//                afficherMsg('Congratulation', $('#player_name').val(), 'you have logged in.', false);
//            } else if (lang == 'FRANCAIS' || lang == 'FRENCH') {
//                afficherMsg('Felicitation', $('#player_name').val(), 'vous etes connecté.', false);
//            }
//            alreadyConnected == true;
//        }
//    }
}

function launchModal(modalId) {
    $(modalId).modal(
            {
                backdrop: 'static',
                keyboard: false
            }
        );
}

$("#terms-ou-link").click(function () {
    $("#cmbLang2_div").removeClass("d-visible");
    $("#cmbLang2_div").addClass("d-invisible");
    launchModal("#myModal");
});
//Fonction pour verifier le nombre des occurences d'un chiffre

function verifNombrOccurMax3(chif) {
    var premiereLettre = curentTxtId.substring(0, 1);
    if (premiereLettre === "b") {
        if (occur2[chif] < 3) {
            return false;
        } else {
            // renvoie true lors que le nombre maximale des occurence est atteind
            return true;
        }
    } else if (premiereLettre === "a") {
        if (occur1[chif] < 3) {
            return false;
        } else {
            // renvoie true lors que le nombre maximale des occurence est atteind
            return true;
        }
    } else if (premiereLettre === "c") {
        if (occur[chif] < 3) {
            return false;
        } else {
            // renvoie true lors que le nombre maximale des occurence est atteind
            return true;
        }
    }
}

// Increment/Decrement des occurences
function incrementerOccur(chif) {
    var premiereLettre = curentTxtId.substring(0, 1);
    if (premiereLettre === "b") {
        occur2[chif] = occur2[chif] + 1;
    } else if (premiereLettre === "a") {
        occur1[chif] = occur1[chif] + 1;
    } else if (premiereLettre === "c") {
        occur[chif] = occur[chif] + 1;
    }
}
function decrementerOccur(chif) {
    var premiereLettre = curentTxtId.substring(0, 1);
    if (premiereLettre === "b") {
        occur2[chif] = occur2[chif] - 1;
    } else if (premiereLettre === "a") {
        occur1[chif] = occur1[chif] - 1;
    } else if (premiereLettre === "c") {
        occur[chif] = occur[chif] - 1;
    }
}

// Mis à jour du compte à rebours

function majCompteARebours() {
    //animA20();
    if ($("#txt_c_cr").text() === "Chrono") {
        gagnerA20();
        if (Compter === true) {
            if ($("#sec").text() === "59") {
                $("#sec").text("00");
                var rs = "" + (parseInt($("#mun").text()) + 1);
                if (rs.length == 1) {
                    $("#mun").text("0" + rs);
                } else {
                    $("#mun").text(rs);
                }
            } else {
                var rs = "" + (parseInt($("#sec").text()) + 1);
                if (rs.length == 1) {
                    $("#sec").text("0" + rs);
                } else {
                    $("#sec").text(rs);
                }
            }
        }

    } else {
        if ((parseInt($("#mun").text()) + parseInt($("#sec").text())) > 0) {
            gagnerA20();
            if (deCompter === true) {
                if ($("#sec").text() === "00") {
                    $("#sec").text("59");
                    var rs = "" + (parseInt($("#mun").text()) - 1);
                    if (rs.length == 1) {
                        $("#mun").text("0" + rs);
                    } else {
                        $("#mun").text(rs);
                    }
                } else {
                    var rs = "" + (parseInt($("#sec").text()) - 1);
                    if (rs.length == 1) {
                        $("#sec").text("0" + rs);
                    } else {
                        $("#sec").text(rs);
                    }
                }
            }

        } else {
            chronoEcroule = true;
            gagnerA20();
            chronoEcroule = false;
        }
    }
}
//function animA20() {
//    if ($("#titre-a20").css("color") + "" === "rgb(217, 83, 79)") {
//        $("#titre-a20").css("color", "rgb(92, 184, 92");
//    } else if ($("#titre-a20").css("color") + "" === "rgb(92, 184, 92)") {
//        $("#titre-a20").css("color", "rgb(51, 122, 183)");
//    } else if ($("#titre-a20").css("color") + "" === "rgb(51, 122, 183)") {
//        $("#titre-a20").css("color", "rgb(217, 83, 79)");
//    }
//}

// Fonction pour verifier si un element existe deja dans un tableau
function trouverIndice(indice, tableau) {
    return tableau.some(function (i) {
        return i === indice;
    });
}
var model;
//Nouvelle fonction de remplissage
function remplirArbo() {
    activerTout();
    resetOccurs();
    var idModel;
    
    if($("#saved_game_exist1").val() === "true" && $("#new_continue_game").val() === "continue"){
        for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(saved_game[i]);
                if(i === 12){
                    chiffreCentral = saved_game[i];
                }
            }
        $("div[id^=c]").each(function (indice) {
        var thisId = $(this).attr("id");
        var thisVal = $(this).text();
        if (thisVal !== "") {
            curentTxtId = thisId;
            incrementerOccur(parseInt(thisVal));
            $(this).attr("disabled", true);
            if (ligTotRemplie(thisId) === true) {
                modifLigne(thisId);
            }
            if (colTotRemplie(thisId) === true) {
                modifColonne(thisId);
            }
        }
    });
    }
    else{
        switch (chiffreCentral) {
        case 4:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles4[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        case 5:
            idModel = Math.floor(Math.random() * (16 - 1 + 1) + 1);
            model = modeles5[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        case 6:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles6[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        case 7:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles7[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        case 8:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles8[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        case 9:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles9[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).text(model[i]);
            }
            viderCases();
            break;
        default:
            break;
        }
   }
  
   
}
function remplirArbo2() {
    activerTout();
    resetOccurs();
    var idModel;
    
     if($("#saved_game_exist2").val() === "true"  && $("#new_continue_game").val() === "continue"){
            $(".une-case").each(function (indice) {
                $(this).text(saved_game[indice]);
                if(indice === 12){
                        chiffreCentralA = saved_game[indice];
                    }
                if(indice === 37){
                        chiffreCentralB = saved_game[indice];
                    }
            });
               $(".une-case").each(function (indice) {
            var thisId = $(this).attr("id");
            var thisVal = $(this).text();
            if (thisVal !== "") {
                curentTxtId = thisId;
                incrementerOccur(parseInt(thisVal));
                $(this).attr("disabled", "true");
                //modifLigColInflu($(this).attr("id"));
                if (ligTotRemplie(thisId) === true) {
                    modifLigne(thisId);
                }
                if (colTotRemplie(thisId) === true) {
                    modifColonne(thisId);
                }
            }
        });
        majCouleurCJ();
    }else{
        
        switch (chiffreCentral2C) {
            case 4:
                idModel = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                model = modeles2Carres4[idModel];
                $(".une-case").each(function (indice) {
                    $(this).text(model[indice]);
                });
                viderCases2();
                break;
            case 5:
                idModel = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                model = modeles2Carres5[idModel];
                $(".une-case").each(function (indice) {
                    $(this).text(model[indice]);
                });
                viderCases2();
                break;
            case 6:
                idModel = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                model = modeles2Carres6[idModel];
                $(".une-case").each(function (indice) {
                    $(this).text(model[indice]);
                });
                viderCases2();
                break;
            case 7:
                idModel = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                model = modeles2Carres7[idModel];
                $(".une-case").each(function (indice) {
                    $(this).text(model[indice]);
                });
                viderCases2();
                break;
            default:
                break;
        }

    }
    
}
function solveGame(){
    gameIsSolved = true;
    if(model.length == 25){
        for (var i = 0; i < 25; i++) {
            $("#" + cases[i + 1]).text(model[i]);
        }
    }else if(model.length == 50){
        $(".une-case").each(function (indice) {
            $(this).text(model[indice]);
        });
    }
    desactiverTout();
     deCompter = false;
     Compter = false;
     gameEnd = true;
}
$("#btn_solve").click(function (e) {
    if(gameEnd == false){
        e.preventDefault();
        $('#btn_play_pause').trigger('click');
        launchModal( "#solverModal" );
    }
});
function viderCases() {
    //Variables
    var niveau = /*parseInt(*/$("#numNiv").text()/*)*/;
    var casesDejaVidees = [0, 13]; // zero nous permet d'entrer dans la deuxieme boocle while et 13 et le case centrale à ne pas vider
    var indice = 0;
    var casesAVider;
    //On fixe le nombre de cases à vider par rapport au niveau
    if (niveau === "APPRENTISSAGE" || niveau === "BEGINNER") {
        casesAVider = 7;
    } else if (niveau === "MOYEN" || niveau === "INTERMEDIATE") {
        casesAVider = 9;
    } else if (niveau === "AVANCE" || niveau === "ADVANCED") {
        casesAVider = 11;
    } else if (niveau === "MAITRISE" || niveau === "MASTER") {
        casesAVider = 12;
    } else {
        casesAVider = 7;
    }
    // on tourne dans la loop jusqu'à ce que le nombre de cases à vider est 0
    while (casesAVider > 0) {

        var indiceTrouve = trouverIndice(indice, casesDejaVidees);
        while (indiceTrouve === true) {
            indice = Math.floor(Math.random() * (25 - 1 + 1) + 1);
            indiceTrouve = trouverIndice(indice, casesDejaVidees);
        }

        var idCaseNonVidee = cases[indice]; // on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee).text("");
        casesDejaVidees.push(indice); // on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--; // on decremente le nombre des cases à vider pour finalement quitter la loop
    }
    $("div[id^=c]").each(function (indice) {
        var thisId = $(this).attr("id");
        var thisVal = $(this).text();
        if (thisVal !== "") {
            curentTxtId = thisId;
            incrementerOccur(parseInt(thisVal));
            $(this).attr("disabled", true);
            if (ligTotRemplie(thisId) === true) {
                modifLigne(thisId);
            }
            if (colTotRemplie(thisId) === true) {
                modifColonne(thisId);
            }
        }
    });
}
function viderCases2() {
    //Variables
    var niveau = /*parseInt(*/$("#numNiv").text()/*)*/;
    var casesDejaVideesCaseAv = [0, 38]; // zero nous permet d'entrer dans la deuxieme boocle while et; 13 et 38 sont des case centralles à ne pas vider
    var indiceCaseAv = 0;
    var casesDejaVideesCaseAr = [0, 13]; // zero nous permet d'entrer dans la deuxieme boocle while et; 13 et 38 sont des case centralles à ne pas vider
    var indiceCaseAr = 0;
    var casesAVider;
    /* on vide carré arriere (à gauche)*/
    //On fixe le nombre de cases à vider par rapport au niveau
    initCasesAVider();
    // on tourne dans la loop jusqu'à ce que le nombre de cases à vider est 0
    while (casesAVider > 0) {
        var indiceTrouve = trouverIndice(indiceCaseAr, casesDejaVideesCaseAr);
        while (indiceTrouve === true) {
            indiceCaseAr = Math.floor(Math.random() * (26 - 1 + 1) + 1);
            indiceTrouve = trouverIndice(indiceCaseAr, casesDejaVideesCaseAr);
        }
        var idCaseNonVidee = cases2[indiceCaseAr]; // on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee).text("");
        casesDejaVideesCaseAr.push(indiceCaseAr); // on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--; // on decremente le nombre des cases à vider pour finalement quitter la loop
    }

    //on fait correspondre les cases de jointure du carré avant vers le carré arriere
    faireCorespondreLesCJ();
    /* on vide le arriere carré (à gauche)*/
    //On fixe le nombre de cases à vider par rapport au niveau
    initCasesAVider();
    var countVide = 0;
    // on compte le nombre des cases vidées suite à la correspondance s'il y a en
    for (var i = 26; i < 51; i++) {
        if ($("#" + cases2[i]).text() === "") {
            countVide++;
            casesDejaVideesCaseAv.push(i);
        }
    }
    //si on a trouvé des cases vides, on soustrer le nombre de cases à vider
    if (countVide !== 0) {
        casesAVider = casesAVider - countVide;
    }
    // on tourne dans la loop jusqu'à ce que le nombre de cases à vider est 0
    while (casesAVider > 0) {
        var indiceTrouve2 = trouverIndice(indiceCaseAv, casesDejaVideesCaseAv);
        while (indiceTrouve2 === true) {
            indiceCaseAv = Math.floor(Math.random() * (50 - 28 + 1) + 28);
            indiceTrouve2 = trouverIndice(indiceCaseAv, casesDejaVideesCaseAv);
            if (indiceCaseAv === 31 || indiceCaseAv === 32) {
                indiceTrouve2 = true;
            }
        }
        var idCaseNonVidee2 = cases2[indiceCaseAv]; // on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee2).text("");
        casesDejaVideesCaseAv.push(indiceCaseAv); // on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--; // on decremente le nombre des cases à vider pour finalement quitter la loop
    }


    // on desactive toutes les cases preremplies et colorie les ligne/colonnes totalement remplies

    $(".une-case").each(function (indice) {
        var thisId = $(this).attr("id");
        var thisVal = $(this).text();
        if (thisVal !== "") {
            curentTxtId = thisId;
            incrementerOccur(parseInt(thisVal));
            $(this).attr("disabled", "true");
            //modifLigColInflu($(this).attr("id"));
            if (ligTotRemplie(thisId) === true) {
                modifLigne(thisId);
            }
            if (colTotRemplie(thisId) === true) {
                modifColonne(thisId);
            }
        }
    });
    majCouleurCJ();
    //fonction interne pour initialiser les cases à vider
    function initCasesAVider() {
        if (niveau === "APPRENTISSAGE" || niveau === "BEGINNER") {
            casesAVider = 7;
        } else if (niveau === "MOYEN" || niveau === "INTERMEDIATE") {
            casesAVider = 9;
        } else if (niveau === "AVANCE" || niveau === "ADVANCED") {
            casesAVider = 11;
        } else if (niveau === "MAITRISE" || niveau === "MASTER") {
            casesAVider = 12;
        } else {
            casesAVider = 7;
        }
    }
}

function faireCorespondreLesCJ() {
    $("#b11").text($("#a44").text());
    $("#b12").text($("#a45").text());
    $("#b21").text($("#a54").text());
    $("#b22").text($("#a55").text());
}
//Une fonction pour tout activer
function activerTout() {
    $(".une-case").attr("disabled", false);
    $("input[type=button]").attr("disabled", false);
}
//Une fonction pour tout desactiver
function desactiverTout() {
    $(".une-case").attr("disabled", true);
    $("input[type=button]").attr("disabled", true);
}
//Une fonction pour reinitialiser le tableau des occurences
function resetOccurs() {
    for (var i = 0; i < 10; i++) {
        occur[i] = 0;
        occur2[i] = 0;
    }
}
// Reinitialiser la ligne
function resetLigne(caseCourante) {
    var lig = caseCourante.substring(1, 2);
    var pl = caseCourante.substring(0, 1);
    if (pl === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(1, 2) === lig) {
                if (colTotRemplie(cases[i]) === false) {
                    if ($("#" + cases[i]).attr("disabled") === "disabled") {
                        $("#" + cases[i]).css("background-color", "rgb(232,232,232)");
                    } else {
                        $("#" + cases[i]).css("background-color", "rgb(255,255,255)");
                    }
                }
            }
        }
    } else {
        if (pl === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if (colTotRemplie(cases2[i]) === false) {
                        if ($("#" + cases2[i]).attr("disabled") === "disabled") {
                            $("#" + cases2[i]).css("background-color", "rgb(232,232,232)");
                        } else {
                            $("#" + cases2[i]).css("background-color", "rgb(255,255,255)");
                        }
                    }
                }
            }
        } else if (pl === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if (colTotRemplie(cases2[i]) === false) {
                        if ($("#" + cases2[i]).attr("disabled") === "disabled") {
                            $("#" + cases2[i]).css("background-color", "rgb(232,232,232)");
                        } else {
                            $("#" + cases2[i]).css("background-color", "rgb(255,255,255)");
                        }
                    }
                }
            }
        }
    }
}
// Reinitialiser la colonne
function resetColonne(caseCourante) {

    var col = caseCourante.substring(2);
    var pl = caseCourante.substring(0, 1);
    if (pl === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(2) === col) {
                if (ligTotRemplie(cases[i]) === false) {
                    if ($("#" + cases[i]).attr("disabled") === "disabled") {
                        $("#" + cases[i]).css("background-color", "rgb(232,232,232)");
                    } else {
                        $("#" + cases[i]).css("background-color", "rgb(255,255,255)");
                    }
                }
            }
        }
    } else {
        if (pl === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(2) === col) {
                    if (ligTotRemplie(cases2[i]) === false) {
                        if ($("#" + cases2[i]).attr("disabled") === "disabled") {
                            $("#" + cases2[i]).css("background-color", "rgb(232,232,232)");
                        } else {
                            $("#" + cases2[i]).css("background-color", "rgb(255,255,255)");
                        }
                    }
                }
            }
        } else if (pl === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(2) === col) {
                    if (ligTotRemplie(cases2[i]) === false) {
                        if ($("#" + cases2[i]).attr("disabled") === "disabled") {
                            $("#" + cases2[i]).css("background-color", "rgb(232,232,232)");
                        } else {
                            $("#" + cases2[i]).css("background-color", "rgb(255,255,255)");
                        }
                    }
                }
            }
        }
    }
}
// verifier si la ligne est toltalement remplie
function ligTotRemplie(caseCourante) {
    var lig = caseCourante.substring(1, 2);
    var pl = caseCourante.substring(0, 1);
    var ligRemplie = true;
    if (pl === "c") {
        for (var i = 1; i < 26; i++) {
            if (cases[i].substring(1, 2) === lig) {
                if ($("#" + cases[i]).attr("id") !== curentTxtId) {
                    if (($("#" + cases[i]).text()) === "") {
                        ligRemplie = false;
                        break;
                    }
                }
            }
        }
    } else {
        if (pl === "a") {
            for (var i = 1; i < 26; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if ($("#" + cases2[i]).attr("id") !== curentTxtId) {
                        if (($("#" + cases2[i]).text()) === "") {
                            ligRemplie = false;
                            break;
                        }
                    }
                }
            }
        } else if (pl === "b") {
            for (var i = 26; i < 51; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if ($("#" + cases2[i]).attr("id") !== curentTxtId) {
                        if (($("#" + cases2[i]).text()) === "") {
                            ligRemplie = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    if (ligRemplie === true) {
        ligneRemplie = true;
    }
    return ligRemplie;
}
// verifier si la colonne est toltalement remplie
function colTotRemplie(caseCourante) {
    var col = caseCourante.substring(2);
    var pl = caseCourante.substring(0, 1);
    var colRemplie = true;
    if (pl === "c") {
        for (var i = 1; i < 26; i++) {
            if (cases[i].substring(2) === col) {
                if ($("#" + cases[i]).attr("id") !== curentTxtId) {
                    if (($("#" + cases[i]).text()) === "") {
                        colRemplie = false;
                        break;
                    }
                }
            }
        }
    } else {
        if (pl === "a") {
            for (var i = 1; i < 26; i++) {
                if (cases2[i].substring(2) === col) {
                    if ($("#" + cases2[i]).attr("id") !== curentTxtId) {
                        if (($("#" + cases2[i]).text()) === "") {
                            colRemplie = false;
                            break;
                        }
                    }
                }
            }
        } else if (pl === "b") {
            for (var i = 26; i < 51; i++) {
                if (cases2[i].substring(2) === col) {
                    if ($("#" + cases2[i]).attr("id") !== curentTxtId) {
                        if (($("#" + cases2[i]).text()) === "") {
                            colRemplie = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    if (colRemplie === true) {
        colonneRemplie = true;
    }
    return colRemplie;
}

//Maj Couleur dans les cases partagées
function majCouleurCJ() {    
    if( !ligTotRemplie("b11") && !colTotRemplie("b11") ){
        mettreCase1ColorToCase2( "#a44", "#b11" );
    }
    if( !ligTotRemplie("b12") && !colTotRemplie("b12") ){
        mettreCase1ColorToCase2( "#a45", "#b12" );
    }
    if( !ligTotRemplie("b11") && !colTotRemplie("b11") ){
        mettreCase1ColorToCase2( "#a54", "#b21" );
    }
    if( !ligTotRemplie("b11") && !colTotRemplie("b11") ){
        mettreCase1ColorToCase2( "#a55", "#b22" );
    }
}
//Mettre Couleur de case1 dans case2
function mettreCase1ColorToCase2( idCase1, idCase2 ) {
    $(idCase2).css( "background-color", $(idCase1).css("background-color") + "" );
}

// modifier le bg de la ligne
function modifLigne(caseCourante) {
    var lig = caseCourante.substring(1, 2);
    var premiereLettre = caseCourante.substring(0, 1);
    if (premiereLettre === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(1, 2) === lig) {
                if ($("#" + cases[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                    $("#" + cases[i]).css("background-color", "rgba(180,255,180,1)");
                }
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if ($("#" + cases2[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                        $("#" + cases2[i]).css("background-color", "rgb(180,255,180)");
                    }

                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    if ($("#" + cases2[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                        $("#" + cases2[i]).css("background-color", "rgb(180,255,180)");
                    }

                }
            }
        }
    }

}
// modifier le bg de la colonne
function modifColonne(caseCourante) {
    var col = caseCourante.substring(2);
    var premiereLettre = caseCourante.substring(0, 1);
    if (premiereLettre === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(2) === col) {
                if ($("#" + cases[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                    $("#" + cases[i]).css("background-color", "rgba(180,255,180,1)");
                }
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(2) === col) {
                    if ($("#" + cases2[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                        $("#" + cases2[i]).css("background-color", "rgb(180,255,180)");
                    }
                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(2) === col) {
                    if ($("#" + cases2[i]).css("background-color") + "" !== "rgb(220, 255, 220)") {
                        $("#" + cases2[i]).css("background-color", "rgb(180,255,180)");
                    }

                }
            }
        }
    }
}

//trouver la somme de la ligne
function somLigne(caseCourante, valeurCourante) {
    var lig = caseCourante.substring(1, 2);
    var premiereLettre = caseCourante.substring(0, 1);
    var somLigne = 0;
    var valCase = 0;
    if (premiereLettre === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(1, 2) === lig) {
                valCase = $("#" + cases[i]).text() === "" ? 0 : parseInt($("#" + cases[i]).text());
                somLigne = somLigne + valCase;
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    valCase = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somLigne = somLigne + valCase;
                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    valCase = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somLigne = somLigne + valCase;
                }
            }
        }
    }
    return somLigne + parseInt(valeurCourante);
}
//trouveer la somme de la colonne
function somColonne(caseCourante, valeurCourante) {
    var col = caseCourante.substring(2);
    var premiereLettre = caseCourante.substring(0, 1);
    var somColonne = 0;
    var valCase = 0;
    if (premiereLettre === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(2) === col) {
                valCase = $("#" + cases[i]).text() === "" ? 0 : parseInt($("#" + cases[i]).text());
                somColonne = somColonne + valCase;
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(2) === col) {
                    valCase = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somColonne = somColonne + valCase;
                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(2) === col) {
                    valCase = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somColonne = somColonne + valCase;
                }
            }
        }
    }
    return somColonne + parseInt(valeurCourante);
}
//verifier si la somme de la ligne ou la colonne n'est pas plus de 20
function verifSomLigCol20(caseCourante, valeurCourante) {
    /* var caseCourante = $(this).attr("id");
     var valeurCourante = $(this).val();*/
    var pl = caseCourante.substring(0, 1);
    var lig = caseCourante.substring(1, 2);
    var col = caseCourante.substring(2);
    var somLig = 0;
    var somCol = 0;
    if (pl === "c") {
        for (var i = 1; i <= 25; i++) {
            if (cases[i].substring(1, 2) === lig) {
                var valActCl1 = $("#" + cases[i]).text() === "" ? 0 : parseInt($("#" + cases[i]).text());
                somLig = somLig + valActCl1;
            } else if (cases[i].substring(2) === col) {
                var valActCl2 = $("#" + cases[i]).text() === "" ? 0 : parseInt($("#" + cases[i]).text());
                somCol = somCol + valActCl2;
            }
        }
        somLig = somLig + parseInt(valeurCourante);
        somCol = somCol + parseInt(valeurCourante);
        if (somLig === 20 && somCol === 20) {
            return true;
        } else {
            return false;
        }
    } else {
        if (pl === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    var valActCl1 = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somLig = somLig + valActCl1;
                } else if (cases2[i].substring(2) === col) {
                    var valActCl2 = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somCol = somCol + valActCl2;
                }
            }
            somLig = somLig + parseInt(valeurCourante);
            somCol = somCol + parseInt(valeurCourante);
            if (somLig === 20 && somCol === 20) {
                return true;
            } else {
                return false;
            }
        } else if (pl === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    var valActCl1 = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somLig = somLig + valActCl1;
                } else if (cases2[i].substring(2) === col) {
                    var valActCl2 = $("#" + cases2[i]).text() === "" ? 0 : parseInt($("#" + cases2[i]).text());
                    somCol = somCol + valActCl2;
                }
            }
            somLig = somLig + parseInt(valeurCourante);
            somCol = somCol + parseInt(valeurCourante);
            if (somLig === 20 && somCol === 20) {
                return true;
            } else {
                return false;
            }
        }
    }

}
/*Home Page*/
var apro_up = true;
var regl_up = true;
var cons_dev_up = true;
var con_ins_up = true;


$("#apropo_a20").on("click", function () {
    if (apro_up === true) {
        $("#apropo_a20_div").slideDown("slow");
        apro_up = false;
    } else {
        $("#apropo_a20_div").slideUp("slow");
        apro_up = true;
    }

    $("#regle_a20_div").slideUp("slow");
    $("#cons_dev_a20_div").slideUp("slow");
    $("#con_ins_a20_div").slideUp("slow");
    regl_up = true;
    cons_dev_up = true;
    con_ins_up = true;
});
$("#regle_a20").on("click", function () {
    if (regl_up === true) {
        $("#regle_a20_div").slideDown("slow");
        regl_up = false;
    } else {
        $("#regle_a20_div").slideUp("slow");
        regl_up = true;
    }

    $("#apropo_a20_div").slideUp("slow");
    $("#cons_dev_a20_div").slideUp("slow");
    $("#con_ins_a20_div").slideUp("slow");
    apro_up = true;
    cons_dev_up = true;
    con_ins_up = true;
});
$("#cons_dev_a20").on("click", function () {
    if (cons_dev_up === true) {
        $("#cons_dev_a20_div").slideDown("slow");
        cons_dev_up = false;
    } else {
        $("#cons_dev_a20_div").slideUp("slow");
        cons_dev_up = true;
    }

    $("#apropo_a20_div").slideUp("slow");
    $("#regle_a20_div").slideUp("slow");
    $("#con_ins_a20_div").slideUp("slow");
    apro_up = true;
    regl_up = true;
    con_ins_up = true;
});
$("#con_ins_a20").on("click", function () {
    if (con_ins_up === true) {
        $("#con_ins_a20_div").slideDown("slow");
        con_ins_up = false;
    } else {
        $("#con_ins_a20_div").slideUp("slow");
        con_ins_up = true;
    }

    $("#apropo_a20_div").slideUp("slow");
    $("#regle_a20_div").slideUp("slow");
    $("#cons_dev_a20_div").slideUp("slow");
    apro_up = true;
    regl_up = true;
    cons_dev_up = true;
});
$("#btn_ins").click(function () {
    $("#con_a20_div").addClass("non_visibl");
    $("#ins_a20_div").removeClass("non_visibl");
});
$("#btn_cnx").click(function () {
    $("#ins_a20_div").addClass("non_visibl");
    $("#con_a20_div").removeClass("non_visibl");
});

function validateForm(formId){
      e.preventDefault();
     var empty = false;
    $("#"+formId+" input[type=text]").each(function () {
        if($(this).val() == ""){
            empty =true;
        }
    });
     $("#"+formId+" input[type=email]").each(function () {
        if($(this).val() == ""){
            empty =true;
        }
    });
    
     $("#"+formId+" input[type=password]").each(function () {
        if($(this).val() == ""){
            empty =true;
        }
    });
    
    if(empty == false){
        $("#"+formId).trigger("submit");
    }
}

$("#btn_val_con").click(function (e) {
  validateForm("frm_connection");
});

$("#btn_val_ins").click(function () {
    validateForm("frm_inscription");
});
//Gestion de l'affichage selon la langue
$("#cmbLang").change(function () {
    changeLanguage($("#cmbLang").val());
    translateHome();
});
$("#cmbLang2").change(function () {
    changeLanguage($("#cmbLang2").val());
    translateHome();
});

function changeLanguage(language) {
    if (language == "ANGLAIS" || language == "ENGLISH") {
        $("#txt_lang").val("ANGLAIS");
    }else{
        $("#txt_lang").val("FRANCAIS");
    }
    $("#langue").val($("#txt_lang").val());
}
function translateHome() {
    var lang = $("#langue").val();
    if (lang == null || lang == "") {
        lang = "ENGLISH";
    }
    if (lang == "ANGLAIS" || lang == "ENGLISH") {
        $("#cmbLang").html("<option>ENGLISH</option><option>FRENCH</option>");
        $("#cmbLang2").html("<option>ENGLISH</option><option>FRENCH</option>");
        $("#bankAccount").text("Bank account :");
        $("#lang").text("Language :");
        $("#lang2").text("Language :");
        $("#apropo_a20").text("About ArboTwenty");
        $("#regle_a20").text("Game rules");
        $("#cons_dev_a20").text("Owner/Designer");
        $("#con_ins_a20").text("Login/Register");
        $("#btn_jouer").val("Play");
        $("#lbl_con").text("Login : ");
        $("#txt_login").attr("placeholder", "Player name");
        $("#txt_pw").attr("placeholder", "Player password");
        $("#btn_val_con").attr("value", "Validate");
        $("#btn_ins").text("Register here");
        $("#btn_cnx").text("Login here");
        $("#lbl_ins").text("Register : ");
        $("#abonlink1").text("Subscriptions");
        $("#txt_login2").attr("placeholder", "Player name");
        $("#txt_pw2").attr("placeholder", "Player password");
        $("#txt_conf_pw2").attr("placeholder", "Confirm password");
        $("#btn_val_ins").attr("value", "Validate");
        $("#lbl_prop").text("Owner");
        $("#lbl_dev").text("Designer");
        $("#country option").first().text("Country");
        $("#country").trigger("change");
        $("#terms-ou-link").text("Terms Of Use");
        $("#myModalLabel").html("<u>ArboTwenty General Terms Of Use</u>");
        $("#terms_modal").html("<h5>By clicking the <em><u>Accept</u></em> button below, you agree to the following General Terms Of Use :</h5> " +
                "<ol>" +
                "<li> These “General Terms of Use” or “Terms of Use” apply to the  ARBOTWENTY game;</li>" +
                "<li> ArboTwenty is a game which is the exclusive property of its publisher whose name is ARBOMERIC;</li>" +
                "<li> The Terms of Use must be acknowledged prior to accessing the ArboTwenty game;</li>" +
                "<li> Arbomeric reserves the right to modify, at any time and without prior notification, these Terms of Use. Each user connecting to the site is invited to regularly consult these Terms of Use;</li>" +
                "<li> The ArboTwenty site, its general structure, as well as the embedded texts, graphics, images, sounds and videos, are the exclusive property of Arbomeric;</li>" +
                "<li> Arbomeric strives to keep the site accessible 24 hours a day. However, Arbomeric shall not be liable in the event of interruption or temporary inaccessibility to the site; </li>" +
                "<li> Arbomeric offers 2 types and 4 different levels of grids for ArboTwenty;</li>" +
                "<li> The types include: single-square grids and two-square grids. The levels are Level 1 or Beginner; Level 2 or Intermediate; Level 3 or Advanced and Level 4 or Master;</li>" +
                "<li> The player is asked to identify himself using his name and e-mail address;</li>" +
                "<li> Once signed up,the player gains free access to the ArboTwenty game for a period of 15 days;</li>"+
                "<li> After the 15 days, access remains free for levels 1 and 2 grids, in the single and double-squared grids;</li>"+
                "<li> After the 15 days, access becomes chargeable for level 3 and 4 grids, of single or double squared grid types;</li>"+
                "<li> Payment relating to Article 12 above is made according to the pricing offered to the player;</li>"+
                "<li> For any complaint, the player first agrees to contact Arbomeric, specifically at the following addresses:<br/>" +
                "<a href='mailto:arbotwenty@arbomeric.com?subject=Contact ArboTwenty'>arbotwenty@arbomeric.com</a> , <a href='mailto:arbotwenty@gmail.com?subject=Contact ArboTwenty'>arbotwenty@gmail.com</a> <br/>" +
                "Facebook: <a href='https://web.facebook.com/110131741521682/photos/a.110131778188345/110131821521674/?type=3' target='_blank'>ArboTwenty</a> <br/>" +
                "Phone : <a href='tel:00243898911464'>+243 89 89 11 464</a> ;<a href='tel:001(226)2898419'>+1 (226) 289 8419</a> ; </li>" +
                "<li> The player and Arbomeric shall make every effort to resolve amicably any litigation or dispute arising from the use of the ArboTwenty game;</li>" +
                "<li> The player accepts that they may not resort to any action beyond the rights provided for in article 15, unless the provisions of that article have been exhausted.</li>" +
                "</ol>");
        $("#gtu_footer").html("<i class='col-xm-6' id='gtu_question'>Do you accept the above Terms Of Use ? </i>" +
                "<button id='gtu_btn' type='button' class='btn btn-primary col-xm-6' data-dismiss='modal'>Accept</button>");

        $("#regle_a20_div").html("<ol><li>ArboTwenty is played in a kind of magic square comprises of 25 boxes in total, with 5 boxes on each side, using the 10 figures of decimal numeration. A number is placed in the central square and is taken only once.  This is one of the following: 4, 5, 6, 7, 8, 9.</li><li>The other digits are placed as 0, 1, 2 or at most 3 times in the other boxes of the square;</li><li>The figures are placed so that on each row and on each column their addition always yields 20 as the total number.</li></ol><i>N.B.: The combination of rules n° 2 and n° 3 implies that the digits 0, 1, 2 and 3 cannot occupy the central box.</i>");
        $("#apropo_a20_div").html("The ArboTwenty was originally designed as an individual game.  It can nevertheless put several players in competition, the challenge then being to be the quickest and most accurate to fill in the boxes of the game. Given the range of its levels of difficulty, this game is aimed at an audience of all ages and abilities. ArboTwenty comes in the form of a tree consisting of a single square or more than one square with a junction surface on which they overlap. Each ArboTwenty square comprises of 25 boxes in total, with 5 boxes on each side. The square can be extended to 49 or 81 boxes if it has 7 or 9 boxes on each side. This can lead to an adaptation of the rules. The boxes are filled with the 10 digits of the decimal number, i.e., 0, 1, 2, 3,4, 5, 6, 7, 8, 9.<br/>Version : 1.0.0<br/>"+
                "N.B. : <br/>* To access the ArboTwenty version 1.0.0, the player should "+
                                    "go to the game site : <a href='https://arbotwety.net'>https://arbotwety.net</a> ; or download the mobile version on playstore.<br/>"+
                                    "* For more fonctionnalities (save a game, play with an opponent, unlock the levels 3 and 4, etc), "+
                                    "the player should "+
                                    "log in by filling in their name and password if they already have an account; if not,"+
                                    "register by filling in their name, email address and password; then log in.<br/>"+
                                    "Registration gives the player free access to levels 3 and 4 for 15 days, which will then be paid.");
    } else {
        $("#cmbLang").html("<option>FRANÇAIS</option><option>ANGLAIS</option>");
        $("#cmbLang2").html("<option>FRANÇAIS</option><option>ANGLAIS</option>");
        $("#bankAccount").text("Compte bancaire :");
        $("#lang").text("Langue :");
        $("#lang2").text("Langue :");
        $("#apropo_a20").text("À propos d'ArboTwenty");
        $("#regle_a20").text("Règles du jeu");
        $("#cons_dev_a20").text("Propiétaire/Concepteur");
        $("#con_ins_a20").text("Connection/Inscription");
        $("#btn_jouer").val("Jouez");
        $("#lbl_con").text("Connectez-vous : ");
        $("#txt_login").attr("placeholder", "Nom du joueur");
        $("#txt_pw").attr("placeholder", "Mot de passe du joueur");
        $("#btn_val_con").attr("value", "Validez");
        $("#btn_ins").text("Inscrivez-vous ici");
        $("#btn_cnx").text("Connectez-vous ici");
        $("#lbl_ins").text("Inscrivez-vous : ");
        $("#abonlink1").text("Abonnement");
        $("#txt_login2").attr("placeholder", "Nom du joueur");
        $("#txt_pw2").attr("placeholder", "Mot de passe du joueur");
        $("#txt_conf_pw2").attr("placeholder", "Confirmez  mot de passe");
        $("#btn_val_ins").attr("value", "Validez");
        $("#lbl_prop").text("Propriétaire");
        $("#country option").first().text("Pays");
        $("#country").trigger("change");
        $("#terms-ou-link").text("Conditions générales d’utilisation");
        $("#myModalLabel").html("<u>Conditions générales d’utilisation d'ArboTwenty</u>");
        $("#terms_modal").html("<h5>En appuyant sur le bouton <em><u>Accepter</u></em> ci-dessous, vous êtes d'accord avec les Conditions Générales d'Utilisation suivantes :</h5> " +
                "<ol>" +
                "<li> Les présentes « Conditions Générales d’Utilisation » ou « Conditions d’Utilisation » s’appliquent au jeu ARBOTWENTY ;</li>" +
                "<li> ArboTwenty est un jeu qui est la propriété exclusive de son éditeur dont le nom est ARBOMERIC ;</li>" +
                "<li> L’acceptation des Conditions d’Utilisation est préalable à l’accès au jeu ArboTwenty ;</li>" +
                "<li> Arbomeric se réserve le droit de modifier, à tout moment et sans notification préalable, les présentes Conditions d’Utilisation. Chaque utilisateur se connectant au site est invité à consulter régulièrement les présentes Conditions d’Utilisation ;</li>" +
                "<li> Le site ArboTwenty, sa structure générale, ainsi que les textes, graphiques, images, sons et vidéos le composant, sont la propriété exclusive d’Arbomeric;</li>" +
                "<li> Arbomeric s’efforce de maintenir le site accessible 24h/24. Toutefois, Arbomeric décline toute responsabilité en cas d’interruption, d’impossibilité momentanée d’accès au site ;</li>" +
                "<li> Arbomeric propose 2 genres et 4 niveaux différents de grilles pour ArboTwenty ;</li>" +
                "<li> Les genres sont : grilles à un carré et grilles à deux carrés. Les niveaux sont : niveau 1 ou apprentissage ; niveau 2 ou moyen ; niveau 3 ou avancé et niveau 4 ou maîtrise ;</li>" +
                "<li> Le joueur est invité à s'identifier par un nom et une adresse e-mail ;</li>" +
                "<li> L'identification ainsi faite donne au joueur l'accès gratuit au jeu ArboTwenty pendant une période de 15 jours ;</li>"+
                "<li> Après les 15 premiers jours, l'accès demeure gratuit pour les grilles de niveaux 1 et 2, dans les genres 1 et 2 carrés ;</li>"+
                "<li> Après les 15 premiers jours, l'accès devient payant pour les grilles de niveaux 3 et 4, dans les genres 1 et 2 carrés ;</li>"+
                "<li> Le paiement relatif à l'article 12 ci-dessus s'effectue selon la tarification proposée au joueur;</li>"+
                "<li> Pour toute réclamation, le joueur accepte de s’adresser d’abord à Arbomeric, spécifiquement aux adresses suivantes :<br/>" +
                "<a href='mailto:arbotwenty@arbomeric.com?subject=Contact ArboTwenty'>arbotwenty@arbomeric.com</a> , <a href='mailto:arbotwenty@gmail.com?subject=Contact ArboTwenty'>arbotwenty@gmail.com</a> <br/>" +
                "Facebook:<a href='https://web.facebook.com/110131741521682/photos/a.110131778188345/110131821521674/?type=3' target='_blank'>ArboTwenty</a> <br/>" +
                "Phone : <a href='tel:00243898911464'>+243 89 89 11 464</a> ;<a href='tel:001(226)2898419'>+1 (226) 289 8419</a> ; </li>" +
                "<li> Le joueur et Arbomeric mettront tout en œuvre pour parvenir à régler à l'amiable tout litige ou tout différend qui peut naître de l’utilisation du jeu ArboTwenty ;</li>" +
                "<li> Le joueur accepte qu’il ne peut recourir à toute action au-delà des droits prévus à l’article 15, que s’il a épuisé ce qui est prévu à cet article.</li>" +
                "</ol>");
        $("#gtu_footer").html("<i class='col-xm-6' id='gtu_question'>Acceptez-vous les Conditions d'Utilisation ci-dessus ? </i>" +
                "<button id='gtu_btn' type='button' class='btn btn-primary col-xm-6' data-dismiss='modal'>Accepter</button>");

        $("#regle_a20_div").html("<ol><li>L'ArboTwenty se joue dans une forme de carré magique. Ce carré de 25 cases avec 5 cases de chaque côté, utilise les 10 chiffres de la numération décimale. Un chiffre occupe la case centrale du carré et il est repris une et une seule fois. Il s’agit de l’un des chiffres suivants : 4, 5, 6, 7, 8, 9.</li><li>Les autres chiffres sont inscrits 0, 1, 2 ou 3 fois dans les autres cases du carré;</li><li>Les chiffres sont placés de telle sorte que sur chaque ligne et sur chaque colonne leur addition donne toujours comme total le nombre 20</li></ol><i>N.B. : La combinaison des règles n° 2 et n° 3 induit que les chiffres 0, 1, 2 et 3 ne peuvent occuper la case centrale.</i>");
        $("#apropo_a20_div").html("L’ArboTwenty a été conçu à l’origine comme un jeu  individuel.Il peut néanmoins mettre en compétition plusieurs joueurs,le défi étant alors d’être le plus rapide et le plus correct à remplir les cases du jeu.Étant donné l’éventail de ses niveaux de difficulté, ce jeu s’adresse à un public de tout âge et de tout niveau de capacité.<br/>L’ArboTwenty se présente sous la forme d’une arborescence comportant un carré unique ou plus d'un carré avec une surface de jonction sur laquelle ils se chevauchent. <br/>Chaque carré d’ArboTwenty est composé de 25 cases au total, avec 5 cases de chaque côté. Le carré peut être étendu à 49 ou 81 cases avec 7 ou 9 cases de chaque côté. Les cases sont remplies avec les 10 chiffres de la numération décimale, soit 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.<br/>Version : 1.0.0<br/>"+
                                    "N.B. : <br/>* Pour accéder à la version 1.0.0 d’ArboTwenty, le joueur devra "+
                                    "aller sur le site du jeu : <a href='https://arbotwety.net'>https://arbotwety.net</a> ; ou télécharger la version mobile sur playstore.<br/>"+
                                    "* Pour plus de fonctionnalités (sauvegarder une partie, jouer avec un adversaire, debloquer les niveaux 3 et 4, etc), "+
                                    "le joueur devra "+
                                    "se connecter en remplissant son nom et son mot de passe s'il a deja un compte; si non,"+
                                    "s’inscrire en remplissant son nom, son adresse e-mail et son mot de passe; en suite se connecter.<br/>"+
                                    "L’inscription donne au joueur l’accès gratuit aux niveaux 3 et 4 pendant 15 jours, qui sera ensuite payant.");
    }
}
function translateMenu() {
    checkComboRadio();
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if (langue == "ANGLAIS" || langue == "ENGLISH") {
        $("#lbl_level").text("Level :");
        if($("#abonnementValid").val() === 'true'){
            $("#cmbNiv").html("<option>BEGINNER</option><option>INTERMEDIATE</option><option>ADVANCED</option><option>MASTER</option>");
        }else{
            $("#cmbNiv").html("<option>BEGINNER</option><option>INTERMEDIATE</option><option disabled>ADVANCED</option><option disabled>MASTER</option>");
        }
        
        $("#lbl_nc").text("Number of square(s):");
        $("#cmbMode").html("<option>SOLO</option><!-- <option>WITH OPPONENT(S)(NF)</option> -->");
        $("#lbl_creb").text("Countdown");
        $("#btn_continue1").val("Continue the last game with 1 square");
        $("#btn_continue2").val("Continue the last game with 2 squares");
        $("#btn_nouvelle").val("Start a new game");
        $("#abonlink").text("Unlock levels 3 and 4");
    }else {
        $("#lbl_level").text("Niveau :");
        if($("#abonnementValid").val() === 'true'){
            $("#cmbNiv").html("<option>APPRENTISSAGE</option><option>MOYEN</option><option>AVANCE</option><option>MAITRISE</option>");
        }else{
            $("#cmbNiv").html("<option>APPRENTISSAGE</option><option>MOYEN</option><option disabled>AVANCE</option><option disabled>MAITRISE</option>");
        }
        $("#lbl_nc").text("Nombre de carré(s):");
        $("#cmbMode").html("<option>SOLO</option><!-- <option>AVEC ADVERSAIRE(S)(NF)</option> -->");
        $("#lbl_creb").text("Compte à rebours");
        $("#btn_continue1").val("Continuer la dernière partie avec 1 carré");
        $("#btn_continue2").val("Continuer la dernière partie avec 2 carrés");
        $("#btn_nouvelle").val("Commencer une nouvelle partie");
        $("#abonlink").text("Déverrouiller les niveaux 3 et 4");
        
    }
}

function translateGround() {
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
   if (langue == "ANGLAIS" || langue == "ENGLISH") {
        $("#niv").text("Level :");
//        $("#btn_return").text("Return");
//        $("#btn_new").text("New");
//        $("#home_link").text("Home");
    }else{
         $("#niv").text("Niveau :");
//        $("#btn_return").text("Retour");
//        $("#btn_new").text("Nouveau");
//        $("#home_link").text("Accueil");
    }
}
function translateSubscription(){
    
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if (langue == "ANGLAIS" || langue == "ENGLISH") {
        $("#abon_txt1").text("PRICING SYSTEM");
        $("#abon_txt2").text("Access to levels 3 and 4 of the game");
        $(".abon_txt3").text("Access during ");
        $("#24h").text("24 hours :");
        $("#7j").text("7 days :");
        $("#15j").text("15 days :");
        $("#30j").text("30 days :");
        $("#90j").text("90 days :");
        $("#period").text("Period of");
        $("#op24h").text("24 hours");
        $("#op7j").text("7 days");
        $("#op15j").text("15 days");
        $("#op30j").text("30 days");
        $("#op90j").text("90 days");
        $("#btn_abon").text("Subscribe");
    }else{
        $("#abon_txt1").text("SYSTEME DE TARIFICATION");
        $("#abon_txt2").text("Accès aux niveaux 3 et 4 du jeu");
        $(".abon_txt3").text("Accès pendant ");
        $("#24h").text("24 heures :");
        $("#7j").text("7 jours :");
        $("#15j").text("15 jours :");
        $("#30j").text("30 jours :");
        $("#90j").text("90 jours :");
        $("#period").text("Période de");
        $("#op24h").text("24 heures");
        $("#op7j").text("7 jours");
        $("#op15j").text("15 jours");
        $("#op30j").text("30 jours");
        $("#op90j").text("90 jours");
        $("#btn_abon").text("Abonnez-vous");
    }
    
}
var saveGame = false;
$("#btn_return").click(function (e) {
    if( "" != $("#player_name").text() && undefined != $("#player_name").text() && null != $("#player_name").text() ){
        if( gameEnd === false ){
           e.preventDefault();
           $("#btn_play_pause").trigger("click");
           launchModal( "#saveGameModal" );
        }   
    }else{
        window.location = "menu";
    }
});
$("#home_logo").click(function (e) {
    if( "" != $("#player_name").text() && undefined != $("#player_name").text() && null != $("#player_name").text() ){
        if( gameEnd === false ){
           e.preventDefault();
           $("#btn_play_pause").trigger("click");
           launchModal( "#saveGameModal_1" );
        }   
    }else{
        window.location = "/a20";
    }
});
function saveTheGame(){
    if( saveGame === true ){
      saveGame = false;
      const valeurs_cases =[];
      $(".une-case").each(function (indice) {
            valeurs_cases[indice] = $(this).text();
        });
        const params = {
            langue: $("#langue").val(),
            niveau: $("#numNiv").text(),
            type_cmptr: $("#txt_c_cr").text(),
            mun: $("#mun").text(),
            sec: $("#sec").text(),
            valeurs_cases:valeurs_cases,
            carre:$("#nmbrDeCarre").val()
        };
        
        $.post("partie",
            $.param(params),function(){
                var lang = $("#langue").val();
                if( lang == "FRANCAIS" || lang == "FRENCH" ){
                   afficherMsg("Enregistrement du partie reussie.","","");
                }else{
                   afficherMsg("Game saved successfully.","","");
                }
            }
        );
    }
}
function cacheMsgGen() {
    $("#msgGen").hide();
}

function afficherMsg( prefix, val, msg ) {
    $("#msgGen").text(prefix + " " + val + " " + msg).show(500).delay(3500).hide(2000);    
}

function translateSaveModal(){
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if (langue == "ANGLAIS" || langue == "ENGLISH") {
        $(".lbl_save_game").text("Save the Game :");
        $(".lbl_save_game_qst").text("Save this game ?");
        $(".btn_yes").text("Yes");
        $(".btn_no").text("No");
        $(".btn_cancel").text("Cancel");
        $("#lbl_solve_game").text("Solver :");
        $("#lbl_solve_game_qst").text("When consulting the solver you accept that the game is over.");
    }else{
        $(".lbl_save_game").text("Sauvegarder une partie :");
        $(".lbl_save_game_qst").text("Sauvegarder cette partie ?");
        $(".btn_yes").text("Oui");
        $(".btn_no").text("Non");
        $(".btn_cancel").text("Annuler");
        $("#lbl_solve_game").text("Solutionnaire :");
        $("#lbl_solve_game_qst").text("En consultant le solutionnaire vous acceptez que la partie est terminée.");
    }
}

/* Start of validation Code*/

const forms = $("form");
//maps each form in forms
$.map(forms, (form) =>{

    $(form).submit( (event) => { validateForm(event, form); });

    $.map(getChildrenBySelector(form, "button.submit"), (b) => $(b).click((event) => {triggerSubmit(form);} ));

    const inputs = getChildrenBySelector(form, "input");
    $.map(inputs, (input) =>{
        keyupEnterSubmitForm(input, form);
    });
});

function getChildrenBySelector(container, selector){
    return container.querySelectorAll(selector);
}

//au press sur la touche enter
function keyupEnterSubmitForm(input, form){
    input.addEventListener("keyup", (event) =>{
        if ( event.which == 13 ) {
            event.preventDefault();

            $(form).trigger("submit");// submit();
        }
    });

}

function validateForm(event, form){

    //the code logic to validate each field of a form before submitting
    const inputs = getChildrenBySelector(form, "input");
    var isValid = true;
    var isPwsValid = false;
    $.map(inputs, (input) => {
        input.focus();
        input.blur();
        isValid = isValid && validateField(input);
    });
    if(form.className.includes("signup")){
        confirmPassword();
        if(isValid === false || isPwsValid === false){
            resetVal();
            event.preventDefault();
        }
    }else {
        if(!isValid){
            resetVal();
            event.preventDefault();
        }else {
            form.submit();
        }
    }

    function confirmPassword() {
        const pwds = form.getElementsByClassName("pwd");
        const samePwds = ( ((pwds[0].value != "") && (pwds[1].value != "") ) && (pwds[0].value == pwds[1].value) );
        isPwsValid = samePwds;

        if(!samePwds) {
            //password fields has different values,
            //so display a error message
            $.map(pwds, (pw) => {
                setInvalidFieldStyle(pw);
            });
            /* const alertMsg = document.getElementById("different-pwd-error");
             alertMsg.className = alertMsg.className.replace("invisible", "visible")*/
        }
    }


    function resetVal(){
        isValid = true;
        isPwsValid = false;
    }

}



//validation for one field
function validateField(field) {

    if(field.type == "email"){
        return validateEmail(field);
    }

    if (field.hasAttribute("required")) {
        if (field.value === "" || field.selectedIndex === 0) {
            setInvalidFieldStyle(field);
            return false;
        }
        else {
            resetFieldStyle(field);
        }
    }

    return true;
}
$("#btn_play_pause").click(function(){
    if(gameEnd == false){
        var classList = $("#icon_play_pause").attr("class");
        if(classList.includes("glyphicon-pause")){
            //click to pause
            $("#icon_play_pause").removeClass("glyphicon-pause");
            $("#icon_play_pause").addClass("glyphicon-play");
            deCompter = false;
            Compter = false;
            $("input[type=button]").attr("disabled", true);
        }else{
            //click to play
            $("#icon_play_pause").removeClass("glyphicon-play");
            $("#icon_play_pause").addClass("glyphicon-pause");
            deCompter = true;
            Compter = true;
            $("input[type=button]").attr("disabled", false);
        }
    }
 });
function validateEmail(field)
{
   /* const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(field.value.match(mailFormat))*/
    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(field.value).toLocaleLowerCase()))
    {
        resetFieldStyle(field);
        return true;
    }
    else
    {
        setInvalidFieldStyle(field);
        field.focus();
        return false;
    }
}

function triggerSubmit(form) {
    $(form).trigger("submit");
}

function setInvalidFieldStyle(field) {
    $(field).css("borderBottom", "2px solid red");
}
function resetFieldStyle(field) {
    $(field).css("borderBottom", "0.994318px solid rgb(241, 241, 241)");
}

/* End of validation Code*/


/* Formule pour trouver un chiffre au hasard dans un intervalle
 * var chiffreHazard = Math.floor(Math.random() * (max - min + 1) + min);
 * */












var modeles4 = {
    1: [7, 0, 8, 3, 2, 5, 8, 0, 1, 6, 0, 6, 4, 8, 2, 1, 5, 2, 5, 7, 7, 1, 6, 3, 3],
    2: [7, 5, 0, 1, 7, 0, 8, 6, 5, 1, 8, 0, 4, 2, 6, 3, 1, 8, 5, 3, 2, 6, 2, 7, 3],
    3: [5, 8, 0, 1, 6, 7, 0, 8, 3, 2, 0, 6, 4, 8, 2, 7, 1, 6, 3, 3, 1, 5, 2, 5, 7],
    4: [0, 8, 6, 5, 1, 7, 5, 0, 1, 7, 8, 0, 4, 2, 6, 2, 6, 2, 7, 3, 3, 1, 8, 5, 3],
    5: [0, 7, 8, 2, 3, 8, 5, 0, 6, 1, 6, 0, 4, 2, 8, 5, 1, 2, 7, 5, 1, 7, 6, 3, 3],
    6: [5, 7, 0, 7, 1, 8, 0, 6, 1, 5, 0, 8, 4, 6, 2, 1, 3, 8, 3, 5, 6, 2, 2, 3, 7],
    7: [8, 5, 0, 6, 1, 0, 7, 8, 2, 3, 6, 0, 4, 2, 8, 1, 7, 6, 3, 3, 5, 1, 2, 7, 5],
    8: [8, 0, 6, 1, 5, 5, 7, 0, 7, 1, 0, 8, 4, 6, 2, 6, 2, 2, 3, 7, 1, 3, 8, 3, 5]
};
var modeles5 = {
    1: [7, 0, 9, 3, 1, 2, 6, 3, 0, 9, 4, 4, 5, 7, 0, 6, 7, 1, 4, 2, 1, 3, 2, 6, 8],
    2: [7, 2, 4, 6, 1, 0, 6, 4, 7, 3, 9, 3, 5, 1, 2, 3, 0, 7, 4, 6, 1, 9, 0, 2, 8],
    3: [2, 6, 3, 0, 9, 7, 0, 9, 3, 1, 4, 4, 5, 7, 0, 1, 3, 2, 6, 8, 6, 7, 1, 4, 2],
    4: [0, 6, 4, 7, 3, 7, 2, 4, 6, 1, 9, 3, 5, 1, 2, 1, 9, 0, 2, 8, 3, 0, 7, 4, 6],
    5: [0, 7, 9, 1, 3, 6, 2, 3, 9, 0, 4, 4, 5, 0, 7, 7, 6, 1, 2, 4, 3, 1, 2, 8, 6],
    6: [2, 7, 4, 1, 6, 6, 0, 4, 3, 7, 3, 9, 5, 2, 1, 0, 3, 7, 6, 4, 9, 1, 0, 8, 2],
    7: [6, 2, 3, 9, 0, 0, 7, 9, 1, 3, 4, 4, 5, 0, 7, 3, 1, 2, 8, 6, 7, 6, 1, 2, 4],
    8: [6, 0, 4, 3, 7, 2, 7, 4, 1, 6, 3, 9, 5, 2, 1, 9, 1, 0, 8, 2, 0, 3, 7, 6, 4],
    9: [4, 2, 9, 3, 2, 6, 8, 1, 4, 1, 0, 1, 5, 7, 7, 3, 9, 2, 0, 6, 7, 0, 3, 6, 4],
    10: [4, 6, 0, 3, 7, 2, 8, 1, 9, 0, 9, 1, 5, 2, 3, 3, 4, 7, 0, 6, 2, 1, 7, 6, 4],
    11: [6, 8, 1, 4, 1, 4, 2, 9, 3, 2, 0, 1, 5, 7, 7, 7, 0, 3, 6, 4, 3, 9, 2, 0, 6],
    12: [2, 8, 1, 9, 0, 4, 6, 0, 3, 7, 9, 1, 5, 2, 3, 2, 1, 7, 6, 4, 3, 4, 7, 0, 6],
    13: [2, 4, 9, 2, 3, 8, 6, 1, 1, 4, 1, 0, 5, 7, 7, 9, 3, 2, 6, 0, 0, 7, 3, 4, 6],
    14: [6, 4, 0, 7, 3, 8, 2, 1, 0, 9, 1, 9, 5, 3, 2, 4, 3, 7, 6, 0, 1, 2, 7, 4, 6],
    15: [8, 6, 1, 1, 4, 2, 4, 9, 2, 3, 1, 0, 5, 7, 7, 0, 7, 3, 4, 6, 9, 3, 2, 6, 0],
    16: [8, 2, 1, 0, 9, 6, 4, 0, 7, 3, 1, 9, 5, 3, 2, 1, 2, 7, 4, 6, 4, 3, 7, 6, 0]
};
var modeles6 = {
    1: [1, 2, 8, 0, 9, 9, 3, 4, 0, 4, 2, 5, 6, 4, 3, 1, 5, 2, 9, 3, 7, 5, 0, 7, 1],
    2: [1, 9, 2, 1, 7, 2, 3, 5, 5, 5, 8, 4, 6, 2, 0, 0, 0, 4, 9, 7, 9, 4, 3, 3, 1],
    3: [9, 3, 4, 0, 4, 1, 2, 8, 0, 9, 2, 5, 6, 4, 3, 7, 5, 0, 7, 1, 1, 5, 2, 9, 3],
    4: [2, 3, 5, 5, 5, 1, 9, 2, 1, 7, 8, 4, 6, 2, 0, 9, 4, 3, 3, 1, 0, 0, 4, 9, 7],
    5: [2, 1, 8, 9, 0, 3, 9, 4, 4, 0, 5, 2, 6, 3, 4, 5, 1, 2, 3, 9, 5, 7, 0, 1, 7],
    6: [9, 1, 2, 7, 1, 3, 2, 5, 5, 5, 4, 8, 6, 0, 2, 0, 0, 4, 7, 9, 4, 9, 3, 1, 3],
    7: [3, 9, 4, 4, 0, 2, 1, 8, 9, 0, 5, 2, 6, 3, 4, 5, 7, 0, 1, 7, 5, 1, 2, 3, 9],
    8: [3, 2, 5, 5, 5, 9, 1, 2, 7, 1, 4, 8, 6, 0, 2, 4, 9, 3, 1, 3, 0, 0, 4, 7, 9]
};
var modeles7 = {
    1: [8, 4, 5, 1, 2, 3, 5, 0, 8, 4, 4, 0, 7, 1, 8, 0, 2, 6, 9, 3, 5, 9, 2, 1, 3],
    2: [8, 3, 4, 0, 5, 4, 5, 0, 2, 9, 5, 0, 7, 6, 2, 1, 8, 1, 9, 1, 2, 4, 8, 3, 3],
    3: [3, 5, 0, 8, 4, 8, 4, 5, 1, 2, 4, 0, 7, 1, 8, 5, 9, 2, 1, 3, 0, 2, 6, 9, 3],
    4: [4, 5, 0, 2, 9, 8, 3, 4, 0, 5, 5, 0, 7, 6, 2, 2, 4, 8, 3, 3, 1, 8, 1, 9, 1],
    5: [4, 8, 5, 2, 1, 5, 3, 0, 4, 8, 0, 4, 7, 8, 1, 2, 0, 6, 3, 9, 9, 5, 2, 3, 1],
    6: [3, 8, 4, 5, 0, 5, 4, 0, 9, 2, 0, 5, 7, 2, 6, 8, 1, 1, 1, 9, 4, 2, 8, 3, 3],
    7: [5, 3, 0, 4, 8, 4, 8, 5, 2, 1, 0, 4, 7, 8, 1, 9, 5, 2, 3, 1, 2, 0, 6, 3, 9],
    8: [5, 4, 0, 9, 2, 3, 8, 4, 5, 0, 0, 5, 7, 2, 6, 4, 2, 8, 3, 3, 8, 1, 1, 1, 9]
};
var modeles8 = {
    1: [1, 5, 6, 4, 4, 3, 2, 2, 9, 4, 3, 7, 8, 2, 0, 7, 0, 3, 5, 5, 6, 6, 1, 0, 7],
    2: [1, 3, 3, 7, 6, 5, 2, 7, 0, 6, 6, 2, 8, 3, 1, 4, 9, 2, 5, 0, 4, 4, 0, 5, 7],
    3: [3, 2, 2, 9, 4, 1, 5, 6, 4, 4, 3, 7, 8, 2, 0, 6, 6, 1, 0, 7, 7, 0, 3, 5, 5],
    4: [5, 2, 7, 0, 6, 1, 3, 3, 7, 6, 6, 2, 8, 3, 1, 4, 4, 0, 5, 7, 4, 9, 2, 5, 0],
    5: [5, 1, 6, 4, 4, 2, 3, 2, 4, 9, 7, 3, 8, 0, 2, 0, 7, 3, 5, 5, 6, 6, 1, 7, 0],
    6: [3, 1, 3, 6, 7, 2, 5, 7, 6, 0, 2, 6, 8, 1, 3, 9, 4, 2, 0, 5, 4, 4, 0, 7, 5],
    7: [2, 3, 2, 4, 9, 5, 1, 6, 4, 4, 7, 3, 8, 0, 2, 6, 6, 1, 7, 0, 0, 7, 3, 5, 5],
    8: [2, 5, 7, 6, 0, 3, 1, 3, 6, 7, 2, 6, 8, 1, 3, 4, 4, 0, 7, 5, 9, 4, 2, 0, 5]
};
var modeles9 = {
    1: [6, 0, 5, 8, 1, 7, 4, 1, 6, 2, 5, 2, 9, 0, 4, 2, 6, 4, 3, 5, 0, 8, 1, 3, 8],
    2: [6, 7, 5, 2, 0, 0, 4, 2, 6, 8, 5, 1, 9, 4, 1, 8, 6, 0, 3, 3, 1, 2, 4, 5, 8],
    3: [7, 4, 1, 6, 2, 6, 0, 5, 8, 1, 5, 2, 9, 0, 4, 0, 8, 1, 3, 8, 2, 6, 4, 3, 5],
    4: [0, 4, 2, 6, 8, 6, 7, 5, 2, 0, 5, 1, 9, 4, 1, 1, 2, 4, 5, 8, 8, 6, 0, 3, 3],
    5: [0, 6, 5, 1, 8, 4, 7, 1, 2, 6, 2, 5, 9, 4, 0, 6, 2, 4, 5, 3, 8, 0, 1, 8, 3],
    6: [7, 6, 5, 0, 2, 4, 0, 2, 8, 6, 1, 5, 9, 1, 4, 6, 8, 0, 3, 3, 2, 1, 4, 8, 5],
    7: [4, 7, 1, 2, 6, 0, 6, 5, 1, 8, 2, 5, 9, 4, 0, 8, 0, 1, 8, 3, 6, 2, 4, 5, 3],
    8: [4, 0, 2, 8, 6, 7, 6, 5, 0, 2, 1, 5, 9, 1, 4, 2, 1, 4, 8, 5, 6, 8, 0, 3, 3]
};
var modeles2Carres4 = {
    1: [6, 8, 0, 1, 5, 3, 3, 2, 5, 7, 1, 7, 4, 6, 2, 7, 0, 8, 0, 5, 3, 2, 6, 8, 1, 0, 5, 6, 1, 8, 8, 1, 1, 8, 2, 2, 7, 4, 0, 7, 3, 5, 6, 6, 0, 7, 2, 3, 5, 3],
    2: [6, 3, 1, 7, 3, 8, 3, 7, 0, 2, 0, 2, 4, 8, 6, 1, 5, 6, 0, 8, 5, 7, 2, 5, 1, 0, 8, 2, 3, 7, 5, 1, 7, 5, 2, 6, 1, 4, 6, 3, 1, 8, 0, 6, 5, 8, 2, 7, 0, 3],
    3: [3, 6, 1, 3, 7, 3, 8, 7, 2, 0, 2, 0, 4, 6, 8, 5, 1, 6, 8, 0, 7, 5, 2, 1, 5, 8, 0, 2, 7, 3, 1, 5, 7, 2, 5, 1, 6, 4, 3, 6, 8, 1, 0, 5, 6, 2, 8, 7, 3, 0],
    4: [8, 3, 7, 0, 2, 6, 3, 1, 7, 3, 0, 2, 4, 8, 6, 5, 7, 2, 5, 1, 1, 5, 6, 0, 8, 5, 1, 7, 5, 2, 0, 8, 2, 3, 7, 6, 1, 4, 6, 3, 8, 2, 7, 0, 3, 1, 8, 0, 6, 5],
    5: [8, 6, 0, 5, 1, 3, 3, 2, 7, 5, 7, 1, 4, 2, 6, 0, 7, 8, 5, 0, 2, 3, 6, 1, 8, 5, 0, 6, 8, 1, 1, 8, 1, 2, 8, 7, 2, 4, 7, 0, 5, 3, 6, 0, 6, 2, 7, 3, 3, 5],
    6: [3, 3, 2, 5, 7, 6, 8, 0, 1, 5, 1, 7, 4, 6, 2, 3, 2, 6, 8, 1, 7, 0, 8, 0, 5, 8, 1, 1, 8, 2, 0, 5, 6, 1, 8, 2, 7, 4, 0, 7, 7, 2, 3, 5, 3, 3, 5, 6, 6, 0]
};

var modeles2Carres5 = {
    1: [5, 3, 3, 2, 7, 8, 5, 1, 6, 0, 6, 8, 4, 2, 0, 1, 3, 7, 2, 7, 0, 1, 5, 8, 6, 2, 7, 4, 1, 6, 8, 6, 0, 6, 0, 0, 2, 5, 9, 4, 7, 1, 2, 3, 7, 3, 4, 9, 1, 3],
    2: [8, 5, 1, 6, 0, 5, 3, 3, 2, 7, 6, 8, 4, 2, 0, 0, 1, 5, 8, 6, 1, 3, 7, 2, 7, 8, 6, 0, 6, 0, 2, 7, 4, 1, 6, 0, 2, 5, 9, 4, 3, 4, 9, 1, 3, 7, 1, 2, 3, 7],
    3: [3, 5, 3, 7, 2, 5, 8, 1, 0, 6, 8, 6, 4, 0, 2, 3, 1, 7, 7, 2, 1, 0, 5, 6, 8, 7, 2, 4, 6, 1, 6, 8, 0, 0, 6, 2, 0, 5, 4, 9, 1, 7, 2, 7, 3, 4, 3, 9, 3, 1],
    4: [5, 8, 6, 1, 0, 3, 5, 8, 3, 1, 3, 1, 4, 7, 5, 2, 6, 2, 2, 8, 7, 0, 0, 7, 6, 2, 8, 0, 7, 3, 7, 6, 2, 1, 4, 4, 0, 5, 2, 9, 1, 6, 9, 3, 1, 6, 0, 4, 7, 3],
    5: [3, 5, 8, 3, 1, 5, 8, 6, 1, 0, 3, 1, 4, 7, 5, 7, 0, 0, 7, 6, 2, 6, 2, 2, 8, 7, 6, 2, 1, 4, 2, 8, 0, 7, 3, 4, 0, 5, 2, 9, 6, 0, 4, 7, 3, 1, 6, 9, 3, 1],
    6: [8, 5, 6, 0, 1, 5, 3, 8, 1, 3, 1, 3, 4, 5, 7, 6, 2, 2, 8, 2, 0, 7, 0, 6, 7, 8, 2, 0, 3, 7, 6, 7, 2, 4, 1, 0, 4, 5, 9, 2, 6, 1, 9, 1, 3, 0, 6, 4, 3, 7]
};

var modeles2Carres6 = {
    1: [0, 8, 1, 4, 7, 3, 2, 6, 3, 6, 2, 7, 5, 4, 2, 9, 3, 7, 0, 1, 6, 0, 1, 9, 4, 0, 1, 3, 9, 7, 9, 4, 5, 2, 0, 2, 4, 6, 0, 8, 4, 8, 5, 1, 2, 5, 3, 1, 8, 3],
    2: [3, 2, 6, 3, 6, 0, 8, 1, 4, 7, 2, 7, 5, 4, 2, 6, 0, 1, 9, 4, 9, 3, 7, 0, 1, 9, 4, 5, 2, 0, 0, 1, 3, 9, 7, 2, 4, 6, 0, 8, 5, 3, 1, 8, 3, 4, 8, 5, 1, 2],
    3: [8, 0, 1, 7, 4, 2, 3, 6, 6, 3, 7, 2, 5, 2, 4, 3, 9, 7, 1, 0, 0, 6, 1, 4, 9, 1, 0, 3, 7, 9, 4, 9, 5, 0, 2, 4, 2, 6, 8, 0, 8, 4, 5, 2, 1, 3, 5, 1, 3, 8],
    4: [0, 3, 2, 9, 6, 8, 2, 7, 3, 0, 1, 6, 5, 7, 1, 4, 3, 4, 0, 9, 7, 6, 2, 1, 4, 0, 9, 2, 4, 5, 1, 4, 4, 8, 3, 3, 5, 6, 5, 1, 9, 2, 0, 1, 8, 7, 0, 8, 2, 3],
    5: [8, 2, 7, 3, 0, 0, 3, 2, 9, 6, 1, 6, 5, 7, 1, 7, 6, 2, 1, 4, 4, 3, 4, 0, 9, 1, 4, 4, 8, 3, 0, 9, 2, 4, 5, 3, 5, 6, 5, 1, 7, 0, 8, 2, 3, 9, 2, 0, 1, 8],
    6: [3, 0, 2, 6, 9, 2, 8, 7, 0, 3, 6, 1, 5, 1, 7, 3, 4, 4, 9, 0, 6, 7, 2, 4, 1, 9, 0, 2, 5, 4, 4, 1, 4, 3, 8, 5, 3, 6, 1, 5, 2, 9, 0, 8, 1, 0, 7, 8, 3, 2]
};

var modeles2Carres7 = {
    1: [2, 9, 1, 5, 3, 8, 4, 5, 3, 0, 0, 3, 7, 2, 8, 9, 4, 2, 4, 1, 1, 0, 5, 6, 8, 4, 1, 5, 2, 8, 6, 8, 1, 5, 0, 3, 1, 7, 9, 0, 4, 2, 5, 0, 9, 3, 8, 2, 4, 3],
    2: [8, 4, 5, 3, 0, 2, 9, 1, 5, 3, 0, 3, 7, 2, 8, 1, 0, 5, 6, 8, 9, 4, 2, 4, 1, 6, 8, 1, 5, 0, 4, 1, 5, 2, 8, 3, 1, 7, 9, 0, 3, 8, 2, 4, 3, 4, 2, 5, 0, 9],
    3: [9, 2, 1, 3, 5, 4, 8, 5, 0, 3, 3, 0, 7, 8, 2, 4, 9, 2, 1, 4, 0, 1, 5, 8, 6, 1, 4, 5, 8, 2, 8, 6, 1, 0, 5, 1, 3, 7, 0, 9, 2, 4, 5, 9, 0, 8, 3, 2, 3, 4],
    4: [2, 8, 0, 9, 1, 9, 4, 3, 4, 0, 1, 5, 7, 2, 5, 5, 3, 2, 4, 6, 3, 0, 8, 1, 8, 4, 6, 3, 4, 3, 1, 8, 1, 2, 8, 5, 1, 7, 5, 2, 2, 5, 9, 0, 4, 8, 0, 0, 9, 3],
    5: [9, 4, 3, 4, 0, 2, 8, 0, 9, 1, 1, 5, 7, 2, 5, 3, 0, 8, 1, 8, 5, 3, 2, 4, 6, 1, 8, 1, 2, 8, 4, 6, 3, 4, 3, 5, 1, 7, 5, 2, 8, 0, 0, 9, 3, 2, 5, 9, 0, 4],
    6: [8, 2, 0, 1, 9, 4, 9, 3, 0, 4, 5, 1, 7, 5, 2, 3, 5, 2, 6, 4, 0, 3, 8, 8, 1, 6, 4, 3, 3, 4, 8, 1, 1, 8, 2, 1, 5, 7, 2, 5, 5, 2, 9, 4, 0, 0, 8, 0, 3, 9]
};

window.addEventListener("orientationchange",function(){
    if(screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary"){
        $("#bg").css("max-width",window.screen.height).css("max-height",window.screen.width);
        $("#bg2").css("max-width",window.screen.height).css("max-height",window.screen.width);
        
        document.getElementsByTagName("body")[0].style.transform="rotate(90deg)";
    }else{
        document.getElementsByTagName("body")[0].removeAttribute("style");
    }
});