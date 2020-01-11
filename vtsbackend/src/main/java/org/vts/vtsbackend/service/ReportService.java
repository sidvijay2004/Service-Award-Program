package org.vts.vtsbackend.service;

import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.StudentReport;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

	private static List<StudentReport> studentReports = new ArrayList<>();
	private static int idCounter = 0;

	public List<StudentReport> getMonthlyStudentReport(int studentId) throws SQLException {
		System.out.println("SstudentId = " + studentId);

		return getStudentReports(studentId, "M");
	}
	public List<StudentReport> getWeeklyStudentReport(int studentId) throws SQLException {
		System.out.println("SstudentId = " + studentId);

		return getStudentReports(studentId, "W");
	}



	private List<StudentReport> getStudentReports(int studentId, String type) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<StudentReport> studentReports = new ArrayList<>();

		String period = "IYYY-MM";

		if(type.equals("W")){
			period = "IYYY-IW";
		}
		String sql = "select first_name, last_name, to_char(activity_date, '" + period + "') as period, sum (logged_hours) as total_hours" +
				" from student_log a, student b" +
				" where a.student_id = b.id and b.id = ?" +
				" group by first_name, last_name, period" +
				" order by 1,2,3";
		try {
			st = conn.prepareStatement(sql);
			st.setInt(1, studentId);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentReport studentReport = new StudentReport();
				studentReport.setFirstName(rs.getString("first_name"));
				studentReport.setLastName(rs.getString("last_name"));
				studentReport.setPeriod(rs.getString("period"));
				studentReport.setTotalHours(rs.getInt("total_hours"));
				studentReports.add(studentReport);
				System.out.println("Student Report" + studentReport);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} finally {
			if (st != null) {
				st.close();
			}
			conn.close();
		}


		return studentReports;
	}

	public List<StudentReport> getStudentTotalHours() throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<StudentReport> studentReports = new ArrayList<>();

		String sql = "select first_name, last_name, sum (logged_hours) as total_hours" +
				" from student_log a, student b" +
				" where a.student_id = b.id" +
				" group by first_name, last_name" +
				" order by 1,2,3";

		try {
			st = conn.prepareStatement(sql);

			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentReport studentReport = new StudentReport();
				studentReport.setFirstName(rs.getString("first_name"));
				studentReport.setLastName(rs.getString("last_name"));
				studentReport.setTotalHours(rs.getInt("total_hours"));
				studentReports.add(studentReport);
				System.out.println("Student Report" + studentReport);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} finally {
			if (st != null) {
				st.close();
			}
			conn.close();
		}


		return studentReports;
	}

}