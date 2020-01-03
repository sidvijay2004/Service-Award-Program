package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.vts.vtsbackend.model.StudentLog;
import org.vts.vtsbackend.service.StudentLogService;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class StudentLogController {


    @Autowired
    private StudentLogService studentLogService;

    @GetMapping("/ListStudentLogs")
    public List<StudentLog> getAllStudentLogs(String username) throws SQLException {
        System.out.println("Inside Get All studentLogs method");
        return studentLogService.findAll();
    }

    @DeleteMapping("/studentLogs/{id}")
    public ResponseEntity<Void> deleteStudentLog(@PathVariable int id) throws SQLException {
        System.out.println("Inside Delete studentLogs");

        int affectedRows = studentLogService.deleteById(id);

        if (affectedRows > 0) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/studentLogs/{id}")
    public StudentLog getStudentLog(@PathVariable int id) throws SQLException {
        System.out.println("Inside getStudentLog method id: " + id);
        StudentLog studentLog =  studentLogService.findById(id);
        System.out.println("Lastname in studentLog class " + studentLog);
        return studentLog;

    }

    @PutMapping("/studentLogs/{id}")
    public ResponseEntity<StudentLog> updateStudentLog(@PathVariable int id,
                                                 @RequestBody StudentLog studentLog) throws SQLException {

        studentLog.setId(id);

        System.out.println("Inside Put method");

        System.out.println("ID:" + id);
        System.out.println("StudentLog:" + studentLog);


        StudentLog studentLogUpdated = studentLogService.save(studentLog);

        return new ResponseEntity<StudentLog>(studentLogUpdated, HttpStatus.OK);
    }

    @PostMapping("/studentLogs")
    public ResponseEntity<Void> createStudentLog(@RequestBody StudentLog studentLog) throws SQLException {

        System.out.println("Inside Post method");


        StudentLog newStudentLog = studentLogService.save(studentLog);

        // Location
        // Get current resource url
        /// {id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newStudentLog.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }
}