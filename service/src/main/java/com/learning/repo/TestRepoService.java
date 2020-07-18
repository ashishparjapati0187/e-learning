package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.Test;

	@Service
	public class TestRepoService 
		{
			
					@Autowired(required=true)
					private TestRepo testRepo; // autowired object for test Repo
			
			
					public TestRepoService() 
					{
						// TODO Auto-generated constructor stub
					}
					public List<Test> findAll()
					{
						
						return testRepo.findAll(); // find list of available tests 
					}
				
			
		
		}
