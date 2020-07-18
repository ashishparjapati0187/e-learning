package com.learning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;
			
			@Component // component for spring boot
			@Entity(name="answer") // entity name for hibernate
			
			
			public class Answer {
				
				
				@Id
				@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generation command for set model id
				@Column(name="answer_id") // column name in database
				private int answerId; // java variable name
				
				@Column(name="answer_value") // column name in database
				private String answerValues; // java variable name
			
				// simple constructor
				public Answer()
				{
					// TODO Auto-generated constructor stub
				}
			
				// parameterized constructor 
				public Answer(int answerId, String answerValues) {
					super();
					this.answerId = answerId;
					this.answerValues = answerValues;
				}
			
				//gets answer id
				public int getAnswerId() {
					return answerId;
				}
			
				// sets answer id
				public void setAnswerId(int answerId) {
					this.answerId = answerId;
				}
			
				//gets answers values
				public String getAnswerValues() {
					return answerValues;
				}
			
				// sets answer values
				public void setAnswerValues(String answerValues) {
					this.answerValues = answerValues;
				}
			
				// to string overridden to show object value
				@Override
				public String toString() {
					return "Answer [answerId=" + answerId + ", answerValues=" + answerValues + "]";
				}
				
				
			
				
				
			
			}
