import { Component, OnInit } from '@angular/core';
import {Chart} from'angular-highcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'LineChart'
    },
    series: [
      {
         name: 'test',
         data: [1, 2, 3, 4, 5, 6],
         type: undefined
      }]
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random()*10));
  }
  constructor() { }

  ngOnInit() {
  }
  

}
