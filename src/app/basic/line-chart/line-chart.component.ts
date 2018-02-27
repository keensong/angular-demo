import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  option: any;

  constructor() { }

  ngOnInit() {
    this.option = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    };
  }

}
