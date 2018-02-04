import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../shared/form/form-model';
import { IProduct } from './../shared/types/product.types';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductFormModel extends FormModel{
  constructor(private fb: FormBuilder) {
    super()
  }

  initializeModel(data: IProduct, clear = false): FormGroup {
    if(!this.form || clear) {
      this.form = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        price: ['', Validators.required],
        categoryId: [null, Validators.required],
        image: null,
        description: ['', Validators.required],
        amount: ['']
      })
    }
    if(data && !clear) {
      this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
    }
    return this.form;
  }
}
