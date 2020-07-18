package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.TestCourse;

		@Service
		public class TestCourseRepoService {
			
				@Autowired(required=true)
				private TestCourseRepo testCourseRepo; // autowired test course repository object
		
				public TestCourseRepoService() 
				{
					// TODO Auto-generated constructor stub
				}
				
				public List<TestCourse> findAll()
				{
					
					return testCourseRepo.findAll(); // finding list of test course
				}
			
				public void deleteQuestion(TestCourse testCourse)
				{
					testCourseRepo.delete(testCourse); // deleting a test course
				}
				
				public TestCourse saveUpdateQuestion(TestCourse testCourse)
				{
					
					return testCourseRepo.save(testCourse); // saving or updating a test course
				}
				
				public List<Object[]> findByTestId(float testId)
				{
					List<Object[]> obj=testCourseRepo.findByTest(testId); // finding a test by test Id for admin
					return obj;
				}
				
				public List<Object[]> findByTestIdForStudent(float testId)
				{
					List<Object[]> obj=testCourseRepo.findByTestForStudent(testId); // finding a test by test Id for student
					return obj;
				}
		
		
		}
