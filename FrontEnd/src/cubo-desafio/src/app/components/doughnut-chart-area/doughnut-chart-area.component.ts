import { Component, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart-area',
  templateUrl: './doughnut-chart-area.component.html',
  styleUrls: ['./doughnut-chart-area.component.css']
})
export class DoughnutChartAreaComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 50, 50 ] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
