import { RouterModule, Routes } from '@angular/router';

import { AddOrderComponent } from './add-order/add-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductComponent, } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

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
  { 
    path:'shopping-basket',
    component: ShoppingBasketComponent, 
    pathMatch: 'full',
  },
  { 
    path:'add-order',
    component: AddOrderComponent, 
    pathMatch: 'full',
  },
  { 
    path:'order-list',
    component: OrderListComponent, 
    pathMatch: 'full',
  },
  { 
    path:'order/:orderId',
    component: OrderComponent, 
    pathMatch: 'full',
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
