package com.learning.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learning.model.QuestionBank;

	@Repository
	public interface QuestionBankRepo extends JpaRepository<QuestionBank,Integer>
	{
		// question bank repo interface for inheriting  all the functions of JPA repository
	}
