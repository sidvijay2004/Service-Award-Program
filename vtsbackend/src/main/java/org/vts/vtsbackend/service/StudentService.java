package org.vts.vtsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * This is the service for Student logic by accessing the backend database
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

@Service
public class StudentService {

    private static List<Student> students = new ArrayList<>();
    private static int idCounter = 0;

    @Autowired
    private DatabseUtil DatabseUtil;

    private static java.sql.Timestamp getCurrentTimeStamp() {

        java.util.Date today = new java.util.Date();
        return new java.sql.Timestamp(today.getTime());

    }

    public List<Student> findAll() throws SQLException {
        PreparedStatement st = null;
        Connection conn = DatabseUtil.dbConnect();
        List<Student> students = new ArrayList<>();


        try {
            st = conn.prepareStatement("SELECT * FROM student order by first_name");


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


                students.add(student);
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


        return students;
    }

    public Student save(Student student) throws SQLException {

        System.out.println(student);

        if (student.getStudentId() == -1 || student.getStudentId() == 0) {
            System.out.println("Inside if condit");

            insertStudent(student);


        } else {

            System.out.println("Inside else condit");

            updateStudent(student);

        }
        return student;
    }

    public void insertStudent(Student student) throws SQLException {
        String SQL = "INSERT INTO student(first_name,last_name,student_num ,email,password,age,grade,created_on,last_login) "
                + "VALUES(?,?,?,?,?,?,?,?,?)";

        // long id = 0;

        try (
                Connection conn = DatabseUtil.dbConnect();
                PreparedStatement pstmt = conn.prepareStatement(SQL, Statement.RETURN_GENERATED_KEYS)) {

            pstmt.setString(1, student.getFirstName());
            pstmt.setString(2, student.getLastName());
            pstmt.setString(3, student.getStudentNum());
            pstmt.setString(4, student.getEmail());
            pstmt.setString(5, student.getPassword());
            pstmt.setLong(6, student.getAge());
            pstmt.setLong(7, student.getGrade());
            pstmt.setTimestamp(8, getCurrentTimeStamp());
            pstmt.setTimestamp(9, getCurrentTimeStamp());

            int affectedRows = pstmt.executeUpdate();
            // check the affected rows
            if (affectedRows > 0) {

                System.out.println("Row added");

                // get the ID back
//              try (ResultSet rs = pstmt.getGeneratedKeys()) {
//                  if (rs.next()) {
//                      id = rs.getLong(1);
//                  }
//              } catch (SQLException ex) {
//                  System.out.println(ex.getMessage());
//              }

            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
            throw ex;
        }

    }


    public int updateStudent(Student student) throws SQLException {

        String SQL = "UPDATE student "
                + "SET first_name = ? "
                + ",last_name = ? "
                + ",student_num = ? "
                + ", email = ? "
                + ", age = ? "
                + ", grade = ? "
                + ", password = ? "
                + "WHERE id = ?";


        int affectedrows = 0;

        try (
                Connection conn = DatabseUtil.dbConnect();
                PreparedStatement pstmt = conn.prepareStatement(SQL)) {


            pstmt.setString(1, student.getFirstName());
            pstmt.setString(2, student.getLastName());
            pstmt.setString(3, student.getStudentNum());
            pstmt.setString(4, student.getEmail());
            pstmt.setLong(5, student.getAge());
            pstmt.setLong(6, student.getGrade());
            pstmt.setString(7, student.getPassword());
            pstmt.setInt(8, student.getStudentId());


            affectedrows = pstmt.executeUpdate();

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
            throw ex;
        }
        return affectedrows;
    }

    public int deleteById(int id) throws SQLException {
        String SQL = "DELETE FROM student WHERE id = ?";

        int affectedrows = 0;

        try (
                Connection conn = DatabseUtil.dbConnect();
                PreparedStatement pstmt = conn.prepareStatement(SQL)) {

            pstmt.setInt(1, id);

            affectedrows = pstmt.executeUpdate();

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
            throw ex;
        }


        return affectedrows;
    }

//	public Student deleteById(int id) {
//		Student student = findById(id);
//
//		if (student == null)
//			return null;
//
//		if (students.remove(student)) {
//			return student;
//		}
//
//		return null;
//	}

    public Student findById(int id) throws SQLException {
        PreparedStatement st = null;
        Connection conn = DatabseUtil.dbConnect();


        try {
            st = conn.prepareStatement("SELECT * FROM student where id = ?");
            st.setInt(1, id);


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

    public List<Student> search(String searchText) throws SQLException {
        PreparedStatement st = null;
        Connection conn = DatabseUtil.dbConnect();
        List<Student> students = new ArrayList<>();

        int searchInt = -1;

        if (searchText != null) {
            try {
                searchInt = Integer.parseInt(searchText);

            } catch (NumberFormatException nfe) {

            }
        }

        try {

            st = conn.prepareStatement("SELECT *" +
                    " FROM student" +
                    " WHERE" +
                    " LOWER(first_name) like LOWER(?) or" +
                    " LOWER(last_name) like LOWER(?) or" +
                    " LOWER(email) like LOWER(?) or" +
                    " age = ? or" +
                    " grade = ? " +
                    " ORDER BY first_name,last_name "
            );

            st.setString(1, "%" + searchText + "%");
            st.setString(2, "%" + searchText + "%");
            st.setString(3, "%" + searchText + "%");
            st.setInt(4, searchInt);
            st.setInt(5, searchInt);

            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                System.out.print("Column 1 returned ");
                Student student = new Student();
                student.setStudentId(rs.getInt("id"));
                student.setFirstName(rs.getString("first_name"));
                student.setLastName(rs.getString("last_name"));
                student.setStudentNum(rs.getString("student_num"));
                student.setEmail(rs.getString("email"));
                student.setAge(rs.getInt("age"));
                student.setGrade(rs.getInt("grade"));

                System.out.println("Inside search Student = " + student);
                students.add(student);
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


        return students;
    }
}