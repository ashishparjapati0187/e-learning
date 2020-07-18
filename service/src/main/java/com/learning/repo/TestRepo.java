	package com.learning.repo;
	
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
	
	import com.learning.model.Test;
	
		@Repository
		public interface TestRepo extends JpaRepository<Test,Integer>{ 
		
			// interface extending JPA repository
		}
