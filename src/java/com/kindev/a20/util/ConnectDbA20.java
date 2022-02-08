/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kindev.a20.util;

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
//            System.out.println("connection kooo");
//        }else{
//            System.out.println("connection kitokoss");
//        }
//    }
    public static Connection getConnection() {
        Connection con=null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/arbotwen_dba20", "arbotwen_arbotwen1", "a20@2021");//online on a20
           // con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:6666/dba20", "root", "kindev@199321B3");//online on kindev
           // con = DriverManager.getConnection("jdbc:mysql://localhost:3306/dba20", "root", "12345");//offline
        } catch (Exception ex) {
            Logger.getLogger(ConnectDbA20.class.getName()).log(Level.SEVERE, null, ex);
        }
        return con;
    }
}
