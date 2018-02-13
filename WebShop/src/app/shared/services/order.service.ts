import * as _ from 'lodash';

import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { HttpService } from './http.service';
import { IOrder } from './../types/order.types';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private httpService: HttpService) {

  }

  addOrder(order: any) {
    return this.httpService.post('order/addOrder', order);
  }

  getOrdersByUser() {
    return this.httpService.get('order/getOrdersByUser');
  }

  getAllOrders() {
    return this.httpService.get('order/getAllOrders');
  }

  getOrderById(orderId: number) {
    return this.httpService.get('order/getOrderById?orderId='+orderId);
  }

  deleteOrder(orderId: number) {
    return this.httpService.delete('order/deleteOrder?orderId='+orderId);
  }
}
