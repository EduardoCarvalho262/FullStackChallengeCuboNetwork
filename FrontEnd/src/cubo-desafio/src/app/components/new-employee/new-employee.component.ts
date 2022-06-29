import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'app/Employee';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Employee>()
  @Input() momentData: Employee | null = null;

  employeeForm!: FormGroup


  constructor() {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      firstName: new FormControl(this.momentData ? this.momentData.firstName: '', [Validators.required]),
      lastName: new FormControl(this.momentData ? this.momentData.lastName: '',  [Validators.required]),
      participation: new FormControl(this.momentData ? this.momentData.participation: '',  [Validators.required]),
    });
  }

  get firstName() {
    return this.employeeForm.get('firstName')!;
  }

  get lastName() {
    return this.employeeForm.get('lastName')!;
  }

  get participation() {
    return this.employeeForm.get('participation')!;
  }



  submit(){
    if(this.employeeForm.invalid){
      return;
    }
    console.log(this.employeeForm.value);

    this.onSubmit.emit(this.employeeForm.value)
  }
}
