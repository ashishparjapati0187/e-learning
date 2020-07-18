import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LearningServiceService } from '../../Services/learning-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { QuestionBank } from 'src/app/Models/QuestionBank';
import { Answer } from '../../Models/Answer';

// admin qeustion set component
@Component({
  selector: 'app-aquestion-set',
  templateUrl: './aquestion-set.component.html',
  styleUrls: ['./aquestion-set.component.css']
})
export class AQuestionSetComponent implements OnInit {

  public setId:number; // set id
  public id:number; // test id
  data = new Map(); // data 
  error:any;
  questions=[]; // qeustion array
  i:number=1;
  equestion:QuestionBank=new QuestionBank(); // new question bank
  constructor(private router:Router,private route:ActivatedRoute,private _service:LearningServiceService,private modalService: NgbModal) { }

  // initialization
  ngOnInit() {
    this.setId=parseFloat(this.route.snapshot.paramMap.get('setId'));
    this.id=parseFloat(this.route.snapshot.paramMap.get('id'));
    console.log(this.setId);
    this._service.getSetData(this.setId).subscribe(
      (res)=>{
        console.log(res+"success");
        this.data=res;
        this.onGet();

          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        {// client error frontend
          console.log("Client side error"+error);
        }
        else
        {// server error backend, check API
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  
  }

  addQuestion()
  {
    this.router.navigate(['/adminLink/AddQuestion',this.id,this.setId]);  
  }
  onGet()
  {
    var str=this.setId+","+this.id;
    var questionSet=this.data[str];
    console.log(questionSet+"hello")

    for(var i=0;i<questionSet.length;i++)
    {
      var ques:QuestionBank=questionSet[i];
      this.questions.push(ques);
    }

    console.log(this.questions);

  }

  edit(ques:QuestionBank,content)
  {
    var opt=new Answer();
    //this.equestion;
    //this.equestion=new QuestionBank(0,"","","","","",new Answer());
    this.equestion.question=ques.question;
    this.equestion.option1=ques.option1;
    this.equestion.option2=ques.option2;
    this.equestion.option3=ques.option3;
    this.equestion.option4=ques.option4;
    opt.answerId=ques.option.answerId;
    this.equestion.option=opt;
    this.modalService.open(content, { centered: true });
  }

  delete(ques:QuestionBank)
  {
   


    this._service.deleteQuestionfromSet(ques,this.id).subscribe(
      (res)=>{
        console.log(res+"success");
    
      
  this.questions.splice(0,this.questions.length+1); // splice questions
  this._service.getSetData(this.setId).subscribe(
    //get set data
    (res)=>{
      console.log(res+"success");
      this.data=res;
      this.onGet();

  
        
    },(error:HttpErrorResponse)=>{

      if(error instanceof Error)
      {// client error frontend
        console.log("Client side error"+error);
      }
      else
      {// server error backend, check API
        console.log("server side error"+error);
      }
      this.error=error;
    }
);  

},(error:HttpErrorResponse)=>{

  if(error instanceof Error)
  {// client error frontend
    console.log("Client side error"+error);
  }
  else
  {// server error backend, check API
    console.log("server side error"+error);
  }
  this.error=error;
}
); 
  }

  check(ques:QuestionBank,n:number):boolean
  {
    if(ques.option.answerId==n)
    {
      return true;
    }
    else
    return false;
  }

  saveEdit()
  {
    console.log(this.equestion)
    
    this._service.editQuestion(this.equestion).subscribe(
      (res)=>{
        console.log(res+"success");
        this.equestion=res;    
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        { // client error frontend
          console.log("Client side error"+error);
        }
        else
        {// server error backend, check API
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  

    this.modalService.dismissAll();
  }
}
