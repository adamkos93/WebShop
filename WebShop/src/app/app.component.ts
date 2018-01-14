﻿import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   constructor(private _httpService: Http) { }
   apiValues: string[] = [];
   
   ngOnInit() {
      this._httpService.get('/home/test').subscribe(values => {
         this.apiValues = values.json() as string[];
      });
   }

   
}
