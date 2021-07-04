import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
 
  constructor(private readonly userService: ApiService) { }
  m = 0
  f = 0
  a = 0
  i = 0
  ngOnInit()  {
    this.userService.getAllUsers().subscribe(
      res => {
        let users = res.data
        
        users.forEach(element => {
          if (element.gender === "Male") {
            this.m = this.m + 1

          } else {
            this.f = this.f + 1 
          }
if (element.status === "Inactive") {
  this.i = this.i +1
} else {
  this.a = this.a + 1
}

        });
        console.log(this.f)
        localStorage.setItem("M",this.m.toString())
        localStorage.setItem("F",this.f.toString())
        localStorage.setItem("A",this.a.toString())
        localStorage.setItem("I",this.i.toString())
      }
    )

  }
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;

  canvas1: any;
  ctx1: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["Male", "Female"],
          datasets: [{
              label: '# of Votes',
              data: [+localStorage.getItem("M"), +localStorage.getItem("F")],
              backgroundColor: [
                'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
               //   'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
 

  this.canvas1 = document.getElementById('myChart1');
  this.ctx1 = this.canvas1.getContext('2d');
  let myChart1 = new Chart(this.ctx1, {
    type: 'pie',
    data: {
        labels: ["Active", "Inactive"],
        datasets: [{
            label: '# of Votes',
            data: [+localStorage.getItem("A"), +localStorage.getItem("I")],
            backgroundColor: [
              'rgb(50,205,50)',
              'rgb(255, 99, 71)'               
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: false,
      display:true
    }
  });
}
}


