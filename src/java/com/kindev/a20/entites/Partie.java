/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.entites;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author leprince
 */
public class Partie {
    int idp;
    int idj;
    String niv;
    String langue;
    String typeCmptr;
    String mun;
    String sec;
    
    List<String> valeursCases;

    public Partie() {
     niv = "";
     langue = "";
     typeCmptr = "";
     mun = "";
     sec = "";
     valeursCases = new ArrayList();
    }

    public Partie(int idp) {
        this.idp = idp;
    }

    public Partie(int idp, int idj, String niv, String langue, String typeCmptr, String mun,String sec) {
        this.idp = idp;
        this.idj = idj;
        this.niv = niv;
        this.langue = langue;
        this.typeCmptr = typeCmptr;
        this.mun = mun;
        this.sec = sec;
    }
    
     public Partie( int idj, String niv, String langue, String typeCmptr, String mun,String sec ) {
        this.idj = idj;
        this.niv = niv;
        this.langue = langue;
        this.typeCmptr = typeCmptr;
        this.mun = mun;
        this.sec = sec;
    }

    public int getIdp() {
        return idp;
    }

    public void setIdp(int idp) {
        this.idp = idp;
    }

    public int getIdj() {
        return idj;
    }

    public void setIdj(int idj) {
        this.idj = idj;
    }

    public String getNiv() {
        return niv;
    }

    public void setNiv(String niv) {
        this.niv = niv;
    }

    public String getLangue() {
        return langue;
    }

    public void setLangue(String langue) {
        this.langue = langue;
    }

    public String getTypeCmptr() {
        return typeCmptr;
    }

    public void setTypeCmptr(String typeCmptr) {
        this.typeCmptr = typeCmptr;
    }

    public String getMun() {
        return mun;
    }

    public void setMun(String mun) {
        this.mun = mun;
    }
    public String getSec() {
        return sec;
    }

    public void setSec(String sec) {
        this.sec = sec;
    }

    public List<String> getValeursCases() {
        return valeursCases;
    }

    public void setValeursCases(List<String> valeursCases) {
        this.valeursCases = valeursCases;
    }

    @Override
    public String toString() {
        return "Partie{" + "niv=" + niv + ", langue=" + langue + ", typeCmptr=" + typeCmptr + ", mun=" + mun + ", sec=" + sec + ", valeursCases=" + valeursCases + '}';
    }
    
}
