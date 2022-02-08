<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
    <head>
      <meta charset="utf-8" />
      <title>Accept a card payment</title>
      <meta name="description" content="A demo of a card payment on Stripe" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="images/LogoSeul.jpg" rel="icon" />
      <link rel="stylesheet" href="css/global.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <script src="https://js.stripe.com/v3/"></script>
      <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>

      <script th:inline="javascript">
        /*<![CDATA[*/

        var stripePublicKey = /*[[${stripePublicKey}]]*/ 'pk_test_51IsqFIHteDFlXfC5jq5UwTbQDkHz5JUPkzJTwZwbVE63kzn2T65f3STLeHMQjRhD0MAycmzXU0r92lV9YZMwlOeT00RXQAUwrc';

        /*]]>*/
      </script>
      <script type="text/javascript" src="js/jquery-3-5-1.min.js"></script>
      <script src="js/client.js" defer></script>
    </head>

    <body onload="translatePayment();">
        <input type="hidden" id="langue" value="${lang}" />
        <!-- Display a payment form -->
        <form id="payment-form">
          <h1 id="pay_txt1">ArboTwenty Payment</h1>
          <p id="pay_txt2">pay for your subscription</p>
          <input type="text" id="email" placeholder="Email address" required/>
          <div id="card-element"><!--Stripe.js injects the Card Element--></div>
          <button id="submit">
            <div class="spinner hidden" id="spinner"></div>
            <span id="button-text" style="color: #fff">Pay now</span>
          </button>
          <p id="card-error" role="alert"></p>
            <!--  <p class="result-message hidden">
                Payment succeeded, see the result in your
                <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to pay again.
              </p>-->
        </form>
    </body>
</html>
