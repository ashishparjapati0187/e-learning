

import { Component, OnInit } from '@angular/core';
import { testCourse } from 'src/app/Models/TestCourse';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDetails } from 'src/app/Models/UserDetails';
import { StudentTest } from 'src/app/Models/StudentTest';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningServiceService } from 'src/app/Services/learning-service.service';
//import html2canvas from 'html2canvas';
//import * as jsPDF from 'jspdf';


// certifcate generation component
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  testCourse=new testCourse();
  studentTest:StudentTest=new StudentTest();
  updatedstudentTest:any;
  userDetails:UserDetails; // user details
  test:any;
  tId:number;
  score:number; // score
  error:any;
 //jsPDF:any;


  constructor(private router:Router,private _service:LearningServiceService,private route:ActivatedRoute) { }


  // on intitialization
  ngOnInit() {
 // get from local storage
    this.userDetails=JSON.parse(localStorage.getItem("user"));
    this.tId=parseFloat(this.route.snapshot.paramMap.get('tId')); // get from route
    this.score=parseFloat(this.route.snapshot.paramMap.get('score')); // get from route
    this._service.getTest(this.tId).subscribe(
      (res)=>{
        // get test
        console.log(res+"success");
        this.test=res;
        this.studentTest.score=this.score;
        this.studentTest.userDetails=this.userDetails;
        this.studentTest.test=this.test;



        this._service.savestudenttest(this.studentTest).subscribe(
          (res)=>{
            // save student test
            console.log(res+"success");
            this.updatedstudentTest=res;
            this.studentTest.score=this.score;
            this.studentTest.userDetails=this.userDetails;
            this.studentTest.test=this.test;
          },(error:HttpErrorResponse)=>{
    
            if(error instanceof Error)
            {// client error frontend
              console.log("Client side error"+error);
            }
            else
            { // server error backend, check API
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
        { // server error backend, check API
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  
    
  }

  // function to download pdf not working due to blocked on cognizant network
  // public makePdf()
  // {
  //   var data = document.getElementById('pdfToMake');
  
  //   html2canvas(data ).then(canvas => {  
  //     // Few necessary setting options  
  //     var imgWidth = 500;   
  //     var pageHeight = 500;    
  //     var imgHeight = canvas.height * imgWidth / canvas.width;  
  //     var heightLeft = imgHeight;  
  
  //     const contentDataURL = canvas.toDataURL('image/png')  
  //     var position = 100;  
  //     var pdf = new jsPDF('p', 'pt', 'letter');
  //     pdf.addImage(contentDataURL, 'JPEG', 35, position, imgWidth, imgHeight)  
  //     pdf.save('MYPdf.pdf'); // Generated PDF   
  //   });  
   
  // }


}
