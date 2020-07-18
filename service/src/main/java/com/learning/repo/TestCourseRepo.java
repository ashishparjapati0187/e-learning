package com.learning.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.learning.model.TestCourse;

	@Repository
	public interface TestCourseRepo extends JpaRepository<TestCourse,Integer>
	{
		
		public List<Object[]> findByTest(@Param("test_number") float testId); 
		// function declaration for finding a test using test id for admin	
		
		public List<Object[]> findByTestForStudent(@Param("test_number") float testId);
		//function declaration for finding a test using test id for student
	}
