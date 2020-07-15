import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  //SERVER_URL: string = "https://file.io/"; 
  SERVER_URL: string = "http://localhost:8080/database"; 
	constructor(private httpClient: HttpClient) { }
  //constructor() { }

  public upload(formData) {

    return this.httpClient.post<any>(this.SERVER_URL, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
        
  }
}
