import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';


// test ai innovator component
@Component({
  selector: 'app-ainnovator-test',
  templateUrl: './ainnovator-test.component.html',
  styleUrls: ['./ainnovator-test.component.css']
})
export class AInnovatorTestComponent implements OnInit {

  public innovatorId:number;
  public setId:number;
  constructor(private router:Router,private route:ActivatedRoute) { }


  // set i nnovator id
  ngOnInit() 
  {

    this.innovatorId=parseInt(this.route.snapshot.paramMap.get('innovatorId'));
    this.setId=this.innovatorId;
  }

  //test component
  onClick(sId:number)
  {
    var setIdSend=(this.setId+sId)
    this.router.navigate(['/adminLink/AIset',setIdSend]);  
  }

}
