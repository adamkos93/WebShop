import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../shared/form/form-model';
import { IProduct } from './../shared/types/product.types';
import { Injectable } from '@angular/core';

@Injectable()
export class AddProductFormModel extends FormModel{
  constructor(private fb: FormBuilder) {
    super()
  }

  initializeModel(data: IProduct): FormGroup {
    if(!this.form) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        categoryId: [null, Validators.required],
        image: null,
        description: ['', Validators.required]
      })
    }
    if(data) {
      this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
    }
    return this.form;
  }
}
