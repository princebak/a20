/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.entites;

/**
 *
 * @author leprince
 */
public class CreatePaymentResponse {
   private String clientSecret;
   public CreatePaymentResponse(String clientSecret) {
       this.clientSecret = clientSecret;
   }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }
}
