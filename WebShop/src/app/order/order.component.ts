import * as _ from 'lodash';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AccountService } from './../shared/services/account.service';
import { DatePipe } from '@angular/common';
import { IOrder } from './../shared/types/order.types';
import { OrderService } from '../shared/services/order.service';
import { OrderStatusEnum } from './../shared/enums/order-status.enum';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector:'app-order',
  templateUrl:'./order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy  {

  private sub: any;
  orderId: number;
  orderProducts: IOrder;
  isButtonsVisible = false;
  isAdmin = false;
  OrderStatusEnum: typeof OrderStatusEnum = OrderStatusEnum;
  statuses = ['Anulowane', 'Przetwarzane', 'Wysłane'];
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router, private accountService: AccountService) {}

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
    this.isAdmin = this.accountService.checkIsAdmin();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showButtons() {
    this.isButtonsVisible = !this.isButtonsVisible;
  }

  updateStatus(status: string) {
    this.orderService.updateStatusOrder(this.orderId, status).subscribe(data => {
      this.router.navigateByUrl('order-list');
    })
  }

}
