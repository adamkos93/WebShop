import * as _ from 'lodash';

import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { IFilterOrderParameters, IOrder } from './../types/order.types';

import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private httpService: HttpService) {

  }

  addOrder(order: any) {
    return this.httpService.post('order/addOrder', order);
  }

  getOrdersByUser(parameters: IFilterOrderParameters) {
    let urlStringParameters = '?page='+ parameters.page +'&max='+ parameters.max;
    urlStringParameters += '&isDateAsc=' + parameters.isDateAsc;
    urlStringParameters += '&isStatusAsc=' + parameters.isStatusAsc;
    return this.httpService.get('order/getOrdersByUser'+ urlStringParameters);
  }

  getAllOrders(parameters: IFilterOrderParameters) {
    let urlStringParameters = '?page='+ parameters.page +'&max='+ parameters.max;
    urlStringParameters += '&isDateAsc=' + parameters.isDateAsc;
    urlStringParameters += '&isStatusAsc=' + parameters.isStatusAsc;
    return this.httpService.get('order/getAllOrders'+ urlStringParameters);
  }

  getOrderById(orderId: number) {
    return this.httpService.get('order/getOrderById?orderId='+orderId);
  }

  deleteOrder(orderId: number) {
    return this.httpService.delete('order/deleteOrder?orderId='+orderId);
  }

  updateStatusOrder(orderId: number, status: string) {
    return this.httpService.get('order/updateStatus?orderId='+orderId+'&status='+status);
  }
}
