import { Component, OnInit } from '@angular/core';

import { AccountService } from './../shared/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  constructor(private accoutnService: AccountService) { }


  ngOnInit() {
    this.accoutnService.isLogged.subscribe(data =>{
      this.isLogged = data;
    })
  }

  logout(){
    // czyszczenie ciastek, sesji, localStorage
    // czyszczenie po stronie backendu sesji
  }
}
