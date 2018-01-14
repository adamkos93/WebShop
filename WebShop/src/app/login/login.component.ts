import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { LoginFormModel } from './login.form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginFormModel: LoginFormModel) { }

  get loginForm(): FormGroup {
    return this.loginFormModel.model;
  }

  ngOnInit() {
    this.initializeFormModel(null);
  }

  initializeFormModel(data) {
    this.loginFormModel.initializeModel(data);
  }
}
