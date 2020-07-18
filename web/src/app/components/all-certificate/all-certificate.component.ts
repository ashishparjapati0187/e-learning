import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../Models/UserDetails';
import { LearningServiceService } from '../../Services/learning-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-certificate',
  templateUrl: './all-certificate.component.html',
  styleUrls: ['./all-certificate.component.css']
})
export class AllCertificateComponent implements OnInit {

  sample=[1,2,3]
  userDetails=new UserDetails(); //new user details
  error:any;
  data:any;
  test=[];
  marks=new Map(); //new map
  flag:boolean=false;
  res=[];
  constructor( private _service:LearningServiceService /* service object */) { }

  ngOnInit() {

    this.userDetails=JSON.parse(localStorage.getItem("user")); // get from local storage
this._service.getAllTestByUser(this.userDetails.userId).subscribe(
  (res)=>{
    console.log(res+"success");
    this.data=res;
    var i=0;

    if(this.data.length>0)
    this.flag=true;
    // iterator
  for(i=0;i<this.data.length;i++)
  {
   this.test.push(this.data[i].test.testNumber);
   this.marks.set(this.data[i].test.testNumber,this.data[i].score);
   this.res.push(this.data[i].score);
  }
  console.log(this.data);
  console.log(this.data.length);
  console.log(this.test);
  console.log(this.marks);
  console.log(this.res);
 
    
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        {// client or front end error
          console.log("Client side error"+error);
        }
        else
        {
          //backend error
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  
  }

}
