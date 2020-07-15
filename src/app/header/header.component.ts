import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';
import { Router } from '@angular/router';
import { SearchService } from '../service/search.service';
import { first } from 'rxjs/operators';
import { header } from './header';
import { Observable,Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  name: String;
  searchKeyword: String;
  constructor(public loguser: LoginAuthenticationServviceService, private router: Router, private searchService: SearchService) { }
  Base64: any;
  responseSearches: header[];
  ngOnInit(): void {
    this.isUserLoggedIn = this.loguser.isUserLoggedIn();
    //this.name = this.loguser.isUserLoggedIn_temp();
       //this.isUserLoggedIn = !(null==this.name);
       if (this.isUserLoggedIn) {
    this.name = sessionStorage.getItem('userLoggeIn');
       } else {
         this.name = '';
       }
    this.router.navigate(['welcome', this.name]);
  }

  handleSearch() {
    this.searchService.search(this.searchKeyword)
      .pipe(first())
      .subscribe(
        fileContent => {
          console.log(fileContent)
          this.responseSearches = fileContent;
          console.log('before navigate')
          this.router.navigate(['welcome'], { state: { videos: this.responseSearches, 
            searchKeyword: this.searchKeyword}});
        },
        error => {
          console.log('In Error')
          return console.log(error);
        })
  }
}
