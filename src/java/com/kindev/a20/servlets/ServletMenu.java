/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import com.kindev.a20.daos.JoueurDao;
import com.kindev.a20.daos.PartieDao;
import com.kindev.a20.entites.Joueur;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author DELL 3567 PC
 */
@WebServlet(name = "ServletMenu", urlPatterns = {"/menu"})
public class ServletMenu extends HttpServlet {
    HttpSession session;
    
     protected void process(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       System.out.println("-------- SERVLET MENU -------------");
        request.setCharacterEncoding("UTF-8");
        String lang = request.getParameter("txt_lang");
        session = request.getSession();
        
        if(lang != null && lang != ""){
            session.setAttribute("lang", lang);
        }else{
            String sessionLang = (String) session.getAttribute("lang");
            if(sessionLang == null && lang == ""){
                session.setAttribute("lang", "ENGLISH");
            } 
        }
        
        PartieDao pdao = new PartieDao();
        Joueur joueur = (Joueur) session.getAttribute("joueurConnecte");
        
        if( joueur != null ){
            System.out.println("---- joueurConnecte ok");
            session.setAttribute( "saved_game_exist1", pdao.playerHasASavedPartie(joueur.getIdj(), 1)+"" );
            session.setAttribute( "saved_game_exist2", pdao.playerHasASavedPartie(joueur.getIdj(), 2)+"" );
            if("true".equals(session.getAttribute("saved_game_exist1")+"") || "true".equals(session.getAttribute("saved_game_exist2")+"")){
                System.out.println("---- saved_game_exist ok");
                session.setAttribute("saved_game_exist","true");
            }else{
                session.setAttribute("saved_game_exist1", "false");
                session.setAttribute("saved_game_exist2", "false");
                session.setAttribute("saved_game_exist","false");
            }
        }else{
            session.setAttribute("saved_game_exist1", "false");
            session.setAttribute("saved_game_exist2", "false");
            session.setAttribute("saved_game_exist","false");
        }
        JoueurDao jd = new JoueurDao();
        String abonnementValid ="false";
        if(joueur != null){
            abonnementValid =""+ jd.abonValid(joueur.getIdj());
        }
        
        System.out.println("abonnementValid = "+abonnementValid);
        request.setAttribute("abonnementValid", abonnementValid);
        //session.setAttribute("saved_game_exist", "false");
        //System.out.println("-------- playerHasASavedPartie = " + pdao.playerHasASavedPartie(3, 1));
        this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/menu.jsp").forward(request, response);
    }

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
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
