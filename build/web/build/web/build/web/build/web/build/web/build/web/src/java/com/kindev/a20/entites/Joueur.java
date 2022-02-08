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
    private String pseudo, mdp, pays, ville;
    private int dispo, n_partieg, n_partiep, n_partiea, n_partienf, n_defil, n_dg, n_dp, totv, totd;  

    public Joueur(String pseudo, String mdp) {
        this.pseudo = pseudo;
        this.mdp = mdp;
    }

    public Joueur(String pseudo, String mdp, String pays, String ville) {
        this.pseudo = pseudo;
        this.mdp = mdp;
        this.pays = pays;
        this.ville = ville;
    }

    public Joueur(String pseudo, String mdp, String pays, String ville, int dispo, int n_partieg, int n_partiep, int n_partiea, int n_partienf, int n_defil, int n_dg, int n_dp, int totv, int totd) {
        this.pseudo = pseudo;
        this.mdp = mdp;
        this.pays = pays;
        this.ville = ville;
        this.dispo = dispo;
        this.n_partieg = n_partieg;
        this.n_partiep = n_partiep;
        this.n_partiea = n_partiea;
        this.n_partienf = n_partienf;
        this.n_defil = n_defil;
        this.n_dg = n_dg;
        this.n_dp = n_dp;
        this.totv = totv;
        this.totd = totd;
    }

    public Joueur(int idj, String pseudo, String mdp, String pays, String ville, int dispo, int n_partieg, int n_partiep, int n_partiea, int n_partienf, int n_defil, int n_dg, int n_dp, int totv, int totd) {
        this.idj = idj;
        this.pseudo = pseudo;
        this.mdp = mdp;
        this.pays = pays;
        this.ville = ville;
        this.dispo = dispo;
        this.n_partieg = n_partieg;
        this.n_partiep = n_partiep;
        this.n_partiea = n_partiea;
        this.n_partienf = n_partienf;
        this.n_defil = n_defil;
        this.n_dg = n_dg;
        this.n_dp = n_dp;
        this.totv = totv;
        this.totd = totd;
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

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
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

    public int getDispo() {
        return dispo;
    }

    public void setDispo(int dispo) {
        this.dispo = dispo;
    }

    public int getN_partieg() {
        return n_partieg;
    }

    public void setN_partieg(int n_partieg) {
        this.n_partieg = n_partieg;
    }

    public int getN_partiep() {
        return n_partiep;
    }

    public void setN_partiep(int n_partiep) {
        this.n_partiep = n_partiep;
    }

    public int getN_partiea() {
        return n_partiea;
    }

    public void setN_partiea(int n_partiea) {
        this.n_partiea = n_partiea;
    }

    public int getN_partienf() {
        return n_partienf;
    }

    public void setN_partienf(int n_partienf) {
        this.n_partienf = n_partienf;
    }

    public int getN_defil() {
        return n_defil;
    }

    public void setN_defil(int n_defil) {
        this.n_defil = n_defil;
    }

    public int getN_dg() {
        return n_dg;
    }

    public void setN_dg(int n_dg) {
        this.n_dg = n_dg;
    }

    public int getN_dp() {
        return n_dp;
    }

    public void setN_dp(int n_dp) {
        this.n_dp = n_dp;
    }

    public int getTotv() {
        return totv;
    }

    public void setTotv(int totv) {
        this.totv = totv;
    }

    public int getTotd() {
        return totd;
    }

    public void setTotd(int totd) {
        this.totd = totd;
    }

    @Override
    public String toString() {
        return "Joueur{" + "idj=" + idj + ", pseudo=" + pseudo + ", mdp=" + mdp + ", pays=" + pays + ", ville=" + ville + ", dispo=" + dispo + ", n_partieg=" + n_partieg + ", n_partiep=" + n_partiep + ", n_partiea=" + n_partiea + ", n_partienf=" + n_partienf + ", n_defil=" + n_defil + ", n_dg=" + n_dg + ", n_dp=" + n_dp + ", totv=" + totv + ", totd=" + totd + '}';
    }
    
}
