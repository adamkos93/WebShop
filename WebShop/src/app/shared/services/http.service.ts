import * as _ from 'lodash';

import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {

    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: Http, private router: Router) {

    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.intercept(this.http.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.intercept(this.http.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.intercept(this.http.delete(url, this.getRequestOptionArgs(options)));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if(!options.headers.has('Content-Type')) {
          options.headers.append('Content-Type', 'application/json');
        }
        if(localStorage.getItem('token') !== undefined && localStorage.getItem('token')!== null) {
          options.headers.append('Authorization', 'Bearer '+ localStorage.getItem('token'));
        }
        return options;
    }

    intercept(observable: Observable<Response>): Observable<any> {
        setTimeout(() => {this.isLoading.next(true)},0);
        return observable.map(this.extract).catch((err, source) => {
            if (err.status  === 401) {
                console.log(err);
                this.router.navigateByUrl('login');
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        }).finally(() => {
          setTimeout(() => {this.isLoading.next(false)},0);
        });
    }

    private extract(response: Response) {
      try {
        const result = response.json() || response;
        return result._body && result._body === 'null' ? null : result;
      } catch (e) {
        console.log('error from httpservice', e);
        return null;
      }
    }
}
