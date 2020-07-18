package com.learning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Component // component for spring boot
@Entity(name="test") // entity with name test for hibernate

		public class Test 
		{
			
			
			@Id
			@GeneratedValue(strategy=GenerationType.IDENTITY) // AUTO GENERATION Command for hivbernate
			@Column(name="Test_id") // column name in database
			private int testId; // variable name
			
			@Column(name="Test_number") // column name in database
			private float testNumber; // variable name in database
		
			public Test() 
			{
				// TODO Auto-generated constructor stub
			}
		
			// Parameterized constructor
			public Test(int testId, float testNumber) 
			{
				super();
				this.testId = testId;
				this.testNumber = testNumber;
			}
			
			// constructor for only test number
			public Test( float testNumber) 
			{
				super();
				this.testNumber = testNumber;
			}
		
			// gets test id
			public int getTestId() 
			{
				return testId;
			}
		
			// sets test id
			public void setTestId(int testId) 
			{
				this.testId = testId;
			}
		
			// gets test number
			public float getTestNumber() 
			{
				return testNumber;
			}
		
			// sets test number
			public void setTestNumber(float testNumber) 
			{
				this.testNumber = testNumber;
			}
		
			
			@Override
			public String toString() 
			{	
				// to string overridden to show object details
				return "Test [testId=" + testId + ", testNumber=" + testNumber + "]";
			}
			
			
		
		}
