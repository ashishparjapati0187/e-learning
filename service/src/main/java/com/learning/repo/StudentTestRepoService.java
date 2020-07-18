package com.learning.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.model.QuestionBank;
import com.learning.model.StudentTest;

	@Service
	public class StudentTestRepoService
	{
		
			@Autowired(required=true)
			private StudentTestRepo studentTestRepo; // autowired student test repository object
		
			public StudentTestRepoService() {
				// TODO Auto-generated constructor stub
			}
			
			public List<StudentTest> findAll()
			{
				
				return studentTestRepo.findAll(); // find all student test
			}
			
			public void deleteStudentTest(StudentTest studentTest)
			{
				studentTestRepo.delete(studentTest); // delete a student test
			}
			
			public StudentTest saveUpdateStudentTest(StudentTest studentTest)
			{
				
				return studentTestRepo.save(studentTest); // save a student test
			}
	
	}
