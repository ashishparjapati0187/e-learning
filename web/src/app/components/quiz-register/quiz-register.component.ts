import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// register to quiz
@Component({
  selector: 'app-quiz-register',
  templateUrl: './quiz-register.component.html',
  styleUrls: ['./quiz-register.component.css']
})
export class QuizRegisterComponent implements OnInit {

  // regex for email and mobile
  emailpattern = "^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$";
  mobilepattern = "^([9]{1})([234789]{1})([0-9]{8})$";
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatequiz()
  {
    this.router.navigateByUrl('/user-quiz'); // navigate to user-quiz
  }

}
