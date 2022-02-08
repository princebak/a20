package com.kindev.a20.servlets;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import com.kindev.a20.daos.PartieDao;
import com.kindev.a20.entites.Joueur;
import com.kindev.a20.entites.Partie;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author BAKENGA ILUNGA PRINCE
 */
@WebServlet(name = "ServletModeSolo", urlPatterns = {"/solo"})
public class ServletModeSolo extends HttpServlet {

    private String nivRecent = "";
    private String nmbrCar = "1";
    private String mun = "01";
    private String sec = "00";
    private String txt_c_cr = "Chrono";
    HttpSession session;
    private String not_used_saved_game[] = new String[1];
    
    protected void process(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String niv = request.getParameter("cmbNiv");
        String nmbrCarre = request.getParameter("cmbNbrCarre");
        String txt_chrono_cr = request.getParameter("txt_chrono_cr");
        System.err.println("#### txt_chrono_cr = "+txt_chrono_cr);
        String cmbMun = request.getParameter("cmbMun");
        String new_continue_game = request.getParameter("new_continue_game");
        session = request.getSession();
        if(new_continue_game == null){
            new_continue_game = "new";
        }
        session.setAttribute("new_continue_game", new_continue_game);
        
        String lang = (String) session.getAttribute("lang");
        String saved_game_exist = (String) session.getAttribute("saved_game_exist");
        String seconds = sec;
        
       
        if ( niv == null || "".equals(niv) ) {
            if( "".equals( nivRecent ) ){
                if ( "FRANCAIS".equals(lang) || "FRENCH".equals(lang) ) {
                    nivRecent = "APPRENTISSAGE";
                } else{
                    nivRecent = "BEGINNER";
                }
            }
            niv = nivRecent;            
        } else {
            nivRecent = niv;
        }
        if (nmbrCarre == null || "".equals(nmbrCarre)) {
            nmbrCarre = nmbrCar;
        } else {
            nmbrCar = nmbrCarre;
        }
        if (cmbMun == null || "".equals(cmbMun)) {
            cmbMun = mun;
        } else {
            mun = cmbMun;
        }
        if (txt_chrono_cr == null || "".equals(txt_chrono_cr)) {
            txt_chrono_cr = txt_c_cr;
        } else {
            txt_c_cr = txt_chrono_cr;
        }
        if ("Chrono".equals(txt_chrono_cr)) {
            cmbMun = "00";
            mun = "00";
        }
        System.out.println("-----------  saved_game_exist = "+saved_game_exist);
        System.out.println("-----------  new_continue_game = "+new_continue_game);
        if( saved_game_exist != null && saved_game_exist.equalsIgnoreCase("true") ){
            if( new_continue_game != null && new_continue_game.equalsIgnoreCase("continue") ){
                
            System.out.println("-----------in  saved_game_exist = "+saved_game_exist);

                PartieDao pdao = new PartieDao();
                Joueur joueur = (Joueur) request.getSession().getAttribute("joueurConnecte");
                Partie partie = pdao.getPartieByPlayerId(joueur.getIdj(), Integer.parseInt(nmbrCarre));
                System.out.println("------ partie trouvée : "+partie.toString());
                txt_chrono_cr = partie.getTypeCmptr();
                cmbMun = partie.getMun();
                seconds = partie.getSec();
                niv = partie.getNiv();
                Object[] saved_game = partie.getValeursCases().toArray();
                request.getSession().setAttribute("saved_game",saved_game);
            }else{
            not_used_saved_game[0]="1";
            request.getSession().setAttribute("saved_game", not_used_saved_game);
        }
        }else{
            not_used_saved_game[0]="1";
            request.getSession().setAttribute("saved_game", not_used_saved_game);
        }
        
        request.setAttribute("nmbrCarre", nmbrCarre);
        request.setAttribute("mun", cmbMun);
        request.setAttribute("sec", seconds);
        request.setAttribute("niv", niv);
        request.setAttribute("txt_chrono_cr", txt_chrono_cr);
        if (nmbrCarre.equals("1")) {
            response.setCharacterEncoding("UTF-8");
            this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/terrain1.jsp").forward(request, response);
        } else if (nmbrCarre.equals("2")) {
            response.setCharacterEncoding("UTF-8");
            this.getServletContext().getRequestDispatcher("/WEB-INF/jsp/terrain2.jsp").forward(request, response);
        }
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
