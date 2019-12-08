package org.vts.vtsbackend.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.vts.vtsbackend.model.Student;
import org.vts.vtsbackend.service.LoginService;
import org.vts.vtsbackend.service.StudentService;

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
}
  