import { Component, OnDestroy, OnInit } from '@angular/core';

import { AccountService } from './../shared/services/account.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogged = false;
  isLoggedSubscription: Subscription;
  constructor(private accoutnService: AccountService, private router: Router) { }


  ngOnInit() {
    this.isLoggedSubscription = this.accoutnService.isLogged.subscribe(data =>{
      this.isLogged = data;
    })
  }

  ngOnDestroy(){
    this.isLoggedSubscription.unsubscribe();
  }

  addProduct(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('add-product');
  }
  logout(){
    // czyszczenie ciastek, sesji, localStorage
    // czyszczenie po stronie backendu sesji
  }
}
