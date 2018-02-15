import * as _ from 'lodash';

import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
    
  constructor() {
  }

  setCookie(name: string, value: string, expireDays: number) {
    const date =  new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie =  name + '=' + value + '; ' + expires + ';path=/';
  }

  getCookie(name: string) {
    const cookieName = name + '=';
    const cookieArray = document.cookie.split(';');
    let cookieValue = "";
    _.forEach(cookieArray, (cookie, index) => {
      let selectedCookie = cookieArray[index];
      _.forEach(selectedCookie, char => {
        if(char.charAt(0) === ' ') {
          selectedCookie = selectedCookie.substring(1);
        }
      });
      if(selectedCookie.indexOf(name) === 0) {
        cookieValue = selectedCookie.substring(cookieName.length, selectedCookie.length);
        return false;
      }
    });
    return cookieValue;
  }

  deleteCookie(name: string) {
    this.setCookie(name, "", -1);
  }

}
