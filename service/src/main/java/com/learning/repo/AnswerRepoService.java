package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.Answer;

	@Service
	public class AnswerRepoService {
		
		@Autowired(required=true)
		private AnswerRepo answerRepo; // autowired to answers repository
	
		public AnswerRepoService() {
			// TODO Auto-generated constructor stub
		}
		
		public List<Answer> findAll()
		{
			
			return answerRepo.findAll(); // find the list of answers
		}
	
	}
