import { Injectable } from '@angular/core';
import  { HttpClient  } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmpURL : string;
  getEmpURL : string;

  constructor(private http : HttpClient ) {
    this.addEmpURL = 'http://localhost:9091/emp/addEmployee';
    this.getEmpURL = 'http://localhost:9091/emp/getAllEmployee';

   }
   addEmployee( emp : Employee): Observable<Employee>{
    return this.http.post<Employee>(this.addEmpURL,emp);
   }
   getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);
   }
}
