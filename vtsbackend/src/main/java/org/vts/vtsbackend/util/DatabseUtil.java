package org.vts.vtsbackend.util;

import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Service
public class DatabseUtil {


	public static Connection dbConnect() throws SQLException {
		String url = "jdbc:postgresql://localhost:5432/postgres";

		String user = "postgres";

		String password = "falcons";

		return DriverManager.getConnection(url, user, password);
	}


}