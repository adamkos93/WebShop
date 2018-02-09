import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { IShoppingBasket, IShoppingBasketPayload } from './../shared/types/shopping-basket.types';

import { CookieService } from './../shared/services/cookie.service';
import { IProduct } from '../shared/types/product.types';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html'
})
export class ShoppingBasketComponent implements OnInit {
  items = <IShoppingBasket[]>{};
  products = <IProduct[]>[];
  productsItem = <IShoppingBasketPayload[]>{};
  sum = 0;
  constructor(private cookieService: CookieService, private productService: ProductService) { }

  ngOnInit() {
    let basketItems = this.cookieService.getCookie('basketItems');
    this.items = basketItems ? <IShoppingBasket[]>JSON.parse(basketItems) : [];
    this.getProducts();
  }

  getProducts() {
    this.productService.getSelectedProducts().subscribe(data => {
      if(!data) { return; }
      console.log(data);
      this.products = data; 
      this.productsItem = this.processProductItems(this.products, this.items);
    });
  }

  processProductItems(products: IProduct[], items: IShoppingBasket[]) {
    let productsItemArray = <IShoppingBasketPayload[]>[];
    if(!this.products || !this.items) {return;}
    _.forEach(products, (product) => {
      const productAmount = _.find(items, { 'productId': product.id});
      if(!productAmount) { return; }
      const productItem = <IShoppingBasketPayload> {
        product: product,
        amount: productAmount.amount
      }
      this.sum += productItem.amount * +productItem.product.price; 
      productsItemArray.push(productItem);
    });

    return productsItemArray;
  }

  removeItem(productId: number) {
    _.forEach(this.items, (item, index) => {
      if(item.productId === productId) {
        this.items.splice(index,1);
        this.cookieService.setCookie('basketItems',JSON.stringify(this.items),1);
        return false;
      }
    });
    _.forEach(this.productsItem, (item, index) => {
      if(item.product.id === productId) {
        this.sum = this.sum - (item.amount * +item.product.price); 
        this.productsItem.splice(index,1);
        return false;
      }
    });
    this.productService.refresBasketCounter.next(true);
  }
}
