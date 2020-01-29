package org.vts.vtsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Advisor;
import org.vts.vtsbackend.util.DatabseUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdvisorService {

	private static List<Advisor> students = new ArrayList<>();
	private static int idCounter = 0;

	@Autowired
	private DatabseUtil DatabseUtil;

	public Advisor updateAdvisor(Advisor advisor) throws SQLException {

		String SQL = "CREATE TABLE advisor(" +
				"   id serial PRIMARY KEY," +
				"   first_name VARCHAR (50) NOT NULL," +
				"   last_name VARCHAR (50) NOT NULL," +
				"   phone_number VARCHAR (50) NOT NULL," +
				"   email VARCHAR (355) UNIQUE NOT NULL," +
				"   password VARCHAR (50) NOT NULL," +
				"   last_login TIMESTAMP";



		int affectedrows = 0;

		try (
				Connection conn = DatabseUtil.dbConnect();
				PreparedStatement pstmt = conn.prepareStatement(SQL)) {


			pstmt.setString(1, advisor.getFirstName());
			pstmt.setString(2, advisor.getLastName());
			pstmt.setString(3, advisor.getPhoneNumber());
			pstmt.setString(4, advisor.getEmail());
			pstmt.setString(5, advisor.getPassword());
			pstmt.setString(6, advisor.getPassword());
			pstmt.setDate(7, advisor.getActivityDate());


			affectedrows = pstmt.executeUpdate();

		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
			throw ex;
		}
		return advisor;
	}


	public Advisor findById(int id) throws SQLException {
		PreparedStatement st = null;
		Connection conn = DatabseUtil.dbConnect();


		try {
			st = conn.prepareStatement("SELECT * FROM advisor where id = ?");
			st.setInt(1, id);


			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				System.out.print("Column 1 returned ");
				Advisor advisor = new Advisor();
				advisor.setId(rs.getInt("id"));
				advisor.setFirstName(rs.getString("first_name"));
				advisor.setLastName(rs.getString("last_name"));
				advisor.setPhoneNumber(rs.getString("phone_number"));
				advisor.setEmail(rs.getString("email"));
				advisor.setPassword(rs.getString("password"));
				advisor.setActivityDate(rs.getDate("last_login"));


				return advisor;
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