package com.kindev.a20.servlets;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author BAKENGA ILUNGA PRINCE
 */
@WebServlet(name = "ModeSolo", urlPatterns = {"/solo"})
public class ModeSolo extends HttpServlet {

    private String nivRecent = "APPRENTISSAGE";
    private String nmbrCar = "1";
    private String mun = "00";
    private String txt_c_cr = "chrono";

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
        System.out.println("arbo20Servlets.ServletSolo.doGet()");
        String niv = request.getParameter("cmbNiv");
        String nmbrCarre = request.getParameter("cmbNbrCarre");
        String txt_chrono_cr = request.getParameter("txt_chrono_cr");
        String cmbMun = request.getParameter("cmbMun");
        if (niv == null) {
            niv = nivRecent;
        } else {
            nivRecent = niv;
        }
        if (nmbrCarre == null) {
            nmbrCarre = nmbrCar;
        } else {
            nmbrCar = nmbrCarre;
        }
        if (cmbMun == null) {
            cmbMun = mun;
        } else {
            mun = cmbMun;
        }
         if (txt_chrono_cr == null) {
            txt_chrono_cr = txt_c_cr;
        } else {
            txt_c_cr = txt_chrono_cr;
        }
        /* request.setAttribute("sep", sep);      
        request.setAttribute("sec", sec);*/
        if ("chrono".equals(txt_chrono_cr)) {
            cmbMun = "00";
            mun = "00"; 
        } else if ("cpt-rebours".equals(txt_chrono_cr)) {
            String rs = "" + (Integer.parseInt(cmbMun));
            if (rs.length() == 1) {
                cmbMun = "0" + rs;
            }
        }
       

        request.setAttribute("txt_chrono_cr", txt_chrono_cr);
        request.setAttribute("mun", cmbMun);
        request.setAttribute("niv", niv);
        if (nmbrCarre.equals("1")) {
            this.getServletContext().getRequestDispatcher("/WEB-INF/terrain1.jsp").forward(request, response);
        } else if (nmbrCarre.equals("2")) {
            this.getServletContext().getRequestDispatcher("/WEB-INF/terrain2.jsp").forward(request, response);
        }
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
        System.out.println("in ServletSolo.doPost()");
        String niv = request.getParameter("cmbNiv");
        String nmbrCarre = request.getParameter("cmbNbrCarre");
        String txt_chrono_cr = request.getParameter("txt_chrono_cr");
        String cmbMun = request.getParameter("cmbMun");
        if (niv == null) {
            niv = nivRecent;
        } else {
            nivRecent = niv;
        }
        if (nmbrCarre == null) {
            nmbrCarre = nmbrCar;
        } else {
            nmbrCar = nmbrCarre;
        }
        if (cmbMun == null) {
            cmbMun = mun;
        } else {
            mun = cmbMun;
        }
        if (txt_chrono_cr == null) {
            txt_chrono_cr = txt_c_cr;
        } else {
            txt_c_cr = txt_chrono_cr;
        }
        /* request.setAttribute("sep", sep);      
        request.setAttribute("sec", sec);*/

        if ("chrono".equals(txt_chrono_cr)) {
            cmbMun = "00";
            mun = "00";
        }else if ("cpt-rebours".equals(txt_chrono_cr)) {
            String rs = "" + (Integer.parseInt(cmbMun));
            if (rs.length() == 1) {
                cmbMun = "0" + rs;
            }
        }
        

        request.setAttribute("txt_chrono_cr", txt_chrono_cr);
        request.setAttribute("mun", cmbMun);
        request.setAttribute("niv", niv);
        if (nmbrCarre.equals("1")) {
            this.getServletContext().getRequestDispatcher("/WEB-INF/terrain1.jsp").forward(request, response);
        } else if (nmbrCarre.equals("2")) {
            this.getServletContext().getRequestDispatcher("/WEB-INF/terrain2.jsp").forward(request, response);
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
