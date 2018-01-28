import { AccountService, AddProductComponent, AddProductFormModel, AppComponent, CategoryComponent, HttpService, LoaderComponent, LoaderService, LoginComponent, LoginFormModel, NavbarComponent, ProductComponent, ProductListComponent, ProductService, RegisterComponent, RegisterFormModel } from './index';
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
    LoginComponent,
    LoaderComponent,
    RegisterComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [LoginFormModel, AccountService, HttpService, RegisterFormModel,AddProductFormModel,ProductService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
