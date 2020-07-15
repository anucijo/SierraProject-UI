import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

 // constructor() { }

  SERVER_URL: string = "http://localhost:8080/search"; 
	constructor(private httpClient: HttpClient) { }
  //constructor() { }


public search(name): Observable<any>  {
console.log('search keyword '+name)
    // http://URL?key=value
    return this.httpClient.get<any>(this.SERVER_URL+"?"+"searchKeyWord="+name);
  }
}
