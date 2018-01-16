import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http'
import { HttpService } from './shared/services/http.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   constructor(private httpService: HttpService) { }
   apiValues: string[] = [];
   isLoaderVisible = false;
   ngOnInit() {
      this.httpService.isLoading.subscribe(value => {
        this.isLoaderVisible = value
      })
   }
}
