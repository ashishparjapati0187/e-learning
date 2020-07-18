package com.learning.repo;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.learning.model.SetModel;

	@Repository
	public interface SetModelRepo extends JpaRepository<SetModel,Integer>
	{
			public List<Object[]> getQuestionFromSet(@Param("set_fk_question_set_id") int quesSetId,@Param("fk_question_bank_id") int quesId);
			// function declared,overridden to find question from a set using question set id and question bank id
	}
