import { Component, OnDestroy, OnInit } from '@angular/core';

import { Http } from '@angular/http'
import { HttpService } from './shared/services/http.service';
import { LoaderService } from './shared/services/loader.service';
import { Subscription } from 'rxjs/Rx';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy  {
   constructor(private httpService: HttpService) { }
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
   }

   ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
