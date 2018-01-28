import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AddProductFormModel } from './add-product.form-model';
import { IProduct } from './../shared/types/product.types';
import { Option } from './../shared/types/option.types';
import { ProductService } from './../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-add-product',
  templateUrl:'./add-product.component.html'
})
export class AddProductComponent implements OnInit {
  image: string='';
  categories = <Option[]>[];
  constructor(private addProductFormModel: AddProductFormModel,  private router: Router, private productService: ProductService) {

  }

  get addProductForm(): FormGroup {
    return this.addProductFormModel.model;
  }

  ngOnInit() {
    this.initializeFormModel(null);
    this.categories = [
      {key: '1', value: 'Sport' },
      {key: '2', value: 'Dom'}
    ];
  }

  initializeFormModel(data) {
    this.addProductFormModel.initializeModel(data);
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.image = myReader.result;
        console.log(this.image);
      }
      myReader.readAsDataURL(file);
    }
  }

  onSubmit(){
    if(this.image) {
      this.addProductForm.get('image').setValue(this.image);
    }
    const price: string = this.addProductForm.get('price').value;
    if(price) {
      this.addProductForm.get('price').setValue(price.replace(',','.')); //todo: dodanie walidacji 
    }
    if(this.addProductForm.valid) {
    const model = <IProduct> this.addProductForm.value;
    this.productService.addProduct(model).subscribe(data => {
          this.router.navigateByUrl('product-list');
      });
    } else {
      this.router.navigateByUrl('add-product');
    }
  }

}
