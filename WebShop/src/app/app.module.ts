import { AccountService, AddProductComponent, AppComponent, EditProductComponent, FilterComponent, HttpService, LoaderComponent, LoaderService, LoginComponent, LoginFormModel, NavbarComponent, PaginationComponent, ProductComponent, ProductFormModel, ProductListComponent, ProductService, RegisterComponent, RegisterFormModel } from './index';
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
    FilterComponent,
    LoginComponent,
    LoaderComponent,
    RegisterComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [LoginFormModel, AccountService, HttpService, RegisterFormModel,ProductFormModel,ProductService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
