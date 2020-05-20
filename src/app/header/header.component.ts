import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isUserLoggedIn : boolean = false;
  constructor(public loguser :LoginAuthenticationServviceService ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.loguser.isUserLoggedIn();
    
  }

}
