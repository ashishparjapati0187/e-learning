import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// admin home component
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  data:any; // data variable
  constructor(private router:Router /*router object*/) { }

  ngOnInit() {

    this.data=JSON.parse(localStorage.getItem("user")); // gets item from local storage
    
    if(this.data.emailId=="admin@a.com") // checks if email is of admin
    this.router.navigate(['/adminLink/AInnovator']);  // redirects
    else
    this.router.navigate(['homeLink']); // redirects to home if not correct
  }

  logout()
  {
    localStorage.clear(); // clear local storage
    this.router.navigate(['homeLink']);
  }


}
