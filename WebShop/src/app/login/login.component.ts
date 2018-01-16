import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AccountService } from '../shared/services/account.service';
import { ILogin } from '../shared/types/login.types';
import { IToken } from './../shared/types/token.types';
import { LoginFormModel } from './login.form-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private loginFormModel: LoginFormModel, private accountService: AccountService, private router: Router) { }
  
  get loginForm(): FormGroup {
    return this.loginFormModel.model;
  }

  ngOnInit() {
    this.initializeFormModel(null);
  }

  initializeFormModel(data) {
    this.loginFormModel.initializeModel(data);
  }

  submit() {
    if(this.loginForm.valid) {
      const model = <ILogin> this.loginForm.value;
      this.accountService.login(model).subscribe(data =>{
        if(data) {
          const response = data.json();
          if(response['token']) {
            localStorage.setItem('token', response['token']);
          }
          if(response['role']) {
            localStorage.setItem('role', response['role']);
          }
          this.setLogged(true);
          this.router.navigateByUrl('product-list');
        } else {
          this.router.navigateByUrl('login');
        }
      });
    }
  }

  setLogged(value: boolean){
    this.accountService.isLogged.next(value);
  }
}
