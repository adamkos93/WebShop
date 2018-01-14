import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable()
export abstract class FormModel {

  protected form: FormGroup;

  get model(): FormGroup {
    if (!this.form) {
      this.initializeModel(null);
    }
    return this.form;
  }

  abstract initializeModel(data1: any): FormGroup;
}
