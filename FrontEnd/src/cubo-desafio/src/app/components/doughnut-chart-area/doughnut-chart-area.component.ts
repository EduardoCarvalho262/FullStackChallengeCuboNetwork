import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart-area',
  templateUrl: './doughnut-chart-area.component.html',
  styleUrls: ['./doughnut-chart-area.component.css']
})
export class DoughnutChartAreaComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100],
     [50, 150, 120],
     [250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }


}
