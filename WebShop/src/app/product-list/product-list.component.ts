import {  } from '@angular/core/src/metadata/lifecycle_hooks';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { IFilterProductParameters, IFilteredProductResult, IProduct } from './../shared/types/product.types';

import { ProductService } from './../shared/services/product.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector:'app-product-list',
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products = <IProduct[]>[];
  totalRecords: number;
  subscription: Subscription;
  filterProductParameters = <IFilterProductParameters>{};
  constructor(private productService: ProductService, private http: Http) {

  }

  ngOnInit() {
    this.subscription = this.productService.filterProductParameters.subscribe(data=>{
      if(data) {
        this.getFilteredProducts(data);
      }
    });
      
    
  }

  getFilteredProducts(parameters: IFilterProductParameters) {
    if(!parameters.page) {
      parameters.page = 1;
    }
    if(!parameters.max) {
      parameters.max = 12;
    }
    this.filterProductParameters = parameters;
    this.productService.getFilteredProducts(parameters).subscribe(data => {
      const result = <IFilteredProductResult> data;
      if(result) {
        this.products = result.products;
        this.totalRecords = result.totalRecords;
      }
    });
  }
  selectedPageEmitter(event) {
    const page = event;
    if(page) {
      this.filterProductParameters.page = page;
      this.getFilteredProducts(this.filterProductParameters);
    }
  }
    

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
