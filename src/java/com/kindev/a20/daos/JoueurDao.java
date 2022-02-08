/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.daos;

import com.kindev.a20.util.ConnectDbA20;
import com.kindev.a20.entites.Joueur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author leprince
 */
public class JoueurDao {

    Connection con;
    PreparedStatement ps;
    Statement st;
    ResultSet rs;

    public boolean enregistrer(Joueur joueur) {
        try {
            con = ConnectDbA20.getConnection();
            st = con.createStatement();
            st.executeUpdate("INSERT INTO joueur(email,pseudo,pw,ddj,lastabdat) VALUES('"+joueur.getEmail()+"','"+joueur.getPseudo()+"','"
                    +joueur.getPw()+"',NOW(),ADDDATE(NOW(),INTERVAL 15 DAY))");
            return true;
        } catch (Exception e) {
            System.out.println("SAVE ERROR : "+e);
            return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }
    
       public boolean mettreAJour(int idj, String col, String value) {
        try {
            con = ConnectDbA20.getConnection();
            st = con.createStatement();
            st.executeUpdate("UPDATE joueur SET "+col+"='"+value+"' WHERE idj='"+idj+"'");
            return true;
        } catch (Exception e) {
            System.out.println("UPDATE ERROR : "+e);
            return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }
    public boolean abonner(int idj, String nmbrJour) {
        boolean abonnementOk = false;
        try {
            if(abonValid(idj) == true){
                con = ConnectDbA20.getConnection();
                st = con.createStatement();
                rs = st.executeQuery("SELECT lastabdat FROM joueur WHERE idj='"+idj+"'");
                while(rs.next()){
                    Timestamp d = rs.getTimestamp("lastabdat");
                    Statement st2 = con.createStatement();
                    st2.executeUpdate("UPDATE joueur SET lastabdat=ADDDATE('"+d+"' ,INTERVAL '"+nmbrJour+"' DAY) WHERE idj='"+idj+"'");
                    abonnementOk = true;
                }
               return abonnementOk; 
            }else{
                con = ConnectDbA20.getConnection();
                st = con.createStatement();
                st.executeUpdate("UPDATE joueur SET lastabdat=ADDDATE(NOW() ,INTERVAL '"+nmbrJour+"' DAY) WHERE idj='"+idj+"'");
                return true;
            }
            
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("abonner ERROR : "+e);
            return false;
        } finally {
            try {
                rs.close();
                st.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }
    
    public boolean abonValid(int idj) {
        boolean valid = false;
        try {
            con = ConnectDbA20.getConnection();
            st = con.createStatement();
            rs = st.executeQuery("SELECT lastabdat FROM joueur WHERE idj='"+idj+"'");
            while(rs.next()){
                System.out.println("get d ");
                
                Timestamp d = rs.getTimestamp("lastabdat");
                System.out.println("get t 1, d = "+d);
                rs = st.executeQuery("SELECT NOW() as today");
                System.out.println("get t 2 ");
                Timestamp t = null;
                while(rs.next()){
                     t = rs.getTimestamp("today");
                }
                
                System.out.println("d = "+d +" - "+"t = "+t);
                if(d.compareTo(t) >= 0){
                    System.out.println("in d.compareTo(t) >= 0");
                    valid = true;
                }
            }
            return valid;
        } catch (Exception e) {
            System.out.println("SELECT ERROR : "+e);
            e.printStackTrace();
            return false;
        } finally {
            try {
                rs.close();
                st.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }

    public Joueur connecter(Joueur joueur) {
        Joueur joueurCon = null;
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM joueur WHERE pseudo=?");
            ps.setString(1, joueur.getPseudo());
            rs = ps.executeQuery();
            while (rs.next()) {
                
                if(joueur.getPw().equals(rs.getString("pw")) && joueur.getPseudo().equals(rs.getString("pseudo"))){
                    joueurCon = new Joueur();
                    joueurCon = new Joueur(rs.getInt("idj"),rs.getString("email"),rs.getString("pseudo"),rs.getString("pw"),rs.getDate("ddj")+"",
                        rs.getDate("lastabdat")+"",rs.getString("pays"),rs.getString("ville"),rs.getInt("con"),rs.getInt("pl"),rs.getInt("pg"),
                        rs.getInt("pp"),rs.getInt("pa"),rs.getInt("ps"),rs.getInt("dl"),rs.getInt("dg"),rs.getInt("dp"));
                }
            }
        } catch (Exception e) {
        } finally {
            try {
                rs.close();
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
        return joueurCon;
    }

    public ArrayList<Joueur> getAllPlayer() {
        ArrayList<Joueur>  joueurs = new ArrayList<> ();
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM joueur");
            rs = ps.executeQuery();
            while (rs.next()) {
                joueurs.add(new Joueur(rs.getInt("idj"),rs.getString("email"),rs.getString("pseudo"),rs.getString("pw"),rs.getDate("ddj")+"",
                        rs.getDate("lastabdat")+"",rs.getString("pays"),rs.getString("ville"),rs.getInt("con"),rs.getInt("pl"),rs.getInt("pg"),
                        rs.getInt("pp"),rs.getInt("pa"),rs.getInt("ps"),rs.getInt("dl"),rs.getInt("dg"),rs.getInt("dp")));    
            }
            return joueurs;
        } catch (Exception e) {
            return null;
        } finally {
            try {
                rs.close();
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }   
    }
//    public static void main(String[] args) {
//        new JoueurDao().getAllPlayer().forEach((p)-> System.out.println(p));
//    }
}

