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

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.delete(url, this.getRequestOptionArgs(options)));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if(localStorage.getItem('token') !== undefined && localStorage.getItem('token')!== null) {
          options.headers.append('Authorization', 'Bearer '+ localStorage.getItem('token'));
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        this.isLoading.next(true);
        return observable.catch((err, source) => {
            //if (err.status  == 401 && !_.endsWith(err.url, '/login')) {
            if (err.status  == 401) {
                this.router.navigateByUrl('login');
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        }).finally(() => {
          this.isLoading.next(false);
        });
    }
}
