package com.learning.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.QuestionBank;

	@Service
	public class QuestionBankRepoService {
		
		@Autowired(required=true)
		private QuestionBankRepo questionBankRepo; // autowired question bank repository
	
		public QuestionBankRepoService() {
			// TODO Auto-generated constructor stub
		}
		
		public List<QuestionBank> findAll()
		{
			
			return questionBankRepo.findAll(); // find all list of question bank and returns
		}
		
		public void deleteQuestion(QuestionBank question)
		{
			 questionBankRepo.delete(question); // delete a question from question bank
		}
		
		public QuestionBank saveUpdateQuestion(QuestionBank question)
		{
			
			return questionBankRepo.save(question); // save or update a question from question bank
		}
		
		public Optional<QuestionBank> getQuestionById(int qId)
		{
			
			return questionBankRepo.findById(qId); // find question by ID AND RETURN
		}
	
	}
