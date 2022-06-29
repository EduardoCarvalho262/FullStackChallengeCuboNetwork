import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/Employee';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((items) => {
      const data = items;
      this.employees = data;
    });
  }
}
