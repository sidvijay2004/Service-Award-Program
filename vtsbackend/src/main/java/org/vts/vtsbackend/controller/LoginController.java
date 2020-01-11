package org.vts.vtsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.LoginService;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class LoginController {
	

  @Autowired
  private LoginService loginService;

  @GetMapping("/login")
  public boolean validate (String username, String password) throws Exception {
	  try {
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
			return loginService.isValidStudentLogin(username, password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
	}
}
