package com.learning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


		@Component// component for spring boot
		@Entity(name="question_set") // entity name for hibernate
		
		public class QuestionSet {
			
			@Id
			@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generation command for set model id
			@Column(name="question_set_id")// column name in database
			private int questionSetId;// java variable name
			
			@Column(name="set_name")// column name in database
			private String setName;// java variable name
			
			// simple constructor
			public QuestionSet() {
				// TODO Auto-generated constructor stub
			}
		
			// get question set id
			public int getQuestionSetId() {
				return questionSetId;
			}
		
			// set question set id
			public void setQuestionSetId(int questionSetId) {
				this.questionSetId = questionSetId;
			}
		
			//get set name
			public String getSetName() {
				return setName;
			}
		// sets set name
			public void setSetName(String setName) {
				this.setName = setName;
			}
		
			// autowired question set constructor
			@Autowired
			public QuestionSet(int questionSetId, String setName) {
				super();
				this.questionSetId = questionSetId;
				this.setName = setName;
			}
		
			// to string overridden method to show object details
			@Override
			public String toString() {
				return "QuestionSet [questionSetId=" + questionSetId + ", setName=" + setName + "]";
			}
			
			
		
			
			
			
		
		}
