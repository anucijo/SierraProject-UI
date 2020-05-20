import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { user } from './user';
import { RegistrationService } from '../service/registration.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regEmail = ''
  regPassword = ''
  regFname = ''
  regLname = ''
  usertype = ''

  errorMessage = 'Email Id already present'
  duplicateUser: boolean
  register: user = new user();

  //Dependancy Injection of Router.to redirect to welcome page
  constructor(private router: Router, private regService: RegistrationService) { }
  //constructor(private router:Router) { }

  ngOnInit(): void {}

  handleRegistration() {
    
    console.log(this.regEmail);
    this.register.firstName = this.regFname;
    this.register.lastName = this.regLname;
    this.register.role = this.usertype;
    this.register.userName = this.regEmail;
    this.register.password = this.regPassword;

    this.regService.registerUser(this.register)
     .pipe(first())
       .subscribe(
         data => {
           
           console.log(data);
           this.duplicateUser = false;
 
           this.router.navigate(['welcome', this.regEmail])
         },
         error => {
           
           this.duplicateUser = true;
         return console.log(error);
         })
    
  }
}
