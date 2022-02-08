/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.daos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author leprince
 */
public class ConnectDbA20 {
//    public static void main(String[] args) {
//        if (getConnection()==null) {
//            System.out.println("contion kooo");
//        }else{
//            System.out.println("contion kitoss");
//        }
//    }
    public static Connection getConnection() {
        Connection con=null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/dba20", "root", "12345");
        } catch (Exception ex) {
            Logger.getLogger(ConnectDbA20.class.getName()).log(Level.SEVERE, null, ex);
        }
        return con;
    }
}
