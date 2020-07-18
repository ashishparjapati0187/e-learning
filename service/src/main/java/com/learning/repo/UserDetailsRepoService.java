package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.UserDetails;

@Service
public class UserDetailsRepoService {

	
	@Autowired(required=true)
	private UserDetailsRepo userDetailsRepo; // autowired object for user details
	
	
	public UserDetailsRepoService()
	{
		// TODO Auto-generated constructor stub // constructor
	}
	
	public List<UserDetails> findAll()
	{
		
		return userDetailsRepo.findAll(); // find and returns  a list of all user details
	}
	
	public void deleteUser(UserDetails userDetails)
	{
		userDetailsRepo.delete(userDetails); // delete a particular user
	}
	
	public UserDetails saveUpdateUser(UserDetails userDetails)
	{
		
		return userDetailsRepo.save(userDetails); // updates or saves a particular user
	}
	
	public List<Object[]> findByEmail(String email)
	{
		List<Object[]> obj=userDetailsRepo.findByEmail(email); // finds details of users uisng their email
		return obj;

	}

}
