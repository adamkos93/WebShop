import { AccountService } from './../shared/services/account.service';
import { Component } from '@angular/core';

@Component({
  selector:'app-product-list',
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent {

  constructor(private accountService: AccountService) {

  }

}
