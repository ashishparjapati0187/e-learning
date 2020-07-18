			package com.learning.controllers;
			
			import java.util.ArrayList;
			import java.util.HashMap;
			import java.util.List;
			import java.util.Map;
			import java.util.Optional;
			
			import org.springframework.beans.factory.annotation.Autowired;
			import org.springframework.web.bind.annotation.CrossOrigin;
			import org.springframework.web.bind.annotation.GetMapping;
			import org.springframework.web.bind.annotation.PathVariable;
			import org.springframework.web.bind.annotation.PostMapping;
			import org.springframework.web.bind.annotation.RequestBody;
			import org.springframework.web.bind.annotation.RequestParam;
			import org.springframework.web.bind.annotation.RestController;
			
			import com.learning.model.Answer;
			import com.learning.model.QuestionBank;
			import com.learning.model.QuestionSet;
			import com.learning.model.SetModel;
			import com.learning.model.StudentTest;
			import com.learning.model.TestCourse;
			import com.learning.model.UserDetails;
			import com.learning.repo.AnswerRepoService;
			import com.learning.repo.QuestionBankRepoService;
			import com.learning.repo.QuestionSetRepoService;
			import com.learning.repo.SetModelRepoService;
			import com.learning.repo.StudentTestRepoService;
			import com.learning.repo.TestCourseRepoService;
			import com.learning.repo.TestRepoService;
			import com.learning.repo.UserDetailsRepoService;
			
			@CrossOrigin // cross origin to allow port access outside of eclipse
			@RestController // rest controller annotation
			
			
			public class LearningRepoController 
			{
				
				@Autowired
				private AnswerRepoService answerRepoService;  // autowired answer repo service object
				
				@Autowired(required=true)
				private QuestionBankRepoService questionBankRepoService; // autowired question bank repo service object
				
				@Autowired(required=true)
				private QuestionSetRepoService questionSetRepoService; // autowired question set repo service object
				
				@Autowired(required=true)
				private SetModelRepoService setModelRepoService; // autowired set model repo service object
				
				@Autowired(required=true)
				private StudentTestRepoService studentTestRepoService; // autowired student test repo service object
				
				@Autowired(required=true)
				private TestCourseRepoService testCourseRepoService; // autowired test course repo service object
				
				@Autowired(required=true)
				private TestRepoService testRepoService; // autowired test repo service object
				
				@Autowired(required=true)
				private UserDetailsRepoService userDetailsRepoService; // autowired  user details repo service object
			
				// simple constructor
				public LearningRepoController() {
					// TODO Auto-generated constructor stub
				}
				
				// get method for http
				@GetMapping("/allanswer")
				public List<Answer> getAllAnswer()
				{
					List<Answer> list=new ArrayList<Answer>(); // new list
					list=answerRepoService.findAll(); // returns list of answers
					return list;
				}
				
				// get method for http
				@GetMapping("/allquestionbank") 
				public List<QuestionBank> getAllQuestionBank()
				{
					List<QuestionBank> list=new ArrayList<QuestionBank>(); // new list
					list=questionBankRepoService.findAll(); // returns list of questions
					return list;
				}
				
				// get method for http using question id
				@GetMapping("/allquestionbyid/{qId}")
				public Optional<QuestionBank> getQuestionBankById(@PathVariable int qId)
				{
					Optional <QuestionBank> question= questionBankRepoService.getQuestionById(qId); // returns a single question using question id
					
					return question;
			
				}
				
				// post mapping to submit data taken from user
				@PostMapping("/savequestionbank")
				public QuestionBank saveQuestionBank(@RequestBody QuestionBank question) // request body takes body of data 
				{
					QuestionBank list=new QuestionBank(); // new list
					list=questionBankRepoService.saveUpdateQuestion(question); // save or update question 
					return list;
				}
				// post mapping to submit data taken from user
				@PostMapping("/deletequestionbank")
				public void deleteQuestionBank(@RequestBody QuestionBank question) // request body takes body of data
				{
					questionBankRepoService.deleteQuestion(question); // delete question from database
				}
				// post mapping to submit data taken from user
				@PostMapping("/deletequestionfromSet/{id}")
				public void deleteQuestionFromSet(@PathVariable int id,@RequestBody QuestionBank question) // request body takes body , path variable takes id from path
				{
					SetModel sm=new SetModel();
					QuestionSet qs=new QuestionSet();
					qs.setQuestionSetId(id);
					sm.setQuestionBank(question);
					sm.setQuestionSet(qs);
					System.out.println(sm);
					setModelRepoService.deleteQuestionFromSet(sm); // delete question from set
				}
				
				// post mapping to submit data taken from user
				@PostMapping("/addQuestiontoSet/{id}")
				// request body takes body , path variable takes id from path
				public SetModel addQuestiontoSet(@PathVariable int id,@RequestBody QuestionBank question)
				{
					SetModel sm=new SetModel();
					QuestionSet qs=new QuestionSet();
					qs.setQuestionSetId(id);
					sm.setQuestionBank(question);
					sm.setQuestionSet(qs);
					System.out.println(sm);
					return setModelRepoService.saveSet(sm); // save a particular set 
					
					
					
				}
				
				// get method for http
				@GetMapping("/allquestionset")
				public List<QuestionSet> getAllQuestionSet()
				{
					List<QuestionSet> list=new ArrayList<QuestionSet>(); //new list
					list=questionSetRepoService.findAll(); // finds and returns all question set data
					return list;
				}
				
				
				// get method for http
				@GetMapping("/alluser")
				public List<UserDetails> getAllUser()
				{
					return userDetailsRepoService.findAll();  // finds and returns all user data
			
				}
				
				
				// get method for http	
				@GetMapping("/allsetmodel")
				public List<SetModel> getAllSetModel()
				{
					List<SetModel> list=new ArrayList<SetModel>(); // new list
					list=setModelRepoService.findAll(); // returns all set models
					return list;
				}
				
				// get method for http
				@GetMapping("/allstudenttest")
				public List<StudentTest> getAllStudentTest()
				{
					List<StudentTest> list=new ArrayList<StudentTest>(); // new list
					list=studentTestRepoService.findAll(); // returns all student tests
					return list;
				}
				
				// post mapping to submit data taken from user
				@PostMapping("/savestudenttest")
				public StudentTest saveStudentTest(@RequestBody StudentTest studentTest) // request body takes body of data 
				{
					StudentTest updatedStudentTest=new StudentTest();  // new object
					updatedStudentTest=studentTestRepoService.saveUpdateStudentTest(studentTest); // save or update student test
					return updatedStudentTest; // return variable
				}
				
				// post mapping to submit data taken from user
				@PostMapping("/deletestudenttest")
				public void deleteStudentTest(@RequestBody StudentTest studentTest)  // request body takes body of data 
				{
					studentTestRepoService.deleteStudentTest(studentTest); // delete student test
				}
				
				
				// post mapping to submit data taken from user
				@PostMapping("/logincheck") // checks login details of user
				
				public String logincheck(@RequestBody UserDetails user) // request body takes body of data 
				{
					String msg = null; // to return true or false on return
					Object[] userReceived=userDetailsRepoService.findByEmail(user.getEmailId()).get(0); // get user name
					String password=String.valueOf(userReceived[2]); // get password
					
					
					if(password!=null) // if password is not null
					{
			
						if(password.equals(user.getPassword()))
						msg="success"; // give value success if login is correct
						else
						msg="password wrong"; //  give value password wrong if login is incorrect
			
					}
					else
					{
						msg="User doesnot exist"; // if password does not exist then user does not exist
					}
					
					return msg; /// returns message
				}
				
				// post mapping to submit data taken from user
				@PostMapping("/saveuser") // save user details
				public String saveUser(@RequestBody UserDetails user) // request body takes body of data 
				{
					String msg="failure";
					
					if(userDetailsRepoService.findByEmail(user.getEmailId())==null) // save users 
						{
							UserDetails updateUser=userDetailsRepoService.saveUpdateUser(user); //saves edited user
							if(updateUser==null)
							{
								msg="failure"; // if user is null return failure to update
							}
							else
							{
								msg="success"; // else it will return success
							}
							
						}
					else
					{
						msg="EmailId already registered"; // if email id already exists in database, then show error
						
					}
					return msg; // returns message
				}
				
				// get mapping to get data on screen
				
				@GetMapping("/allTestCourse/{testId}")
				public Map<String,List<QuestionBank>> getAllTestCourseByTestId(@PathVariable float testId)
				{
					System.out.println(testId);
					Map<String,List<QuestionBank>> mapModel=new HashMap<String,List<QuestionBank>>(); //map with list embedded ogf question bank
					List<Object[]> receivedData=testCourseRepoService.findByTestId(testId); // finds test
					String testSet=null;
					for(int i=0;i<receivedData.size();i++) // iterator
					{
						Object[] testReceived=receivedData.get(i); // gets a particular test object
						
						
						
						Answer ans=new Answer(); // get answer object
						ans.setAnswerId((int)(testReceived[6])); // sets correct answer
						QuestionBank question=new QuestionBank(); // new question bank
						
						// sets details of a question
							question.setQuestionId((int)(testReceived[0])); 
							question.setQuestion(String.valueOf(testReceived[1]));
							question.setOption1(String.valueOf(testReceived[2]));
							question.setOption2(String.valueOf(testReceived[3]));
							question.setOption3(String.valueOf(testReceived[4]));
							question.setOption4(String.valueOf(testReceived[5]));
							question.setOption(ans);
						
						// set new question set
								QuestionSet questionSet=new QuestionSet();
								questionSet.setQuestionSetId((int)(testReceived[8]));
								questionSet.setSetName(String.valueOf(testReceived[11]));
						
						// sets new set model
								SetModel setModel=new SetModel();
								setModel.setQuestionBank(question);
								setModel.setQuestionSet(questionSet);
						
						// sets test set using using test id and question set
									testSet=testId+","+questionSet.getQuestionSetId();
						
						// gets testset from question list
								List<QuestionBank> questionList=mapModel.get(testSet);
								if(questionList==null)
								{
									//if does not exist in list add new question list
									questionList=new ArrayList<QuestionBank>();
									questionList.add(question);
									mapModel.put(testSet, questionList); 
								}
								else
								{
									// if exists update the question  list entry in map
									questionList.add(question);
									mapModel.put(testSet, questionList);
								}	
					}
	
				return mapModel; // return map model 
			
				}
				
				
				
				
			
			}
