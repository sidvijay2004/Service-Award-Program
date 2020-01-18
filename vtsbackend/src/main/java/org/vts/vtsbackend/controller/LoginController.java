package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.LoginService;

//@CrossOrigin(origins = { "http://localhost:3000"})
@CrossOrigin(origins = {"http://localhost:3000", "https://master.d3nmz8aenbwqyp.amplifyapp.com"})
@RestController
public class LoginController {
	

  @Autowired
  private LoginService loginService;

  @GetMapping("/login")
  public boolean validate (String username, String password) throws Exception {
	  try {
		  System.out.println("Util Date=" + new java.util.Date());
//		  System.out.println("SQL Date=" + new java.sql.Date());
		return loginService.isValidLogin(username, password);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		throw e;
	}
  }

	@GetMapping("/studentLogin")
	public Student validateStudent (String username, String password) throws Exception {
		try {
			Student student =  loginService.isValidStudentLogin(username, password);
			if(student == null){
				throw new Exception("Invalid Login");
			}
			else{
				return student;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
	}
}
