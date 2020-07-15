import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';
import { login } from './login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { logresponse } from './logresponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  errorMessage = 'Invalid Username or Password'
  inValidUser: boolean
  loguser: login = new login();
  response: logresponse = new logresponse();
  
  isInstructor:boolean
  isAdmin:boolean

  //Dependancy Injection of Router.to redirect to welcome page
  constructor(private router: Router, private loginAuthService: LoginAuthenticationServviceService) { }

  ngOnInit(): void { }



  handleLogin() {
    console.log('inside handle login');

    this.loguser.userName = this.email;
    this.loguser.password = this.password;

    this.loginAuthService.authenticate(this.loguser)
      .pipe(first())
      .subscribe(
        data => {
          this.response = data;
          console.log(JSON.stringify(this.response))
          
          this.isInstructor = this.response.isInstructor;
          this.isAdmin = data.admin;
          console.log('in log component isAdmin'+ this.isAdmin);
          console.log(this.isInstructor);
          if (true == this.isInstructor) {
            sessionStorage.setItem("role","instructor");
          }
          if (true == this.isAdmin) {
            sessionStorage.setItem("isAdmin","admin");
          }
          console.log(this.isInstructor);
          this.inValidUser = false;
          sessionStorage.setItem("userLoggeIn", this.email);
          

          this.router.navigate(['welcome',this.email]);

        },
        error => {
          this.inValidUser = true;
          return console.log(error);
        })

  }


}
