package com.learning.exception;

// extends exception class to give message in case of any exception in database, hibernate or spring
public class LearningException extends Exception{

	public LearningException(String s) {
		// TODO Auto-generated constructor stub
		super(s);
	}

}
