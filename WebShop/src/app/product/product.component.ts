import * as _ from 'lodash';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ICategory } from '../shared/types/category.types';
import { IProduct } from './../shared/types/product.types';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit {

  product: IProduct;
  productId: number;
  isButtonsVisible = false;
  category:ICategory;
  private sub: any;


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.productId = +params['productId'];
        if(this.productId > 0) {
          this.productService.getProductById(this.productId).subscribe(data => {
            if(data) {
              this.product = data;
              this.category = this.productService.getCategoryName(this.product.categoryId);
            }
          });
        }
    });
  }

 

  addToBasket() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showButtons() {
    this.isButtonsVisible = !this.isButtonsVisible;
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId).subscribe(data=> {
      this.router.navigateByUrl('product-list');
    });
  }
}
