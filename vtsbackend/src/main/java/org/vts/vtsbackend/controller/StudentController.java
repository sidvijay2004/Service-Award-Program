package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.StudentService;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;

/**
 * This program exposes the backend to the frontend for Student information
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

//@CrossOrigin(origins = { "http://localhost:3000"})
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin(origins = {"http://localhost:3000", "http://10.0.0.13:3000"})
@RestController
public class StudentController {


    @Autowired
    private StudentService studentService;

    @GetMapping("/ListStudents")
    public List<Student> getAllStudents(String username) throws SQLException {
        System.out.println("Inside Get All students method");
        return studentService.findAll();
    }

    @GetMapping("/searchStudents")
    public List<Student> searchStudents(String searchText) throws SQLException {
        System.out.println("Inside searchStudents searchStudents: " + searchText);
        return studentService.search(searchText);
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) throws SQLException {
        System.out.println("Inside Delete students");

        int affectedRows = studentService.deleteById(id);

        if (affectedRows > 0) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable int id) throws SQLException {
        System.out.println("Inside getStudent method id: " + id);
        Student student = studentService.findById(id);
        System.out.println("Lastname in student class " + student);
        return student;

    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id,
                                                 @RequestBody Student student) throws SQLException {

        student.setStudentId(id);

        System.out.println("Inside Put method");

        System.out.println("ID:" + id);
        System.out.println("Student:" + student);


        Student studentUpdated = studentService.save(student);

        return new ResponseEntity<Student>(studentUpdated, HttpStatus.OK);
    }

    @PostMapping("/students")
    public ResponseEntity<Void> createStudent(@RequestBody Student student) throws SQLException {

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