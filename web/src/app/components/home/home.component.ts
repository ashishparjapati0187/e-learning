import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../Models/UserDetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LearningServiceService } from 'src/app/Services/learning-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// app-home page or landing page
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lFlag:boolean=true; // flag 
rFlag:boolean=false;
message:string; // message
msg:string;
error:string;
  constructor(private _service:LearningServiceService,private router:Router,private modalService: NgbModal) {}
   
   public userDetails:UserDetails=new UserDetails(); // user details


  ngOnInit() {
  }
  // login check
  login() 
    {
      
        console.log(this.userDetails.emailId);
        console.log(this.userDetails.password);

        /// check if admin
        if(this.userDetails.emailId=="admin@a.com"&&this.userDetails.password=="admin")
        {
            this.modalService.dismissAll();
            localStorage.setItem("user",JSON.stringify(this.userDetails));
            this.router.navigate(['/adminLink']);  
        }
        // check user details
        else{

            this. _service.logincheck(this.userDetails).subscribe(
                (res)=>{
                    this.modalService.dismissAll();
                    this.message="";
                 if(res!=null)
                 {
                     this.userDetails=res;
                     localStorage.setItem("user",JSON.stringify(this.userDetails));
                     console.log(this.userDetails+"success");
                     console.log("successfully logged in");
                     
                     
                     if(this.userDetails.userCheck=="s")
                     {
                        this.router.navigate(['/studentLink']); // go to student if user
                     }
                     else{
                        this.router.navigate(['/adminLink']); // go to admin if admin
                     }


                 
                 }
                 else
                 alert(false);
             },
                
                (error:HttpErrorResponse)=>
                {
                 this.error="wrong password";
                 if(error instanceof Error)
                     {  
                         // client or frontend error
                         console.log("Client side error");
                         console.log("Error status:"+error.status);
                         console.log("Error status text:"+error.statusText);
     
                     }
                     else{

                        // backend error, check API
                         console.log("Server side error");
                         console.log("Error status:"+error.status);
                         console.log("Error status text:"+error.statusText);
                     }
                }
                
             );


        }
       
        

     }

     mOpen(content)
    {

        this.modalService.open(content);

    }  
    
    signupCall()
    {
        this.lFlag=false;
        this.rFlag=true;
    }

    loginCall()
    {
        this.lFlag=true;
        this.rFlag=false;
    }

    register()
    {
        this.userDetails.userCheck="s";
        console.log(this.userDetails)
        this. _service.saveWholeUser(this.userDetails).subscribe(
            (res)=>{
                
                if(res!=null)
                {
                    this.userDetails=res;
                    this.message="Successfully registered. Please login"
                    this.lFlag=true;
                    this.rFlag=false;
                }    
                else
                {
                    this.msg="Not Registered. Please try again"
                }        
         },
            
            (error:HttpErrorResponse)=>
            {
                this.message="Not Registered. Please try again"
             if(error instanceof Error)
                 {
                     console.log("Client side error");
                     console.log("Error status:"+error.status);
                     console.log("Error status text:"+error.statusText);
 
                 }
                 else{
                     console.log("Server side error");
                     console.log("Error status:"+error.status);
                     console.log("Error status text:"+error.statusText);
                 }
            }
            
         );

    }

       

        
   

}
