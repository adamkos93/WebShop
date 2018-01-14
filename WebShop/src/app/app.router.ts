import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';

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
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
