package org.vts.vtsbackend.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.StudentService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class StudentController {
	

  @Autowired
  private StudentService studentService;

  @GetMapping("/ListStudents")
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
  
  @GetMapping("/students/{id}")
  public Student getStudent(@PathVariable int id) {
    return studentService.findById(id);
  }
  @PutMapping("/students/{id}")
  public ResponseEntity<Student> updateStudent(@PathVariable int id,
      @RequestBody Student student) {
	  
	  student.setStudentId(id);
	  
	  System.out.println("Inside Put method");
	  
	  System.out.println("ID:" + id);
	  System.out.println("Student:" + student);



    Student studentUpdated = studentService.save(student);

    return new ResponseEntity<Student>(studentUpdated, HttpStatus.OK);
  }
  @PostMapping("/students")
  public ResponseEntity<Void> createStudent(@RequestBody Student student) {
	  
	  System.out.println("Inside Post method");


	 Student newStudent = studentService.save(student);

    // Location
    // Get current resource url
    /// {id}
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newStudent.getStudentId())
        .toUri();

    return ResponseEntity.created(uri).build();
  }
}