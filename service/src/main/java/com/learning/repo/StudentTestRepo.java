package com.learning.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learning.model.StudentTest;

		@Repository
		public interface StudentTestRepo extends JpaRepository<StudentTest,Integer>
		{
		// interface extening to implement methods of JPA repository
		}
