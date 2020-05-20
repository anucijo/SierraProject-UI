import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';
import { login } from './login';
import { first } from 'rxjs/operators';

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

          console.log(data);
          this.inValidUser = false;
          sessionStorage.setItem("userLoggeIn", this.email);
          this.router.navigate(['welcome', this.email])

        },
        error => {
          this.inValidUser = true;
          return console.log(error);
        })

  }


}
