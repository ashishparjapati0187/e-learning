package com.learning.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

		@Component // component for spring boot
		@Entity(name="student_test") // entity for hibernate
		
		public class StudentTest {
				
			@Id
			@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generate command for student test id
			@Column(name="student_test_id") // column name in database
			private int studentTestId; // variable name
			
			@Column(name="date_od_test")// column name in database
			private Date examDate;// variable name
			
			@Column(name="score")// column name in database
			private float score;// variable name
			
			
			@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL) // eager fetching for foreign key columns, lazy not working
			@JoinColumn(name="fk_user_details_id")//  joined column name in database
			private UserDetails userDetails;// variable name
			
			@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL) // eager fetching for foreign key columns, lazy not working
			@JoinColumn(name="fk_test_id")// joined column name in database
			private TestCourse testCourse;// variable name
		
			// simple constructor
			public StudentTest()
			{
				// TODO Auto-generated constructor stub
			}
		
			// Parameterized constructor
			public StudentTest(int studentTestId, Date examDate,float score, UserDetails userDetails, TestCourse testCourse) {
				super();
				this.studentTestId = studentTestId;
				this.score=score;
				this.examDate = examDate;
				this.userDetails = userDetails;
				this.testCourse = testCourse;
			}
			
			
		// get score from object
			public float getScore() 
			{
				return score;
			}
			
		// set score in object
			public void setScore(float score) 
			{
				this.score = score;
			}
			
		// get student test id
			public int getStudentTestId() {
				return studentTestId;
			}
		
			// set student test id
			public void setStudentTestId(int studentTestId) {
				this.studentTestId = studentTestId;
			}
		
			// get exam date
			public Date getExamDate() {
				return examDate;
			}
		
			//set exam date
			public void setExamDate(Date examDate) {
				this.examDate = examDate;
			}
		
			// get user details
			public UserDetails getUserDetails() {
				return userDetails;
			}
		
			// set user details
			@Autowired
			public void setUserDetails(UserDetails userDetails) {
				this.userDetails = userDetails;
			}
		
			// get test course
			public TestCourse getTestCourse() {
				return testCourse;
			}
		
			// set test course
			@Autowired
			public void setTestCourse(TestCourse testCourse) {
				this.testCourse = testCourse;
			}
		
			// to string overridden to show object
			@Override
			public String toString() {
				return "StudentTest [studentTestId=" + studentTestId + ", examDate=" + examDate + ", userDetails=" + userDetails
						+ ", testCourse=" + testCourse + "]";
			}
			
			
		
		}
