// A reference to Stripe.js initialized with your real test publishable API key.
var stripe = Stripe(stripePublicKey);

// The items the customer wants to buy
var purchase = {
    items: [{ id: "xl-tshirt" }]
};

// Disable the button until we have Stripe set up on the page
document.querySelector("button").disabled = true;
fetch("create-payment-intent", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(purchase)
})
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
        var elements = stripe.elements();
console.log("data",data);
        var style = {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                fontFamily: 'Arial, sans-serif',
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        };

        var card = elements.create("card", { style: style });
        // Stripe injects an iframe into the DOM
        card.mount("#card-element");

        card.on("change", function (event) {
            // Disable the Pay button if there are no card details in the Element
            document.querySelector("button").disabled = event.empty;
            document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
        });

        var form = document.getElementById("payment-form");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            // Complete payment when the submit button is clicked
            payWithCard(stripe, card, data.secret);
        });
    }).catch (function(error){
    console.log("error",error);
});

// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
var payWithCard = function(stripe, card, clientSecret) {
    loading(true);
    stripe
        .confirmCardPayment(clientSecret, {
            receipt_email: document.getElementById('email').value,
            payment_method: {
                card: card
            }
        })
        .then(function(result) {
            if (result.error) {
                // Show error to your customer
                showError(result.error.message);
            } else {
                // The payment succeeded!
                //orderComplete(result.paymentIntent.id);
                //window.location = "payment-success";
                $.get("payment-success", function(data, status){
                    $("body").html(data.toString());
                    translatePayment();
                    //console.log("Data: " + data + "\nStatus: " + status);
                  });
                //$.get("payment-success");
            }
        });
};

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete
//var orderComplete = function(paymentIntentId) {
//    loading(false);
//    document
//        .querySelector(".result-message a")
//        .setAttribute(
//            "href",
//            "https://dashboard.stripe.com/test/payments/" + paymentIntentId
//        );
//    document.querySelector(".result-message").classList.remove("hidden");
//    document.querySelector("button").disabled = true;
//};

// Show the customer the error from Stripe if their card fails to charge
var showError = function(errorMsgText) {
    loading(false);
    var errorMsg = document.querySelector("#card-error");
    errorMsg.textContent = errorMsgText;
    setTimeout(function() {
        errorMsg.textContent = "";
    }, 4000);
};

// Show a spinner on payment submission
var loading = function(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("button").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
};


function translatePayment(){
    var langue = $("#langue").val();
    if (langue == null || langue == "") {
        langue = "ENGLISH";
    }
    if (langue == "ANGLAIS" || langue == "ENGLISH") {
        $("#pay_txt1").text("ArboTwenty Payment");
        $("#pay_txt2").text("pay for your subscription");
        $("#email").attr("placeholder","Email address");
        $("#button-text").text("Pay now");
        
        $("#succes_txt1").text("Successful Payment");
        $("#succes_txt2").text("Success");
        $("#succes_txt3").text("Your payment has been done successfully.");
        $("#succes_txt4").text("The levels 3 and 4 are unlocked.");
        $("#succes_txt5").text("Back to the game? ");
        $("#succes_txt6").text("Game");
    }else{
        $("#pay_txt1").text("Payement ArboTwenty");
        $("#pay_txt2").text("payez votre abonnement");
        $("#email").attr("placeholder","Adresse e-mail");
        $("#button-text").text("Payez maintenant");
        
        $("#succes_txt1").text("Paiement réussi");
        $("#succes_txt2").text("Succès");
        $("#succes_txt3").text("Votre paiement a été effectué avec succès.");
        $("#succes_txt4").text("Les niveaux 3 et 4 sont débloqués.");
        $("#succes_txt5").text("Retour au jeu ?");
        $("#succes_txt6").text("Jeu");
    }
}