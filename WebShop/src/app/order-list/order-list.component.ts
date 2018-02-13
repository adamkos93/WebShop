import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common';
import { IOrder } from './../shared/types/order.types';
import { OrderService } from './../shared/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

  orders = <IOrder[]>[];
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersByUser().subscribe(data => {
      if(!data) { return; }
      this.orders = data;
    });
  }

  removeItem(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(data=> {
      this.router.navigateByUrl('order-list');
    });
  }
}
