package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.vts.vtsbackend.model.StudentReport;
import org.vts.vtsbackend.service.ReportService;

import java.sql.SQLException;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class ReportController {


    @Autowired
    private ReportService reportService;

    @GetMapping("/monthlyStudentReport/{studentId}")
    public List<StudentReport> getStudentMonthlyReport(@PathVariable int studentId) throws SQLException {
        System.out.println("Inside Get All getStudentMonthlyReport method");
        return reportService.getMonthlyReport(studentId);
    }


}