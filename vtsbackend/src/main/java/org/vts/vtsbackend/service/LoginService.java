package org.vts.vtsbackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.vts.vtsbackend.model.Student;

@Service
public class LoginService {

	
  public boolean isValidLogin(String username, String password) throws Exception {
	  System.out.println("Username: " + username + " \n Password:"+ password);
	  if(username.equals("admin")&& password.equals("test")) {
		  System.out.println("zzTrue");
		  return true;
	  }
	  throw new Exception("Invalid Login");
  }
}