import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../shared/form/form-model';
import { IOrder } from './../shared/types/order.types';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderFormModel extends FormModel{
  constructor(private fb: FormBuilder) {
    super()
  }

  initializeModel(data: IOrder, clear = false): FormGroup {
    if(!this.form || clear) {
      this.form = this.fb.group({
        id: [''],
        city: ['', Validators.required],
        createdAt: [''],
        postCode: ['', Validators.required],
        flatNumber: [''],
        street:['', Validators.required],
        streetNumber: ['', Validators.required],
        status: [''],
        phoneNumber: ['', Validators.required]
      })
    }
    if(data && !clear) {
      this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
    }
    return this.form;
  }
}
