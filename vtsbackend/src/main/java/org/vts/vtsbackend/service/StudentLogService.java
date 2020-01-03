package org.vts.vtsbackend.service;

import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.StudentLog;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentLogService {

	private static List<StudentLog> studentLogs = new ArrayList<>();
	private static int idCounter = 0;



	public List<StudentLog> findAll() throws SQLException {
		PreparedStatement st = null;
		Connection conn = dbConnect();
		List<StudentLog> studentLogs = new ArrayList<>();


		try {
			st = conn.prepareStatement("SELECT * FROM student_Log order by id");


			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentLog studentLog = new StudentLog();
				studentLog.setId(rs.getInt("id"));
				studentLog.setStudentId(rs.getInt("student_id"));
				studentLog.setActivityDate(rs.getString("activity_date"));
				studentLog.setDescription(rs.getString("description"));
				studentLog.setLoggedHours(rs.getInt("logged_hours"));



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

		System.out.println(studentLog);

		if (studentLog.getId() == -1 || studentLog.getId() == 0) {
			System.out.println("Inside if condit");

			insertStudentLog(studentLog);


		} else {

			System.out.println("Inside else condit");

			updateStudentLog(studentLog);

		}
		return studentLog;
	}

	public Connection dbConnect() throws SQLException {
		String url = "jdbc:postgresql://localhost:5432/postgres";

		String user = "postgres";

		String password = "falcons";

		return DriverManager.getConnection(url, user, password);
	}

	private static java.sql.Timestamp getCurrentTimeStamp() {

		java.util.Date today = new java.util.Date();
		return new java.sql.Timestamp(today.getTime());

	}

	public void insertStudentLog(StudentLog studentLog) throws SQLException {

		String SQL = "INSERT INTO student_Log(id, student_id, activity_date, description,logged_hours) "
				+ "VALUES(?,?,?,?,?)";

		// long id = 0;

		try (Connection conn = dbConnect();
			 PreparedStatement pstmt = conn.prepareStatement(SQL, Statement.RETURN_GENERATED_KEYS)) {

			pstmt.setInt(1, studentLog.getId());
			pstmt.setInt(2, studentLog.getStudentId());
			pstmt.setString(3, studentLog.getActivityDate());
			pstmt.setString(4, studentLog.getDescription());
			pstmt.setInt(5, studentLog.getLoggedHours());

			int affectedRows = pstmt.executeUpdate();
			// check the affected rows
			if (affectedRows > 0) {

				System.out.println("Row added");

				// get the ID back
//              try (ResultSet rs = pstmt.getGeneratedKeys()) {
//                  if (rs.next()) {
//                      id = rs.getLong(1);
//                  }
//              } catch (SQLException ex) {
//                  System.out.println(ex.getMessage());
//              }

			}
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}

	}


	public int updateStudentLog(StudentLog studentLog) throws SQLException {

		String SQL = "UPDATE student_Log "
				+ "SET id = ? "
				+ ",student_id = ? "
				+ ",activity_date = ? "
				+ ", description = ? "
				+ ", logged_hours = ? ";



		int affectedrows = 0;

		try (
				Connection conn = dbConnect();
				PreparedStatement pstmt = conn.prepareStatement(SQL)) {


			pstmt.setInt(1, studentLog.getId());
			pstmt.setInt(2, studentLog.getStudentId());
			pstmt.setString(3, studentLog.getActivityDate());
			pstmt.setString(4, studentLog.getDescription());
			pstmt.setInt(5, studentLog.getLoggedHours());


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

		try (Connection conn = dbConnect();
			 PreparedStatement pstmt = conn.prepareStatement(SQL)) {

			pstmt.setInt(1, id);

			affectedrows = pstmt.executeUpdate();

		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}


		return affectedrows;
	}

//	public StudentLog deleteById(int id) {
//		StudentLog studentLog = findById(id);
//
//		if (studentLog == null)
//			return null;
//
//		if (studentLogs.remove(studentLog)) {
//			return studentLog;
//		}
//
//		return null;
//	}

	public StudentLog findById(int id) throws SQLException {
		PreparedStatement st = null;
		Connection conn = dbConnect();


		try {
			st = conn.prepareStatement("SELECT * FROM student_Log where id = ?");
			st.setInt(1, id);


			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				StudentLog studentLog = new StudentLog();
				studentLog.setId(rs.getInt("id"));
				studentLog.setStudentId(rs.getInt("student_id"));
				studentLog.setActivityDate(rs.getString("activity_date"));
				studentLog.setDescription(rs.getString("description"));
				studentLog.setLoggedHours(rs.getInt("logged_hours"));

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