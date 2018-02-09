import * as _ from 'lodash';

import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { IFilterProductParameters, IProduct } from './../types/product.types';

import { HttpService } from './http.service';
import { ICategory } from './../types/category.types';
import { IShoppingBasket } from './../types/shopping-basket.types';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  _categories = <ICategory[]>[];
  filterProductParameters: BehaviorSubject<IFilterProductParameters> = new BehaviorSubject<IFilterProductParameters>(null);
  shoppingBasket: BehaviorSubject<IShoppingBasket> = new BehaviorSubject<IShoppingBasket>(null);
  refresBasketCounter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get categories() {
    if(!this._categories || !this._categories.length) {
      this._categories = <ICategory[]>JSON.parse(localStorage.getItem("categories"));
    }
    return this._categories;
  }
  constructor(private httpService: HttpService) {

  }

  addProduct(product: any) {
    return this.httpService.post('product/addProduct', product);
  }

  updateProduct(product: any) {
    return this.httpService.put('product/updateProduct', product);
  }

  removeProduct(productId: number) {
    return this.httpService.delete('product/removeProduct?productId='+productId);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpService.get('product/getAll');
  }

  getSelectedProducts(): Observable<IProduct[]> {
    return this.httpService.get('product/getSelectedProducts');
  }

  getFilteredProducts(parameters: IFilterProductParameters) {
    let urlStringParameters = '?page='+ parameters.page +'&max='+ parameters.max;
    if (parameters.name) {
      urlStringParameters += '&name=' + parameters.name;
    }
    if (parameters.minPrice) {
      urlStringParameters += '&minPrice=' + parameters.minPrice;
    }
    if (parameters.maxPrice) {
      urlStringParameters += '&maxPrice=' + parameters.maxPrice;
    }
    if (parameters.categoryId) {
      urlStringParameters += '&categoryId=' + parameters.categoryId;
    }
    return this.httpService.get('product/getFilteredProducts'+ urlStringParameters);
  }

  getProductById(productId: number): Observable<IProduct> {
    return this.httpService.get('product/getById?productId='+productId);
  }

  getAllCategories(): Observable<ICategory[]> {
    if(!this.categories || !this.categories.length) {
      return this.httpService.get('product/getCategories');
    } else {
      return Observable.of(this.categories);
    }
  }

  getCategoryName(categoryId: number) {
    if(!categoryId) { return; }
    if(!this.categories || !this.categories.length) { return; }
    const result = _.find(this.categories, {'id': categoryId })
    return result;
  }
}
