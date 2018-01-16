import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AccountService } from '../shared/services/account.service';
import { IRegister } from './../shared/types/register.types';
import { RegisterFormModel } from './register.form-model';
import { Router } from '@angular/router';

@Component({
  selector:'app-register',
  templateUrl:'./register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(private registerFormModel: RegisterFormModel, private accountService: AccountService, private router: Router) {

  }

  get registerForm(): FormGroup {
    return this.registerFormModel.model;
  }

  ngOnInit() {
    this.initializeFormModel(null);
  }

  initializeFormModel(data) {
    this.registerFormModel.initializeModel(data);
  }

  save() {
    if(this.registerForm.valid) {
      const model = <IRegister> this.registerForm.value;
      this.accountService.register(model).subscribe(data =>{
        console.log(data);
        this.router.navigateByUrl('login');
      });
    }
  }
}
