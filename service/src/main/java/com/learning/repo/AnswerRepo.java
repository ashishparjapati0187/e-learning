package com.learning.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learning.model.Answer;


@Repository
public interface AnswerRepo extends JpaRepository<Answer,Integer>
{
		// answer repo interface for extending the JPA repository 
}
