package org.vts.vtsbackend.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

  private static List<Student> students = new ArrayList<>();
  private static int idCounter = 0;

  static {
	 students.add(new Student(++idCounter, "Sid", "VJ", "sidvijay2004@gmail.com", 15, 10));
	 students.add(new Student(++idCounter, "John", "Doe", "johndoe@hotmail.com", 14, 9));
	 students.add(new Student(++idCounter, "Jane", "Doe", "janedoe@hotmail.com", 16, 11));


//	 students.add(new student(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
//	 students.add(new student(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
//	 students.add(new student(++idCounter, "in28minutes","Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
  }

  public List<Student> findAll() {
    return students;
  }
}