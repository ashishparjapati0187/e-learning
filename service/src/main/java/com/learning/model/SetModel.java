package com.learning.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

		@Component // component for spring boot
		@Entity(name="set_model") // entity name for hibernate
		// native query to get question from a set
		@NamedNativeQuery(name="SetModel.getQuestionFromSet",query="select * from set_model sm where sm.set_fk_question_set_id=? and sm.fk_question_bank_id=?")
		
		public class SetModel {
			
			@Id
			@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generation command for set model id
			@Column(name="set_model_id") // column name in database
			private int setModelId;// java variable name
			
			@ManyToOne(fetch=FetchType.EAGER) // eager fetching, lazy not working
			@JoinColumn(name="fk_question_bank_id") // column name in database
			private QuestionBank questionBank;// java variable name
			
			@ManyToOne(fetch=FetchType.EAGER) // eager fetching, lazy not working
			@JoinColumn(name="set_fk_question_set_id") // column name in database
			private QuestionSet questionSet;// java variable name
		
			// simple constructor
			public SetModel() 
			{
				// TODO Auto-generated constructor stub
			}
			
			// parameterized constructor
			public SetModel(int setModelId, QuestionBank questionBank, QuestionSet questionSet)
			{
				super();
				this.setModelId = setModelId;
				this.questionBank = questionBank;
				this.questionSet = questionSet;
			}
		
			// get set model id
			public int getSetModelId() 
			{
				return setModelId;
			}
		
			// sets a set model id
			public void setSetModelId(int setModelId) 
			{
				this.setModelId = setModelId;
			}
		
			// gets question bank
			public QuestionBank getQuestionBank()
			{
				return questionBank;
			}
		
			// sets question bank
			@Autowired
			public void setQuestionBank(QuestionBank questionBank)
			{
				this.questionBank = questionBank;
			}
		
			// get question set
			public QuestionSet getQuestionSet() 
			{
				return questionSet;
			}
		
			// sets question set
			@Autowired
			public void setQuestionSet(QuestionSet questionSet)
			{
				this.questionSet = questionSet;
			}
		
			// overridden to string method to show or return object
			@Override
			public String toString() {
				return "SetModel [setModelId=" + setModelId + ", questionBank=" + questionBank + ", questionSet=" + questionSet
						+ "]";
			}
			
			
			
			
		
		}
