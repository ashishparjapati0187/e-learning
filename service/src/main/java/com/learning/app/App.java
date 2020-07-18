package com.learning.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;


import com.learning.controllers.LearningRepoController;
import com.learning.repo.AnswerRepoService;
import com.learning.repo.QuestionBankRepoService;
import com.learning.repo.QuestionSetRepoService;
import com.learning.repo.SetModelRepoService;
import com.learning.repo.StudentTestRepoService;
import com.learning.repo.TestCourseRepoService;
import com.learning.repo.TestRepoService;
import com.learning.repo.UserDetailsRepoService;




@SpringBootApplication // gives all spring components and scans it
@EntityScan("com.learning.*") // scans entity for hibernate
@EnableJpaRepositories(value="com.learning.repo") // using spring data jpa
public class App {

	public App() {
		// TODO Auto-generated constructor stub
	}
	

	// bean for answer repo service
	@Bean
	public AnswerRepoService answerRepoService()
	{
		return new AnswerRepoService();
	}
	
	// bean for learn repo controller
	@Bean
	public LearningRepoController testRepoController()
	{
		return new  LearningRepoController ();
	}
	

	//bean for question set repo service
	@Bean
	public QuestionSetRepoService questionSetRepoService()
	{
		return new QuestionSetRepoService();
	}
	
	// bean for student test repo service
	@Bean
	public StudentTestRepoService studentTestRepoService()
	{
		return new StudentTestRepoService();
	}
	
	//bean for test repo service
	@Bean
	public TestRepoService testRepoService()
	{
		return new  TestRepoService ();
	}
	
	
	// bean for test course repo service
	@Bean
	public TestCourseRepoService testCourseRepoService()
	{
		return new TestCourseRepoService();
	}
	
	// bean for question bank repo service
	@Bean
	public QuestionBankRepoService questionBankRepoService()
	{
		return new QuestionBankRepoService();
	}
	
	//bean for set model repo service
	@Bean
	public SetModelRepoService setModelRepoService()
	{
		return new SetModelRepoService();
	}
	
	//bean for user details repo service
	@Bean
	public UserDetailsRepoService userDetailsRepoService()
	{
		return new UserDetailsRepoService();
	}

	// bean for url resolver on screen
	@Bean
	public UrlBasedViewResolver setUpViewResolver()
	{
		UrlBasedViewResolver resolver=new UrlBasedViewResolver();
		
		resolver.setPrefix("/WEB-INF/views/"); // file source
		resolver.setSuffix(".jsp"); // file suffix
		resolver.setViewClass(JstlView.class); // set view class
		
		return resolver; // returns resolver
	}
	
	
	


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(App.class, args); // app run class using spring
	}
}
