package org.vts.vtsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Advisor;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * This is the service for Login logic by accessing the backend database
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

@Service
public class LoginService {

    @Autowired
    private DatabseUtil DatabseUtil;
//    public boolean isValidLogin(String username, String password) throws Exception {
//        System.out.println("Username: " + username + " \n Password:" + password);
//        if (username.equals("admin") && password.equals("test")) {
//            System.out.println("zzTrue");
//            return true;
//        }
//        return true;
//        //throw new Exception("Invalid Login");
//    }

    public Advisor isValidAdvisorLogin(String id, String password) throws SQLException {
        PreparedStatement st = null;
        Connection conn = DatabseUtil.dbConnect();

        System.out.println("Inside isValidAdvisorLogin login id:" + id);

        try {
            st = conn.prepareStatement("select * " +
                    "from advisor " +
                    "where upper(email) = ? and password = ?");
            st.setString(1, id.toUpperCase().trim());
            st.setString(2, password.trim());
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                System.out.print("Column 1 returned ");
                Advisor advisor = new Advisor();
                advisor.setId(rs.getInt("id"));
                advisor.setFirstName(rs.getString("first_name"));
                advisor.setLastName(rs.getString("last_name"));
                advisor.setPhoneNumber(rs.getString("phone_number"));
                advisor.setEmail(rs.getString("email"));
                advisor.setPassword(rs.getString("password"));
                advisor.setActivityDate(rs.getDate("last_login"));

                return advisor;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw e;
        } finally {
            if (st != null) {
                st.close();
            }
            conn.close();
        }
        return null;

    }


    public Student isValidStudentLogin(String id, String password) throws SQLException {
        PreparedStatement st = null;
        Connection conn = DatabseUtil.dbConnect();

        System.out.println("Inside student login id:" + id);

        try {
            st = conn.prepareStatement("select * " +
                    "from student " +
                    "where (upper(email) = ? or upper(student_num) = ?) and password = ?");
            st.setString(1, id.toUpperCase().trim());
            st.setString(2, id.toUpperCase().trim());
            st.setString(3, password.trim());
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                System.out.print("Column 1 returned ");
                Student student = new Student();
                student.setStudentId(rs.getInt("id"));
                student.setFirstName(rs.getString("first_name"));
                student.setLastName(rs.getString("last_name"));
                student.setStudentNum(rs.getString("student_num"));
                student.setEmail(rs.getString("email"));
                student.setPassword(rs.getString("password"));
                student.setAge(rs.getInt("age"));
                student.setGrade(rs.getInt("grade"));

                System.out.println("Printing Student login" + student);
                return student;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw e;
        } finally {
            if (st != null) {
                st.close();
            }
            conn.close();
        }
        return null;

    }

}