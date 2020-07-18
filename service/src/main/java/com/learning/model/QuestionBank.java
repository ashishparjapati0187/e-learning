 package com.learning.model;

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
			@Entity(name="question_bank")  // entity name for hibernate
			
			
			public class QuestionBank {
				
				@Id
				@GeneratedValue(strategy=GenerationType.IDENTITY)// auto generation command for set model id
				@Column(name="question_id") // column name in database
				private int questionId; // java variable name
				
				@Column(name="question") // column name in database
				private String question; // java variable name
				
				@Column(name="option1") // column name in database
				private String option1; // java variable name
				
				@Column(name="option2") // column name in database
				private String option2; // java variable name
				
				@Column(name="option3") // column name in database
				private String option3; // java variable name
				
				
				@Column(name="option4") // column name in database
				private String option4; // java variable name
				
				@ManyToOne(fetch=FetchType.EAGER)// eager fetching for option id, lazy not working
				@JoinColumn(name="answer_option_id") //  joined column name in database
				private Answer option;  // java variable name
			
				// simple constructor
				public QuestionBank()
				{
					// TODO Auto-generated constructor stub
				}
			
				// parameterized constructor using question id
				public QuestionBank(int questionId, String question, String option1, String option2, String option3, String option4,
						Answer option) {
					super();
					this.questionId = questionId;
					this.question = question;
					this.option1 = option1;
					this.option2 = option2;
					this.option3 = option3;
					this.option4 = option4;
					this.option = option;
				}
			
				// parameterized constructor without question id
				public QuestionBank(String question, String option1, String option2, String option3, String option4,
						Answer option) {
					super();
					this.question = question;
					this.option1 = option1;
					this.option2 = option2;
					this.option3 = option3;
					this.option4 = option4;
					this.option = option;
				}
			
				// gets question id from object
				public int getQuestionId() {
					return questionId;
				}
			
				// sets question id
				public void setQuestionId(int questionId) {
					this.questionId = questionId;
				}
			
				//gets question
				public String getQuestion() {
					return question;
				}
			// sets question
				public void setQuestion(String question) {
					this.question = question;
				}
			// get option 1
				public String getOption1() {
					return option1;
				}
			// sets option 1
				public void setOption1(String option1) {
					this.option1 = option1;
				}
			
				// get option 1
				public String getOption2() {
					return option2;
				}
			
				// sets options 2
				public void setOption2(String option2) {
					this.option2 = option2;
				}
			
				// gets option 3
				public String getOption3() {
					return option3;
				}
			
				// sets option 3
				public void setOption3(String option3) {
					this.option3 = option3;
				}
			
				// gets option 4
				public String getOption4() {
					return option4;
				}
				
				// sets option 4
				public void setOption4(String option4) {
					this.option4 = option4;
				}
			
				// get correct answer option
				public Answer getOption() {
					return option;
				}
			
				// set answer option
				@Autowired
				public void setOption(Answer option) {
					this.option = option;
				}
			
				// to string method for showing object details
				@Override
				public String toString() {
					return "QuestionBank [questionId=" + questionId + ", question=" + question + ", option1=" + option1
							+ ", option2=" + option2 + ", option3=" + option3 + ", option4=" + option4 + ", option=" + option + "]";
				}
				
				
			
			}
