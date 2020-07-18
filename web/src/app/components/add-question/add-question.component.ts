import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LearningServiceService } from '../../Services/learning-service.service';
import { QuestionBank } from 'src/app/Models/QuestionBank';

// component for adding a question 
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  id:number // questionId
  setId:number // Set Id
  questionSet:any; // question set
  error:any; // error
  constructor(private router:Router/*router object*/,private route:ActivatedRoute,private _service:LearningServiceService /*service object*/) { }

  // things to do on initialization
  ngOnInit() {
    this.setId=parseFloat(this.route.snapshot.paramMap.get('setId'));
    this.id=parseFloat(this.route.snapshot.paramMap.get('id'));
    // call service function to get all questions
    this._service.getAllQuestion().subscribe(
      (res)=>{
        console.log(res+"success");
        this.questionSet=res;
          
      },(error:HttpErrorResponse)=>{
        // http client side error
        if(error instanceof Error)
        {
          console.log("Client side error"+error);
        }
        else
        { // server or eclipse side error
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  

  }
  addToSet(question:QuestionBank)
  {
    console.log(question);

    this._service.addQuestionToSet(question,this.id).subscribe(
      (res)=>{
        //add to question set
        console.log(res+"success");
        this.questionSet=res;
        this.router.navigate(['/adminLink/AIQuestSet',this.setId,this.id]);  // navigate to question set
          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        { // http client side error
          console.log("Client side error"+error);
        }
        else
        {// server or eclipse side error
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  



  }

}
