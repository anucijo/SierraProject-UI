import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor(private http:HttpClient){}
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  addVideos(cart: object): Observable<object>{
    console.log("in addtocart :"+cart)
    //call the api
  return this.http.post(`http://localhost:8080/addToCart`,cart);
  
  }
  viewMyBucket(cart: object): Observable<object>{
    console.log("in VIEW CART :"+cart)
    return this.http.post(`http://localhost:8080/viewCart`,cart);
  }
}
