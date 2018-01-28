import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { HttpService } from './http.service';
import { IProduct } from './../types/product.types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {
  
  constructor(private httpService: HttpService) {

  }

  addProduct(model: any) {
    return this.httpService.post('product/addProduct', model);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpService.get('product/getAll');
  }
}
