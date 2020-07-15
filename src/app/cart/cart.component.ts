import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../service/addtocart.service';
import { cart } from '../welcome/cart';
import { first } from 'rxjs/operators';
import { header } from '../header/header';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userName = sessionStorage.getItem('userLoggeIn');
  responseSearches;

  cart: cart = new cart();
  constructor(private addtocartService: AddtocartService) {

  }

  ngOnInit(): void {
    this.cart.userName = this.userName;
    this.addtocartService.viewMyBucket(this.cart)
      .pipe(first())
      .subscribe(
        fileContent => {
          console.log(fileContent);
          this.responseSearches = fileContent;
        },
        error => {
          console.log('In Error')
          return console.log(error);
        })

  }
 
}
