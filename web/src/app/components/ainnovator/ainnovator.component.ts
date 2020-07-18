import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// admin part innovator 
@Component({
  selector: 'app-ainnovator',
  templateUrl: './ainnovator.component.html',
  styleUrls: ['./ainnovator.component.css']
})
export class AInnovatorComponent implements OnInit {

  constructor(private router:Router/*router object*/) { }

  ngOnInit() {}

  onClick(innovatorId:number)
        {
          this.router.navigate(['/adminLink/AItest',innovatorId]);  // navigate to test clicked
        }

}
