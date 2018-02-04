import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent, } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

export const router: Routes = [
  { 
    path:'', 
    redirectTo: 'home/index', 
    pathMatch: 'full'
  },
  { 
    path:'home/index', 
    component: LoginComponent, 
  },
  { 
    path:'login',
    component: LoginComponent, 
    pathMatch: 'full',
  },
  { 
    path:'register',
    component: RegisterComponent, 
    pathMatch: 'full',
  },
  { 
    path:'product/:productId',
    component: ProductComponent, 
    pathMatch: 'full',
  },
  { 
    path:'product-list',
    component: ProductListComponent, 
    pathMatch: 'full',
  },
  { 
    path:'add-product',
    component: AddProductComponent, 
    pathMatch: 'full',
  },
  { 
    path:'edit-product/:productId',
    component: EditProductComponent, 
    pathMatch: 'full',
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
