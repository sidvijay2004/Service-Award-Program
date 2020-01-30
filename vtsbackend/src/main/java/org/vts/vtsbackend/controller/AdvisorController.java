package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.vts.vtsbackend.model.Advisor;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.AdvisorService;
import org.vts.vtsbackend.service.StudentService;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;

//@CrossOrigin(origins = { "http://localhost:3000"})
//@CrossOrigin(origins = { "*"})
@CrossOrigin(origins = {"http://localhost:3000", "https://0.0.0.0:3000"})
@RestController
public class AdvisorController {


    @Autowired
    private AdvisorService advisorService;

    @GetMapping("/advisor/{id}")
    public Advisor getAdvisor(@PathVariable int id) throws SQLException {
        Advisor advisor =  advisorService.findById(id);
        return advisor;

    }

    @PutMapping("/advisor/{id}")
    public ResponseEntity<Advisor> updateAdvisor(@PathVariable int id,
                                                 @RequestBody Advisor advisor) throws SQLException {

        advisor.setId(id);

        Advisor advisorUpdated = advisorService.updateAdvisor(advisor);

        return new ResponseEntity<Advisor>(advisorUpdated, HttpStatus.OK);
    }


}