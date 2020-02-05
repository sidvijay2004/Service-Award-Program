package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.vts.vtsbackend.model.ChartData;
import org.vts.vtsbackend.model.StudentReport;
import org.vts.vtsbackend.service.ReportService;

import java.sql.SQLException;
import java.util.List;

/**
 * This program exposes the backend to the frontend for report information
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/monthlyStudentReport/{studentId}")
    public List<StudentReport> getStudentMonthlyReport(@PathVariable int studentId) throws SQLException {
        return reportService.getMonthlyStudentReport(studentId);
    }

    @GetMapping("/weeklyStudentReport/{studentId}")
    public List<StudentReport> getStudentWeeklyReport(@PathVariable int studentId) throws SQLException {
        return reportService.getWeeklyStudentReport(studentId);
    }

    @GetMapping("/getStudentTotalHours")
    public List<StudentReport> getStudentTotalHours(String awardLevel) throws SQLException {
        return reportService.getStudentTotalHours(awardLevel);
    }

    @GetMapping("/getChartData")
    public List<ChartData> getChartData(String rptType, int studentId) throws SQLException {
        return reportService.getChartData(rptType, studentId);
    }


}