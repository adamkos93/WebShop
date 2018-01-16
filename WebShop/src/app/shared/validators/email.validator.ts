import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class EmailValidator {
  static valid(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const email = control.value as string;
      if (control.value && !emailRegex.test(email)) {
        return { 'email': true };
      }
      return null;
    };
  }
}
