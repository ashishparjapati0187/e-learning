package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.QuestionSet;

	@Service
	public class QuestionSetRepoService {
	
		
			@Autowired(required=true)
			private QuestionSetRepo questionSetRepo; // auto wired question set
			
		
			public QuestionSetRepoService() 
			{
				// TODO Auto-generated constructor stub
			}
		
			public List<QuestionSet> findAll()
			{
				
				return questionSetRepo.findAll(); // finds llist of question set
			}
		
	}
