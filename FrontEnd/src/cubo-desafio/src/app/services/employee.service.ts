import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/Employee';
import { environment } from 'environments/environment';
import { Response } from 'app/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}employee`

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    var headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}
    var dados = this.httpClient.get<Employee[]>(this.apiUrl, {headers: headers});
    return dados;
  }

  createEmployee(employee: Employee): Observable<string> {
    var dados = JSON.stringify(employee);
    var headers = {'Content-Type': 'application/json', 'charset': 'utf-8'}

    return this.httpClient.post<string>(this.apiUrl, dados, {headers: headers});
  }

}
