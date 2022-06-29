import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'app/Employee';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  async createHandler(employee: Employee) {

    employee.id = Number(employee.id)
    employee.participation = Number(employee.participation)

    //enviar para o service
    await this.employeeService.createEmployee(employee).subscribe();

    //redirect
    this.router.navigate(['/']);

    window.location.reload();
  }
}
