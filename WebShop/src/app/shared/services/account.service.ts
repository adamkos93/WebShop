import { Headers, Http, RequestOptionsArgs } from '@angular/http';

import { BehaviorSubject } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { ILogin } from '../types/login.types';
import { IRegister } from '../types/register.types';
import { IToken } from '../types/token.types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class AccountService {

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private httpService: HttpService) {

  }

  checkIsAdmin() {
    return localStorage.getItem('role') === 'admin';
  }

  login(model: ILogin):Observable<IToken> {
    return this.httpService.post('user/loginAsync', model);
  }

  logout(){
    return this.httpService.get('user/logout');
  }

  register(model: IRegister) {
    return this.httpService.post('user/registerAsync', model);
  }

  isUserLogged()  {
    return this.httpService.get('user/isUserLogged');
  }
}
