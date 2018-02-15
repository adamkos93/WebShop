import { Component, OnDestroy, OnInit } from '@angular/core';

import { AccountService } from './../shared/services/account.service';
import { CookieService } from '../shared/services/cookie.service';
import { IShoppingBasket } from './../shared/types/shopping-basket.types';
import { ProductService } from '../shared/services/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogged = false;
  basketItemsCounter: number;
  isLoggedSubscription: Subscription;
  addToBasketSubscription: Subscription;
  basketCounterSubscription: Subscription;
  isAdmin = false;
  constructor(private accountService: AccountService,
              private router: Router,
              private productService: ProductService,
              private cookieService: CookieService) { }


  ngOnInit() {
    this.checkBasketItemsCounter();
    this.isLoggedSubscription = this.accountService.isLogged.subscribe(data =>{
      this.isLogged = data;
      this.isAdmin = this.accountService.checkIsAdmin();
    });
    this.addToBasketSubscription = this.productService.shoppingBasket.subscribe(data => {
      if(!data) { return;}
      this.processShoppingBasket(data);
      this.checkBasketItemsCounter();
    });
    this.basketCounterSubscription = this.productService.refresBasketCounter.subscribe(data => {
      if(data) {
        this.checkBasketItemsCounter();
      }
    });
  }

  ngOnDestroy(){
    this.isLoggedSubscription.unsubscribe();
    this.addToBasketSubscription.unsubscribe();
    this.basketCounterSubscription.unsubscribe();
  }

  addProduct(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('add-product');
  }

  checkBasketItemsCounter() {
    let items = this.cookieService.getCookie('basketItems');
    const itemsArray = items ? <IShoppingBasket[]>JSON.parse(items) : [];
    this.basketItemsCounter = itemsArray.length;

  }


  processShoppingBasket(item: IShoppingBasket) {
    let newItemsArray = <IShoppingBasket[]>[];
    let items = this.cookieService.getCookie('basketItems');
    newItemsArray = items ? <IShoppingBasket[]>JSON.parse(items) : []; 
    newItemsArray.push(item);
    this.cookieService.setCookie('basketItems',JSON.stringify(newItemsArray),1);
  }

  logout(){
    this.accountService.logout().subscribe(value=>{
      this.isLogged = false;
      this.isAdmin = false;
      this.cookieService.deleteCookie('basketItems');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.checkBasketItemsCounter();
      this.router.navigateByUrl('product-list');
    });
    //TODO
    // czyszczenie ciastek, sesji, localStorage
    // czyszczenie po stronie backendu sesji
  }
}
