import * as _ from 'lodash';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { DatePipe } from '@angular/common';
import { IOrder } from './../shared/types/order.types';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector:'app-order',
  templateUrl:'./order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy  {

  private sub: any;
  orderId: number;
  orderProducts: IOrder;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.orderId = +params['orderId'];
      if(this.orderId > 0) {
        this.orderService.getOrderById(this.orderId).subscribe(data => {
          if(data) {
            console.log(data);
            this.orderProducts = <IOrder>data;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
