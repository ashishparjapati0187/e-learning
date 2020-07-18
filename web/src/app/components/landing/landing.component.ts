import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// landing component for router outlet
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data:any;
  constructor(private router:Router) { }

  ngOnInit() {

    this.data=JSON.parse(localStorage.getItem("user")); // get from local storage

    if(this.data==null)
    this.router.navigate(['/homeLink']); // navigate to home if data is  null taht is user does not exist

    else if(this.data.emailId=="admin@a.com")
    this.router.navigate(['/adminLink/AInnovator']);  // go to admin innovator if admin
    else {
      this.router.navigate(['studentLink/userHome']); // go to student home if student
    } 
    
  }

}
