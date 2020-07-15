import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private http:HttpClient){}

  getInstructorsDetails(): Observable<object>{
    
    return this.http.get(`http://localhost:8080/instructors`);
  }
  getStudentsDetails(): Observable<object>{
    
    return this.http.get(`http://localhost:8080/students`);
  }
}
