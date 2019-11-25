package org.vts.vtsbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.StudentService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class StudentController {

  @Autowired
  private StudentService studentService;

  @GetMapping("/StudentList")
  public List<Student> getAllCourses(String username) {
	System.out.println("Inside Get All Courses method");
    return studentService.findAll();
  }
}