package org.vts.vtsbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.StudentService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class StudentController {
	

  @Autowired
  private StudentService studentService;

  @GetMapping("/StudentList")
  public List<Student> getAllStudents(String username) {
	System.out.println("Inside Get All students method");
    return studentService.findAll();
  }
  
  @DeleteMapping("/students/{id}")
  public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
		System.out.println("Inside Delete students");
	  
    Student student = studentService.deleteById(id);

    if (student != null) {
      return ResponseEntity.noContent().build();
    }

    return ResponseEntity.notFound().build();
  }
}