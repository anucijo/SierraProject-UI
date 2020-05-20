import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logout:LoginAuthenticationServviceService) { }

  ngOnInit(): void {LoginAuthenticationServviceService
    this.logout.logout();
  }

}
