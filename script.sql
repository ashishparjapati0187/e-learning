CREATE DATABASE  IF NOT EXISTS `e_learning` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `e_learning`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: e_learning
-- ------------------------------------------------------
-- Server version	5.1.45-community

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `answer_value` varchar(45) NOT NULL,
  PRIMARY KEY (`answer_id`),
  UNIQUE KEY `option_value_UNIQUE` (`answer_value`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'a'),(2,'b'),(3,'c'),(4,'d');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_bank`
--

DROP TABLE IF EXISTS `question_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_bank` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(200) NOT NULL,
  `option1` varchar(45) NOT NULL,
  `option2` varchar(45) NOT NULL,
  `option3` varchar(45) NOT NULL,
  `option4` varchar(45) NOT NULL,
  `answer_option_id` int(11) NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `fk_Question_bank_option1_idx` (`answer_option_id`),
  CONSTRAINT `fk_Question_bank_option1` FOREIGN KEY (`answer_option_id`) REFERENCES `answer` (`answer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_bank`
--

LOCK TABLES `question_bank` WRITE;
/*!40000 ALTER TABLE `question_bank` DISABLE KEYS */;
INSERT INTO `question_bank` VALUES (1,'Which of the following is  metal?','Phosphorous','iron','Clorine','Heliem',2),(2,'Where do we live?','Mars','saturn','Earth','Jupiter',3),(3,'What is the capital of India','Chennai','Kolkata','Pune','New Delhi',4),(4,'Which of the following is a gas','Helium','Iron','Magnesium','Mercury',1),(5,'What is the full form of JS?','Java Script','java Script','Java Social','Java Science',2),(6,'Which of the following is not a gas','Helium','Oxygen','Nitrogen','Mercury',4),(8,'Brass gets discoloured in air because of the presence of which of the following gases in air?','Oxygen','Hydrogen sulphide','Carbon dioxide','Nitrogen',2),(9,'Chlorophyll is a naturally occurring chelate compound in which central metal is','copper','magnesium','iron','calcium',2),(10,'Which of the following is used in pencils?','Graphite','Silicon','Charcoal','Phosphorous',1),(11,'The lines used to create the auxiliary view should appear as ________ in the finished view.','Object lines','Construction lines','Reference lines','Construction lines',1),(12,'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?','7','10','12','13',2),(13,'Who developed Yahoo?','Dennis Ritchie & Ken Thompson','David Filo & Jerry Yang','Vint Cerf & Robert Kahn','Steve Case & Jeff Bezos',2),(14,'Who invented the BALLPOINT PEN?','Biro Brothers','Waterman Brothers','Bicc Brothers','Write Brothers',1),(15,'SCD, TEF, UGH, ____, WKL','CMN','UJI','VIJ','IJT',3),(16,'What is the capital of India','Chennai','Kolkata','Pune','New Delhi',4);
/*!40000 ALTER TABLE `question_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_set`
--

DROP TABLE IF EXISTS `question_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_set` (
  `question_set_id` int(11) NOT NULL AUTO_INCREMENT,
  `set_name` varchar(45) NOT NULL,
  PRIMARY KEY (`question_set_id`),
  UNIQUE KEY `set_name_UNIQUE` (`set_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_set`
--

LOCK TABLES `question_set` WRITE;
/*!40000 ALTER TABLE `question_set` DISABLE KEYS */;
INSERT INTO `question_set` VALUES (1,'A'),(2,'B'),(3,'C'),(4,'D'),(5,'E');
/*!40000 ALTER TABLE `question_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `set_model`
--

DROP TABLE IF EXISTS `set_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `set_model` (
  `set_model_id` int(11) NOT NULL AUTO_INCREMENT,
  `set_fk_question_set_id` int(11) NOT NULL,
  `fk_question_bank_id` int(11) NOT NULL,
  PRIMARY KEY (`set_model_id`),
  KEY `fk_Set_model_Question_set1_idx` (`set_fk_question_set_id`),
  KEY `fk_Set_model_Question_bank1_idx` (`fk_question_bank_id`),
  CONSTRAINT `fk_Set_model_Question_set1` FOREIGN KEY (`set_fk_question_set_id`) REFERENCES `question_set` (`question_set_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Set_model_Question_bank1` FOREIGN KEY (`fk_question_bank_id`) REFERENCES `question_bank` (`question_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `set_model`
--

LOCK TABLES `set_model` WRITE;
/*!40000 ALTER TABLE `set_model` DISABLE KEYS */;
INSERT INTO `set_model` VALUES (1,1,1),(3,2,2),(5,2,1),(6,3,2),(7,3,3),(8,3,2),(9,1,1),(10,4,1),(11,4,4),(12,2,2),(13,2,4),(14,3,5),(15,1,5),(16,1,5),(19,1,5),(20,1,4),(21,5,12),(22,5,11),(23,5,14),(24,5,15),(25,5,13),(26,5,9),(27,5,1),(28,5,8),(29,5,10),(30,5,11),(31,5,4),(32,1,8),(33,1,9),(34,1,10),(35,1,11),(36,1,11),(37,1,12),(38,1,13),(39,1,14),(40,2,16);
/*!40000 ALTER TABLE `set_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_test`
--

DROP TABLE IF EXISTS `student_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_test` (
  `student_test_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_od_test` date NOT NULL,
  `score` int(11) NOT NULL,
  `fk_user_details_id` int(11) NOT NULL,
  `fk_Test_id` int(11) NOT NULL,
  PRIMARY KEY (`student_test_id`),
  KEY `fk_student_test_user_details1_idx` (`fk_user_details_id`),
  KEY `fk_student_test_test1_idx` (`fk_Test_id`)
) ENGINE=MEMORY AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_test`
--

LOCK TABLES `student_test` WRITE;
/*!40000 ALTER TABLE `student_test` DISABLE KEYS */;
INSERT INTO `student_test` VALUES (2,'2018-01-01',10,1,1),(3,'2019-01-30',6,1,2),(4,'2019-01-30',3,3,1),(5,'2019-02-04',7,1,3),(6,'2019-02-04',4,1,4),(12,'2019-02-05',4,4,2),(11,'2019-02-05',3,4,1),(13,'2019-02-05',4,1,5),(14,'2019-02-05',4,4,3);
/*!40000 ALTER TABLE `student_test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `Test_id` int(11) NOT NULL AUTO_INCREMENT,
  `Test_number` float NOT NULL,
  PRIMARY KEY (`Test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,1.1),(2,1.2),(3,1.3),(4,1.4),(5,1.5),(6,2.1),(7,2.2),(8,2.3),(9,2.4),(10,2.5),(11,3.1),(12,3.2),(13,3.3),(14,3.4),(15,3.5);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_course`
--

DROP TABLE IF EXISTS `test_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test_course` (
  `test_course_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_test_id` int(11) NOT NULL,
  `fk_question_set_id` int(11) NOT NULL,
  `status` int(1) DEFAULT '0',
  PRIMARY KEY (`test_course_id`),
  KEY `fk_Test_Course_Innovator1_idx` (`fk_test_id`),
  KEY `fk_Test_Course_Question_set1_idx` (`fk_question_set_id`),
  CONSTRAINT `fk_question_set_id` FOREIGN KEY (`fk_question_set_id`) REFERENCES `question_set` (`question_set_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_test_id` FOREIGN KEY (`fk_test_id`) REFERENCES `test` (`Test_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_course`
--

LOCK TABLES `test_course` WRITE;
/*!40000 ALTER TABLE `test_course` DISABLE KEYS */;
INSERT INTO `test_course` VALUES (1,1,1,0),(2,2,2,1),(3,1,2,1),(4,1,3,0),(5,1,4,0),(6,1,5,0),(7,2,1,0),(8,2,2,0),(9,2,3,0),(10,2,4,0),(11,2,5,0),(12,3,1,0),(13,3,2,1),(14,3,3,0),(15,3,4,0),(16,3,5,0),(17,4,1,0),(18,4,2,1),(19,4,3,0),(20,4,4,0),(21,4,5,0),(22,5,1,1),(23,5,2,0),(24,5,3,0),(25,5,4,0),(26,5,5,0);
/*!40000 ALTER TABLE `test_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email_id` varchar(45) NOT NULL,
  `school_name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `user_check` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `emailId_UNIQUE` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'Surbhi Girdhani','Abcd','abcd@gmail.com','Christukula','1995-09-23','s'),(3,'Aritra Chowhury','aritra','aritra@gmail.com','St. Jude\'s High School','1996-01-13','s'),(4,'Abesh Chowhury','Abcd','abcd1@gmail.com','DPS','2019-02-04','s');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-07 14:50:50
