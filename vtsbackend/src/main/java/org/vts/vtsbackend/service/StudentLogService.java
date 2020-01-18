package org.vts.vtsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.StudentLog;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentLogService {

	private static List<StudentLog> studentLogs = new ArrayList<>();
	private static int idCounter = 0;
	@Autowired
	private DatabseUtil DatabseUtil;


	public List<StudentLog> findByStudentId(int studentId) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<StudentLog> studentLogs = new ArrayList<>();


		try {
			st = conn.prepareStatement("SELECT * FROM student_Log where student_id = ? order by activity_date desc");

			st.setInt(1, studentId);

			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentLog studentLog = new StudentLog();
				studentLog.setId(rs.getInt("id"));
				studentLog.setStudentId(rs.getInt("student_id"));
				studentLog.setActivityDate(rs.getDate("activity_date"));
				studentLog.setDescription(rs.getString("description"));
				studentLog.setLoggedHours(rs.getInt("logged_hours"));
				studentLog.setCategory(rs.getString("category"));



				studentLogs.add(studentLog);
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


		return studentLogs;
	}

	public List<StudentLog> findAll() throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		List<StudentLog> studentLogs = new ArrayList<>();

		try {
			st = conn.prepareStatement("SELECT * FROM student_Log order by id");
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentLog studentLog = new StudentLog();
				studentLog.setId(rs.getInt("id"));
				studentLog.setStudentId(rs.getInt("student_id"));
				studentLog.setActivityDate(rs.getDate("activity_date"));
				studentLog.setDescription(rs.getString("description"));
				studentLog.setCategory(rs.getString("category"));
				studentLogs.add(studentLog);
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
		return studentLogs;
	}

	public StudentLog save(StudentLog studentLog) throws SQLException {
		if (studentLog.getId() == -1 || studentLog.getId() == 0) {
			System.out.println("Inside if condit");
			insertStudentLog(studentLog);

		} else {
			System.out.println("Inside else condit");
			updateStudentLog(studentLog);

		}
		return studentLog;
	}

	private static java.sql.Timestamp getCurrentTimeStamp() {
		java.util.Date today = new java.util.Date();
		return new java.sql.Timestamp(today.getTime());
	}

	public void insertStudentLog(StudentLog studentLog) throws SQLException {

		String SQL = "INSERT INTO student_Log(student_id, activity_date, description,logged_hours, category) "
				+ "VALUES(?,?,?,?,?)";

		// long id = 0;

		try (
				Connection conn = DatabseUtil.dbConnect();
			 PreparedStatement pstmt = conn.prepareStatement(SQL, Statement.RETURN_GENERATED_KEYS)) {

			int i = 1;
			pstmt.setInt(i++, studentLog.getStudentId());
			pstmt.setDate(i++, studentLog.getActivityDate());
			pstmt.setString(i++, studentLog.getDescription());
			pstmt.setInt(i++, studentLog.getLoggedHours());
			pstmt.setString(i++, studentLog.getCategory());


			int affectedRows = pstmt.executeUpdate();
			// check the affected rows

		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}

	}


	public int updateStudentLog(StudentLog studentLog) throws SQLException {

		String SQL = "UPDATE student_Log "
				+ "SET student_id = ? "
				+ ",activity_date = ? "
				+ ", description = ? "
				+ ", logged_hours = ? "
				+ ", category = ? "
				+ " WHERE id = ?";


		int affectedrows = 0;

		try (
				Connection conn = DatabseUtil.dbConnect();
				PreparedStatement pstmt = conn.prepareStatement(SQL)) {
			pstmt.setInt(1, studentLog.getStudentId());
			pstmt.setDate(2, studentLog.getActivityDate());
			pstmt.setString(3, studentLog.getDescription());
			pstmt.setInt(4, studentLog.getLoggedHours());
			pstmt.setString(5, studentLog.getCategory());
			pstmt.setInt(6, studentLog.getId());
			affectedrows = pstmt.executeUpdate();

		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}
		return affectedrows;
	}

	public int deleteById(int id) throws SQLException {
		String SQL = "DELETE FROM student_Log WHERE id = ?";

		int affectedrows = 0;

		try (
				Connection conn = DatabseUtil.dbConnect();
			 PreparedStatement pstmt = conn.prepareStatement(SQL)) {

			pstmt.setInt(1, id);

			affectedrows = pstmt.executeUpdate();

		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}


		return affectedrows;
	}

	public StudentLog findById(int id) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();
		System.out.print("Inside Find by Id ="+id);


		try {
			st = conn.prepareStatement("SELECT * FROM student_Log where id = ?");
			st.setInt(1, id);


			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentLog studentLog = new StudentLog();
				studentLog.setId(rs.getInt("id"));
				studentLog.setStudentId(rs.getInt("student_id"));
				studentLog.setActivityDate(rs.getDate("activity_date"));
				studentLog.setDescription(rs.getString("description"));
				studentLog.setLoggedHours(rs.getInt("logged_hours"));
				studentLog.setCategory(rs.getString("category"));


				return studentLog;
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


		return null;

	}
}