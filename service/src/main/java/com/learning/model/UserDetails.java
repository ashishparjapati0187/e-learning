package com.learning.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

			@Component // user details model class
			@Table(name="user_details") // table name in database
			
			
			@Entity(name="user_details") // entity for hibernate to scan
			@NamedNativeQuery(name="UserDetails.findByEmail",query=" SELECT * FROM user_details where email_id=?") 
			// native query to get user details using email id
			public class UserDetails {
				
				@Id
				@GeneratedValue(strategy=GenerationType.IDENTITY) // auto generated user id
				@Column(name="user_id")
				private int userId; // variable for user id 
				
				@Column(name="name")
				private String name; // variable for user name
				
				@Column(name="password")
				private String password; // variable for storing user password
				
				@Column(name="email_id")
				private String emailId; // variable for storing email id of user
				
				
				@Column(name="school_name")
				private String schoolName; // variable for storing school name for user
				
				@Column(name="dob")
				private Date DOB; // variable for storing date of birth  of user
				
				@Column(name="user_check")
				private String userCheck; // to check whether its  a user login or admin login
				
				
			
				public UserDetails() {
					// TODO Auto-generated constructor stub
				}
			
				// Parameterized constructor  with user Id
				public UserDetails(int userId, String name, String password, String emailId, String schoolName, Date dOB,
						String userCheck) {
					super();
					this.userId = userId;
					this.name = name;
					this.password = password;
					this.emailId = emailId;
					this.schoolName = schoolName;
					DOB = dOB;
					this.userCheck = userCheck;
				}
			
				// Parameterized constructor  without  user Id
				public UserDetails(String name, String password, String emailId, String schoolName, Date dOB, String userCheck) {
					super();
					this.name = name;
					this.password = password;
					this.emailId = emailId;
					this.schoolName = schoolName;
					DOB = dOB;
					this.userCheck = userCheck;
				}
			
				// get name
				public String getName() {
					return name;
				}
				
				// set Name
				public void setName(String name) {
					this.name = name;
				}
			
				// get User id
				public int getUserId() {
					return userId;
				}
			
			
				// set user id
				public void setUserId(int userId) {
					this.userId = userId;
				}
			
			
				// get password
				public String getPassword() {
					return password;
				}
			
			
				// set password
				public void setPassword(String password) {
					this.password = password;
				}
			
			
				// get Email id
				public String getEmailId() {
					return emailId;
				}
			
				// set email id
				public void setEmailId(String emailId) {
					this.emailId = emailId;
				}
			
				
				// get school name
				public String getSchoolName() {
					return schoolName;
				}
			
			
				// set school name
				public void setSchoolName(String schoolName) {
					this.schoolName = schoolName;
				}
			
			
				// get dob
				public Date getDOB() {
					return DOB;
				}
			
			
				// set dob
				public void setDOB(Date dOB) {
					DOB = dOB;
				}
			
			
				// get user check value
				public String getUserCheck() {
					return userCheck;
				}
			
			
				// set user scheck value
				public void setUserCheck(String userCheck) {
					this.userCheck = userCheck;
				}
			
			
				@Override
				public String toString() {
					// overidden to string method
					return "UserDetails [userId=" + userId + ", name=" + name + ", password=" + password + ", emailId=" + emailId
							+ ", schoolName=" + schoolName + ", DOB=" + DOB + ", userCheck=" + userCheck + "]";
				}
			
				
				
				
				
				
			
			}
