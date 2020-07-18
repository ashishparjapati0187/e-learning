package com.learning.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learning.model.QuestionSet;

		@Repository
		
		public interface QuestionSetRepo  extends JpaRepository<QuestionSet,Integer>{
			// question set repo inteface to extend jpa repository
		}
