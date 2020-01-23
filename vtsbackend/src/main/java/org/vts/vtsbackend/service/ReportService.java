package org.vts.vtsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.ChartData;
import org.vts.vtsbackend.model.StudentReport;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

	private static List<StudentReport> studentReports = new ArrayList<>();
	private static int idCounter = 0;
	@Autowired
	private DatabseUtil DatabseUtil;
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

		String period = "IYYY-Month";

		if(type.equals("W")){
			period = "IYYY-Month W";
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


	public List<ChartData> getChartData(String rptType, int studentId) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<ChartData> chartDataReport = new ArrayList<>();

		String sql = "";

		if(rptType.equals("stdctg")){
					 sql = "select category as label, sum (logged_hours) as value" +
					" from student_log " +
					" where student_id = ?" +
					" group by category" +
					" order by 1";
		}
		else if(rptType.equals("allctg")){
			sql = "select category as label, sum (logged_hours) as value" +
					" from student_log " +
					" group by category" +
					" order by 1";
		}
		else if(rptType.equals("gradeCount")){
			sql = "select grade as label, count (*) as value" +
					" from student" +
					" group by grade" +
					" order by 1";
		}
		else if(rptType.equals("ageCount")){
			sql = "select age as label, count (*) as value" +
					" from student" +
					" group by age" +
					" order by 1";
		}
		else if(rptType.equals("gradeHours")){
			sql = "select grade as label, sum (logged_hours) as value" +
					" from student_log a, student b" +
					" where a.student_id = b.id" +
					" group by grade" +
					" order by 1";
		}
		else if(rptType.equals("ageHours")){
			sql = "select age as label, sum (logged_hours) as value" +
					" from student_log a, student b" +
					" where a.student_id = b.id" +
					" group by age" +
					" order by 1";
		}


		try {
			st = conn.prepareStatement(sql);
			if(rptType.equals("stdctg")) {
				st.setInt(1, studentId);
			}

			ResultSet rs = st.executeQuery();

			while (rs.next()) {
				ChartData chartData = new ChartData();
				chartData.setLabelData(rs.getString("label"));
				chartData.setValueData(rs.getInt("value"));
				System.out.print("chartData " + chartData);
				chartDataReport.add(chartData);


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


		return chartDataReport;
	}

	public List<StudentReport> getStudentTotalHours(String awardLevel) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<StudentReport> studentReports = new ArrayList<>();

		String sql = "select first_name, last_name, sum (logged_hours) as total_hours" +
				" from student_log a, student b" +
				" where a.student_id = b.id " +
				" group by first_name, last_name" +
				" order by 1,2,3";

		try {
			st = conn.prepareStatement(sql);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				StudentReport studentReport = new StudentReport();
				studentReport.setFirstName(rs.getString("first_name"));
				studentReport.setLastName(rs.getString("last_name"));
				studentReport.setTotalHours(rs.getInt("total_hours"));
				System.out.print("Column 1 returned ");

				if((studentReport.getAwardLevel()).equals(awardLevel) || awardLevel.equals("all")){
					studentReports.add(studentReport);
				}

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