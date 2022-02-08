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
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author leprince
 */
@WebServlet(name = "Connection", urlPatterns = {"/connection"})
public class Connection extends HttpServlet {

    HttpSession session;
    boolean connected = false;
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Joueur joueur = new Joueur(request.getParameter("txt_login"),request.getParameter("txt_pw"));
        JoueurDao jd = new JoueurDao();
        Joueur joueurConnecte = jd.connecter(joueur);
        
        session = request.getSession(true);
        if(joueurConnecte != null){
            session.setAttribute("joueurConnecte", joueurConnecte);
            connected = true;
            Cookie txt_login = new Cookie("txt_login",joueurConnecte.getPseudo());
            txt_login.setMaxAge(31536000);
            Cookie txt_pw = new Cookie("txt_pw", joueurConnecte.getPw());
            txt_pw.setMaxAge(31536000);
            
            response.addCookie(txt_login);
            response.addCookie(txt_pw);
        }
        
        session.setAttribute(Constant.CONNECTED, connected);
        
        this.getServletContext().getRequestDispatcher("/").forward(request, response);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
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
        processRequest(request, response);
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
