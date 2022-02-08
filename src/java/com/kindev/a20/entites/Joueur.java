/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.entites;

/**
 *
 * @author leprince
 */
public class Joueur {

    private int idj;
    private String pseudo, pw, pays, ville,ddj,email,lastabdat;
    private int con ,pl, pg, pp, pa, ps, dl, dg, dp;  
    
    
    public Joueur() {
    }
    public Joueur(int idj) {
        this.idj = idj;
    }
    
     public Joueur(String pseudo, String pw) {
        this.pseudo = pseudo;
        this.pw = pw;
    }

    public Joueur(String email, String pseudo, String pw) {
        this.email = email;
        this.pseudo = pseudo;
        this.pw = pw;
    }

    public Joueur(int idj,  String email, String pseudo, String pw, String ddj, String lastabdat, String pays, String ville, int con, int pl, 
                    int pg, int pp, int pa, int ps, int dl, int dg, int dp) {
        this.idj = idj;
        this.pseudo = pseudo;
        this.pw = pw;
        this.pays = pays;
        this.ville = ville;
        this.ddj = ddj;
        this.email = email;
        this.lastabdat = lastabdat;
        this.con = con;
        this.pl = pl;
        this.pg = pg;
        this.pp = pp;
        this.pa = pa;
        this.ps = ps;
        this.dl = dl;
        this.dg = dg;
        this.dp = dp;
    }

    public String getLastabdat() {
        return lastabdat;
    }

    public void setLastabdat(String lastabdat) {
        this.lastabdat = lastabdat;
    }
    
    public int getIdj() {
        return idj;
    }

    public void setIdj(int idj) {
        this.idj = idj;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getDdj() {
        return ddj;
    }

    public void setDdj(String ddj) {
        this.ddj = ddj;
    }

    public int getCon() {
        return con;
    }

    public void setCon(int con) {
        this.con = con;
    }

    public int getPl() {
        return pl;
    }

    public void setPl(int pl) {
        this.pl = pl;
    }

    public int getPg() {
        return pg;
    }

    public void setPg(int pg) {
        this.pg = pg;
    }

    public int getPp() {
        return pp;
    }

    public void setPp(int pp) {
        this.pp = pp;
    }

    public int getPa() {
        return pa;
    }

    public void setPa(int pa) {
        this.pa = pa;
    }

    public int getPs() {
        return ps;
    }

    public void setPs(int ps) {
        this.ps = ps;
    }

    public int getDl() {
        return dl;
    }

    public void setDl(int dl) {
        this.dl = dl;
    }

    public int getDg() {
        return dg;
    }

    public void setDg(int dg) {
        this.dg = dg;
    }

    public int getDp() {
        return dp;
    }

    public void setDp(int dp) {
        this.dp = dp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Joueur{" + "idj=" + idj + ", pseudo=" + pseudo + ", pw=" + pw + ", pays=" + pays + ", ville=" + ville + ", ddj=" + ddj + ", email=" + email + ", lastabdat=" + lastabdat + ", con=" + con + ", pl=" + pl + ", pg=" + pg + ", pp=" + pp + ", pa=" + pa + ", ps=" + ps + ", dl=" + dl + ", dg=" + dg + ", dp=" + dp + '}';
    }
    
}
