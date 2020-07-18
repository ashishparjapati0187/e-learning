import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// studdent home component
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  flag:boolean=true;
  constructor(private router:Router) { }
  data:any;
  ngOnInit() {

    this.data=JSON.parse(localStorage.getItem("user")); // get user from local storage

    if(this.data!=null)
    this.router.navigate(['studentLink/userHome']); // got to student home if data not null
    else
    this.router.navigate(['homeLink']);// else go to home
  }

  logout()
  {
    localStorage.clear(); // clear local storage on logout
    this.router.navigate(['homeLink']);  // navigate to home
  }

}
