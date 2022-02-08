/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import com.kindev.a20.daos.JoueurDao;
import com.kindev.a20.entites.Joueur;
import java.io.IOException;
import java.io.PrintWriter;
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
@WebServlet(name = "ServletPaymentSuccess", urlPatterns = {"/payment-success"})
public class ServletPaymentSuccess extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        System.out.println("payment success");
        HttpSession session = request.getSession();
        Object abonDaysInSession = session.getAttribute("abonDays");
        if( abonDaysInSession != null ){
            String abonDays = (String) abonDaysInSession;
            JoueurDao jd = new JoueurDao();
            Joueur joueur = (Joueur) session.getAttribute("joueurConnecte");
            jd.abonner(joueur.getIdj(), abonDays);
            session.removeAttribute("abonDays");
            System.out.println("abon days exists = "+abonDays);
        }
        
        System.out.println("add abon days");
        this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/payment_success.jsp").forward(request, response);
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
