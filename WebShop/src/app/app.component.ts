import { Component, OnDestroy, OnInit } from '@angular/core';

import { Http } from '@angular/http'
import { HttpService } from './shared/services/http.service';
import { LoaderService } from './shared/services/loader.service';
import { ProductService } from './shared/services/product.service';
import { Subscription } from 'rxjs/Rx';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy  {
   constructor(private httpService: HttpService, private productService: ProductService) { }
   apiValues: string[] = [];
   isLoaderVisible = false;
   isRouterOutletVisible = true;
   loaderSubscription: Subscription;

   ngOnInit() {
    this.loadCategories();
    this.loaderSubscription = this.httpService.isLoading.subscribe(value => {
      setTimeout(() => {
        this.isLoaderVisible = value;
      }, 0);
    });
   }

   loadCategories() {
    if(localStorage.getItem('categories')) {return;}
    this.productService.getAllCategories().subscribe(value => {
      localStorage.setItem('categories',JSON.stringify(value));
    }); 
   }

   ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
