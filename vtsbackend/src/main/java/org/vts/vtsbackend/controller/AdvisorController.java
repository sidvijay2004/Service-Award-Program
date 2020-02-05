package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vts.vtsbackend.model.Advisor;
import org.vts.vtsbackend.service.AdvisorService;

import java.sql.SQLException;
/**
 * This program exposes the backend to the frontend for the Advisor function
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AdvisorController {
    @Autowired
    private AdvisorService advisorService;

    @GetMapping("/advisor/{id}")
    public Advisor getAdvisor(@PathVariable int id) throws SQLException {
        Advisor advisor = advisorService.findById(id);
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