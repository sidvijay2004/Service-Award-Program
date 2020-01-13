package org.vts.vtsbackend.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.vts.vtsbackend.service.StudentService;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Component
//@ConfigurationProperties(prefix = "spring.datasource")
public class DatabseUtil {
	@Value("${spring.datasource.url}")
	 private String url = "";

	@Value("${spring.datasource.username}")
	 private String username="" ;

	@Value("${spring.datasource.password}")
	 private String password="";


	public  Connection dbConnect() throws SQLException {
		return DriverManager.getConnection(url, username, password);
	}

}