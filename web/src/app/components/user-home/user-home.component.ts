import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningServiceService } from '../../Services/learning-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentHomeComponent } from '../student-home/student-home.component';
import { UserDetails } from 'src/app/Models/UserDetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  data:any; // data from API
  error:any; // ERROR
  tId:number; // test id
  userDetails:UserDetails; // user details

  constructor(private studentHome:StudentHomeComponent, private router:Router,private _service:LearningServiceService,private modalService: NgbModal) { }

  ngOnInit() {

    this.userDetails=JSON.parse(localStorage.getItem("user")); // get from local storage
    this._service.getAllTestByUser(this.userDetails.userId).subscribe(
      (res)=>{
        // get all test  by user
        console.log(res+"success");
        this.data=res;

        if(this.data.length!=0)
        {
          this.tId=this.data[this.data.length-1].test.testNumber; // start from last test
        }
        else
        {
          this.tId=1.0;
       
        }
        
        console.log(this.tId+"here");

        if(this.tId==1.5)
        this.tId=2.1;
				else if(this.tId==2.5)
        this.tId=3.1;
				else if(this.tId==3.5)
				{
          
          
        }
        // iff tid is 0 , start from beginning
				else if(this.tId==0)
				this.tId=1.1;
				else
        this.tId=this.tId+0.1;
        // round off tid
        this.tId=(Math.round(this.tId*10)/10);
        console.log(this.tId+"here1");

        
          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        {// client error
          console.log("Client side error"+error);
        }
        else
        {// server error
          console.log("server side error"+error);
        }
        this.error=error;
        this.tId=1.1;
        this.tId=(Math.round(this.tId*10)/10);
      }
  );  
    
  }

  setUp(content)
  {
    this.modalService.open(content, { centered: true }); // setup content modal
  }

  takeQuiz()
  {
    // take quiz or start quiz function
    this.studentHome.flag=false;
    this.modalService.dismissAll();
    this.router.navigate(['studentLink/studentQuiz',this.tId]);
  }


}
