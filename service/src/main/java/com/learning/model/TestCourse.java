package com.learning.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


			@Component // component for spring boot
			@Entity(name="test_course") // entity for hibernate
					@NamedNativeQueries
					({
								// named query to find test for admin 
								@NamedNativeQuery(name="TestCourse.findByTest",query="select * from question_bank qb join set_model sm join question_set qs join test_course tc join Test t on qb.question_id=sm.fk_question_bank_id and sm.set_fk_question_set_id=qs.question_set_id and tc.fk_question_set_id=qs.question_set_id and t.test_id=tc.fk_test_id where t.test_number like ? group by t.test_id,qs.question_set_id,question_id"),
								//named query to find test for stduent
								@NamedNativeQuery(name="TestCourse.findByTestForStudent",query="select * from question_bank qb join set_model sm join question_set qs join test_course tc join Test t on qb.question_id=sm.fk_question_bank_id and sm.set_fk_question_set_id=qs.question_set_id and tc.fk_question_set_id=qs.question_set_id and t.test_id=tc.fk_test_id where t.test_number like ? and tc.status=1 group by t.test_id,qs.question_set_id,question_id;")
					})
			@Table(name="test_course")// table name in database
				
			public class TestCourse 
				{
					
					
					@Id
					@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generating condition
					@Column(name="test_course_id")
					private int testCourseId; // test course id variable
					
					@ManyToOne(fetch=FetchType.EAGER) // many to one connection
					@JoinColumn(name="fk_test_id") // test id 
					private Test test; // variable
					
					@ManyToOne(fetch=FetchType.EAGER)
					@JoinColumn(name="fk_question_set_id") // question set id variable
					private QuestionSet questionSet; // variable
					
					@Column(name="status")
					private boolean flag; // flag for test done or not
				
					public TestCourse() {
						// TODO Auto-generated constructor stub
					}
					
				
				
					// parameterized constructor
					public TestCourse(int testCourseId, Test test, QuestionSet questionSet,boolean flag) 
					{
						super();
						this.testCourseId = testCourseId;
						this.test = test;
						this.questionSet = questionSet;
						this.flag=flag;
					}
					
					
				
				
				
					// returns flag value
					public boolean isFlag()
					{
						return flag;
					}
				
				
				
					// sets flag value
					public void setFlag(boolean flag) 
					{
						this.flag = flag;
					}
				
				
				
					//gets test value
					public Test getTest()
					{
						return test;
					}
				
				
				
					// sets test
					public void setTest(Test test) 
					{
						this.test = test;
					}
				
				
				
					// gets test course id
					public int getTestCourseId() 
					{
						return testCourseId;
					}
					
					//sets test course id
					public void setTestCourseId(int testCourseId) 
					{
						this.testCourseId = testCourseId;
					}
				
					
				
					
					// gets question set
					public QuestionSet getQuestionSet() 
					{
						return questionSet;
					}
					
					// autowired set question set
					@Autowired
					public void setQuestionSet(QuestionSet questionSet) 
					{
						this.questionSet = questionSet;
					}
					
					
				
				
				
					@Override
					public String toString() 
					{ // overridden to string method
						return "TestCourse [testCourseId=" + testCourseId + ", test=" + test
								+ ", questionSet=" + questionSet + "]";
					}
					
					
				
					
					
				
				}
