package com.learning.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.learning.model.UserDetails;

	@Repository
	public interface UserDetailsRepo extends JpaRepository<UserDetails,Integer>
		{
				public List<Object[]> findByEmail(@Param("emailId") String email); 
				// function declared, overridden in service class
		}
