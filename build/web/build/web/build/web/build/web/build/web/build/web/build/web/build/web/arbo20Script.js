/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Variables Globales*/
var chiffreCentral = Math.floor(Math.random() * (9 - 4 + 1) + 4);
var chiffreCentralA = 0;
var chiffreCentralB = 0;
var leNiveau = 1;
var chronoEcroule = false;
var deCompter = true;
var Compter = true;
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
var modeles2Carres = {
    1: [6, 8, 0, 1, 5, 3, 3, 2, 5, 7, 1, 7, 4, 6, 2, 7, 0, 8, 0, 5, 3, 2, 6, 8, 1, 0, 5, 6, 1, 8, 8, 1, 1, 8, 2, 2, 7, 4, 0, 7, 3, 5, 6, 6, 0, 7, 2, 3, 5, 3],
    2: [6, 3, 1, 7, 3, 8, 3, 7, 0, 2, 0, 2, 4, 8, 6, 1, 5, 6, 0, 8, 5, 7, 2, 5, 1, 0, 8, 2, 3, 7, 5, 1, 7, 5, 2, 6, 1, 4, 6, 3, 1, 8, 0, 6, 5, 8, 2, 7, 0, 3],
    3: [3, 6, 1, 3, 7, 3, 8, 7, 2, 0, 2, 0, 4, 6, 8, 5, 1, 6, 8, 0, 7, 5, 2, 1, 5, 8, 0, 2, 7, 3, 1, 5, 7, 2, 5, 1, 6, 4, 3, 6, 8, 1, 0, 5, 6, 2, 8, 7, 3, 0],
    4: [8, 3, 7, 0, 2, 6, 3, 1, 7, 3, 0, 2, 4, 8, 6, 5, 7, 2, 5, 1, 1, 5, 6, 0, 8, 5, 1, 7, 5, 2, 0, 8, 2, 3, 7, 6, 1, 4, 6, 3, 8, 2, 7, 0, 3, 1, 8, 0, 6, 5],
    5: [8, 6, 0, 5, 1, 3, 3, 2, 7, 5, 7, 1, 4, 2, 6, 0, 7, 8, 5, 0, 2, 3, 6, 1, 8, 5, 0, 6, 8, 1, 1, 8, 1, 2, 8, 7, 2, 4, 7, 0, 5, 3, 6, 0, 6, 2, 7, 3, 3, 5],
    6: [3, 3, 2, 5, 7, 6, 8, 0, 1, 5, 1, 7, 4, 6, 2, 3, 2, 6, 8, 1, 7, 0, 8, 0, 5, 8, 1, 1, 8, 2, 0, 5, 6, 1, 8, 2, 7, 4, 0, 7, 7, 2, 3, 5, 3, 3, 5, 6, 6, 0]
};
/*Gestion du click sur un bouton*/
// declaration de la variable qui contientdra l'id de la case active
var curentTxtId = "";
var valActC = "";
var valActA = "";
var valActB = "";
var valEntree = "";
var btnXClicked = false;
var backspace = 0;
//click sur le bouton 'X'
$("#bx").click(function (e) {
    if (curentTxtId !== "") {
        btnXClicked = true;
        $("#" + curentTxtId).trigger("keypress");
        $("#" + curentTxtId).focus();
    }
});

// click sur un bouton etiqueté par un chiffre
$("input[type=button]").click(function (e) {
    if (curentTxtId !== "" && $(this).val() !== "X") {
        valEntree = $(this).val();
        $("#" + curentTxtId).trigger("keypress");
        $("#" + curentTxtId).focus();
    }
});

/*Gestion de la valeur entreé par l'utilisateur*/
//Recuperation de l'"id" de la case active/pointée

$("input[type=text]").focus(function (e) {
    curentTxtId = $(this).attr("id");

    var p = curentTxtId.substring(0, 1);
    if (p === "c") {
        valActC = $(this).val();
    } else if (p === "a") {
        valActA = $(this).val();
    } else if (p === "b") {
        valActB = $(this).val();
    }
    if (curentTxtId === "b11" || curentTxtId === "b12" || curentTxtId === "b21" || curentTxtId === "b22") {
        valActA = $(this).val();
    }
});
$('input[type=text]').on('keyup', function (e) {
    if (parseInt(e.which) === 8) {
        backspace = parseInt(e.which);
        $("#" + curentTxtId).trigger("keypress");
    }
});
$("#rd-chrono").click(function () {
    if ($("#rd-chrono").attr("checked") === "checked") {
        $("#cmbMun").prop("disabled", true);
        $("#txt_chrono_cr").val("chrono");
    }
});
$("#rd-ctp-rebours").click(function () {
    $("#rd-ctp-rebours").attr("checked", "checked");
    if ($("#rd-ctp-rebours").attr("checked") === "checked") {
        $("#cmbMun").attr("disabled", false);
        $("#txt_chrono_cr").val("cpt-rebours");
    }

});


//Verification de la valeur saisie qui doit etre un chiffre entre 0 et 9,sauf pour les
//cases de jointures pour le terrain à 2 carrés
$('input[type=text]:not(#b11,#b12,#b21,#b22)').on('keypress', function (e) {
    curentTxtId = $(this).attr("id");
    var r = new RegExp("[0-9]");
    var k = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    //refu d'autres caracteres que 0,1,2,3,4,5,6,7,8,et 9
    //Est-ce que k n'est pas dans l'interval de 0-9
    if (!r.test(k)) {
        if (backspace === 8) {
            btnXClicked = true;
            backspace = 0;
        }
        e.preventDefault();
        // return false;
    } else {
        valEntree = k;
    }
    if (btnXClicked === true) {// si l'evenement keypress est declenché par le bouton 'X'
        $("#" + curentTxtId).val("");
        $("#" + curentTxtId).trigger("change");
        //modifLigColInflu(curentTxtId);
        modifCasesLiCoNonRemplie(curentTxtId);//reset Ligne/Colonne
        majCouleurCJ();
        btnXClicked = false;
    }
    if (valEntree !== "") {//cette condition n'est vraie que si l'evenement 'keypress' est provoqué par un click sur un bouton contenant un chiffre
        var premiereLettre = curentTxtId.substring(0, 1);
        if (premiereLettre === "c") {
            traiterSaisie(chiffreCentral, e);
        } else {
            if (premiereLettre === "a") {
                chiffreCentralA = $("#a33").val();
                traiterSaisie(chiffreCentralA, e);
            } else if (premiereLettre === "b") {
                chiffreCentralB = $("#b33").val();
                traiterSaisie(chiffreCentralB, e);
            }
        }
    }
});
//fonction pour traiter la valeur saisie en generale
function traiterSaisie(chifCentral, e) {
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
        alert("Le chiffre " + valEntree + " est déjà dans la case centrale et doit être unique.");
        valEntree = "";
        $("#" + curentTxtId).val("");
        $("#" + curentTxtId).trigger("change");
        // modifLigColInflu(curentTxtId);//si la case courante est partagé, elle lance le trigger sur la case correspondante
        modifCasesLiCoNonRemplie(curentTxtId);
        majCouleurCJ();
        e.preventDefault();
        //return false;
    } else if (verifNombrOccurMax3(parseInt(valEntree)) === true) {//si le nombre d'occurences de la valeur du btn clické est = 3
        if (valAct !== valEntree) {
            $("#" + curentTxtId).val("");
            $("#" + curentTxtId).trigger("change");
            //   modifLigColInflu(curentTxtId);
            modifCasesLiCoNonRemplie(curentTxtId);
            majCouleurCJ();
            alert("Le chiffre " + valEntree + " a déjà 3 occurences, changez de chiffre svp !");
        }
        valEntree = "";
        e.preventDefault();
        // return false;
    } else {//si tout est bon avec la valeur entrée par la souris(en clickant sur un de bouton chiffré),
        //sa saisie est acceptée et on incremente le nombre de ses occurences

        if (verifSomLigCol20(curentTxtId, valEntree) === true) {
            $("#" + curentTxtId).val(valEntree);

            // modifLigColInflu(curentTxtId);

            if (ligTotRemplie(curentTxtId) === true) {
                modifLigne(curentTxtId);
            }
            if (colTotRemplie(curentTxtId) === true) {
                modifColonne(curentTxtId);
            }
            majCouleurCJ();
            changerCouleurCaseModifiable();
            $("#" + curentTxtId).trigger("change");
            e.preventDefault();//on refuse le comportement par default car on gere nous meme ce comportement ci haut
            //return false;
        } else {
            if (somLigne(curentTxtId, valEntree) > 20 || somColonne(curentTxtId, valEntree) > 20 ||
                    (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) < 20) ||
                    (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) < 20)) {
                if (valAct !== valEntree) {
                    $("#" + curentTxtId).val("");
                    $("#" + curentTxtId).trigger("change");
                    // modifLigColInflu(curentTxtId);
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    alert("Le chiffre " + valEntree + " n'est pas accepté dans cette case car la somme sur sa ligne ou sur sa colonne n'est pas égale à 20");
                }
                e.preventDefault();
                // return false;
            } else if (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) === 20) {
                $("#" + curentTxtId).val(valEntree);
                modifLigne(curentTxtId);
                majCouleurCJ();
                changerCouleurCaseModifiable();
                $("#" + curentTxtId).trigger("change");
                //  modifLigColInflu(curentTxtId);
            } else if (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) === 20) {
                $("#" + curentTxtId).val(valEntree);

                modifColonne(curentTxtId);
                majCouleurCJ();
                changerCouleurCaseModifiable();
                $("#" + curentTxtId).trigger("change");
                //   modifLigColInflu(curentTxtId);
            } else {
                $("#" + curentTxtId).val(valEntree);
                $("#" + curentTxtId).trigger("change");
                // modifLigColInflu(curentTxtId);
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
//keypress pour les cases de jointures pour le terrain à 2 carrés
$('#b11,#b12,#b21,#b22').on('keypress', function (e) {
    curentTxtId = $(this).attr("id");
    // var premiereLettre = curentTxtId.substring(0,1);
    var r = new RegExp("[0-9]");
    var k = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    //refu d'autres caracteres que 0,1,2,3,4,5,6,7,8,et 9
    //Est-ce que k n'est pas dans l'interval de 0-9
    var carreAOk = true;
    var carreBOk = true;
    var idAct = curentTxtId;
    if (!r.test(k)) {
        if (backspace === 8) {
            btnXClicked = true;
            backspace = 0;
        }
        e.preventDefault();
        // return false;
    } else {
        valEntree = k;
    }

    if (btnXClicked === true) {// si l'evenement keypress est declenché par le bouton 'X'   
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
    if (valEntree !== "") {
        chiffreCentralB = $("#b33").val();
        carreBOk = traiterSaisieCJ(chiffreCentralB, e);
        if (carreBOk === true) {
            chiffreCentralA = $("#a33").val();
            switch (idAct) {
                case "b11":
                    curentTxtId = "a44";
                    carreAOk = traiterSaisieCJ(chiffreCentralA, e);
                    break;
                case "b12":
                    curentTxtId = "a45";
                    carreAOk = traiterSaisieCJ(chiffreCentralA, e);
                    break;
                case "b21":
                    curentTxtId = "a54";
                    carreAOk = traiterSaisieCJ(chiffreCentralA, e);
                    break;
                case "b22":
                    curentTxtId = "a55";
                    carreAOk = traiterSaisieCJ(chiffreCentralA, e);
                    break;
                default:
                    break;
            }
            if (carreAOk === true) {

                $("#" + curentTxtId).val(valEntree);
                $("#" + curentTxtId).trigger("change");
                if (ligTotRemplie(curentTxtId) === true) {
                    modifLigne(curentTxtId);
                }
                if (colTotRemplie(curentTxtId) === true) {
                    modifColonne(curentTxtId);
                }
                changerCouleurCaseModifiable();
                majCouleurCJ();

                curentTxtId = idAct;
                $("#" + curentTxtId).val(valEntree);
                $("#" + curentTxtId).trigger("change");
                if (ligTotRemplie(curentTxtId) === true) {
                    modifLigne(curentTxtId);
                }
                if (colTotRemplie(curentTxtId) === true) {
                    modifColonne(curentTxtId);
                }
                changerCouleurCaseModifiable();
            } else if (carreAOk === false) {
                $("#" + curentTxtId).val("");
                $("#" + curentTxtId).trigger("change");
                modifCasesLiCoNonRemplie(curentTxtId);//reset
                majCouleurCJ();
                $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
                curentTxtId = idAct;
                $("#" + curentTxtId).val("");
                $("#" + curentTxtId).trigger("change");
                modifCasesLiCoNonRemplie(curentTxtId);
                $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
            }
        } else if (carreBOk === false) {

            $("#" + curentTxtId).val("");
            $("#" + curentTxtId).trigger("change");
            modifCasesLiCoNonRemplie(curentTxtId);
            $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
            switch (idAct) {
                case "b11":
                    curentTxtId = "a44";
                    $("#" + curentTxtId).val("");
                    $("#" + curentTxtId).trigger("change");
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
                    break;
                case "b12":
                    curentTxtId = "a45";
                    $("#" + curentTxtId).val("");
                    $("#" + curentTxtId).trigger("change");
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
                    break;
                case "b21":
                    curentTxtId = "a54";
                    $("#" + curentTxtId).val("");
                    $("#" + curentTxtId).trigger("change");
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
                    break;
                case "b22":
                    curentTxtId = "a55";
                    $("#" + curentTxtId).val("");
                    $("#" + curentTxtId).trigger("change");
                    modifCasesLiCoNonRemplie(curentTxtId);
                    majCouleurCJ();
                    $("#" + curentTxtId).css("border", "2px inset rgb(118, 118, 118)");
                    break;
                default:
                    break;
            }
        }
        curentTxtId = idAct;
        valEntree = "";
    }
});

function gererBtnX(caseAct) {
    $("#" + caseAct).val("");
    $("#" + caseAct).trigger("change");

    modifCasesLiCoNonRemplie(caseAct);//reset Ligne/Colonne
    btnXClicked = false;
}
//fonction pour traiter la valeur saisie pour case de jointure
function traiterSaisieCJ(chifCentral, e) {
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
        alert("Le chiffre " + valEntree + " est déjà dans la case centrale et doit être unique.");
        e.preventDefault();
        return false;
    } else if (verifNombrOccurMax3(parseInt(valEntree)) === true) {//si le nombre d'occurences de la valeur du btn clické est = 3
        if (valAct !== valEntree) {
            alert("Le chiffre " + valEntree + " a déjà 3 occurences, changez de chiffre svp a!");
            e.preventDefault();
            return false;
        } else {
            e.preventDefault();
        }
    } else {//si tout est bon
        if (verifSomLigCol20(curentTxtId, valEntree) === true) {
            e.preventDefault();//on refuse le comportement par default
            return true;
        } else {
            if (somLigne(curentTxtId, valEntree) > 20 || somColonne(curentTxtId, valEntree) > 20 ||
                    (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) < 20) ||
                    (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) < 20)) {

                if (valAct !== valEntree) {
                    alert("Le chiffre " + valEntree + " n'est pas accepté dans cette case car la somme sur sa ligne ou sur sa colonne de l'un de carré n'est pas égale à 20");
                    e.preventDefault();
                    return false;
                } else {
                    e.preventDefault();
                }

            } else if (ligTotRemplie(curentTxtId) === true && somLigne(curentTxtId, valEntree) === 20) {
                return true;
            } else if (colTotRemplie(curentTxtId) === true && somColonne(curentTxtId, valEntree) === 20) {
                return true;
            } else {
                return true;
            }
        }
    }
}

/*test de la somme en ligne ou colonne apres changement de valeur*/
$("input[type=text]").change(function (e) {
    var p = curentTxtId.substring(0, 1);

    if (p === "c") {
        if (valActC !== "") {
            decrementerOccur(parseInt(valActC));
            valActC = $("#" + curentTxtId).val();
            if (valActC !== "") {
                incrementerOccur(parseInt(valActC));
            }

        } else {
            valActC = $("#" + curentTxtId).val();
            if (valActC !== "") {
                incrementerOccur(parseInt(valActC));
            }
        }

    } else if (p === "a") {
        if (valActA !== "") {
            decrementerOccur(parseInt(valActA));
            valActA = $("#" + curentTxtId).val();
            if (valActA !== "") {
                incrementerOccur(parseInt(valActA));
            }
        } else {
            valActA = $("#" + curentTxtId).val();
            if (valActA !== "") {
                incrementerOccur(parseInt(valActA));
            }
        }
    } else if (p === "b") {
        if (valActB !== "") {
            decrementerOccur(parseInt(valActB));
            valActB = $("#" + curentTxtId).val();
            if (valActB !== "") {
                incrementerOccur(parseInt(valActB));
            }
        } else {
            valActB = $("#" + curentTxtId).val();
            if (valActB !== "") {
                incrementerOccur(parseInt(valActB));
            }
        }
    }
});
//fonction pour gagner
function gagnerA20() {
    var cent = 0;
    var premiereLettre = curentTxtId.substring(0, 1);
    if (chronoEcroule === true) {
        $("#msgDiv").css("visibility", "visible");
        $("#msglbl1").text("DESOLE,le compte à rebours s'est ecroulé,vous avez perdu !!");
        $("#msglbl2").text("DESOLE,le compte à rebours s'est ecroulé,vous avez perdu !!");
        desactiverTout();
    } else {
        if (premiereLettre === "c") {
            $("input[type=text]").each(function (indice) {
                cent = cent + parseInt($(this).val());
                if (cent === 100) {
                    deCompter = false;
                    Compter = false;
                    $("#msgDiv").css("visibility", "visible");
                    $("#msglbl1").text("BRAVO,vous avez gagné !!");
                    desactiverTout();
                }
            });
        } else {
            $("input[type=text]").each(function (indice) {
                cent = cent + parseInt($(this).val());
                if (cent === 200) {
                    deCompter = false;
                    Compter = false;
                    $("#msgDiv").css("visibility", "visible");
                    $("#msglbl2").text("BRAVO,vous avez gagné !!");
                    desactiverTout();
                }
            });
        }
    }
}
// fonction pour vider les cases qui dont la ligne ou colonne n'est pas remplie
function modifCasesLiCoNonRemplie(casecourante) {
    resetColonne(casecourante);
    resetLigne(casecourante);
    $("#" + casecourante).css("background-color", "rgb(255,255,255)");
}

/* Les Zones de textes de jpintures entre les deux carrés*/
//    $("#b11").change(function () {
//        $("#a44").val($("#b11").val());
//    });
//    $("#b12").change(function () {
//        $("#a45").val($("#b12").val());        
//    });
//    $("#b21").change(function () {
//        $("#a54").val($("#b21").val()); 
//    });
//    $("#b22").change(function () {
//        $("#a55").val($("#b22").val());  
//    });
function modifLigColInflu(idCase) {
    //btnXClicked = true;
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
    //btnXClicked = false;
}

/* Algorithme de remplissage
 * va se lancer au chargement de la page
 * */
$(function (e) {
    $("#apropo_a20_div").slideUp("fast");
    $("#regle_a20_div").slideUp("fast");
    $("#cons_dev_a20_div").slideUp("fast");
    $("#con_ins_a20_div").slideUp("fast");
    setInterval(majCompteARebours, 1000);
});

/*Mes Fonctions*/

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

// Mis a jour du de temps
//function majTime() {
//    gagnerA20();
//    var dat = new Date();
//    var time;
//    time = dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
//    $("#timer").text(time);
//    // majCompteARebours();
//}

// Mis à jour du compte à rebours

function majCompteARebours() {
//    var v= $('select#cmbChrono').children("option:selected").val();
//    alert("chrono = "+v+"\n"+"niveau = "+$('#cmbNiv option:selected').val());
    animA20();
    if ($("#txt_c_cr").text() === "chrono") {
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
function animA20() {
    if ($("#titre-a20").css("color") + "" === "rgb(217, 83, 79)") {
        $("#titre-a20").css("color", "rgb(92, 184, 92");
    } else if ($("#titre-a20").css("color") + "" === "rgb(92, 184, 92)") {
        $("#titre-a20").css("color", "rgb(51, 122, 183)");
    } else if ($("#titre-a20").css("color") + "" === "rgb(51, 122, 183)") {
        $("#titre-a20").css("color", "rgb(217, 83, 79)");
    }
}

// Fonction pour verifier si un element existe deja dans un tableau
function trouverIndice(indice, tableau) {
    return tableau.some(function (i) {
        return i === indice;
    });
}

//Nouvelle fonction de remplissage
function remplirArbo() {
    activerTout();
    resetOccurs();
    var idModel;
    var model;
    switch (chiffreCentral) {
        case 4:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles4[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        case 5:
            idModel = Math.floor(Math.random() * (16 - 1 + 1) + 1);
            model = modeles5[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        case 6:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles6[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        case 7:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles7[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        case 8:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles8[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        case 9:
            idModel = Math.floor(Math.random() * (8 - 1 + 1) + 1);
            model = modeles9[idModel];
            for (var i = 0; i < 25; i++) {
                $("#" + cases[i + 1]).val(model[i]);
            }
            viderCases();
            break;
        default:
            break;
    }
}
function remplirArbo2() {
    activerTout();
    resetOccurs();
    var idModel;
    var model;

    idModel = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    model = modeles2Carres[idModel];
    $("input[type=text]").each(function (indice) {
        $(this).val(model[indice]);
    });
    viderCases2();
}
function viderCases() {
    //Variables
    var niveau = /*parseInt(*/$("#numNiv").text()/*)*/;
    var casesDejaVidees = [0, 13];// zero nous permet d'entrer dans la deuxieme boocle while et 13 et le case centrale à ne pas vider
    var indice = 0;
    var casesAVider;

    //On fixe le nombre de cases à vider par rapport au niveau
    if (niveau === "APPRENTISSAGE") {
        casesAVider = 7;
    } else if (niveau === "MOYEN") {
        casesAVider = 9;
    } else if (niveau === "MAITRISE") {
        casesAVider = 11;
    } else if (niveau === "AVANCE") {
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

        var idCaseNonVidee = cases[indice];// on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee).val("");

        casesDejaVidees.push(indice);// on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--;// on decremente le nombre des cases à vider pour finalement quitter la loop
    }
    $("input[id^=c]").each(function (indice) {
        var thisId = $(this).attr("id");
        var thisVal = $(this).val();
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
    var casesDejaVideesCaseAv = [0, 38];// zero nous permet d'entrer dans la deuxieme boocle while et; 13 et 38 sont des case centralles à ne pas vider
    var indiceCaseAv = 0;
    var casesDejaVideesCaseAr = [0, 13];// zero nous permet d'entrer dans la deuxieme boocle while et; 13 et 38 sont des case centralles à ne pas vider
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
        var idCaseNonVidee = cases2[indiceCaseAr];// on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee).val("");

        casesDejaVideesCaseAr.push(indiceCaseAr);// on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--;// on decremente le nombre des cases à vider pour finalement quitter la loop
    }

    //on fait correspondre les cases de jointure du carré avant vers le carré arriere
    faireCorespondreLesCJ();

    /* on vide le arriere carré (à gauche)*/
    //On fixe le nombre de cases à vider par rapport au niveau
    initCasesAVider();
    var countVide = 0;
    // on compte le nombre des cases vidées suite à la correspondance s'il y a en
    for (var i = 26; i < 51; i++) {
        if ($("#" + cases2[i]).val() === "") {
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
        var idCaseNonVidee2 = cases2[indiceCaseAv];// on recupere l'id d'une case par rapport à l'indice
        $("#" + idCaseNonVidee2).val("");

        casesDejaVideesCaseAv.push(indiceCaseAv);// on ajoute l'indice de la case deja vidée dans le tableau des cases vidées
        casesAVider--;// on decremente le nombre des cases à vider pour finalement quitter la loop
    }
    // on desactive toutes les cases preremplies et colorie les ligne/colonnes totalement remplies

    $("input[type = text]").each(function (indice) {
        var thisId = $(this).attr("id");
        var thisVal = $(this).val();
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
        if (niveau === "APPRENTISSAGE") {
            casesAVider = 7;
        } else if (niveau === "MOYEN") {
            casesAVider = 9;
        } else if (niveau === "MAITRISE") {
            casesAVider = 11;
        } else if (niveau === "AVANCE") {
            casesAVider = 12;
        } else {
            casesAVider = 7;
        }
    }
}

function faireCorespondreLesCJ() {
    $("#b11").val($("#a44").val());
    $("#b12").val($("#a45").val());
    $("#b21").val($("#a54").val());
    $("#b22").val($("#a55").val());
}
//Une fonction pour tout activer
function activerTout() {
    $("input[type=text]").attr("disabled", false);
    $("input[type=button]").attr("disabled", false);
}
//Une fonction pour tout desactiver
function desactiverTout() {
    $("input[type=text]").attr("disabled", true);
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
                    if ($("#" + cases[i]).prop("disabled") === true) {
                        $("#" + cases[i]).css("background-color", "rgb(215,215,215)");
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
                        if ($("#" + cases2[i]).prop("disabled") === true) {
                            $("#" + cases2[i]).css("background-color", "rgb(215,215,215)");
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
                        if ($("#" + cases2[i]).prop("disabled") === true) {
                            $("#" + cases2[i]).css("background-color", "rgb(215,215,215)");
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
                    if ($("#" + cases[i]).prop("disabled") === true) {
                        $("#" + cases[i]).css("background-color", "rgb(215,215,215)");
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
                        if ($("#" + cases2[i]).prop("disabled") === true) {
                            $("#" + cases2[i]).css("background-color", "rgb(215,215,215)");
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
                        if ($("#" + cases2[i]).prop("disabled") === true) {
                            $("#" + cases2[i]).css("background-color", "rgb(215,215,215)");
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
                    if (($("#" + cases[i]).val()) === "") {
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
                        if (($("#" + cases2[i]).val()) === "") {
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
                        if (($("#" + cases2[i]).val()) === "") {
                            ligRemplie = false;
                            break;
                        }
                    }
                }
            }
        }
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
                    if (($("#" + cases[i]).val()) === "") {
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
                        if (($("#" + cases2[i]).val()) === "") {
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
                        if (($("#" + cases2[i]).val()) === "") {
                            colRemplie = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return colRemplie;
}

//Maj Couleur dans les cases partagées
function majCouleurCJ() {
    if (($("#b11").css("background-color") + "" !== "rgb(180, 255, 180)")) {
        if ($("#a44").css("background-color") + "" === "rgb(180, 255, 180)") {
            $("#b11").css("background-color", "rgb(180,255,180)");
        } else if ($("#a44").css("background-color") + "" === "rgb(215,215,215)") {
            $("#b11").css("background-color", "rgb(215,215,215)");
        } else if ($("#a44").css("background-color") + "" === "rgb(255,255,255)") {
            $("#b11").css("background-color", "rgb(255,255,255)");
        }
    }
    if (($("#b12").css("background-color") + "" !== "rgb(180, 255, 180)")) {
        if ($("#a45").css("background-color") + "" === "rgb(180, 255, 180)") {
            $("#b12").css("background-color", "rgb(180,255,180)");
        } else if ($("#a45").css("background-color") + "" === "rgb(215,215,215)") {
            $("#b12").css("background-color", "rgb(215,215,215)");
        } else if ($("#a45").css("background-color") + "" === "rgb(255,255,255)") {
            $("#b12").css("background-color", "rgb(255,255,255)");
        }
    }
    if (($("#b21").css("background-color") + "" !== "rgb(180, 255, 180)")) {
        if ($("#a54").css("background-color") + "" === "rgb(180, 255, 180)") {
            $("#b21").css("background-color", "rgb(180,255,180)");
        } else if ($("#a54").css("background-color") + "" === "rgb(215,215,215)") {
            $("#b21").css("background-color", "rgb(215,215,215)");
        } else if ($("#a54").css("background-color") + "" === "rgb(255,255,255)") {
            $("#b21").css("background-color", "rgb(255,255,255)");
        }
    }
    if (($("#b22").css("background-color") + "" !== "rgb(180, 255, 180)")) {
        if ($("#a55").css("background-color") + "" === "rgb(180, 255, 180)") {
            $("#b22").css("background-color", "rgb(180,255,180)");
        } else if ($("#a55").css("background-color") + "" === "rgb(215,215,215)") {
            $("#b22").css("background-color", "rgb(215,215,215)");
        } else if ($("#a55").css("background-color") + "" === "rgb(255,255,255)") {
            $("#22").css("background-color", "rgb(255,255,255)");
        }
    }
}
//Maj Couleur dans les cases partagées
function majCouleurCJ2(idCase1, idCase2) {
    if ($(idCase1).css("background-color") + "" === "rgb(180, 255, 180)") {
        $(idCase2).css("background-color", "rgb(180,255,180)");
    } else {
        if ($(idCase2).prop("disabled") === true) {
            $(idCase2).css("background-color", "rgb(215,215,215)");
        } else {
            $(idCase2).css("background-color", "rgb(255,255,255)");
        }
    }
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
                valCase = $("#" + cases[i]).val() === "" ? 0 : parseInt($("#" + cases[i]).val());
                somLigne = somLigne + valCase;
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    valCase = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
                    somLigne = somLigne + valCase;
                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(1, 2) === lig) {
                    valCase = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
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
                valCase = $("#" + cases[i]).val() === "" ? 0 : parseInt($("#" + cases[i]).val());
                somColonne = somColonne + valCase;
            }
        }
    } else {
        if (premiereLettre === "a") {
            for (var i = 1; i <= 25; i++) {
                if (cases2[i].substring(2) === col) {
                    valCase = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
                    somColonne = somColonne + valCase;
                }
            }
        } else if (premiereLettre === "b") {
            for (var i = 26; i <= 50; i++) {
                if (cases2[i].substring(2) === col) {
                    valCase = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
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
                var valActCl1 = $("#" + cases[i]).val() === "" ? 0 : parseInt($("#" + cases[i]).val());
                somLig = somLig + valActCl1;
            } else if (cases[i].substring(2) === col) {
                var valActCl2 = $("#" + cases[i]).val() === "" ? 0 : parseInt($("#" + cases[i]).val());
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
                    var valActCl1 = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
                    somLig = somLig + valActCl1;
                } else if (cases2[i].substring(2) === col) {
                    var valActCl2 = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
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
                    var valActCl1 = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
                    somLig = somLig + valActCl1;
                } else if (cases2[i].substring(2) === col) {
                    var valActCl2 = $("#" + cases2[i]).val() === "" ? 0 : parseInt($("#" + cases2[i]).val());
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
$("#btn_val_con").click(function () {
    alert("Vous etes connecté, vous pouvez maintenant jouer en mode avec adversaire,voir vos statistic et continuer une partie enregistrée.");
});
$("#btn_val_ins").click(function () {
    alert("Votre inscription a reussie, vous pouvez maintenant se connecter pour jouir de plus des fonctionnalitées.");
    $("#ins_a20_div").addClass("non_visibl");
    $("#con_a20_div").removeClass("non_visibl");
});
$("#cmbLang").change(function () {
    var lang = $("#cmbLang").val();
    if (lang == "ANGLAIS") {
        $("#apropo_a20").text("About AbrboTwenty");
        $("#regle_a20").text("Game Rules");
        $("#cons_dev_a20").text("Owner/Designer");
        $("#con_ins_a20").text("Login/Register");
        $("#btn_jouer").text("Play");
    } else if (lang == "FRANCAIS") {
        $("#apropo_a20").text("Apropos d'ArboTwenty");
        $("#regle_a20").text("Regles du Jeu");
        $("#cons_dev_a20").text("Propiétaire/Concepteur");
        $("#con_ins_a20").text("Connection/Inscription");
        $("#btn_jouer").text("Jouer");
    }
});
/* Formule pour trouver un chiffre au hasard dans un intervalle
 * var chiffreHazard = Math.floor(Math.random() * (max - min + 1) + min);
 * */