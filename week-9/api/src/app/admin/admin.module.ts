import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { LoginComponent } from './login/login.component';
// import { ListComponent } from './list1/list.component';
import { RegisterComponent } from './register/register.component';
import { List1Component } from './list/list1.component';

import { LoginComponent } from '../user/login/login.component';


@NgModule({
  declarations: [
    // LoginComponent,
    // ListComponent,
    RegisterComponent,
    List1Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
