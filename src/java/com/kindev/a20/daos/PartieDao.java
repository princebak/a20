/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.daos;

import com.kindev.a20.util.ConnectDbA20;
import com.kindev.a20.entites.Partie;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author leprince
 */
public class PartieDao {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean enregistrer(Partie partie, int carre) {
        boolean saved = false;
        
        if (carre == 1) {
            if(playerHasASavedPartie(partie.getIdj(),carre) == true){
                saved = mettreAjour1(partie);
            }else{
                saved = enregistrer1(partie);
            }
            
        } else if (carre == 2) {
            if(playerHasASavedPartie(partie.getIdj(),carre) == true){
                saved = mettreAjour2(partie);
            }else{
                saved = enregistrer2(partie);
            }
        }
        return saved;
    }

    public boolean enregistrer1(Partie partie) {
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("INSERT INTO partienf(idj,niv,langue,type_cmptr,mun,sec,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10"
                    + ",v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25) VALUES(?,?,?,?,?,?,?,?,?,?,"
                    + "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            ps.setInt(1, partie.getIdj());
            ps.setString(2, partie.getNiv());
            ps.setString(3, partie.getLangue());
            ps.setString(4, partie.getTypeCmptr());
            ps.setString(5, partie.getMun());
            ps.setString(6, partie.getSec());
            int n = 7;
            for (int i = 0; i < 25; i++) {
                 ps.setString(n, partie.getValeursCases().get(i));
                 n++;
            }

            ps.executeUpdate();
            return true;
        } catch (Exception e) {
            System.out.println("Save Error Message : "+e);
            return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }

    public boolean enregistrer2(Partie partie) {
        try {
            System.out.println("------- Start : enregistrer2()");
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("INSERT INTO partienf2(idj,niv,langue,type_cmptr,mun,sec,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10"
                    + ",v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30,v31,"
                    + "v32,v33,v34,v35,v36,v37,v38,v39,v40,v41,v42,v43,v44,v45,v46,v47,v48,v49,v50) VALUES(?,?,?,?,?,?,?,?,?,?,"
                    + "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

            ps.setInt(1, partie.getIdj());
            ps.setString(2, partie.getNiv());
            ps.setString(3, partie.getLangue());
            ps.setString(4, partie.getTypeCmptr());
            ps.setString(5, partie.getMun());
            ps.setString(6, partie.getSec());
            int n = 7;
            for (int i = 0; i < 50; i++) {
                 ps.setString(n, partie.getValeursCases().get(i));
                 n++;
            }

            ps.executeUpdate();

            return true;
        } catch (Exception e) {
            System.out.println("carre2 save error : "+e.getMessage());
            return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }
    
    public boolean mettreAjour1(Partie partie) {
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("UPDATE partienf SET niv=?,langue=?,type_cmptr=?,mun=?,sec=?,v1=?,v2=?,v3=?,v4=?,"
                    + "v5=?,v6=?,v7=?,v8=?,v9=?,v10=?,v11=?,v12=?,v13=?,v14=?,v15=?,v16=?,v17=?,v18=?,v19=?,"
                    + "v20=?,v21=?,v22=?,v23=?,v24=?,v25=? WHERE idj=?");

            ps.setString(1, partie.getNiv());
            ps.setString(2, partie.getLangue());
            ps.setString(3, partie.getTypeCmptr());
            ps.setString(4, partie.getMun());
            ps.setString(5, partie.getSec());

            int n = 6;
            for (int i = 0; i < 25; i++) {
                ps.setString(n, partie.getValeursCases().get(i));
                n++;
            }
            ps.setInt(n, partie.getIdj());
            ps.executeUpdate();
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
    
    public boolean mettreAjour2(Partie partie) {
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("UPDATE partienf2 SET niv=?,langue=?,type_cmptr=?,mun=?,sec=?,v1=?,v2=?,v3=?,v4=?,"
                    + "v5=?,v6=?,v7=?,v8=?,v9=?,v10=?,v11=?,v12=?,v13=?,v14=?,v15=?,v16=?,v17=?,v18=?,v19=?,"
                    + "v20=?,v21=?,v22=?,v23=?,v24=?,v25=?,v26=?,v27=?,v28=?,v29=?,v30=?,v31=?,v32=?,v33=?,v34=?,"
                    + "v35=?,v36=?,v37=?,v38=?,v39=?,v40=?,v41=?,v42=?,v43=?,v44=?,"
                    + "v45=?,v46=?,v47=?,v48=?,v49=?,v50=? WHERE idj=?");

            ps.setString(1, partie.getNiv());
            ps.setString(2, partie.getLangue());
            ps.setString(3, partie.getTypeCmptr());
            ps.setString(4, partie.getMun());
            ps.setString(5, partie.getSec());

            int n = 6;
            for (int i = 0; i < 50; i++) {
                ps.setString(n, partie.getValeursCases().get(i));
                n++;
            }
            ps.setInt(n, partie.getIdj());
            ps.executeUpdate();
            return true;
        } catch (Exception e) {
System.out.println("Ex : "+e.getMessage());
return false;
        } finally {
            try {
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }
    
    public Partie getPartieByPlayerId(int playerId, int carre) {
        Partie partie = new Partie();
        if (carre == 1) {
            partie = getPartieByPlayerId1(playerId);
        } else if (carre == 2) {
            partie = getPartieByPlayerId2(playerId);
        }
        return partie;
    }

    public Partie getPartieByPlayerId1(int playerId) {
        Partie partie = new Partie();
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM partienf WHERE idj=?");
            ps.setInt(1, playerId);
            rs = ps.executeQuery();
            while (rs.next()) {
                partie.setIdp(rs.getInt("idpnf"));
                partie.setIdj(rs.getInt("idj"));
                partie.setLangue(rs.getString("langue"));
                partie.setTypeCmptr(rs.getString("type_cmptr"));
                partie.setMun(rs.getString("mun"));
                partie.setSec(rs.getString("sec"));
                partie.setNiv(rs.getString("niv"));
                for (int i = 1; i <= 25; i++) {
                    partie.getValeursCases().add(rs.getString("v" + i));
                }
                ps = con.prepareStatement("DELETE FROM partienf WHERE idj=?");
                ps.setInt(1, playerId);
                ps.executeUpdate();
            }
            return partie;
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

    public Partie getPartieByPlayerId2(int playerId) {
        System.out.println(" DEBUT getPartieByPlayerId2()");
        Partie partie = new Partie();
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM partienf2 WHERE idj=?");
            ps.setInt(1, playerId);
            rs = ps.executeQuery();
            while (rs.next()) {
                partie.setIdp(rs.getInt("idpnf2"));
                partie.setIdj(rs.getInt("idj"));
                partie.setLangue(rs.getString("langue"));
                partie.setTypeCmptr(rs.getString("type_cmptr"));
                partie.setMun(rs.getString("mun"));
                partie.setSec(rs.getString("sec"));
                partie.setNiv(rs.getString("niv"));
                System.out.println(" AVANT for getPartieByPlayerId2()");
                for (int i = 1; i <= 50; i++) {
                    partie.getValeursCases().add(rs.getString("v" + i));
                }
                System.out.println(" APRES getPartieByPlayerId2()");
                ps = con.prepareStatement("DELETE FROM partienf2 WHERE idj=?");
                ps.setInt(1, playerId);
                System.out.println(" AVANT UPDATE getPartieByPlayerId2()");
                ps.executeUpdate();
                System.out.println(" FIN getPartieByPlayerId2()");
            }
            return partie;
        } catch (Exception e) {
            e.printStackTrace();
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

    public ArrayList<Partie> getAllPartie(int carre) {
        ArrayList<Partie> parties = new ArrayList<>();
        if (carre == 1) {
            parties = getAllPartie1();
        } else if (carre == 2) {
            parties = getAllPartie2();
        }
        return parties;
    }

    public ArrayList<Partie> getAllPartie1() {
        ArrayList<Partie> parties = new ArrayList<>();
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM partienf");
            rs = ps.executeQuery();
            while (rs.next()) {
                //TO CHANGE   parties.add(new Partie(rs.getInt("idj"),rs.getString("email"),rs.getString("pseudo"),rs.getString("pw"),rs.getString("pays"),rs.getString("ville"),rs.getDate("ddj")+"",rs.getInt("con"),rs.getInt("pl"),rs.getInt("pg"),rs.getInt("pp"),rs.getInt("pa"),rs.getInt("ps"),rs.getInt("dl"),rs.getInt("dg"),rs.getInt("dp"),rs.getString("created")));    
            }
            return parties;
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

    public ArrayList<Partie> getAllPartie2() {
        ArrayList<Partie> parties = new ArrayList<>();
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT * FROM partienf2");
            rs = ps.executeQuery();
            while (rs.next()) {
                //TO CHANGE   parties.add(new Partie(rs.getInt("idj"),rs.getString("email"),rs.getString("pseudo"),rs.getString("pw"),rs.getString("pays"),rs.getString("ville"),rs.getDate("ddj")+"",rs.getInt("con"),rs.getInt("pl"),rs.getInt("pg"),rs.getInt("pp"),rs.getInt("pa"),rs.getInt("ps"),rs.getInt("dl"),rs.getInt("dg"),rs.getInt("dp"),rs.getString("created")));    
            }
            return parties;
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

    public boolean playerHasASavedPartie(int playerId, int carre) {
        boolean exist = false;
        if (carre == 1) {
            exist = playerHasASavedPartie1(playerId);
        } else if (carre == 2) {
            exist = playerHasASavedPartie2(playerId);
        }
        return exist;
    }

    public boolean playerHasASavedPartie1(int playerId) {
        boolean exist = false;
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT idpnf FROM partienf WHERE idj=?");
            ps.setInt(1, playerId);
            rs = ps.executeQuery();
            while (rs.next()) {
                exist = true;
            }
            return exist;
        } catch (Exception e) {
            return false;
        } finally {
            try {
                rs.close();
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }

    public boolean playerHasASavedPartie2(int playerId) {
        boolean exist = false;
        try {
            con = ConnectDbA20.getConnection();
            ps = con.prepareStatement("SELECT idpnf2 FROM partienf2 WHERE idj =?");
            ps.setInt(1, playerId);
            rs = ps.executeQuery();
            while (rs.next()) {
                exist = true;
            }
            return exist;
        } catch (Exception e) {
            return false;
        } finally {
            try {
                rs.close();
                ps.close();
                con.close();
            } catch (Exception e) {
            }
        }
    }

}
