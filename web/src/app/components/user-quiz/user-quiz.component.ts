import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from '../../Services/learning-service.service';
import { QuestionBank } from '../../Models/QuestionBank';
import { HttpErrorResponse } from '@angular/common/http';
import { Answer } from '../../Models/Answer';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.css']
})
export class UserQuizComponent implements OnInit {
question:QuestionBank=new QuestionBank();
data:any;
questionList=[];
error:any;
j:number=0;
s:number=1;
nFlag:boolean=true;
pFlag:boolean=false;
ans=[];
answer:Answer=new Answer;
progress:number=0;
score:number=0;
tId:number;
traverse=[];

  constructor(private router:Router,private _service:LearningServiceService,private modalService: NgbModal,private route:ActivatedRoute) { }

  ngOnInit() {

    this.tId=parseFloat(this.route.snapshot.paramMap.get('tId'));
  //this.tId=1.1;

  // get question by set
    this.tId=(Math.round(this.tId*10)/10);
    console.log(this.tId+"testId");
    this._service.getQuestionBySet(this.tId).subscribe(
      (res)=>{
        console.log(res+"success");
        this.data=res;
        this.onGet();
        this.setQuestion();

          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        { // client error, check angular code
          console.log("Client side error"+error);
        }
        else
        { 
          //server error check api
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  

  }
// get question list
  onGet()
  {
    var i; // iteration variable
    for(i=0;i<this.data.length;i++)
    {
      this.questionList.push(this.data[i])
      this.ans.push(0);
      this.traverse.push(i);
    }

    console.log(this.questionList);

  }
  // set question
  setQuestion()
  {
    this.s=this.j+1;
    this.question=this.questionList[this.j];
    console.log(this.question+"hello");
  }
  // go to next question
  next()
  {
    this.answer.answerId=0;
      this.j=this.j+1;
      this.pFlag=true;
      if(this.j==(this.data.length-1))
      {
        this.nFlag=false;
      }
      else{
        this.nFlag=true;
      }
      if(this.checkAnswered(this.j))
      {
        this.answer.answerId=this.ans[this.j];
      }else
      {
        this.answer.answerId=0;
      }
      this.setQuestion();

  }
  // got to previous question
  previous()
  {
    this.j=this.j-1;
    if(this.j==0)
    {
      this.pFlag=false;
    }
    else
    {
      this.pFlag=true;  
      this.answer.answerId=this.ans[this.j];
    }

    if(this.j==(this.data.length-1))
      {
        this.nFlag=false;
      }
      else{
        this.nFlag=true;
      }

      if(this.checkAnswered(this.j))
      {
        this.answer.answerId=this.ans[this.j];
      }else
      {
        this.answer.answerId=0;
      }
    this.setQuestion();  
  }
// save question
  save()
  {
    if(this.answer.answerId==null)
    {
      alert("Please select an option to submit the response")
    }
    else{
    this.ans.splice(this.j,1,this.answer.answerId)
    console.log("answerRecorded"+this.ans);
    this.answer.answerId=0;
    if(this.j==(this.data.length-1))
    {
      alert("Click on submit to complete test")
      this.answer.answerId=this.ans[this.j];

    }
    else{
      this.next();
    }

    this.checkProgress();
  }
    
  }
  // submit test
  submit()
  {
    for(var i=0;i<this.questionList.length;i++)
    {
      if(this.questionList[i].option.answerId==this.ans[i])
      {
        this.score++;
      }
    }

    var per=(this.score*100)/this.questionList.length;

    if(per<50)
    {
      alert("Sorry you failed to clear the pass percentage");
      this.router.navigate(['/studentLink']);
    }

    this.router.navigate(['studentLink/certificate',this.tId,this.score]);  
  }

  // check test progress
  checkProgress()
  {
    var count=0;
    for(var i=0;i<this.ans.length;i++)
    {
      if(this.ans[i]!=0)
      count++;
    }
    this.progress=((count*100)/this.ans.length);
  }
  // check answers
  checkAnswered(n:number):boolean
  {
    if(this.ans[n]!=0)
    return true;
    else
    return false;
  }
//change to question number
  changeQuestion(n:number){
    this.j=n;
    if(this.j==0)
    {
      this.pFlag=false;
      this.nFlag=true;
    }
   else if(this.j==(this.data.length-1))
      {
        this.pFlag=true;
        this.nFlag=false;
      }
      else{
        this.pFlag=true;
        this.nFlag=true;
      }
      this.answer.answerId=this.ans[this.j];
    this.setQuestion();
  }

  // reset progress of the question
  reset()
  {
    this.ans[this.j]=0;
    this.answer.answerId=0;
    this.checkProgress();
  }
}
