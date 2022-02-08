/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import com.kindev.a20.entites.CreatePaymentResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author leprince
 */
@WebServlet(name = "ServletCreatePaymentIntent", urlPatterns = {"/create-payment-intent"})
public class ServletCreatePaymentIntent extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Stripe.apiKey = "sk_test_51IsqFIHteDFlXfC5zL98LXzjs3bQqVJNAFX28RUQfRb5OI6frnJWTTJu3xfldDcxO9bRdYlMRr4tRdtQeOv9jAhx00TNO6NyO5";
        try {
            System.out.println("START : ServletCreatePaymentIntent.doPost()");
            response.setContentType("application/json");
            PrintWriter writer = response.getWriter();
            JSONObject object = new JSONObject();
            String abonDays = request.getSession().getAttribute("abonDays") != null ? (String) request.getSession().getAttribute("abonDays") : "1";
            HashMap<String,Integer> tarif = new HashMap<>();
            tarif.put("1", 1);
            tarif.put("7", 6);
            tarif.put("15", 10);
            tarif.put("30", 17);
            tarif.put("90", 45);
            System.out.println("abonAmount = "+tarif.get(abonDays));
            PaymentIntentCreateParams createParams = new PaymentIntentCreateParams.Builder()
                    .setCurrency( "usd" )
                    .setAmount( tarif.get(abonDays) * 100L )
                    .build();
            // Create a PaymentIntent with the order amount and currency
            PaymentIntent intent = PaymentIntent.create(createParams);
            CreatePaymentResponse createPaymentResponse = new CreatePaymentResponse(intent.getClientSecret());
            object.put("createPaymentResponse", createPaymentResponse);
            object.put("secret", intent.getClientSecret());
            response.setStatus(200);
            response.addHeader("secret", intent.getClientSecret());
            writer.append(object.toString());
            writer.close();
            System.out.println("FIN : ServletCreatePaymentIntent.doPost() key = "+intent.getClientSecret());
        } catch (StripeException ex) {
            Logger.getLogger(ServletPayment.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
