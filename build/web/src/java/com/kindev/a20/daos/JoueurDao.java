/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.daos;

import com.kindev.a20.entites.Joueur;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author leprince
 */
public class JoueurDao {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean enregistrer(Joueur joueur) {
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("INSERT INTO joueur(pseudo,pw,pays,ville) VALUES(?,?,?,?)");
            ps.setString(1, joueur.getPseudo());
            ps.setString(2, joueur.getMdp());
            ps.setString(3, joueur.getPays());
            ps.setString(4, joueur.getVille());
            System.out.println("avant ps.executeUpdate();");
            ps.executeUpdate();
            System.out.println("apres ps.executeUpdate();");
            return true;
        } catch (Exception e) {
            return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }

    public boolean connecter(Joueur joueur) {
        boolean exist = false;
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT pw FROM joueur WHERE pseudo=?");
            ps.setString(1, joueur.getPseudo());
            rs = ps.executeQuery();
            while (rs.next()) {
                exist = joueur.getMdp().equals(rs.getString("pw"));
            }
        } catch (Exception e) {
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
        return exist;
    }
}
