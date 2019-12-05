package org.vts.vtsbackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Student;

@Service
public class StudentService {

  private static List<Student> students = new ArrayList<>();
  private static int idCounter = 0;

  static {
	 students.add(new Student(++idCounter, "Sid", "VJ", "2498498", "sidvijay2004@gmail.com", 15, 10));
	 students.add(new Student(++idCounter, "John", "Doe","2498499", "johndoe@hotmail.com", 14, 9));
	 students.add(new Student(++idCounter, "Jane", "Doe", "2492338","janedoe@hotmail.com", 16, 11));
	 students.add(new Student(++idCounter, "Bob", "Doe", "348498","bobedoe@hotmail.com", 26, 17));

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

		  
		  student.setStudentId(++idCounter);
		  students.add(student);
		  
	  } else {
		  
		  System.out.println("Inside else condit");

	    deleteById(student.getStudentId());
	    students.add(student);
	  }
	  return student;
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