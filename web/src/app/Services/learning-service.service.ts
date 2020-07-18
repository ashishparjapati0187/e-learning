import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionBank } from '../Models/QuestionBank';
import { StudentTest } from '../Models/StudentTest';

@Injectable({
  providedIn: 'root'
})
export class LearningServiceService {

  data:any;
  constructor(private _http: HttpClient /*get http client object*/) { }

  getSetData(testId):any
  {
      return this._http.get("http://localhost:7070/allTestCourse/"+testId) // get all test course data
  }

  editQuestion(question:QuestionBank):any
  {
      return this._http.post("http://localhost:7070/savequestionbank/",question) // post question in question bank
  }
  deleteQuestionfromSet(question:QuestionBank,id:number){
    // delete question from set
    return this._http.post("http://localhost:7070/deletequestionfromSet/"+id,question)
  }

  deleteQuestion(question:QuestionBank){
    // delete question from question Bank
    return this._http.post("http://localhost:7070/deletequestionbank",question)
  }
  getAllQuestion(){
    //get all question
    return this._http.get("http://localhost:7070/allquestionbank")
  }

  addQuestionToSet(question:QuestionBank,id:number)
  {
    // add question to set
    return this._http.post("http://localhost:7070/addQuestiontoSet/"+id,question)
  }

  getQuestionBySet(tId:any)
  {
    // get question by set
    return this._http.get("http://localhost:7070/getQuestionBySet/"+tId)
  }


  getAllTestByUser(uId:number)
  {
    // get all tests data by user
    this.data=this._http.get("http://localhost:7070/getAllTestByUser/"+uId);
    return this.data;
  }

  getTest(testNum:number)
  {
    // get user test
    console.log(testNum+"in service")
    return this._http.get("http://localhost:7070/findTest/"+testNum);
   
  }

  getAllUserData():any{

    // get all user data
    return this._http.get("http://localhost:7070/alluser");
  }
  saveWholeUser(data):any{
    // save whole user
  return this._http.post("http://localhost:7070/saveuserN",data);
    
  }
  logincheck(data):any{
    // check login details
        return this._http.post("http://localhost:7070/logincheck",data);
    }

  savestudenttest(data:StudentTest)
  {
    // save student test details
      return this._http.post("http://localhost:7070/savestudenttest",data);
  }
}
