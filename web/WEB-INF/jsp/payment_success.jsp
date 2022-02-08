<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!--<html>
<head>
   <title>Arbo20</title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="images/a20_logo.png" rel="icon" />
   <link rel="stylesheet" href="css/bootstrap.min.css"/>
</head>
<body>-->
<link rel="stylesheet" href="css/bootstrap.min.css"/>
    <style>
        body {
            text-align: center;
            background: #EBF0F5;
        }
        h1 {
            color: #3071f2;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
        }
        p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size:20px;
            margin: 0;
        }
        i {
            color: #427dff;
            font-size: 100px;
            margin-left:0px;
            margin-top: 45px;
        }
        .card {
            background: white;
            padding: 60px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            display: inline-block;
            margin: 0 auto;
        }
        .check{
            border-radius:200px; height:200px; width:200px; background: #c8deff; margin:0 auto;
        }
        /* http://waitanimate.wstone.io/#!/ */

        @media only screen and (max-width: 700px) {
            /*I Reduce the size of it 35 %*/
            h1 {
                color: #3071f2;
                font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
                font-weight: 585;
                font-size: 26px;
                margin-bottom: 5px;
            }
            p {
                color: #404F5E;
                font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
                font-size:13px;
                margin: 0;
            }
            .check{
                border-radius:130px; height:130px; width:130px; background: #c8deff; margin:0 auto;
            }
            i {
                color: #427dff;
                font-size: 65px;
                margin-left:-5px;
                margin-top: 30px;
            }
            .card {
            background: white;
            padding: 21px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            display: inline-block;
            margin: 0 auto;
         }
        }
    </style>

    <input type="hidden" id="langue" value="${lang}" />

    <div class="card">
        <div>
            <h2 id="succes_txt1">Successful Payment</h2>
        </div>
        
        <div class="check">
            <i class="glyphicon glyphicon-ok-sign"></i>
        </div>
        <h1 id="succes_txt2">Success</h1>
        <p>
            <label id="succes_txt3">Your payment has been done successfully.</label><br/>
            <label id="succes_txt4">The levels 3 and 4 are unlocked.</label>
        </p>
        <p><span id="succes_txt5">Back to the Game? </span><a href="/" id="succes_txt6">Game</a></p>
    </div>
    <script>
        
    </script>                    
    <!-- End Sign Up -->

<!--</body>
</html>-->