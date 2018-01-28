import { Component, OnInit } from '@angular/core';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';

import { IProduct } from './../shared/types/product.types';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector:'app-product-list',
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products = <IProduct[]>[];
  constructor(private productService: ProductService, private http: Http) {

  }

  ngOnInit() {

    // let options = new RequestOptions();
    // options.headers = new Headers();
    // options.headers.append('Content-Type', 'application/json');
    // options.headers.append('Authorization', 'Bearer '+ localStorage.getItem('token'));
    // this.http.get('product/getAll', options).subscribe(data =>{
    //   console.log(data);
    //   this.products =  <IProduct[]>data.json();
    // })
    this.productService.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
}
