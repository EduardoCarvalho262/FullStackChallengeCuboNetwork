
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'app/Employee';
import { EmployeeService } from 'app/services/employee.service';

import {ChartData, ChartEvent} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-doughnut-chart-area',
  templateUrl: './doughnut-chart-area.component.html',
  styleUrls: ['./doughnut-chart-area.component.css']
})
export class DoughnutChartAreaComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public doughnutChartLabels: string[] = [];
  public participation: number[] = [];
  employeeS: Employee[] = []

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: this.participation
    }]
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getData();
  }



  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  getData(){
    this.employeeService.getEmployees().subscribe((items) => {
      items.forEach(item => {
        this.doughnutChartLabels.push(item.firstName);
        this.participation.push(item.participation);
        this.chart.chart?.update();
      })
    });
  }
}
