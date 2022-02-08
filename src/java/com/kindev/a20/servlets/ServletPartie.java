/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.servlets;

import com.kindev.a20.daos.PartieDao;
import com.kindev.a20.entites.Joueur;
import com.kindev.a20.entites.Partie;
import java.io.IOException;
import java.util.Arrays;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author leprince
 */
@WebServlet(name = "Partie", urlPatterns = {"/partie"})
public class ServletPartie extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("--------- save start : ");
        String langue = request.getParameter("langue");
        String niveau = request.getParameter("niveau");
        String type_cmptr = request.getParameter("type_cmptr");
        String mun = request.getParameter("mun");
        String sec = request.getParameter("sec");
        String carre = request.getParameter("carre");
        String[] valeurs_cases = request.getParameterValues("valeurs_cases[]");
        
        Joueur joueurConnecte = (Joueur) request.getSession().getAttribute("joueurConnecte");
        Partie partie = new Partie(joueurConnecte.getIdj(),niveau,langue,type_cmptr,mun,sec);
        partie.setValeursCases(Arrays.asList(valeurs_cases));
        
        PartieDao pdao = new PartieDao();
        System.out.println("Partie To save = "+ partie);
        System.out.println("Carre = "+ carre);

        System.out.println("----------- save success = "+pdao.enregistrer(partie, Integer.parseInt(carre)));
        System.out.println("--------- save end : ");
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
