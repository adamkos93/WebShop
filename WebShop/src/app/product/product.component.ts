import * as _ from 'lodash';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AccountService } from './../shared/services/account.service';
import { CookieService } from '../shared/services/cookie.service';
import { ICategory } from '../shared/types/category.types';
import { IProduct } from './../shared/types/product.types';
import { IShoppingBasket } from './../shared/types/shopping-basket.types';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit  {

  product: IProduct;
  productId: number;
  isButtonsVisible = false;
  category:ICategory;
  isInBasket = false;
  basketItemMaxAmount = 0;
  isAdmin = false;
  @ViewChild('basketItemAmount') basketItemAmount : ElementRef;
  private sub: any;


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private cookieService: CookieService, private accountService: AccountService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.productId = +params['productId'];
        if(this.productId > 0) {
          this.productService.getProductById(this.productId).subscribe(data => {
            if(data) {
              this.product = data;
              this.category = this.productService.getCategoryName(this.product.categoryId);
              this.basketItemMaxAmount = data.amount;
            }
          });
          this.checkIsInBasket(this.productId);
        }
    });
    this.isAdmin = this.accountService.checkIsAdmin();
  }

  addToBasket(productId: number) {
    const amount = this.basketItemAmount.nativeElement.value
    if(productId && amount ) {
      const payload = <IShoppingBasket> {
        productId: productId,
        amount: +amount
      }
      this.productService.shoppingBasket.next(payload);
      this.isInBasket = true;
    }
  }

  checkIsInBasket(productId: number) {
    const cookieItems = this.cookieService.getCookie('basketItems');
    let items = cookieItems ? <IShoppingBasket[]>JSON.parse(cookieItems) : [];
    if(_.find(items, { 'productId': productId })) {
      this.isInBasket = true;
    } else {
      this.isInBasket = false;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showButtons() {
    this.isButtonsVisible = !this.isButtonsVisible;
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId).subscribe(data=> {
      this.router.navigateByUrl('product-list');
    });
  }
}
