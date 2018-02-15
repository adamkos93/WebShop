import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { IFilterOrderParameters, IFilteredOrderResult, IOrder } from './../shared/types/order.types';

import { AccountService } from './../shared/services/account.service';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common';
import { OrderService } from './../shared/services/order.service';
import { Router } from '@angular/router';
import { isDate } from 'util';

export enum SortingEnum {
  None,
  Ascending,
  Descending
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

  orders = <IOrder[]>[];
  totalRecords: number;
  isDateAsc: SortingEnum = SortingEnum.None;
  isStatusAsc: SortingEnum = SortingEnum.None;
  SortingEnum: typeof SortingEnum = SortingEnum;
  filterOrderParameters = <IFilterOrderParameters>{};
  isAdmin = false;
  constructor(private orderService: OrderService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.filterOrderParameters.isDateAsc = null;
    this.filterOrderParameters.isStatusAsc = null;
    this.getOrders(this.filterOrderParameters);
    this.isAdmin = this.accountService.checkIsAdmin();
  }

  getOrders(parameters: IFilterOrderParameters) {
    if(!parameters.page) {
      parameters.page = 1;
    }
    if(!parameters.max) {
      parameters.max = 4;
    }
    this.filterOrderParameters = parameters;
    this.orderService.getOrdersByUser(this.filterOrderParameters).subscribe(data => {
      if(!data) { return; }
      const result = <IFilteredOrderResult> data;
      if(result) {
        this.orders = result.orders;
        this.totalRecords = result.totalRecords;
      }
    });
  }

  removeItem(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(data=> {
      this.router.navigateByUrl('order-list');
    });
  }

  sortDate(value: SortingEnum) {
    this.isDateAsc = value;
    this.isStatusAsc = SortingEnum.None;
    this.filterOrderParameters.page = 1;
    this.filterOrderParameters.isDateAsc = this.isDateAsc === SortingEnum.Ascending;
    this.filterOrderParameters.isStatusAsc = null;
    this.getOrders(this.filterOrderParameters);
  }
  sortStatus(value: SortingEnum) {
    this.isStatusAsc = value;
    this.isDateAsc = SortingEnum.None;
    this.filterOrderParameters.page = 1;
    this.filterOrderParameters.isDateAsc = null;
    this.filterOrderParameters.isStatusAsc = this.isStatusAsc === SortingEnum.Ascending;
    this.getOrders(this.filterOrderParameters);
  }

  selectedPageEmitter(event) {
    const page = event;
    if(page) {
      this.filterOrderParameters.page = page;
      this.getOrders(this.filterOrderParameters);
    }
  }
}
