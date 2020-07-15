import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { LoginAuthenticationServviceService } from '../service/login-authentication-servvice.service';
import { header } from '../header/header';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { cart } from './cart';
import { AddtocartService } from '../service/addtocart.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  public destroyed = new Subject<any>();

  searchtext = '';
  successmsg = '';
  isUserLoggedIn: boolean
  isInstructor: boolean
  isAdmin:boolean
  //fileBytes = '';
  responseSearches: header[];
  
  name='';
  videoName='';
  cart: cart=new cart();
  addtocartmessage = '';
  orderId = '';
  //Activated Route to get the parameter passed to the url
  // constructor(private route: ActivatedRoute, public loguser: LoginAuthenticationServviceService) {
  // }

  constructor(private router: Router, public loguser: LoginAuthenticationServviceService,private addtocartService: AddtocartService) {
  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      this.fetchData();
    });
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  fetchData(): void {
    console.log('welcome onInit');

    if (history.state.searchKeyword) {
      this.searchtext = history.state.searchKeyword;
    } else {
      this.searchtext = '';
    }

     //this.name = this.router.snapshot.params['name']
     this.name = sessionStorage.getItem('userLoggeIn');
    if (history.state.videos) {
      this.responseSearches = history.state.videos;
    } else {
      this.responseSearches = [];
    }

    //console.log('history  ' + JSON.stringify(this.responseSearches));

    this.isUserLoggedIn = this.loguser.isUserLoggedIn();
    this.isInstructor = this.loguser.isInstructor();
    this.isAdmin = this.loguser.isAdmin();

    console.log('IsADMIN'+this.isAdmin)

  }
  addToMyOrder(response) {
    this.cart.item_id = response.item_id;
    this.cart.price = response.price;
    this.cart.video_name = response.video_name;
    this.cart.userName = this.name;
    this.cart.orderId = sessionStorage.getItem("orderId");
    this.addtocartService.addVideos(this.cart)
    .pipe(first())
       .subscribe(
         data => {
           
           console.log(data);
           this.orderId = JSON.stringify(data);
           
           sessionStorage.setItem("orderId",this.orderId);
           this.addtocartmessage = 'Tutorial added to your bucket successfully !!';
 
           
         },
         error => {
           
           
         return console.log(error);
         })
    
    }
}
