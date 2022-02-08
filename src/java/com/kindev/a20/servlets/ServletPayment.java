/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 *
 * @author leprince
 */
@WebServlet(name = "ServletPayment", urlPatterns = {"/payment"})
public class ServletPayment extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session = request.getSession();
        Object joueur = session.getAttribute("joueurConnecte");
        
        if( joueur != null ){
            Object abonDaysInSession = session.getAttribute("abonDays");
            if( abonDaysInSession != null ){
                request.setAttribute("stripePublicKey", "pk_test_51IsqFIHteDFlXfC5jq5UwTbQDkHz5JUPkzJTwZwbVE63kzn2T65f3STLeHMQjRhD0MAycmzXU0r92lV9YZMwlOeT00RXQAUwrc");
                this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/payment.jsp").forward(request, response);
            }else{
                this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/abonnement.jsp").forward(request, response);
            }
        }else{
            response.sendRedirect("/a20");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String abonDays = request.getParameter("abonDays");
        HttpSession session = request.getSession();
        System.out.println("-------------- abonDays = " + abonDays);
        session.setAttribute("abonDays", abonDays);
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
