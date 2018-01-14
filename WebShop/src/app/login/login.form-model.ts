import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormModel } from '../shared/form/form-model';
import { ILogin } from '../shared/types/login.types';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginFormModel extends FormModel{
  constructor(private fb: FormBuilder) {
    super()
  }

  initializeModel(data: ILogin): FormGroup {
    if(!this.form) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }
    if(data) {
      this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
    }
    return this.form;
  }
}
