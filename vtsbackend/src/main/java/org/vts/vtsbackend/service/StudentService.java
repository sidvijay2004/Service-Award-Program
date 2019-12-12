package org.vts.vtsbackend.service;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Student;

@Service
public class StudentService {

  private static List<Student> students = new ArrayList<>();
  private static int idCounter = 0;

  static {
	 students.add(new Student(++idCounter, "Sid", "VJ", "2498498", "sidvijay2004@gmail.com", "test", 15, 10));
	 students.add(new Student(++idCounter, "John", "Doe","2498499", "johndoe@hotmail.com","test", 14, 9));
	 students.add(new Student(++idCounter, "Jane", "Doe", "2492338","janedoe@hotmail.com","test", 16, 11));
	 students.add(new Student(++idCounter, "Bob", "Doe", "348498","bobedoe@hotmail.com","test", 26, 17));

//	 students.add(new student(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
//	 students.add(new student(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
//	 students.add(new student(++idCounter, "in28minutes","Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
  }

  public List<Student> findAll() {
    return students;
  }
  
  public Student save(Student student) {
	  
	  System.out.println(student);
	  
	  if (student.getStudentId() == -1 || student.getStudentId() == 0) {
		  System.out.println("Inside if condit");
		  
		  insertStudent(student);

		  
//		  student.setStudentId(++idCounter);
//		  students.add(student);
		  
	  } else {
		  
		  System.out.println("Inside else condit");

	    deleteById(student.getStudentId());
	    students.add(student);
	  }
	  return student;
	}
  
  
  public Connection dbConnect() throws SQLException {
    String url = "jdbc:postgresql://localhost:5432/SAMDB";
      
	String user = "postgres";
	
	String password = "falcons";

	return DriverManager.getConnection(url , user , password);
  }
  
  private static java.sql.Timestamp getCurrentTimeStamp() {

		java.util.Date today = new java.util.Date();
		return new java.sql.Timestamp(today.getTime());

	}
  
  
  public void insertStudent(Student student) {
	  
	  student.setPassword("xyz");
      String SQL = "INSERT INTO student(first_name,last_name,student_num ,email,password,age,grade,created_on,last_login) "
              + "VALUES(?,?,?,?,?,?,?,?,?)";

     // long id = 0;
      

      try (Connection conn = dbConnect();
              PreparedStatement pstmt = conn.prepareStatement(SQL,
              Statement.RETURN_GENERATED_KEYS)) {

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
      }
//      return id;
  }
  public Student deleteById(int id) {
	  Student student = findById(id);

	    if (student == null)
	      return null;

	    if (students.remove(student)) {
	      return student;
	    }

	    return null;
	  }
  
	public Student findById(int id) {
		for (Student student : students) {
			if (student.getStudentId() == id) {
				return student;
			}
		}

		return null;
	}

}