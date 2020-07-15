import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationServviceService {

 constructor(private http:HttpClient) { }
//constructor(){}
// Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


/*handleError(errorResponse: HttpErrorResponse) {
  console.log(">>>> " + errorResponse.error)
}*/


  authenticate(login: object): Observable<any>{
    console.log('Inside authenticate')
    //call the api
  return this.http.post(`http://localhost:8080/login`,login);
  
  }

  isUserLoggedIn(){
    
    let loggedUser = sessionStorage.getItem('userLoggeIn');
  // return loggedUser;
    return !(null==loggedUser)
  }
  
  logout(){
    sessionStorage.removeItem('userLoggeIn');
    sessionStorage.removeItem('role');
    sessionStorage.clear;
  }
  isInstructor(){
    let instructor = sessionStorage.getItem('role');
    return !(null==instructor)
  }
  isAdmin(){
    let admin = sessionStorage.getItem('isAdmin');
    return !(null==admin)
  }
}
