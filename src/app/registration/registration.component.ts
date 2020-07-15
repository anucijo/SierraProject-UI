import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { user } from './user';
import { RegistrationService } from '../service/registration.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  regPhoneNumber = ''
  usertype = ''
  form: FormGroup;

  errorMessage = 'Email Id already present'
  duplicateUser: boolean
  register: user = new user();
   passwordValidators = [Validators.minLength(6)];
  //Dependancy Injection of Router.to redirect to welcome page
  constructor(
    private formBuilder: FormBuilder,private router: Router, private regService: RegistrationService) { }
  //constructor(priSvate router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      regFname: ['', Validators.required],
      
      regEmail: ['', [Validators.required,Validators.email]],
      regPassword: ['',[Validators.required,  Validators.minLength(6)]],
      regPhoneNumber:['',[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]]
  });
  }

  handleRegistration() {
    
    
    this.register.firstName = this.regFname;
    this.register.lastName = this.regLname;
    this.register.role = this.usertype;
    this.register.userName = this.regEmail;
    this.register.password = this.regPassword;
    this.register.phoneNumber = this.regPhoneNumber;
    console.log("Phone number "+this.register.phoneNumber);
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
