package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.SetModel;

		@Service
		public class SetModelRepoService {
			
				@Autowired(required=true)
				private SetModelRepo setModelRepo; // autowired set model object
			
				public SetModelRepoService() {
					// TODO Auto-generated constructor stub
				}
			
		
				public List<SetModel> findAll()
				{
					
					return setModelRepo.findAll(); // returns  a list of all set models
				}
			
				public void deleteQuestionFromSet(SetModel sm)
				{
					// returns a list  of questions in a set model
					List<Object[]> list=setModelRepo.getQuestionFromSet( sm.getQuestionSet().getQuestionSetId(),sm.getQuestionBank().getQuestionId());
					
					
					
					 Object[] obj=list.get(0); // gets a object from the list
					 
					 SetModel smNew=new SetModel(); smNew.setSetModelId((int)obj[0]); // makes a new setMdoel Id
					
					setModelRepo.deleteById(smNew.getSetModelId()); // delete that set Model
					 
					
				}
				
				public SetModel saveSet(SetModel sm)
				{
					return setModelRepo.save(sm); // save a new set Model
				}
			
			
		
		}
