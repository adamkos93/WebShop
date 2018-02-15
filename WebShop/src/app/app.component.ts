import { Component, OnDestroy, OnInit } from '@angular/core';

import { AccountService } from './shared/services/account.service';
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
   constructor(private httpService: HttpService, private productService: ProductService, private accountService: AccountService) { }
   apiValues: string[] = [];
   isLoaderVisible = false;
   isRouterOutletVisible = true;
   loaderSubscription: Subscription;

   ngOnInit() {
    this.loaderSubscription = this.httpService.isLoading.subscribe(value => {
      setTimeout(() => {
        this.isLoaderVisible = value;
      }, 0);
    });
    this.accountService.isUserLogged().subscribe(value => {
      const result = (value === 'true');
      this.accountService.isLogged.next(result);
    });
   }

   ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
