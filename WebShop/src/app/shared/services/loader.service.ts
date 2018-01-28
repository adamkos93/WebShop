import * as _ from 'lodash';

import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private counter:number = 0;

    constructor() {
    }

    setCounter(increase: boolean) {
      this.counter = increase === true ? ++this.counter : --this.counter;
      console.log('counter', this.counter, 'isLoading', this.isLoading.value);
      if(this.counter > 0 && !this.isLoading.value) {
        this.isLoading.next(true);
        return;
      }
      this.isLoading.next(false);
    }
}
