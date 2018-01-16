import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static areEqual(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
 
   
      return null;
    };
  }
}
