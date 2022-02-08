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
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author leprince
 */
@WebServlet(name = "Logout", urlPatterns = {"/logout"})
public class Logout extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       HttpSession session = request.getSession();
       
       Cookie ck[] = request.getCookies();
       String txt_login = "";
       String txt_pw = "";
        boolean connected = false;
        for( int i=0; i < ck.length; i++ ){
            if( ck[i].getName().equalsIgnoreCase("txt_login") ){
                Cookie c_txt_login = new Cookie("txt_login","");
                c_txt_login.setMaxAge(0);
                response.addCookie(c_txt_login);
                txt_login = ck[i].getValue();
            }else if( ck[i].getName().equalsIgnoreCase("txt_pw") ){
                Cookie c_txt_pw = new Cookie("txt_pw","");
                c_txt_pw.setMaxAge(0);
                response.addCookie(c_txt_pw);
                txt_pw = ck[i].getValue();
            }
        }
        System.out.println("REMOVING: txt_login = "+txt_login + "txt_pw = " +txt_pw);
        
        if(session.getAttribute("joueurConnecte") != null){
            session.removeAttribute("joueurConnecte");
        }
        session.setAttribute(Constant.CONNECTED, connected);
       
       this.getServletContext().getRequestDispatcher("/page1.jsp").forward(request, response);
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
