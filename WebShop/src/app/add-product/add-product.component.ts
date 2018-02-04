import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ICategory } from '../shared/types/category.types';
import { IProduct } from './../shared/types/product.types';
import { Option } from './../shared/types/option.types';
import { ProductFormModel } from './../product/product.form-model';
import { ProductService } from './../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-add-product',
  templateUrl:'./add-product.component.html'
})
export class AddProductComponent implements OnInit {
  image: string='';
  categories = <ICategory[]>[];
  @ViewChild("imageInput") imageInput: ElementRef;
  constructor(private productFormModel: ProductFormModel,  private router: Router, private productService: ProductService) {

  }

  get productForm(): FormGroup {
    return this.productFormModel.model;
  }
  // this.categories = [
  //   {key: '1', value: 'Sport' },
  //   {key: '2', value: 'Dom'}
  // ];
  ngOnInit() {
    this.initializeFormModel(null);
    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  initializeFormModel(data) {
    this.productFormModel.initializeModel(data, true);
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
      this.productForm.get('image').setValue(this.image);
    }
    const price: string = this.productForm.get('price').value;
    if(price) {
      this.productForm.get('price').setValue(price.replace(',','.')); //todo: dodanie walidacji
    }
    if(this.productForm.valid) {
    const model = <IProduct> this.productForm.value;
    this.productService.addProduct(model).subscribe(data => {
          this.router.navigateByUrl('product-list');
      });
    } else {
      this.router.navigateByUrl('add-product');
    }
  }


  removeImage(event:Event) {
    event.preventDefault();
    this.productForm.get('image').reset();
    this.image ='';
    this.imageInput.nativeElement.value="";
  }
}
