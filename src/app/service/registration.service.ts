import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient){}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  registerUser(user: object): Observable<object>{
    console.log("in registeruser :"+user)
    //call the api
  return this.http.post(`http://localhost:8080/addUser`,user);
  
  }
  
  
}
