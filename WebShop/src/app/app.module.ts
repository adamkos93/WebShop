import { AppComponent, CategoryComponent, LoginComponent, LoginFormModel, NavbarComponent } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [LoginFormModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
