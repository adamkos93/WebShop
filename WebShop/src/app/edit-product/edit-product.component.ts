import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ICategory } from './../shared/types/category.types';
import { IProduct } from './../shared/types/product.types';
import { Option } from './../shared/types/option.types';
import { ProductFormModel } from './../product/product.form-model';
import { ProductService } from './../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-edit-product',
  templateUrl:'./../add-product/add-product.component.html'
})
export class EditProductComponent implements OnInit {
  image: string='';
  categories = <ICategory[]>[];
  productId: number;
  @ViewChild("imageInput") imageInput: ElementRef;
  private sub: any;
  constructor(private productFormModel: ProductFormModel,  private router: Router, private productService: ProductService, private activatedRoute: ActivatedRoute) {

  }

  get productForm(): FormGroup {
    return this.productFormModel.model;
  }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.productId = +params['productId'];
      if(this.productId > 0) {
        this.productService.getProductById(this.productId).subscribe(data => {
          if(data) {
            this.initializeFormModel(data);
            this.image = data.image;
          }
        });
      }
     // In a real app: dispatch action to load the details here.
  });
  }

  initializeFormModel(data) {
    this.productFormModel.initializeModel(data);
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
    const price = this.productForm.get('price').value;
    if(price) {
      this.productForm.get('price').setValue(price.toString().replace(',','.')); //todo: dodanie walidacji 
    }
    if(this.productForm.valid) {
    const model = <IProduct> this.productForm.value;
    this.productService.updateProduct(model).subscribe(data => {
          this.router.navigateByUrl('product/'+ model.id.toString());
    });
    } else {
      this.router.navigateByUrl('edit-product/'+this.productId.toString());
    }
  }

  removeImage(event:Event) {
    event.preventDefault();
    this.productForm.get('image').reset();
    this.image ='';
    this.imageInput.nativeElement.value="";
  }
}
