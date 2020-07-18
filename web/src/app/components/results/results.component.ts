import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from '../../Services/learning-service.service';
//import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';
import { UserDetails } from '../../Models/UserDetails';
import { HttpErrorResponse } from '@angular/common/http';

// chart or result component
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private _service:LearningServiceService) { }
  chart=[];
  test=[];
  marks=new Map();

  res=[];
  data:any;
  userDetails=new UserDetails();
  error:any;
  ngOnInit() {
this.userDetails=JSON.parse(localStorage.getItem("user"));
this._service.getAllTestByUser(this.userDetails.userId).subscribe(
  (res)=>{
    console.log(res+"success");
    this.data=res;
   // alert(this.data);
    var i=0;
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
  //generate chart
  this.generateChart();
    
      },(error:HttpErrorResponse)=>{

        if(error instanceof Error)
        {
          // client error
          console.log("Client side error"+error);
        }
        else
        {
          // server error
          console.log("server side error"+error);
        }
        this.error=error;
      }
  );  
    
    
  }

  // chart generation function

  generateChart()
  {
    console.log("in generate")
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.test,
        datasets: [
          { 
            label: 'My First dataset',
            data: this.res,
            backgroundColor: "grey",
            borderColor: "black",
            pointRadius: 10,
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        title: {
					display: true,
					text: 'Result chart'
				},
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
							display: true,
							labelString: 'Test'
						}
          }],
          yAxes: [{
            gridLines: {
							drawBorder: false,
							color: ['#1F5B10','#5EDA4B','#4FB73F' ,'#389C1F' , '#EEAD88', '#F28D52', '#EE9898', '#F07676','#F25252','#830505']
						},
            display: true,
            scaleLabel: {
							display: true,
							labelString: 'Marks'
            },
            ticks: {
							min: 0,
							max: 10
						}
          }],
        }
      }
    });
  }

}



