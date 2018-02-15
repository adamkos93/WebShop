import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IOrder } from '../shared/types/order.types';
import { OrderFormModel } from './../order/order.from-model';
import { OrderService } from './../shared/services/order.service';
import { OrderStatusEnum } from '../shared/enums/order-status.enum';
import { Router } from '@angular/router';

@Component({
  selector:'app-add-order',
  templateUrl:'./add-order.component.html'
})
export class AddOrderComponent implements OnInit {
  constructor(private orderFormModel: OrderFormModel, private router: Router, private orderService: OrderService) {

  }

  get addOrderForm(): FormGroup {
    return this.orderFormModel.model;
  }

  ngOnInit() {
    this.initializeFormModel(null);
  }

  initializeFormModel(data) {
    this.orderFormModel.initializeModel(data);
  }

  save() {
    if(this.addOrderForm.valid) {
      const model = <IOrder> this.addOrderForm.value;
      model.status = OrderStatusEnum[0];
      this.orderService.addOrder(model).subscribe(data =>{
        this.router.navigateByUrl('order-list');
      });
    }
  }
}
