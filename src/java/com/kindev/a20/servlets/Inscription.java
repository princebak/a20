/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import com.kindev.a20.daos.JoueurDao;
import com.kindev.a20.entites.Joueur;
import com.kindev.a20.util.Constant;
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
@WebServlet(name = "Inscription", urlPatterns = {"/inscription"})
public class Inscription extends HttpServlet {

    HttpSession session;
    String player_name = "";
    boolean registered = false;
    protected void process(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        Joueur joueur = new Joueur(request.getParameter("txt_email"),request.getParameter("txt_login2"),request.getParameter("txt_pw2"));
        JoueurDao jd = new JoueurDao();
        if(jd.enregistrer(joueur) == true){
            registered = true;
            player_name = joueur.getPseudo();
        }
        session = request.getSession(true);
        request.setAttribute(Constant.REGISTERED, registered);
        request.setAttribute("registered_name", player_name);
        
        this.getServletContext().getRequestDispatcher("/").forward(request, response);

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        process(request, response);
 }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        process(request, response);
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
