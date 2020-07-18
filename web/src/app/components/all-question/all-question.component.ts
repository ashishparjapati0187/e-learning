import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LearningServiceService } from '../../Services/learning-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { QuestionBank } from 'src/app/Models/QuestionBank';
import { Answer } from 'src/app/Models/Answer';

// all question component
@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {

  questionSet:any; // question set 
  error:any; // error variable
  equestion:QuestionBank=new QuestionBank();
  constructor(private router:Router,private route:ActivatedRoute,private _service:LearningServiceService,private modalService: NgbModal) { }
  ngOnInit() {
    //get all question method
    this._service.getAllQuestion().subscribe(
      (res)=>{
        console.log(res+"success");
        this.questionSet=res;
          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        { // client error
          console.log("Client side error"+error);
        }
        else
        { // server error
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  
  }

  // function called when question update button is clicked
  edit(ques:QuestionBank,content)
  {
    var opt=new Answer();
    this.equestion.question=ques.question;
    this.equestion.option1=ques.option1;
    this.equestion.option2=ques.option2;
    this.equestion.option3=ques.option3;
    this.equestion.option4=ques.option4;

    opt.answerId=ques.option.answerId;
    this.equestion.option=opt;
    this.modalService.open(content, { centered: true });
  }
// aad new question
  addQuestion(content){
    this.equestion=new QuestionBank();
    var answer =new Answer();
    this.equestion.option=answer;
    this.modalService.open(content, { centered: true });
  }

  

  // json save edit function
  saveEdit()
  {
    console.log(this.equestion)
    
    this._service.editQuestion(this.equestion).subscribe(
      (res)=>{
        console.log(res+"success");
        this.equestion=res;   
        
        this._service.getAllQuestion().subscribe(
          (res)=>{
            console.log(res+"success");
            this.questionSet=res;
              
          },(error:HttpErrorResponse)=>{
    
            if(error instanceof Error)
            {// client error frontend
              console.log("Client side error"+error);
            }
            else
            { /// server error backend, check API
              console.log("server side error"+error);
            }
            this.error=error;
          }
      );  

      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        { // client error frontend
          console.log("Client side error"+error);
        }
        else
        { /// server error backend, check API
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  

    this.modalService.dismissAll(); // dismiss modal
  }

}
