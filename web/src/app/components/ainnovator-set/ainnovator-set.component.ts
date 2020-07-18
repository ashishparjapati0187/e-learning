import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningServiceService } from '../../Services/learning-service.service';
import {  HttpErrorResponse } from '@angular/common/http';

//innovator set
@Component({
  selector: 'app-ainnovator-set',
  templateUrl: './ainnovator-set.component.html',
  styleUrls: ['./ainnovator-set.component.css']
})
export class AInnovatorSetComponent implements OnInit {

  public setId:number;
  data = new Map();
  error:any;
  sizeArray=[];
  activatedSet=[1];
  constructor(private router:Router,private route:ActivatedRoute,private _service:LearningServiceService) { }

  ngOnInit() {
    this.setId=parseFloat(this.route.snapshot.paramMap.get('setId'));
    console.log(this.setId);
    this._service.getSetData(this.setId).subscribe(
      (res)=>{
        console.log(res+"success"); //get set id
        this.data=res;
        this.onGet();

        alert("Click on the activate link to Activate a paticular set")
          
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        {
          console.log("Client side error"+error); // client error
        }
        else
        {
          console.log("server side error"+error);// server error
        }
        this.error=error;
      }
  );
  
  
  }

  //get function
  onGet()
  {
    var i;
    var ex=Object.keys(this.data);

    for(i=0;i<ex.length;i++)
    {
      console.log(this.data[ex[i]]);
      this.sizeArray.push(this.data[ex[i]].length)
    }
    console.log(this.data);
    console.log(this.sizeArray);
  }

  // test activator function
  activated(n:number)
  {
    this.activatedSet.splice(0,1);
    this.activatedSet.push(n);
    //console.log(n+" is clicked");
    //console.log(this.activatedSet);
  }

  //check answer
  check(m:number):boolean
  {
    return this.activatedSet.includes(m);
  }

  onClick(n:number)
  {
    //alert(n+"is clicked")
    this.router.navigate(['/adminLink/AIQuestSet',this.setId,n]);  
  }
}